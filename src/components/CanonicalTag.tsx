"use client";

import { usePathname } from "next/navigation";

export const CanonicalTags = () => {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://realestatewebsite-liart.vercel.app";
  return (
    <link rel="canonical" href={baseUrl + pathname} />
  );
};
