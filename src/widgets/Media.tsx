import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import MediaBox from "@/shared/MediaBox";
import { CreateSlug } from "@/lib/helper/CreateSlug";

const Media = async ({ title = "Media Publication's" }: { title?: string }) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'mass_media'] | order(_createdAt desc) {
            title,
            slug,
            short_summary,
            cover_image,
            publisher -> {
                name,
                logo
            },
            published_on,
            views
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
        For="Posts"
        showAllButton={false}
        SlidesPerView={2}
        BreakPoints={[2, 2, 1, 1]}
        Slides={Data.map((items: any, i: number) => {
          const Image =
            items.cover_image &&
            urlForImage(items.cover_image.asset._ref).url();

          const source_image =
            items.publisher.logo &&
            urlForImage(items.publisher.logo.asset._ref).url();

          const link =
            items.slug &&
            "/mass-media/" +
              CreateSlug(items.publisher?.name) +
              "/" +
              items.slug.current;

          return (
            <MediaBox
              key={i}
              MediaBoxImage={Image}
              title={items.title}
              summary={items.short_summary}
              sourceImage={source_image}
              source={items.publisher.name}
              published={items.published_on}
              views={items.views}
              link={link}
            />
          );
        })}
      />
    </div>
  );
};

export default Media;
