import Image, { StaticImageData } from 'next/image'
import React from 'react'
import img1 from '@/assets/images/Palm-Jebel-Ali-10-1024x418.webp'
import img2 from '@/assets/images/Palm-Jebel-Ali-9-1024x679.webp'
import img3 from '@/assets/images/Palm-Jebel-Ali-8.webp'
import { PortableText } from '@portabletext/react'
import { CustomPortableText } from '@/components/customPortableText'

interface ContentI {
    title?: string;
    content: any;
    ShowImages?: boolean;
    Images?: string[] | StaticImageData[];
    ImagesOnLeft?: boolean,
    PriceValidity : boolean
    PriceValidityText? : string
}

const Content = ({
    title,
    ShowImages,
    content,
    Images,
    ImagesOnLeft = false,
    PriceValidity,
    PriceValidityText
}: ContentI) => {
    return (
        <div>
            {title && <h2 className='text-2xl font-medium mb-8'>{title}</h2>}
            <div className={`${ShowImages ? "md:grid-cols-2 grid-cols-1" : "md:grid-cols-1"} grid gap-[50px] items-center`}>
                <div className={`${ImagesOnLeft ? "order-2" : ""} text-sm self-center text-[15px] leading-relaxed flex flex-col gap-4 max-w-[930px] max-md:order-2`}>
                    <CustomPortableText value={content} />
                    {PriceValidity && <div className='bg-[#f1f1f1] rounded-lg p-2.5'>{PriceValidityText}</div>}
                </div>
                {Images &&
                    <div className={`relative h-[450px]`}>
                        <Image unoptimized fill className='!absolute !top-0 !left-[15%] !w-[70%] !h-[45%] rounded-lg object-cover' src={Images[0]} alt='image' />
                        <Image unoptimized fill className='!absolute !bottom-0 !right-0 !top-auto !left-auto !w-[60%] !h-[calc(55%_-_5px)] rounded-lg object-cover' src={Images[1]} alt='image' />
                        <Image unoptimized fill className='!absolute !top-[calc(45%_+_5px)] !left-0 !w-[calc(40%_-_5px)] !h-[30%] rounded-lg object-cover' src={Images[2]} alt='image' />
                    </div>
                }
            </div>
        </div>
    )
}

export default Content