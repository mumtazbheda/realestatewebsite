"use client"
import React, { useEffect, useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, EffectFade, Pagination } from 'swiper/modules';

import "./SwiperStyles.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import HeroSearchBox from './HeroSearchBox';

const HeroSlider = ({ ImageSlides, ContentSlides }: { ImageSlides: JSX.Element[], ContentSlides: JSX.Element[] }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const swiper1Ref: any = useRef();
    const swiper2Ref: any = useRef();


    // For Controlling two sliders
    useEffect(() => {
        swiper1Ref.current.controller.control = swiper2Ref.current;
        swiper2Ref.current.controller.control = swiper1Ref.current;
    }, []);



    // For AutoPlay
    const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
        document.getElementById("progressing0")?.style.setProperty('--progress', (1 - progress).toString());
        document.getElementById("progressing1")?.style.setProperty('--progress', (1 - progress).toString());
        document.getElementById("progressing2")?.style.setProperty('--progress', (1 - progress).toString());
        document.getElementById("progressing3")?.style.setProperty('--progress', (1 - progress).toString());
    };


    return (
        <div className='min-h-[720px] relative flex items-center w-full'>
            {/* Image Cover Slider */}
            <div className='absolute -z-10 w-full h-full'>
                <Swiper
                    slidesPerView={1}
                    className='h-full'
                    loop noSwiping={true}
                    onSwiper={(swiper) => {
                        swiper1Ref.current = swiper;
                    }}
                    modules={[EffectFade, Controller]} effect='fade'
                    longSwipesRatio={0}
                >
                    {ImageSlides.map((items, i: number) => (
                        <SwiperSlide key={i}>
                            {items}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content Slider */}
            <div className='relative flex flex-col gap-8 justify-center w-full h-full z-20 max-lg:py-8'>
                <Swiper
                    slidesPerView={1} loop
                    grabCursor
                    className='w-full max-md:space-y-3'
                    modules={[Controller, Autoplay, Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    onSwiper={(swiper) => {
                        swiper2Ref.current = swiper;
                    }}
                    // spaceBetween={"100%"}
                    // speed={800} 
                    longSwipesRatio={0}
                    breakpoints={{
                        768: {
                            autoHeight: false,
                        },
                    }}
                    autoHeight={true}
                    onSlideChange={(index) => setActiveIndex(index.activeIndex)}
                    pagination={{
                        clickable: true,
                        renderBullet: (i, className) => {
                            return (
                                `<div class='autoplay-progress !flex !items-center !justify-center !relative ${className}'>
                                   <svg viewBox="0 0 48 48" id='progressing${i}' class='autoplay-progress2'>
                                     <circle cx="24" cy="24" r="20"></circle>
                                   </svg>
                                   <span class='w-2 h-2 rounded-full bg-white absolute opacity-50'></span>
                                 </div>`
                            )
                        }
                    }}
                >
                    {
                        ContentSlides.map((items, i: number) => (
                            <SwiperSlide className='md:!h-auto md:!flex !items-center' key={i}>
                                {items}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* Search Box */}
                <HeroSearchBox />
            </div>

        </div >

    )
}


export default HeroSlider