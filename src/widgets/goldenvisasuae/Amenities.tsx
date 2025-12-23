"use client";
import React, { useState } from "react";
import Title from "@/shared/goldenvisasuae/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, PlusIcon } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import Image from "next/image";
import sky_pool from "@/assets/images/sky-pool.jpg";
import gym from "@/assets/images/gym.jpg";
import Wellness from "@/assets/images/Wellness.jpg";
import multipurpose_room from "@/assets/images/aupuncture-studio.jpg";
import jogging_track from "@/assets/images/jogging-track.jpg";
import Entertainment from "@/assets/images/Entertainment.jpg";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Amenities = () => {
  const [swiper, setswiper] = useState<SwiperCore>();
  const [index, setindex] = useState(0);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);

  return (
    <div>
      <Title>Amenities</Title>
      {/* Slider */}
      <div className="relative group mt-8">
        <div className="px-4">
          <Swiper
            onInit={(swiper) => setswiper(swiper)}
            onActiveIndexChange={(e) => {
              setindex(e.activeIndex);
            }}
            className="w-full h-full"
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={15}
            loop
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
            }}
          >
            {Data.map((items, i: number) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={items.image}
                    alt={items.alt}
                    className="rounded-[20px]"
                  />
                  <h6 className="text-[#274685] text-sm font-semibold">
                    {items.title}
                  </h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute h-full flex justify-center items-center top-0 left-0 z-10">
          <button
            onClick={() => swiper?.slidePrev()}
            className={`bg-black opacity-80 hover:opacity-100 rounded-full transition-all duration-300`}
          >
            <ChevronLeft
              size={20}
              strokeWidth={2}
              className={"stroke-white w-8 h-8 pr-0.5"}
            />
          </button>
        </div>

        <div className="absolute h-full flex justify-center items-center top-0 right-0 z-10">
          <button
            onClick={() => swiper?.slideNext()}
            className={`bg-black opacity-80 hover:opacity-100 rounded-full transition-all duration-300`}
          >
            <ChevronRight
              size={20}
              strokeWidth={2}
              className={"stroke-white w-8 h-8 pl-0.5"}
            />
          </button>
        </div>
      </div>
      {/* Dropdowns */}
      <div className="w-full grid lg:grid-cols-10 sm:grid-cols-9 grid-cols-1 mt-8">
        <div
          className={cn([
            "serif rounded-sm sm:col-span-3 sm:col-start-2",
            roboto.className,
          ])}
        >
          <button
            onClick={() => setdropdown1(!dropdown1)}
            className="w-full bg-[#274685] font-light text-base text-white flex items-center gap-2 p-[14px]"
          >
            <PlusIcon size={20} strokeWidth={2.5} />
            Amenities
          </button>
          <div
            className={cn([
              "bg-[#26b8e847] overflow-hidden transition-all duration-300",
              dropdown1 ? "h-[120px]" : "h-0",
            ])}
          >
            <ul className="list-disc text-[#63676d] text-sm font-semibold p-[1rem] pl-[2rem]">
              <li>Jogging Track</li>
              <li>Spa and Sauna</li>
              <li>Running Track</li>
              <li>Laundry</li>
            </ul>
          </div>
        </div>
        <div
          className={cn([
            "serif rounded-sm sm:col-span-3 sm:col-start-6",
            roboto.className,
          ])}
        >
          <button
            onClick={() => setdropdown2(!dropdown2)}
            className="w-full bg-[#274685] font-light text-base text-white flex items-center gap-2 p-[14px]"
          >
            <PlusIcon size={20} strokeWidth={2.5} />
            Amenities
          </button>
          <div
            className={cn([
              "bg-[#26b8e847] overflow-hidden transition-all duration-300",
              dropdown2 ? "h-[120px]" : "h-0",
            ])}
          >
            <ul className="list-disc text-[#63676d] text-sm font-semibold p-[1rem] pl-[2rem]">
              <li>Pool</li>
              <li>Wellness</li>
              <li>Gym</li>
              <li>Multipurpose Room</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Data = [
  {
    title: "Pool",
    image: sky_pool,
    alt: "sky_pool",
  },
  {
    title: "Gym",
    image: gym,
    alt: "gym",
  },
  {
    title: "Wellness",
    image: Wellness,
    alt: "Wellness",
  },
  {
    title: "Multipurpose Room",
    image: multipurpose_room,
    alt: "multipurpose_room",
  },
  {
    title: "Jogging Track",
    image: jogging_track,
    alt: "jogging_track",
  },
  {
    title: "Entertainment",
    image: Entertainment,
    alt: "Entertainment",
  },
];

export default Amenities;
