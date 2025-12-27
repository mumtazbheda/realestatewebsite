import {
  AreaSiteMap,
  ProjectSiteMap,
  DeveloperSiteMap,
  AgentSiteMap,
  BlogSiteMap,
  BuyPropertiesSiteMap,
  RentPropertiesSiteMap,
} from "@/lib/helper/sitemapHelpers";
import { MetadataRoute } from "next";

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://realestatewebsite-liart.vercel.app";

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const areaSiteMap = await AreaSiteMap();
  const projectSiteMap = await ProjectSiteMap();
  const blogSiteMap = await BlogSiteMap();
  // const developerSiteMap = await DeveloperSiteMap();
  // const agentSiteMap = await AgentSiteMap();
  // const buyPropertiesSiteMap = await BuyPropertiesSiteMap();
  // const rentPropertiesSiteMap = await RentPropertiesSiteMap();

  return [
    {
      url: `${BaseURL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BaseURL}/areas`,
      lastModified: areaSiteMap[0]?.lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...areaSiteMap,
    {
      url: `${BaseURL}/projects`,
      lastModified: projectSiteMap[0]?.lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectSiteMap,
    {
      url: `${BaseURL}/blogs`,
      lastModified: blogSiteMap[0]?.lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogSiteMap
  ];
}

// import {
//   AreaSiteMap,
//   ProjectSiteMap,
//   DeveloperSiteMap,
//   AgentSiteMap,
//   BlogSiteMap,
//   BuyPropertiesSiteMap,
//   RentPropertiesSiteMap,
// } from "@/lib/helper/sitemapHelpers";
// import { MetadataRoute } from "next";

// const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;

// export async function generateSitemaps() {
//   return [
//     { id: "buy-properties-sitemap" },
//     { id: "rent-properties-sitemap" },
//     { id: "areas-sitemap" },
//     { id: "projects-sitemap" },
//     { id: "developers-sitemap" },
//     { id: "agents-sitemap" },
//     { id: "blogs-sitemap" },
//     { id: "page-sitemap" },
//   ];
// }

// export default async function sitemap({
//   id,
// }: {
//   id: string;
// }): Promise<MetadataRoute.Sitemap> {
//   if (id === "buy-properties-sitemap") {
//     const buyPropertiesSiteMap = await BuyPropertiesSiteMap();
//     return buyPropertiesSiteMap;
//   } else if (id === "rent-properties-sitemap") {
//     const rentPropertiesSiteMap = await RentPropertiesSiteMap();
//     return rentPropertiesSiteMap;
//   } else if (id === "areas-sitemap") {
//     const areaSiteMap = await AreaSiteMap();
//     return areaSiteMap;
//   } else if (id === "projects-sitemap") {
//     const projectSiteMap = await ProjectSiteMap();
//     return projectSiteMap;
//   } else if (id === "developers-sitemap") {
//     const developerSiteMap = await DeveloperSiteMap();
//     return developerSiteMap;
//   } else if (id === "agents-sitemap") {
//     const agentSiteMap = await AgentSiteMap();
//     return agentSiteMap;
//   } else if (id === "blogs-sitemap") {
//     const blogSiteMap = await BlogSiteMap();
//     return blogSiteMap;
//   } else if (id === "page-sitemap") {
//     return StaticPages;
//   } else {
//     return [];
//   }
// }

// const StaticPages: MetadataRoute.Sitemap = [
//   {
//     url: `${BaseURL}/services/commercial-properties`,
//     lastModified: new Date(),
//     changeFrequency: "yearly",
//     priority: 0.4,
//   },
//   {
//     url: `${BaseURL}/services/sell`,
//     lastModified: new Date(),
//     changeFrequency: "yearly",
//     priority: 0.4,
//   },
//   {
//     url: `${BaseURL}/disclaimers`,
//     lastModified: new Date(),
//     changeFrequency: "yearly",
//     priority: 0.4,
//   },
//   {
//     url: `${BaseURL}/privacy-policy`,
//     lastModified: new Date(),
//     changeFrequency: "yearly",
//     priority: 0.4,
//   },
// ];
