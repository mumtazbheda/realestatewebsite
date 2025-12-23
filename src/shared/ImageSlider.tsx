"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from 'swiper/modules';
import SwiperCore from "swiper";
import 'swiper/css';

interface ImageSliderI {
    Slides: JSX.Element[];
    ButtonHover?: boolean;
    fixedTypeButtons?: boolean;
    buyORrent?: 'buy' | 'rent'
    projectType?: string
}

const ImageSlider = ({ Slides, ButtonHover = true, fixedTypeButtons, buyORrent, projectType }: ImageSliderI) => {

    const [swiper, setswiper] = useState<SwiperCore>();
    const [index, setindex] = useState(0);

    return (
        <div className='relative group'>
            <Swiper
                onInit={(swiper) => setswiper(swiper)}
                onActiveIndexChange={(e) => { setindex(e.activeIndex) }}
                className='w-full h-full'
                modules={[Navigation]}
                slidesPerView={1}
            >
                {Slides.map((items, i: number) => (
                    <SwiperSlide key={i}>
                        {items}
                    </SwiperSlide>
                ))}
            </Swiper>

            {index !== 0 &&
                <button onClick={() => swiper?.slidePrev()} className={`absolute flex justify-center items-center top-0 left-0 z-10 h-full group-hover:opacity-100 ${ButtonHover ? "bg-white/30 w-[80px] opacity-0 -translate-x-[80px]" : "bg-black/10 w-[40px] translate-x-0"} group-hover:translate-x-0 transition-all duration-500`}>
                    <ChevronLeft size={20} className={ButtonHover ? "" : "stroke-white w-7 h-7 stroke-1"} />
                </button>
            }

            {index !== (Slides.length - 1) &&
                <button onClick={() => swiper?.slideNext()} className={`absolute flex justify-center items-center top-0 right-0 z-10 h-full group-hover:opacity-100 ${ButtonHover ? "bg-white/30 w-[80px] opacity-0 translate-x-[80px]" : "bg-black/10 w-[40px] translate-x-0"} group-hover:translate-x-0 transition-all duration-500`}>
                    <ChevronRight size={20} className={ButtonHover ? "" : "stroke-white w-7 h-7 stroke-1"} />
                </button>
            }

            {fixedTypeButtons &&
                <div className='text-xs font-medium flex items-center gap-1 absolute top-0 left-0 p-4 z-20'>
                    <button className='py-1 px-3 bg-secondary hover:bg-white hover:text-secondary text-white rounded-lg uppercase transition-all duration-300'>{buyORrent}</button>
                    <button className='py-1 px-3 bg-primary hover:bg-white hover:text-primary text-white rounded-lg uppercase transition-all duration-300'>{projectType}</button>
                </div>
            }
        </div>
    )
}

export default ImageSlider