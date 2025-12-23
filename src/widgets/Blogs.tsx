import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import MediaBox from "@/shared/MediaBox";
import { Blogbox } from "@/shared/blogbox";
import Link from "next/link";
import Image from "next/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";

const Blogs = async ({ title = "Blogs" }: { title?: string }) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'blog'] | order(_createdAt desc) {
                title,
                slug,
                cover_image
              }[0..9]`,
  });

  // Handle null/undefined data
  if (!Data || !Array.isArray(Data) || Data.length === 0) {
    return null;
  }

  return (
    <div>
      <SliderWrapper
        title={title}
        For={title}
        showAllButton={false}
        SlidesPerView={2}
        BreakPoints={[2, 2, 1, 1]}
        Slides={Data.map((items: any, i: number) => {
          const CoverImage =
            items?.cover_image &&
            items?.cover_image?.asset &&
            urlForImage(items.cover_image.asset._ref).url();
          return (
            <div key={i} className="w-full h-full border rounded-lg overflow-hidden">
              {CoverImage && (
                <div className="w-full h-full overflow-hidden object-cover">
                  <Link
                    href={
                      "/blogs/" +
                      (items.slug.current
                        ? items.slug.current
                        : CreateSlug(items.title))
                    }
                  >
                    <Image
                      unoptimized
                      fill
                      className="lg:!h-[310px] sm:!h-[250px] h-[220px] !relative !w-full !object-cover hover:scale-110 transition-all duration-500"
                      src={CoverImage}
                      alt={"Image"}
                    />
                  </Link>
                </div>
              )}
              <div className="sm:px-5 xs:px-4 px-3 sm:pt-4 pt-3 sm:pb-5 pb-4">
                <Link
                  href={
                    "/blogs/" +
                    (items.slug.current
                      ? items.slug.current
                      : CreateSlug(items.title))
                  }
                  className="xs:text-lg font-medium hover:text-secondary transition-all duration-300"
                >
                  {items.title}
                </Link>
              </div>
            </div>
          );
        })}
      />
    </div>
  );
};

export default Blogs;
