import { CreateSlug } from "@/lib/helper/CreateSlug";
import { client } from "./client";

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
      `${process.env.NEXT_PUBLIC_BASE_URL}/areas/${areaParam}/${param}`
    );
  }

  // For Property Documents
  if (docType === "property") {
    return new URL(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${doc.avaibility}/${param}`
    );
  }

  // For mass_media Documents
  if (docType === "mass_media") {
    return new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/mass-media/${param}`);
  }

  // For media Documents
  if (docType === "media") {
    return new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/${docType}/${param}`);
  }

  // For Rest of the Documents
  return new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${docType + "s"}/${param}`
  );
};
