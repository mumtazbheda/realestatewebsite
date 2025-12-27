import { MetadataRoute } from "next";

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://realestatewebsite-liart.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/cgi-bin/",
        "/buy",
        "/buy/",
        "/rent/",
        "/rent",
        "/projects?&projectType=villa",
        "/projects?&projectType=hotel",
        "/projects?&projectType=office",
        "/projects?&projectType=townhouse",
        "/projects?&projectType=penthouse",
        "/projects?&projectType=apartment",
        "/projects?projectType=residential_building",
        "/buy?status=Off-Plan&",
        "/rent?status=Off-Plan&",
        "/buy?status=ready&",
        "/rent?status=ready&",
        "/developers?input=Emaar",
        "/developers?input=DAMAC",
        "/developers?input=aldar",
        "/agents",
        "/agents/",
        "/agents/terms-of-use",
        "/agents/privacy-policy",
        "/disclaimer",
        "/developers",
        "/developers/",
        "/services/sell",
        "/services",
        "/privacy-policy",
        "/search/",
        "/search",
        "/services/sell#contact",
      ],
    },
    sitemap: `${BaseURL}/sitemap.xml`,
  };
}
