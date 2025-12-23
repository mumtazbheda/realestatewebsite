import React from 'react'
import star from "@/assets/Svgs/rating-agent-gray-BR.svg"
import google from "@/assets/Svgs/system-google.svg"
import Image from 'next/image'

interface ReviewBox {
    review: string;
    stars: number;
    source: string;
    source_logo?: string;
    published_on?: string;
}

const ReviewBox = ({
    review,
    stars,
    source,
    source_logo,
    published_on
}: ReviewBox) => {
    return (
        <div className='border p-4 rounded-lg flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <h4 className='text-2xl font-semibold'>{stars}</h4>
                    <div className='flex items-center'>
                        {Array.from(Array(stars), (_, i: number) => (
                            <Image className='w-6 h-6' key={i} src={star} alt='star' />
                        ))}
                    </div>
                </div>
                {published_on && <p className='text-xs text-black/50'>{published_on}</p>}
            </div>
            <p className='text-xs text-black'>{review}</p>
            <hr />
            <div className="flex items-center justify-between">
                <p className='text-xs text-black/50'>{source}</p>
                {source_logo && <Image unoptimized fill className='!relative !h-5 !w-fit' src={source_logo} alt='source_logo' />}
            </div>
        </div>
    )
}

export default ReviewBox