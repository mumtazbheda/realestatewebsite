"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import Link from "next/link";

export interface SliderProps {
  Slides: JSX.Element[];
  For: string;
  title: string;
  titleCss?: string;
  alignNavButtons?: string;
  autoHeight?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  showAllButton?: boolean;
  buttonLink?: string;
  SlidesPerView?: number;
  BreakPoints?: [number, number, number, number];
  MobileNavButtons?: boolean;
}

const SliderWrapper = ({
  Slides,
  For = "Properties",
  title,
  titleCss,
  MobileNavButtons = true,
  alignNavButtons = "max-md:top-[38%]",
  autoHeight = false,
  autoPlay = false,
  loop = false,
  showAllButton = true,
  buttonLink,
  SlidesPerView = 3,
  BreakPoints = [3, 2, 1, 1],
}: SliderProps) => {
  const [swiper, setswiper] = useState<SwiperCore>();

  return (
    <div className="relative w-full h-full">
      <div className="flex items-center justify-between">
        <h2 className={`${titleCss} md:text-4xl text-3xl font-bold`}>
          {title === "Agents" ? <a href="/agents">{title}</a> : title}
        </h2>

        <div className="flex items-center gap-8">
          {showAllButton && (
            <Link href={buttonLink ? buttonLink : "/"}>
              <button className="max-lg:hidden min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500">
                Show All {For}
              </button>
            </Link>
          )}
          <div
            className={`${
              MobileNavButtons ? "" : "max-md:hidden"
            } flex items-center gap-2`}
          >
            <button
              name="slide Left Button"
              onClick={() => swiper?.slidePrev()}
              className={`z-10 max-md:border-white max-md:border-2 max-md:absolute ${alignNavButtons} max-md:bg-primary max-md:-left-5 group w-fit p-2 border rounded-full cursor-pointer`}
            >
              <ChevronLeft
                className="max-md:w-5 max-md:h-5 max-md:stroke-2 max-md:stroke-white md:group-hover:stroke-secondary transition-all duration-300"
                strokeWidth={1}
              />
            </button>
            <button
              name="slide Right Button"
              onClick={() => swiper?.slideNext()}
              className={`z-10 max-md:border-white max-md:border-2 max-md:absolute ${alignNavButtons} max-md:bg-primary max-md:-right-5 group w-fit p-2 border rounded-full cursor-pointer`}
            >
              <ChevronRight
                className="max-md:w-5 max-md:h-5 max-md:stroke-2 max-md:stroke-white md:group-hover:stroke-secondary transition-all duration-300"
                strokeWidth={1}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="py-8">
        <Swiper
          onInit={(swiper) => setswiper(swiper)}
          className="w-full h-full"
          modules={autoPlay ? [Navigation, Autoplay] : [Navigation]}
          autoHeight={autoHeight}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={loop}
          spaceBetween={20}
          slidesPerView={BreakPoints[3]}
          breakpoints={{
            1024: {
              slidesPerView: BreakPoints[0],
            },
            768: {
              slidesPerView: BreakPoints[1],
            },
            640: {
              slidesPerView: BreakPoints[2],
            },
          }}
        >
          {Slides.map((items, i: number) => (
            <SwiperSlide key={i}>{items}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      {showAllButton && (
        <Link
          href={buttonLink ? buttonLink : "/"}
          className="flex justify-center w-fit mx-auto"
        >
          <button className="lg:hidden mx-auto min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500">
            Show All {For}
          </button>
        </Link>
      )}
    </div>
  );
};

export default SliderWrapper;
