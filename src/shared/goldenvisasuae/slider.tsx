"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";

interface ImageSliderI {
  Slides: JSX.Element[];
}

const Slider = ({ Slides }: ImageSliderI) => {
  const [swiper, setswiper] = useState<SwiperCore>();
  const [index, setindex] = useState(0);

  return (
    <div className="relative group">
      <Swiper
        onInit={(swiper) => setswiper(swiper)}
        onActiveIndexChange={(e) => {
          setindex(e.activeIndex);
        }}
        className="w-full h-full"
        modules={[Navigation]}
        spaceBetween={30}
        loop
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
      >
        {Slides.map((items, i: number) => (
          <SwiperSlide key={i}>{items}</SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute h-full flex justify-center items-center top-0 sm:-left-16 left-0 z-10">
        <button
          onClick={() => swiper?.slidePrev()}
          className={`bg-[#ccc] opacity-80 hover:opacity-100 rounded-full transition-all duration-300`}
        >
          <ChevronLeft
            size={20}
            strokeWidth={2}
            className={"stroke-black w-8 h-8 pr-0.5"}
          />
        </button>
      </div>

      <div className="absolute h-full flex justify-center items-center top-0 sm:-right-16 right-0 z-10">
        <button
          onClick={() => swiper?.slideNext()}
          className={`bg-[#ccc] opacity-80 hover:opacity-100 rounded-full transition-all duration-300`}
        >
          <ChevronRight
            size={20}
            strokeWidth={2}
            className={"stroke-black w-8 h-8 pl-0.5"}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
