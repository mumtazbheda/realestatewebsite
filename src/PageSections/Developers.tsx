import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CreateSlug } from "@/lib/helper/CreateSlug";

const Developers = async ({
  title,
  Area,
}: {
  title: string;
  Area?: string;
}) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'developer' 
        ${
          Area && Area !== ""
            ? `&& references(*[_type == "area" && title == '${Area}' || slug.current == '${Area}']._id)`
            : ""
        }] {
            name,
            image,
            slug
        }`,
  });

  return (
    <div>
      <SliderWrapper
        title={title!}
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
                  items?.slug?.current
                    ? "/developers/" + items?.slug?.current
                    : items.name
                    ? "/developers/" + CreateSlug(items.name)
                    : ""
                }
              >
                <Image
                  fill
                  unoptimized
                  className="!relative w-full h-full p-[10%]"
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
