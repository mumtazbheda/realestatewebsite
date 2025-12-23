"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from 'swiper/modules';
import SwiperCore from "swiper";
import 'swiper/css';


interface SliderPropsI {
    Slides: JSX.Element[];
    BreakPoints: number[];
    SpaceBetween: number
}

const Slider = ({ Slides, BreakPoints, SpaceBetween }: SliderPropsI) => {

    const [swiper, setswiper] = useState<SwiperCore>();

    return (
        <div className='relative h-full group cursor-pointer flex items-center rounded-lg overflow-hidden'>
            <Swiper
                onInit={(swiper) => setswiper(swiper)}
                className='w-full h-full'
                modules={[Navigation]}
                spaceBetween={SpaceBetween}
                slidesPerView={BreakPoints[2]}
                breakpoints={{
                    1024: {
                        slidesPerView: BreakPoints[0]
                    },
                    640: {
                        slidesPerView: BreakPoints[1]
                    },
                }}
            >
                {Slides.map((items, i: number) => (
                    <SwiperSlide key={i}>
                        {items}
                    </SwiperSlide>
                ))}
            </Swiper>

            <button onClick={() => swiper?.slidePrev()} className='max-md:hidden absolute flex justify-center items-center bg-white/70 hover:bg-white rounded-full left-0 z-10 h-fit transition-all duration-500 p-4 ml-2'>
                <ChevronLeft size={20} />
            </button>

            <button onClick={() => swiper?.slideNext()} className='max-md:hidden absolute flex justify-center items-center bg-white/70 hover:bg-white rounded-full right-0 z-10 h-fit transition-all duration-500 p-4 mr-2'>
                <ChevronRight size={20} />
            </button>
        </div>
    )
}

export default Slider