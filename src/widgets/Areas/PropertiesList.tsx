import Link from 'next/link'
import React from 'react'

const PropertiesList = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h3 className='text-2xl font-semibold'>Properties for Sale & Rent in Downtown Dubai</h3>
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
                        {["", "", "", ""].map((items, i: number) => (
                            <tr key={i} className='text-sm grid grid-cols-8 gap-2 w-full px-6 py-2.5 mt-2'>
                                <td>MR-2891</td>
                                <td className='col-span-3 max-w-sm'>
                                    <Link className='text-secondary hover:text-primary transition-all duration-300' href={"/"}>1BR Apartment in The Address Residence Fountain Views 2, Downtown Dubai (MR-2891)</Link>
                                </td>
                                <td>852 sq. ft.</td>
                                <td>1</td>
                                <td>1</td>
                                <td>250,000 AED</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PropertiesList