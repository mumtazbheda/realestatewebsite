import Image, { StaticImageData } from 'next/image'
import React from 'react'
import price from "@/assets/Svgs/advertising-price.svg"
import payment from "@/assets/Svgs/advertising-payment.svg"
import videoButton from "@/assets/Svgs/advertising-video.svg"
import Link from 'next/link'

interface HeroSlidesProps {
  logo: StaticImageData | string;
  title: string;
  startingPrice: number;
  paymentPlan?: string;
  buttonLink?: string;
  videolink?: string;
}

const HeroSlides = ({ logo, title, startingPrice, paymentPlan, buttonLink, videolink }: HeroSlidesProps) => {
  return (
    <div className='w-full lg:max-w-[1180px] max-w-screen-md flex lg:flex-row flex-col-reverse lg:justify-between mx-auto h-fit px-4'>

      <div className='flex flex-col gap-5'>
        <h1 className='lg:max-w-2xl md:text-[40px] text-3xl leading-tight text-white font-bold'>{title}</h1>

        <div className='max-w-sm flex max-md:justify-between items-center gap-4'>

          <div className='flex items-center gap-2'>
            <Image src={price} alt='advertising-Payment' />
            <div className='text-white'>
              <h5 className='font-bold'>AED {startingPrice}</h5>
              <h6 className='leading-none text-xs'>Starting Price</h6>
            </div>
          </div>

          {paymentPlan &&
            <div className='flex items-center gap-2'>
              <Image src={payment} alt='advertising_price' />
              <div className='text-white'>
                <h5 className='font-bold'>{paymentPlan}%</h5>
                <h6 className='leading-none text-xs'>Payment Plan</h6>
              </div>
            </div>
          }
        </div>

        <div className='flex items-center sm:gap-4 gap-2'>
          <Link href={(buttonLink && buttonLink !== "") ? buttonLink : ""}>
            <button className='max-md:text-sm w-fit bg-primary hover:bg-white hover:text-primary transition-all duration-500 px-9 sm:py-3.5 py-3 text-white font-bold border border-primary rounded mt-2'>Discover More</button>
          </Link>
          {videolink && <a href={videolink}><Image className='mt-2 max-md:scale-[0.8]' src={videoButton} alt='video' /></a>}
        </div>

      </div>
      <div>
        <Image unoptimized fill className='!relative max-lg:mb-4 lg:!h-[45px] md:!h-[42px] !h-8 !object-contain !w-fit' src={logo} alt='Palmlogo' />
      </div>

    </div>
  )
}

export default HeroSlides