import { SanityFetch } from "@/lib/SanityFetch";
import PropertyBox from "@/shared/PropertyBox";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CreateSlug } from "@/lib/helper/CreateSlug";

const Developers = async () => {
  const Data = await SanityFetch({
    Query: `*[_type == 'developer'] {
            name,
            slug,
            image
        }`,
  });

  // console.log("Nakheel".replace(/\s/g, ''))

  return (
    <div>
      <SliderWrapper
        title="Developers in Palm Jebel Ali"
        titleCss="!text-2xl font-medium"
        For="Developers"
        showAllButton={false}
        BreakPoints={[4, 3, 2, 2]}
        MobileNavButtons={false}
        Slides={Data.map((items: any, i: number) => {
          const LogoImage = urlForImage(items.image.asset._ref).url();
          return (
            <div
              key={i}
              className="relative sm:!h-[150px] !h-[90px] rounded-lg border hover:border-secondary transition-all duration-300"
            >
              <Link
                href={
                  "/developers/" +
                  (items?.slug?.current ?? CreateSlug(items.name) ?? "")
                }
              >
                <Image
                  fill
                  unoptimized
                  className="!relative w-full h-full py-[10%]"
                  src={LogoImage}
                  alt={items.name}
                />
              </Link>
            </div>
          );
        })}
      />
    </div>
  );
};

export default Developers;
