"use client";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "./SwiperStyles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Slider = ({ Slides }: { Slides: JSX.Element[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // For AutoPlay
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    document
      .getElementById("progressing0")
      ?.style.setProperty("--progress", (1 - progress).toString());
    document
      .getElementById("progressing1")
      ?.style.setProperty("--progress", (1 - progress).toString());
    document
      .getElementById("progressing2")
      ?.style.setProperty("--progress", (1 - progress).toString());
    document
      .getElementById("progressing3")
      ?.style.setProperty("--progress", (1 - progress).toString());
  };

  return (
    <div className=' !h-full relative'>
      <Swiper
        slidesPerView={1}
        loop
        grabCursor
        className="w-full !h-auto max-md:space-y-3"
        modules={[Autoplay, Pagination , EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        // spaceBetween={"100%"}
        // speed={800}
        longSwipesRatio={0}
        onSlideChange={(index) => setActiveIndex(index.activeIndex)}
        pagination={{
          clickable: true,
          renderBullet: (i, className) => {
            return `<div class='autoplay-progress !flex !items-center !justify-center !relative !z-20 ${className}'>
                      <svg viewBox="0 0 48 48" id='progressing${i}' class='autoplay-progress2'>
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span class='w-2 h-2 rounded-full bg-white absolute opacity-50'></span>
                    </div>`;
          },
        }}
      >
        {Slides.map((items: any, i: number) => {
          return (
            <SwiperSlide className="!h-auto" key={i}>
              {items}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
