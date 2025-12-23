import { SanityFetch } from '@/lib/SanityFetch'
import { CreateSlug } from '@/lib/helper/CreateSlug'
import Link from 'next/link'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'
import Image from 'next/image'

interface MoreAreasI {
    Title: string;
    Two_Images_Grid: boolean;
    Five_Images_Grid: boolean;
    developer?: string
}

const MoreAreas = async ({
    Title = "More Areas in Dubai",
    Two_Images_Grid = false,
    Five_Images_Grid = false,
    developer
}: MoreAreasI) => {

    const Data = await SanityFetch({
        Query: `*[_type == 'area'
        ${developer && developer !== "" ? `&& references(*[_type == "developer" && slug.current in ['${developer}'] ]._id)` : ""} 
    ] {
            title,
            cover_image,
            price
          } ${Two_Images_Grid === true ? `[0..1]` : ""} ${Five_Images_Grid === true ? `[0..4]` : ""}`
    })

    return (
        <div className='space-y-4 mt-28'>
            {/* Title */}
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-medium'>{Title}</h2>
                <button className='max-md:hidden min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500'>
                    Show All Areas
                </button>
            </div>
            {/* Images Grid */}
            <div className={`grid 
               ${Five_Images_Grid ? "lg:[&>*:nth-child(2)]:col-span-2 lg:[&>*:nth-child(3)]:row-span-2 md:[&>*:nth-child(4)]:col-span-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2.5" : ""} 
               ${Two_Images_Grid ? "md:grid-cols-2 grid-cols-1 min-h-[320px] gap-2.5" : ""} 
            `}>

                {Data.map((items: any, i: number) => (
                    <Link key={i} href={"/areas/" + CreateSlug(items.title)} className='cursor-pointer relative md:min-h-[257px] sm:min-h-[280px] max-sm:!h-[180px] md:col-span-1 rounded-lg overflow-hidden'>
                        <Image unoptimized fill className='w-full h-full object-cover' src={urlForImage(items.cover_image.asset._ref).url()} alt='Image1' />
                        <div className='space-y-0.5 pb-8 hover:pb-10 gridImage hover:bg-[0_50%] transition-all duration-300 w-full h-full flex flex-col justify-end absolute left-0 bottom-0 p-[30px] z-10'>
                            <h3 className='text-white text-lg font-medium'>{items.title}</h3>
                            <p className='text-white text-xs'>Price from {items.price} AED</p>
                        </div>
                    </Link>
                ))}

            </div>
            <div className='flex justify-center w-full pt-2'>
                <button className='md:hidden min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500'>
                    Show All Areas
                </button>
            </div>
        </div>
    )
}

export default MoreAreas