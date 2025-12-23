"use client";

import { usePathname } from "next/navigation";

export const CanonicalTags = () => {
  const pathname = usePathname();
  return (
    <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL + pathname} />
  );
};
