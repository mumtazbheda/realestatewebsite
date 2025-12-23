"use client";
import React, { useState } from "react";
import jabel1 from "@/assets/images/jebel1.jpg";
import jabel2 from "@/assets/images/jebel2.jpg";
import slider1_full_visa from "@/assets/images/slider1_full_visa.jpg";
import mainslider1_m_visa from "@/assets/images/mainslider1_m_visa.jpg";
import slider2_parkgreen from "@/assets/images/slider2_parkgreen.jpg";
import slider2_m_visa from "@/assets/images/slider2_m_visa.jpg";
// import jabel1_m from "@/assets/images/jebel1-m.jpg";
import jabel2_m from "@/assets/images/jebel2-m.jpg";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Hero = () => {
  const [swiper, setswiper] = useState<SwiperCore>();
  const [index, setindex] = useState(0);

  return (
    <div className="relative group" id="home">
      <Swiper
        onInit={(swiper) => setswiper(swiper)}
        onActiveIndexChange={(e) => {
          setindex(e.activeIndex);
        }}
        className="w-full h-full pointer-events-none select-none"
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        noSwiping={true}
        speed={500}
        allowTouchMove={false}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src={slider1_full_visa}
            alt="slider1_full_visa"
            className="max-lg:hidden"
          />
          <Image
            src={mainslider1_m_visa}
            alt="dubaivisa1_m"
            className="lg:hidden w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2_parkgreen}
            alt="visaslider2"
            className="max-lg:hidden"
          />
          <Image
            src={slider2_m_visa}
            alt="slider2_m_visa"
            className="lg:hidden w-full"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute z-10 bottom-[48.5%] w-full flex items-center justify-center">
        <div className="w-[89%] flex items-center justify-between text-white">
          <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300">
            <ChevronLeftIcon size={18} onClick={() => swiper?.slidePrev()} />
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300">
            <ChevronRightIcon size={18} onClick={() => swiper?.slideNext()} />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-2 absolute bottom-6 z-20">
        <button
          className="h-4 flex items-center cursor-none"
          onClick={() => swiper?.slideTo(0)}
        >
          <div
            className={cn([
              "w-8 h-[3px] bg-white transition-all duration-300",
              index === 0 ? "opacity-100" : "opacity-50",
            ])}
          ></div>
        </button>
        <button
          className="h-4 flex items-center cursor-none"
          onClick={() => swiper?.slideTo(1)}
        >
          <div
            className={cn([
              "w-8 h-[3px] bg-white transition-all duration-300",
              index === 1 ? "opacity-100" : "opacity-50",
            ])}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
