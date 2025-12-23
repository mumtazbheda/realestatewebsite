"use client";
import { usePathname } from "next/navigation";
import React from "react";

const BusinessMarkupSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Kingdom Capital Real Estate",
  image:
    "https://www.thekingdom.realestate/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.d2cadd23.png&w=384&q=75",
  "@id": "",
  url: "https://www.thekingdom.realestate/",
  telephone: "800 695 464366",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2803, API Trio Tower, Sheikh Zayed Road, Dubai, United Arab Emirates",
    addressLocality: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1088682,
    longitude: 55.1837321,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "06:00",
  },
  sameAs: [
    "https://www.instagram.com/thekingdom.realestate?igsh=emVyaTVpZGFweWc5",
    "https://www.linkedin.com/company/kingdom-capital-real-estate/",
    "https://www.facebook.com/kingdomcapitalrealestate",
  ],
};

const BreadcumbMarkupSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.thekingdom.realestate/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Buy",
      item: "https://www.thekingdom.realestate/buy",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rent",
      item: "https://www.thekingdom.realestate/rent",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Areas",
      item: "https://www.thekingdom.realestate/areas",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Off-Plan Projects",
      item: "https://www.thekingdom.realestate/projects",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Developers",
      item: "https://www.thekingdom.realestate/developers",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Blogs",
      item: "https://www.thekingdom.realestate/blogs",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "List Your Property",
      item: "https://www.thekingdom.realestate/services/sell",
    },
  ],
};

export const MarkupSchemaScript = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(BreadcumbMarkupSchema),
          }}
        ></script>
      )}
      {pathname === "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(BusinessMarkupSchema),
          }}
        ></script>
      )}
    </>
  );
};
