import { SanityFetch } from '@/lib/SanityFetch'
import ProjectBox from '@/shared/ProjectBox'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'
import { CreateSlug } from '@/lib/helper/CreateSlug'

const Areas = async ({ title, AgentName, AgentSlug,developer, amount }: { title: string, Area?: string, AgentName?: string, AgentSlug?: string, developer?: string, amount?: number | string }) => {

    const Data = await SanityFetch({
        Query: `*[_type == 'area'
        ${AgentName && AgentName !== "" ? `&& references(*[_type == "agent" && name == '${AgentName}' || slug.current == '${AgentSlug}']._id)` : ""}
        ${developer && developer !== "" ? `&& references(*[_type == "developer" && slug.current == '${developer}']._id)` : ""}
    ] {
        title,
        cover_image,
        price
      }${amount ? `[0..${amount}]` : "[0..8]"}`
    })

    return (
        <div className='max-width mx-auto'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <Link href={"/areas"}>
                    <button className='max-lg:hidden min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500'>
                        Show All Areas
                    </button>
                </Link>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 sm:py-6 py-4'>
                {Data && Data.map((items: any, i: number) => {
                    const LogoImage = urlForImage(items.cover_image.asset._ref).url()
                    return (
                        <div key={i} className='w-full h-full border rounded-lg overflow-hidden'>
                            <div className='w-full sm:h-[220px] h-[242px] overflow-hidden'>
                                <Link className='w-full h-full' href={"areas/" + CreateSlug(items.title)}>
                                    <Image unoptimized fill className='!relative !w-full !h-full object-cover hover:scale-110 transition-all duration-500' src={LogoImage} alt={LogoImage + "Image"} />
                                </Link>
                            </div>
                            <div className='xs:p-5 p-3'>
                                <Link href={"areas/" + CreateSlug(items.title)} className='text-lg font-medium hover:text-secondary transition-all duration-300'>{items.title}</Link>
                                <div className='flex items-center justify-between xs:mt-1 mt-0.5'>
                                    <p className='text-xs text-[#0a0a0a]'>Price from {items?.price?.toLocaleString()} AED</p>
                                    {/* <Link className='text-xs leading-relaxed font-semibold text-secondary underline hover:no-underline' href={"#"}>Open Area Guide</Link> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex items-center justify-center mt-1'>
            <Link href={"/areas"} className='mx-auto w-fit'>
                <button className='lg:hidden min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500'>
                    Show All Areas
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Areas