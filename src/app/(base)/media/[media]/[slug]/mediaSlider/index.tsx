import { SanityFetch } from "@/lib/SanityFetch";
import React from "react";
import Slider from "./Slider";
import { urlForImage } from "../../../../../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const MediaSlider = async () => {
  const Data = await SanityFetch({
    Query: `*[_type == 'slider' ] | order(_updatedAt desc) {
            title,
            logo_image,
            cover_image,
            starting_price,
            payment_plan,
            button_link,
            video_link
          }[0..3]`,
  });

  return (
    <div>
      <Slider
        Slides={Data.map((items: any, i: number) => {
          const cover_image =
            items.cover_image &&
            urlForImage(items.cover_image.asset._ref).url();
          return (
            <Slide
              key={i}
              title={items.title}
              cover_image={cover_image}
              starting_price={items.starting_price}
              payment_plan={items.payment_plan}
              button_link={items.button_link}
            />
          );
        })}
      />
    </div>
  );
};

interface SlideI {
  title: string;
  cover_image: string;
  starting_price: string;
  payment_plan: string;
  button_link: string;
}

const Slide = ({
  title,
  cover_image,
  starting_price,
  payment_plan,
  button_link,
}: SlideI) => {
  return (
    <div className="!h-full flex md:flex-row flex-col rounded-lg overflow-hidden border bg-white">
      <div className="md:flex-[0_0_340px] md:min-h-[320px] max-md:h-[250px]">
        <Image
          unoptimized
          fill
          src={cover_image}
          alt={"Cover Image"}
          className="max-md:!h-[250px] !relative !w-full !h-full object-cover"
        />
      </div>
      <div className="h-full flex flex-col justify-between md:py-[25px] md:px-[25px] py-5 px-4">
        <div className="flex flex-col gap-4 h-fit">
          <div className="flex sm:flex-row flex-col sm:items-center gap-2 max-sm:w-fit">
            {starting_price && (
              <div className="uppercase border border-secondary rounded-lg text-xs text-secondary py-1 px-2">
                AED {starting_price}M STARTING PRICE
              </div>
            )}
            {payment_plan && (
              <div className="uppercase border border-secondary rounded-lg text-xs text-secondary py-1 px-2">
                {payment_plan}% PAYMENT PLAN
              </div>
            )}
          </div>
          <h3 className="text-[25px] leading-7 font-medium">{title}</h3>
        </div>
        <div className="flex items-center sm:gap-4 gap-2 max-md:mt-5">
          <Link href={button_link && button_link !== "" ? button_link : ""}>
            <button className="relative z-50 w-fit bg-primary hover:bg-white hover:text-primary transition-all duration-500 sm:px-9 px-5 sm:py-3.5 py-2 text-white sm:font-bold font-semibold border border-primary sm:rounded rounded-lg mt-2">
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediaSlider;
