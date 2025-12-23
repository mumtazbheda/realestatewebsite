import HeroSlider from '@/widgets/Hero/HeroSlider'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import HeroSlides from './HeroSlides'
import { SanityFetch } from '@/lib/SanityFetch'
import { urlForImage } from '../../../sanity/lib/image'

const Hero = async () => {

    const Data = await SanityFetch({
        Query: `*[_type == 'slider' ] | order(_updatedAt desc) {
            title,
            logo_image,
            cover_image,
            starting_price,
            payment_plan,
            button_link,
            video_link
          }[0..3]`
    })

    return (
        <section>
            <HeroSlider
                ImageSlides={Data.map((items: any, i: number) => {
                    const LogoImage = urlForImage(items.cover_image.asset._ref).url()
                    return (
                        <SliderImage key={i} src={LogoImage} />
                    )
                })}
                ContentSlides={Data.map((items: any, i: number) => {
                    const LogoImage = urlForImage(items.logo_image.asset._ref).url()
                    return (
                        <HeroSlides key={i}
                            logo={LogoImage}
                            title={items.title}
                            startingPrice={items.starting_price}
                            paymentPlan={items.payment_plan}
                            buttonLink={items.button_link}
                            videolink={items.video_link}
                        />
                    )
                })}
            />
        </section>
    )
}

const SliderImage = ({ src }: { src: StaticImageData | string }) => {
    return (
        <Image unoptimized fill className='!relative !w-full !h-full !object-cover'
            src={src} alt='Cover Image' />
    )
}

export default Hero