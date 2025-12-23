import Slider from '@/shared/Slider'
import Image from 'next/image'
import React from 'react'
import Image2 from "@/assets/images/palm-jebel-ali-01.jpg"

const ContentwithSlider = () => {
    return (
        <div className='space-y-7'>
            <h3 className='text-2xl font-semibold'>About Palm Jebel Ali</h3>
            <div className='flex flex-col gap-6 text-sm leading-relaxed max-w-[930px]'>
                <p>Set to become a resort-like lifestyle destination, Palm Jebel Ali is an artificial archipelago located in the south of Jebel Ali Free Zone. This is a sensational development by Nakheel Properties, who is famous for the iconic Palm Jumeirah island. According to HH Sheikh Mohammed bin Rashid Al Maktoum, Vice President, Prime Minister and Ruler of Dubai, Palm Jebel Ali is the most sensational project in the city in the past decade, as Palm Jebel Ali is now Dubai&apos;s largest island.</p>
                <p>It is worth noting that the size of Palm Jebel Ali is double that of the 460-hectare Palm Jumeirah. Upon completion, it will house 7 islands and 16 fronds. When living here, you will be able to enjoy absolute serenity, surrounded by pristine white beaches and luscious greenery.</p>
            </div>
            {/* <div className='absolute right-0 left-0 sm:h-[360px] xs:h-[250px] h-[200px] rounded-lg overflow-hidden sm:px-4 px-2'>
                    <Slider SpaceBetween={5} BreakPoints={[3, 2, 1]} Slides={[
                        <Image className='object-cover h-full w-full rounded-lg' key={1} src={Image2} alt='Image2' />,
                        <Image className='object-cover h-full w-full rounded-lg' key={2} src={Image2} alt='Image2' />,
                        <Image className='object-cover h-full w-full rounded-lg' key={3} src={Image2} alt='Image2' />,
                    ]} />
                </div> */}
            <div className='lg:h-[620px] md:h-[500px] sm:h-[300px] min-[450px]:h-[250px] h-[200px] rounded-lg overflow-hidden'>
                <Slider SpaceBetween={20} BreakPoints={[1, 1, 1]} Slides={[
                    <Image className='object-cover h-full rounded-lg' key={1} src={Image2} alt='Image2' />,
                    <Image className='object-cover h-full rounded-lg' key={2} src={Image2} alt='Image2' />,
                    <Image className='object-cover h-full rounded-lg' key={3} src={Image2} alt='Image2' />,
                ]} />
            </div>
            {/* <div className='flex flex-col gap-6 text-sm leading-relaxed max-w-[930px] sm:pt-[390px] xs:pt-[270px] pt-[220px]'>
                    <p>The fantastic development will impress residents and visitors alike with the emirate&apos;s longest coastline of 68 miles, where a myriad of world-class amenities will be found. Among the communal offerings are recreation zones, aqua sports facilities, cycling and pedestrian tracks, beach camping areas and family spaces, which are perfect for a fun-filled day with your friends and family. The island will house more than 80 resorts and hotels, in addition to F&B and leisure venues.</p>
                    <p>In line with the Dubai 2040 Urban Master Plan, the developer will use smart home technology and sustainable practices to minimise the environmental impact of Palm Jebel Ali. For instance, up to 30% of its energy will be generated from renewable sources, making the eco-friendly island largely self-sufficient.</p>
                </div> */}
            <div className='flex flex-col gap-6 text-sm leading-relaxed max-w-[930px]'>
                <p>The fantastic development will impress residents and visitors alike with the emirate&apos;s longest coastline of 68 miles, where a myriad of world-class amenities will be found. Among the communal offerings are recreation zones, aqua sports facilities, cycling and pedestrian tracks, beach camping areas and family spaces, which are perfect for a fun-filled day with your friends and family. The island will house more than 80 resorts and hotels, in addition to F&B and leisure venues.</p>
                <p>In line with the Dubai 2040 Urban Master Plan, the developer will use smart home technology and sustainable practices to minimise the environmental impact of Palm Jebel Ali. For instance, up to 30% of its energy will be generated from renewable sources, making the eco-friendly island largely self-sufficient.</p>
            </div>
        </div>
    )
}

export default ContentwithSlider