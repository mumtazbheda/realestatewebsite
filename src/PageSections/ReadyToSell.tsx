import AnimatedButton from '@/shared/AnimatedButton'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import bg_agent from "@/assets/images/bg-agent.jpg"
import agent from "@/assets/images/alina-adamco-2.webp"
import google_logo from "@/assets/Svgs/google-logo-r.svg"
import { Star } from 'lucide-react'

interface ReadyToSellI {
    title?: string;
    SubTitle: string;
    ShortSummary: string;
    Agent: {
        name: string,
        Image: string | StaticImageData
    }
}

const ReadyToSell = ({
    title = "Ready to Sell?",
    SubTitle,
    ShortSummary,
    Agent
}: ReadyToSellI) => {
    return (
        <div className='md:h-[420px] flex md:flex-row flex-col max-md:gap-6'>
            <div className='flex-[0_0_34%] max-md:text-center h-full flex flex-col max-md:items-center justify-center md:gap-12 gap-8 lg:pr-[90px] md:pr-[50px]'>
                <div className='space-y-3'>
                    <h3 className='md:text-[42px] text-[32px] leading-none font-bold'>{title}</h3>
                    <p className='text-lg leading-none'>{SubTitle}</p>
                </div>
                <AnimatedButton css='max-w-[240px]' hoverColor='bg-primary/60' text='SELL YOUR PROPERTY' />
            </div>
            <div className='flex-[0_0_32%] md:max-w-[32%] flex items-end md:justify-center xs:justify-start justify-center relative h-full max-md:min-h-[380px] rounded-lg overflow-hidden'>
                <Image className='absolute object-cover rounded-lg h-full' src={bg_agent} alt='bg_agent' />
                <Image unoptimized fill className='!relative z-10 object-contain lg:!w-[80%] md:!h-[92%] max-md:max-w-[280px] max-md:ml-5 max-xs:ml-0' src={Agent.Image} alt={Agent.name} />
            </div>
            <div className='flex-grow flex flex-col justify-center gap-8 lg:pl-[70px] md:pl-[50px] pr-2.5'>
                <h4 className='text-[#8f8f8f]'>{ShortSummary}</h4>
                <div className='flex items-center gap-1'>
                    <Image className='w-[70px]' src={google_logo} alt='google_logo' />
                    <div>
                        <h5 className='text-lg font-semibold leading-none'>Google Reviews</h5>
                        <div className='flex items-center gap-1'>
                            <div className='text-4xl text-[#5f6368] font-bold leading-none'>4.7</div>
                            <div className='flex flex-col'>
                                <div className='flex items-center'>
                                    {Array.from(Array(5), (_, i: number) => (
                                        <Star className='w-[18px] h-[18px] -ml-0.5 stroke-none fill-[#f9bc15]' key={i} />
                                    ))}
                                </div>
                                <p className='text-sm leading-none'>327 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyToSell