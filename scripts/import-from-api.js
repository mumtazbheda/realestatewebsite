/**
 * Script to import data from Propfusion API to Sanity CMS
 *
 * This script will:
 * 1. Fetch projects from the Propfusion API
 * 2. Create/update Developers in Sanity
 * 3. Create/update Areas in Sanity
 * 4. Create/update Projects with references to Developers and Areas
 */

const { createClient } = require('@sanity/client');
const https = require('https');
const http = require('http');

// Sanity configuration
const sanityClient = createClient({
  projectId: 'apx3y7a8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// API Configuration
const API_BASE_URL = 'https://prosperty-api.propfusion.io';

// Helper function to create URL-friendly slug
function createSlug(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Helper function to fetch data from API
function fetchFromAPI(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${e.message}`));
        }
      });
    }).on('error', reject);
  });
}

// Helper function to upload image to Sanity from URL
async function uploadImageFromUrl(imageUrl, filename) {
  return new Promise((resolve, reject) => {
    if (!imageUrl) {
      resolve(null);
      return;
    }

    const protocol = imageUrl.startsWith('https') ? https : http;
    protocol.get(imageUrl, async (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return uploadImageFromUrl(response.headers.location, filename).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        console.log(`  ⚠ Failed to fetch image: ${imageUrl} (status: ${response.statusCode})`);
        resolve(null);
        return;
      }

      const contentType = response.headers['content-type'] || 'image/jpeg';
      const chunks = [];

      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          const asset = await sanityClient.assets.upload('image', buffer, {
            filename: filename || 'image.jpg',
            contentType: contentType,
          });
          resolve({
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
          });
        } catch (err) {
          console.log(`  ⚠ Failed to upload image: ${err.message}`);
          resolve(null);
        }
      });
      response.on('error', (err) => {
        console.log(`  ⚠ Image fetch error: ${err.message}`);
        resolve(null);
      });
    }).on('error', (err) => {
      console.log(`  ⚠ Image request error: ${err.message}`);
      resolve(null);
    });
  });
}

// Store for tracking created documents
const createdDevelopers = new Map(); // API ID -> Sanity ID
const createdAreas = new Map(); // Area name -> Sanity ID

// Create or get Developer
async function createOrGetDeveloper(developerData) {
  if (!developerData || !developerData.name) return null;

  const cacheKey = developerData.id || developerData.name;

  // Check cache first
  if (createdDevelopers.has(cacheKey)) {
    return createdDevelopers.get(cacheKey);
  }

  const slug = createSlug(developerData.name);

  // Check if developer already exists in Sanity
  const existing = await sanityClient.fetch(
    `*[_type == "developer" && slug.current == $slug][0]._id`,
    { slug }
  );

  if (existing) {
    createdDevelopers.set(cacheKey, existing);
    console.log(`  ✓ Developer exists: ${developerData.name}`);
    return existing;
  }

  // Create new developer
  console.log(`  → Creating developer: ${developerData.name}`);

  let logoImage = null;
  if (developerData.logoUrl) {
    logoImage = await uploadImageFromUrl(developerData.logoUrl, `${slug}-logo.png`);
  }

  const doc = {
    _type: 'developer',
    name: developerData.name,
    slug: { _type: 'slug', current: slug },
  };

  if (logoImage) {
    doc.image = logoImage;
  }

  const created = await sanityClient.create(doc);
  createdDevelopers.set(cacheKey, created._id);
  console.log(`  ✓ Created developer: ${developerData.name} (${created._id})`);
  return created._id;
}

// Create or get Area
async function createOrGetArea(locationData) {
  if (!locationData) return null;

  // Use community or sub_community as area name
  const areaName = locationData.community || locationData.sub_community || locationData.city;
  if (!areaName) return null;

  // Check cache first
  if (createdAreas.has(areaName)) {
    return createdAreas.get(areaName);
  }

  const slug = createSlug(areaName);

  // Check if area already exists in Sanity
  const existing = await sanityClient.fetch(
    `*[_type == "area" && slug.current == $slug][0]._id`,
    { slug }
  );

  if (existing) {
    createdAreas.set(areaName, existing);
    console.log(`  ✓ Area exists: ${areaName}`);
    return existing;
  }

  // Create new area
  console.log(`  → Creating area: ${areaName}`);

  const doc = {
    _type: 'area',
    title: areaName,
    slug: { _type: 'slug', current: slug },
  };

  const created = await sanityClient.create(doc);
  createdAreas.set(areaName, created._id);
  console.log(`  ✓ Created area: ${areaName} (${created._id})`);
  return created._id;
}

// Format payment plan string
function formatPaymentPlan(paymentPlans) {
  if (!paymentPlans || paymentPlans.length === 0) return null;

  const plan = paymentPlans[0];
  const parts = [];

  if (plan.first_installment) parts.push(`${plan.first_installment}% Down`);
  if (plan.under_construction) parts.push(`${plan.under_construction}% Construction`);
  if (plan.on_handover) parts.push(`${plan.on_handover}% Handover`);
  if (plan.post_handover) parts.push(`${plan.post_handover}% Post-Handover`);

  return parts.join(' / ') || null;
}

// Format handover date
function formatHandover(handoverTime) {
  if (!handoverTime) return null;

  const date = new Date(handoverTime);
  const quarter = Math.ceil((date.getMonth() + 1) / 3);
  const year = date.getFullYear();

  return `Q${quarter} ${year}`;
}

// Map API property types to Sanity format
function mapPropertyTypes(types) {
  if (!types || types.length === 0) return null;

  const typeMap = {
    'APARTMENT': 'apartments',
    'VILLA': 'villas',
    'TOWNHOUSE': 'townhouse',
    'PENTHOUSE': 'penthouse',
    'DUPLEX': 'duplex',
    'STUDIO': 'studio',
  };

  return types.map(t => typeMap[t] || t.toLowerCase()).filter(Boolean);
}

// Create Project in Sanity
async function createProject(projectData) {
  const slug = createSlug(projectData.name);

  // Check if project already exists
  const existing = await sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0]._id`,
    { slug }
  );

  if (existing) {
    console.log(`  ⏭ Project exists: ${projectData.name}`);
    return existing;
  }

  console.log(`\n📦 Creating project: ${projectData.name}`);

  // Create developer reference
  const developerId = await createOrGetDeveloper(projectData.developer);

  // Create area reference
  const areaId = await createOrGetArea(projectData.location);

  // Upload cover image
  let coverImage = null;
  const photos = projectData.photos_enhanced || projectData.photos || [];
  if (photos.length > 0) {
    const firstPhoto = typeof photos[0] === 'string' ? photos[0] : photos[0]?.url;
    if (firstPhoto) {
      console.log(`  → Uploading cover image...`);
      coverImage = await uploadImageFromUrl(firstPhoto, `${slug}-cover.jpg`);
    }
  }

  // Upload gallery images (limit to first 10)
  const galleryImages = [];
  const photoUrls = photos.slice(1, 11).map(p => typeof p === 'string' ? p : p?.url).filter(Boolean);

  if (photoUrls.length > 0) {
    console.log(`  → Uploading ${photoUrls.length} gallery images...`);
    for (let i = 0; i < photoUrls.length; i++) {
      const img = await uploadImageFromUrl(photoUrls[i], `${slug}-gallery-${i + 1}.jpg`);
      if (img) galleryImages.push(img);
    }
  }

  // Build location string
  let locationStr = '';
  if (projectData.location) {
    const loc = projectData.location;
    locationStr = [loc.sub_community, loc.community, loc.city].filter(Boolean).join(', ');
  }

  // Build the project document
  const doc = {
    _type: 'project',
    title: projectData.name,
    slug: { _type: 'slug', current: slug },
    location: locationStr || null,
    project_type: mapPropertyTypes(projectData.propertyTypes),
    payment_plan: formatPaymentPlan(projectData.payment_plans),
    handover: formatHandover(projectData.newParam?.handoverTime),
    coming_soon: false,
    meta_title: projectData.name,
    meta_description: projectData.description ? projectData.description.substring(0, 160) : null,
  };

  // Add cover image
  if (coverImage) {
    doc.cover_image = coverImage;
  }

  // Add gallery images
  if (galleryImages.length > 0) {
    doc.image = galleryImages;
  }

  // Add developer reference
  if (developerId) {
    doc.developer = {
      _type: 'reference',
      _ref: developerId,
    };
  }

  // Add area reference
  if (areaId) {
    doc.area = {
      _type: 'reference',
      _ref: areaId,
    };
  }

  try {
    const created = await sanityClient.create(doc);
    console.log(`  ✓ Created project: ${projectData.name} (${created._id})`);
    return created._id;
  } catch (err) {
    console.error(`  ✗ Failed to create project ${projectData.name}: ${err.message}`);
    return null;
  }
}

// Main import function
async function importProjects() {
  console.log('🚀 Starting import from Propfusion API to Sanity\n');
  console.log('━'.repeat(60));

  // Verify Sanity connection
  try {
    const testQuery = await sanityClient.fetch('*[_type == "project"][0...1]');
    console.log('✓ Connected to Sanity successfully\n');
  } catch (err) {
    console.error('✗ Failed to connect to Sanity:', err.message);
    console.error('\nMake sure SANITY_API_TOKEN environment variable is set.');
    process.exit(1);
  }

  // Fetch all projects from API (paginated)
  let page = 1;
  let totalImported = 0;
  let hasMore = true;

  while (hasMore) {
    const url = `${API_BASE_URL}/properties/projects?size=10&sort_by_date=DESC&project_status=ACTIVE&page=${page}`;
    console.log(`\n📥 Fetching page ${page} from API...`);

    try {
      const data = await fetchFromAPI(url);

      if (!data.projects || data.projects.length === 0) {
        hasMore = false;
        break;
      }

      console.log(`   Found ${data.projects.length} projects (Total: ${data.totalProjects})\n`);

      for (const project of data.projects) {
        await createProject(project);
        totalImported++;
      }

      // Check if there are more pages
      hasMore = data.projects.length === 10 && totalImported < data.totalProjects;
      page++;

      // Small delay between pages to avoid rate limiting
      if (hasMore) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (err) {
      console.error(`✗ Failed to fetch page ${page}: ${err.message}`);
      hasMore = false;
    }
  }

  console.log('\n' + '━'.repeat(60));
  console.log(`\n✅ Import complete!`);
  console.log(`   - Projects imported: ${totalImported}`);
  console.log(`   - Developers created: ${createdDevelopers.size}`);
  console.log(`   - Areas created: ${createdAreas.size}`);
  console.log(`\n🔗 View your content at: https://realestatewebsite-liart.vercel.app/studio`);
}

// Run the import
importProjects().catch(console.error);
