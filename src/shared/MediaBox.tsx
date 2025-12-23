import Image, { StaticImageData } from "next/image";
import React from "react";
import acticle_views from "@/assets/Svgs/acticle-views.svg";
import Link from "next/link";
import { CreateSlug } from "@/lib/helper/CreateSlug";

interface MediaBoxPropsI {
  MediaBoxImage: StaticImageData | string;
  link?: string;
  title: string;
  summary: string;
  sourceImage: StaticImageData | string;
  source: string;
  published: string;
  views?: number;
  AutoHeight?: boolean;
}

const MediaBox = ({
  MediaBoxImage,
  link,
  title,
  summary,
  sourceImage,
  source,
  published,
  views,
  AutoHeight = false,
}: MediaBoxPropsI) => {
  return (
    <div className="border group rounded-lg overflow-hidden">
      <Link
        href={link ? link : ""}
        className="relative h-[270px] rounded-lg overflow-hidden"
      >
        <Image
          unoptimized
          fill
          className="w-full !relative !h-[270px] object-cover"
          src={MediaBoxImage}
          alt="Image1"
        />
        <div className="space-y-0.5 after:group-hover:opacity-70 MediaBoxImage transition-all duration-500 w-full h-full pb-10 overflow-hidden flex flex-col justify-end absolute left-0 bottom-0 p-[30px]">
          <h3 className="text-white z-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-sm translate-y-36 transition-all duration-500">
            {summary}.
          </h3>
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-4">
        <div className={`${AutoHeight ? "" : "min-h-[60px]"}`}>
          <Link href={link ? link : ""}>
            <h3 className="text-lg leading-tight font-medium hover:text-secondary transition-all duration-300">
              {title}
            </h3>
          </Link>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {sourceImage && (
              <Image
                unoptimized
                fill
                className="!w-[50px] !h-fit !relative"
                src={sourceImage}
                alt="logo"
              />
            )}
            <div className="space-y-1">
              {source && <div className="text-sm font-semibold">{source}</div>}
              <p className="text-xs text-black/70">Published on {published}</p>
            </div>
          </div>
          {views && (
            <div className="flex items-center gap-2">
              <span className="text-black/50">{views}</span>
              <Image src={acticle_views} alt="acticle_views" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaBox;
