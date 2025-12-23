import { MetadataRoute } from "next";
import { AgentSiteMap } from "@/lib/helper/sitemapHelpers";

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(a:any): Promise<MetadataRoute.Sitemap> {
  console.log(a)
  return [
    {
      url: `${BaseURL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
