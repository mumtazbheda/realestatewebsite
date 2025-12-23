import Image from 'next/image'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import { Check } from 'lucide-react'

const Features = ({ Data }: { Data: any }) => {

    return (
        <div className='flex lg:flex-row flex-col-reverse sm:gap-10 gap-5'>
            {/* Left Side */}
            <div className='flex-1'>
                <h3 className='text-2xl font-medium'>Features and Amenities</h3>
                <div className='flex md:flex-row flex-col max-md:gap-4 lg:justify-between mt-6'>
                    {Data && Data.indoor &&
                        <div className='max-lg:w-full flex flex-col md:gap-5 gap-1'>
                            <h4 className='font-medium text-sm'>Indoor</h4>
                            <ul className='text-sm md:flex flex-col max-md:columns-2 max-[500px]:columns-1 md:gap-1 max-md:space-y-1 md:list-disc md:pl-4'>
                                {Data.indoor.map((items: string, i: number) => (
                                    <li key={i} className='max-md:flex max-md:items-center max-md:gap-2'>
                                        <Check size={15} className='text-secondary md:hidden' /> {items}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {Data && Data.outdoor &&
                        <div className='max-lg:w-full flex flex-col md:gap-5 gap-1'>
                            <h4 className='font-medium text-sm'>Outdoor</h4>
                            <ul className='text-sm md:flex flex-col max-md:columns-2 max-[500px]:columns-1 md:gap-1 max-md:space-y-1 md:list-disc md:pl-4'>
                                {Data.outdoor.map((items: string, i: number) => (
                                    <li key={i} className='max-md:flex max-md:items-center max-md:gap-2'>
                                        <Check size={15} className='text-secondary md:hidden' /> {items}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {Data && Data.lot &&
                        <div className='max-lg:w-full flex flex-col md:gap-5 gap-1'>
                            <h4 className='font-medium text-sm'>Lot</h4>
                            <ul className='text-sm md:flex flex-col max-md:columns-2 max-[500px]:columns-1 md:gap-1 max-md:space-y-1 md:list-disc md:pl-4'>
                                {Data.lot.map((items: string, i: number) => (
                                    <li key={i} className='max-md:flex max-md:items-center max-md:gap-2'>
                                        <Check size={15} className='text-secondary md:hidden' /> {items}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
            {/* Right Side */}
            {Data && Data.image &&
                <div className='flex-1'>
                    <div className='rounded-lg max-lg:mx-auto max-w-[600px] relative sm:min-h-[320px] min-h-[250px] w-full h-full overflow-hidden'>
                        <Image unoptimized fill className='!w-full !h-full object-cover' src={urlForImage(Data.image.asset._ref).url()} alt={Data.image.asset._ref} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Features