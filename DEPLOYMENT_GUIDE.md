# 🚀 Quick Deployment Guide

**Goal:** Get this website deployed to Vercel ASAP

---

## ⚡ Quick Start (30 Minutes)

### Step 1: Fix the Build Errors (15 min)

The build is failing because Sanity returns `null` when the CMS isn't configured. We need to add null safety.

#### Fix the Sitemap Helper

Edit [src/lib/helper/sitemapHelpers.ts](src/lib/helper/sitemapHelpers.ts) and update the `BaseSiteMap` function:

**Find this code (around line 25):**
```typescript
const SiteMap: MetadataRoute.Sitemap = Data?.map((data: any) => {
```

**Replace with:**
```typescript
const SiteMap: MetadataRoute.Sitemap = Data && Array.isArray(Data) ? Data.map((data: any) => {
```

**And at the end of the function (line 51), change:**
```typescript
const filteredSiteMap = SiteMap?.filter((item: any) => item !== undefined);
return filteredSiteMap;
```

**To:**
```typescript
const filteredSiteMap = SiteMap?.filter((item: any) => item !== undefined);
return filteredSiteMap || [];
```

This ensures we return an empty array instead of `undefined` when there's no data.

---

### Step 2: Set Up Sanity CMS (10 min)

#### Option A: Create New Sanity Project
```bash
# Create a new Sanity project
npm create sanity@latest -- --project-id --dataset production

# Follow the prompts, it will give you a PROJECT_ID
```

#### Option B: Use Existing Sanity Project
If you already have a Sanity project, just get the Project ID from:
- Sanity dashboard at https://www.sanity.io/manage
- Or from your Sanity settings

#### Update .env file
Open [.env](.env) and replace:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
```

With your actual project ID:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="abc12345"
```

---

### Step 3: Test the Build (2 min)

```bash
npm run build
```

**Expected result:** Build should complete successfully (might have warnings, but no errors)

---

### Step 4: Commit Your Code (2 min)

```bash
git add .
git commit -m "feat: Initial real estate website with Sanity CMS integration"
git push origin main
```

---

### Step 5: Deploy to Vercel (5 min)

#### Via Vercel Website (Easiest):

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your repository
5. Configure:
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install --legacy-peer-deps`

6. **Add Environment Variables** (click "Environment Variables"):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your-sanity-project-id>
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_PHONE_NUMBER=+971-xxx-xxxx
   NEXT_PUBLIC_WHATSAPP_NUMBER=+971-xxx-xxxx
   NEXT_PUBLIC_EMAIL=info@yourdomain.com
   MAILER_HOST=smtp.gmail.com
   MAILER_USER=your-email@gmail.com
   MAILER_PASSWORD=your-app-password
   MAILER_PORT=465
   NEXT_PUBLIC_BASE_URL=https://your-project.vercel.app
   ```

7. Click **"Deploy"**

**Done! 🎉** Your site will be live in 2-3 minutes at `https://your-project.vercel.app`

---

## 🔧 Post-Deployment Tasks

### 1. Add Content to Sanity CMS

Your website will be live but empty. Add content:

1. Visit `https://your-domain.vercel.app/studio`
2. Sign in with your Sanity account
3. Add content:
   - **Areas** (e.g., Dubai Marina, Palm Jumeirah)
   - **Projects** (link to Areas)
   - **Properties** (Buy/Rent listings)
   - **Agents**
   - **Blogs**
   - **Developers**

### 2. Update Contact Information

If you didn't already, update the environment variables in Vercel with real:
- Phone number
- WhatsApp number
- Email address

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

### 3. Set Up Email Service (for contact forms)

**Recommended: Gmail App Password**

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Google Account → Security → 2-Step Verification → App Passwords
   - Select "Mail" and generate
   - Copy the 16-character password

4. Update Vercel environment variables:
   ```
   MAILER_USER=your-email@gmail.com
   MAILER_PASSWORD=<16-char-app-password>
   ```

5. Redeploy (Vercel will auto-redeploy when you change env vars)

---

## 📱 Update Domain (Optional)

### Use Custom Domain:

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `yourdomain.com`)
3. Follow Vercel's DNS configuration instructions
4. Update environment variable:
   ```
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```
5. Redeploy

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Error:** `npm install` fails
**Solution:** Update build settings:
- Build command: `npm install --legacy-peer-deps && npm run build`

### Contact Forms Not Working

**Check:**
1. Are email environment variables set correctly in Vercel?
2. Is the Gmail App Password correct (not your regular password)?
3. Check Vercel function logs for errors

### Images Not Loading

**Check:**
1. Is `NEXT_PUBLIC_SANITY_PROJECT_ID` correct?
2. Are images uploaded to Sanity?
3. Check browser console for errors

### Pages Show "No Data"

**Solution:**
1. Go to `/studio` and add content
2. Make sure content is published (not just drafted)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Build completes successfully locally
- [ ] Code committed to git
- [ ] Sanity project created and configured
- [ ] Environment variables added to Vercel
- [ ] Site deploys successfully
- [ ] Homepage loads without errors
- [ ] Add sample content to Sanity
- [ ] Test contact forms
- [ ] Verify images load
- [ ] Test navigation/links
- [ ] Check mobile responsiveness
- [ ] Test property search/filters
- [ ] Verify SEO (check sitemap at `/sitemap.xml`)

---

## 🆘 Need Help?

### Common Commands:

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Install dependencies
npm install --legacy-peer-deps

# Access Sanity Studio locally
# Navigate to http://localhost:3000/studio
```

### Useful Links:

- Vercel Dashboard: https://vercel.com/dashboard
- Sanity Dashboard: https://www.sanity.io/manage
- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs

---

**Last Updated:** December 22, 2025
