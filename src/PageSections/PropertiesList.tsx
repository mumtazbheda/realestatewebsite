import { SanityFetch } from '@/lib/SanityFetch'
import Link from 'next/link'
import React from 'react'

const PropertiesList = async ({ Title = "Properties for Sale & Rent", Area }: { Title?: string, Area: string }) => {

    const Data = await SanityFetch({
        Query: `*[_type == 'property'
        ${Area && Area !== "" ? `&& references(*[_type == "area" && title == '${Area}' || slug.current == '${Area}']._id)` : ""} ] {
            title,
            slug,
            unit_reference,
            baths,
            beds,
            squareft,
            price,
          }`
    })

    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold'>{Data.title ? Data.title : Title}</h2>
            <div className='max-lg:overflow-x-scroll'>
                <table className='relative w-full max-lg:min-w-[1180px]'>
                    <thead className='!sticky lg:top-[135px] top-0'>
                        <tr className='grid grid-cols-8 gap-2 w-full rounded-lg bg-secondary text-white px-6 py-2.5'>
                            <td>Unit Reference</td>
                            <td className='col-span-3'>Title</td>
                            <td>Size</td>
                            <td>Beds</td>
                            <td>Baths</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col gap-2'>
                        {Data && Data.map((items: any, i: number) => (
                            <tr key={i} className='text-sm grid grid-cols-8 gap-2 w-full px-6 py-2.5 mt-2'>
                                <td>{items?.unit_reference}</td>
                                <td className='col-span-3 max-w-sm'>
                                    <Link className='text-secondary hover:text-primary transition-all duration-300' href={items?.slug?.current}>{items?.title}</Link>
                                </td>
                                <td>{items?.squareft} sq. ft.</td>
                                <td>{items?.beds}</td>
                                <td>{items?.baths}</td>
                                <td>{items?.price.toLocaleString()} AED</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PropertiesList