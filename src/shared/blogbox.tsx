import { CreateSlug } from "@/lib/helper/CreateSlug";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface BlogboxI {
  title?: string;
  CoverImage?: string | StaticImageData;
  slug?: string;
}

export const Blogbox = ({ title, CoverImage, slug }: BlogboxI) => {
  return (
    <div className="w-full h-full border rounded-lg overflow-hidden xs:min-h-[280px] min-h-[300px]">
      {CoverImage && (
        <div className="w-full h-full sm:max-h-[220px] max-h-[242px] overflow-hidden">
          <Link href={"/blogs/" + (slug ? slug : CreateSlug(title))}>
            <Image
              unoptimized
              fill
              className="!relative !w-full !h-full object-cover hover:scale-110 transition-all duration-500"
              src={CoverImage}
              alt={"Image"}
            />
          </Link>
        </div>
      )}
      <div className="lg:px-5 sm:px-4 px-3 pt-3.5 lg:pb-8 pb-4">
        <Link
          href={"/blogs/" + (slug ? slug : CreateSlug(title))}
          className="text-lg font-medium hover:text-secondary transition-all duration-300"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};
