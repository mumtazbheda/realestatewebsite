import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../sanity/lib/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";

const PopularAreas = async () => {
  const Data = await SanityFetch({
    Query: `*[_type == 'area'] | order(_createdAt desc) {
            title,
            cover_image,
            slug,
            price
          }[0..6]`,
  });

  // Handle null/undefined data
  if (!Data || !Array.isArray(Data) || Data.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="md:text-4xl text-3xl font-bold">
          Popular Areas in Dubai
        </h2>
        <Link href={"/areas"}>
          <button className="max-md:hidden min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500">
            Show All Areas
          </button>
        </Link>
      </div>
      {/* Images Grid */}
      <div className="grid sm:[&>*:nth-child(1)]:col-span-2 max-md:[&>*:nth-child(4)]:row-span-2 max-sm:[&>*:nth-child(4)]:row-span-[auto] md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-2.5">
        {Data.map((items: any, i: number) => (
          <Link
            key={i}
            href={
              "areas/" +
              (items?.slug?.current
                ? items?.slug?.current
                : items.title
                ? CreateSlug(items.title)
                : "")
            }
            className="cursor-pointer relative md:min-h-[257px] sm:min-h-[280px] max-sm:!h-[180px] md:col-span-1 rounded-lg overflow-hidden"
          >
            {items.cover_image && (
              <Image
                unoptimized
                fill
                className="w-full h-full object-cover"
                src={
                  items.cover_image &&
                  urlForImage(items.cover_image.asset._ref).url()
                }
                alt="Image1"
              />
            )}
            <div className="space-y-0.5 pb-8 hover:pb-10 gridImage hover:bg-[0_50%] transition-all duration-300 w-full h-full flex flex-col justify-end absolute left-0 bottom-0 p-[30px] z-10">
              {items.title && (
                <h3 className="text-white text-lg font-medium">
                  {items.title}
                </h3>
              )}
              {items.price && (
                <p className="text-white text-xs">
                  Price from {items.price} AED
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      <Link href={"/areas"} className="flex justify-center w-fit mx-auto pt-2">
        <button className="md:hidden min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500">
          Show All Areas
        </button>
      </Link>
    </div>
  );
};

export default PopularAreas;
