import { SanityFetch } from "@/lib/SanityFetch";
import { MetadataRoute } from "next";
import { CreateSlug } from "./CreateSlug";

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://realestatewebsite-liart.vercel.app";

const BaseSiteMap = async ({
  fetchSlug,
  pageUrl,
  extraQuery = "",
}: {
  fetchSlug: string;
  pageUrl: string;
  extraQuery?: string;
}): Promise<MetadataRoute.Sitemap> => {
  const Data = await SanityFetch({
    Query: `*[_type == '${fetchSlug}' ${extraQuery}] {
      title,
      name,
      _updatedAt,
      area ->
    } | order(_updatedAt desc)`,
  });

  // Handle null/undefined data from Sanity
  if (!Data || !Array.isArray(Data) || Data.length === 0) {
    return [];
  }

  const SiteMap: MetadataRoute.Sitemap = Data.map((data: any) => {
    // Slug With title OR slug.current
    const slug =
      data?.slug?.current ?? data?.title ? CreateSlug(data?.title) : "";

    // Slug by name or slug.current if title is not present
    const nameSlug =
      data?.slug?.current ?? data?.name ? CreateSlug(data?.name) : "";

    // Area Slug if exists for projects
    const areaSlug =
      data?.area?.slug?.current ?? data?.area?.title
        ? CreateSlug(data?.area?.title)
        : "";

    if ((slug && slug !== "") || (nameSlug && nameSlug !== "")) {
      return {
        url:
          areaSlug && fetchSlug === "project"
            ? `${BaseURL}/areas/${areaSlug}/${slug || nameSlug}`
            : `${BaseURL}${pageUrl}/${slug || nameSlug}`,
        lastModified: data?._updatedAt,
      };
    }
  });

  const filteredSiteMap = SiteMap?.filter((item: any) => item !== undefined);
  return filteredSiteMap || [];
};

export const AreaSiteMap = async () =>
  await BaseSiteMap({
    fetchSlug: "area",
    pageUrl: "/areas",
  });

export const ProjectSiteMap = async () =>
  await BaseSiteMap({
    fetchSlug: "project",
    pageUrl: "", // not needed for projects
  });

export const BuyPropertiesSiteMap = async () =>
  await BaseSiteMap({
    fetchSlug: "property",
    pageUrl: "/buy",
    extraQuery: "&& avaibility == 'buy'",
  });

export const RentPropertiesSiteMap = async () =>
  await BaseSiteMap({
    fetchSlug: "property",
    pageUrl: "/rent",
    extraQuery: "&& avaibility == 'rent'",
  });

export const DeveloperSiteMap = async () =>
  await BaseSiteMap({
    fetchSlug: "developer",
    pageUrl: "/developers",
  });

export const AgentSiteMap = async () =>
  await BaseSiteMap({
    fetchSlug: "agent",
    pageUrl: "/agents",
  });

export const BlogSiteMap = async () =>
  await BaseSiteMap({
    fetchSlug: "blog",
    pageUrl: "/blogs",
  });
