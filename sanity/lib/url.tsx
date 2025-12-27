import { CreateSlug } from "@/lib/helper/CreateSlug";
import { client } from "./client";

const BaseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://realestatewebsite-liart.vercel.app";

export const ResolveURL = async (doc: any) => {
  const docType = doc?._type;
  const param =
    doc?.slug?.current && doc?.slug?.current !== ""
      ? doc?.slug?.current
      : doc?.title
      ? CreateSlug(doc?.title)
      : CreateSlug(doc?.name);

  // For Project Documents
  if (docType === "project") {
    const area = await client.getDocument(doc?.area?._ref);
    const areaParam =
      area?.slug?.current && area?.slug?.current !== ""
        ? area?.slug?.current
        : CreateSlug(area?.title);

    return new URL(
      `${BaseURL}/areas/${areaParam}/${param}`
    );
  }

  // For Property Documents
  if (docType === "property") {
    return new URL(
      `${BaseURL}/${doc.avaibility}/${param}`
    );
  }

  // For mass_media Documents
  if (docType === "mass_media") {
    return new URL(`${BaseURL}/mass-media/${param}`);
  }

  // For media Documents
  if (docType === "media") {
    return new URL(`${BaseURL}/${docType}/${param}`);
  }

  // For Rest of the Documents
  return new URL(
    `${BaseURL}/${docType + "s"}/${param}`
  );
};
