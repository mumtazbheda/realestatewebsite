import React from "react";
import SliderWrapper from "../shared/SliderWrapper";
import ReviewBox from "../shared/ReviewBox";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../sanity/lib/image";
import { StaticImageData } from "next/image";

interface ReviewI {
  review?: string;
  stars?: number | string;
  source?: string;
  source_logo?: string | StaticImageData;
  published_on?: string | Date;
}

const ReviewSection = async ({
  title = "Reviews About Our Company",
  Reviews,
}: {
  title?: string;
  Reviews: ReviewI[];
}) => {
  return (
    <SliderWrapper
      autoHeight={true}
      autoPlay={true}
      loop={(Reviews && Reviews.length) > 5 ? true : false}
      showAllButton={false}
      alignNavButtons="max-md:top-[55%]"
      title={title}
      titleCss="!text-2xl !font-semibold"
      For="Reviews"
      Slides={
        Reviews &&
        Reviews.map((items: any, i: number) => {
          const Source_Logo =
            items.source_logo &&
            urlForImage(items.source_logo.asset._ref).url();
          return (
            <ReviewBox
              review={items?.review}
              stars={items?.stars}
              source={items?.source}
              source_logo={Source_Logo}
              published_on={items?.published_on}
              key={i}
            />
          );
        })
      }
    />
  );
};

export default ReviewSection;
