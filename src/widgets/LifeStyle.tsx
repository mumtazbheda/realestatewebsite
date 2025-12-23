import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import MediaBox from "@/shared/MediaBox";

const LifeStyle = async ({ title = "Lifestyle" }: { title?: string }) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'media' && media_type == 'news'] | order(_createdAt desc) {
            title,
            media_type,
            slug,
            source,
            short_summary,
            cover_image,
            source_logo,
            published_on,
            views,
            agent -> {
                name,
                image,
                phone
            }
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
          const Image =
            items.cover_image &&
            urlForImage(items.cover_image.asset._ref).url();

          const source_logo =
            items.agent &&
            items.agent.image &&
            urlForImage(items.agent.image.asset._ref).url();

          const link = "/media/" + items.media_type + "/" + items.slug.current;
          return (
            <MediaBox
              key={i}
              MediaBoxImage={Image}
              title={items.title}
              summary={items.short_summary}
              sourceImage={source_logo}
              source={items.agent.name}
              published={items.published_on}
              views={items.views}
              AutoHeight={true}
              link={link ? link : ""}
            />
          );
        })}
      />
    </div>
  );
};

export default LifeStyle;
