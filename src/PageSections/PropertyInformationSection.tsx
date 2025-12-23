import { CreateSlug } from '@/lib/helper/CreateSlug';
import Link from 'next/link'
import React from 'react'

interface PropertyInformationI {
    location?: string;
    developer?: string;
    status?: string;
    Type?: string;
    area_From?: string;
    available_units?: string;
    payment_plan?: string;
    area?: string;
    total_units?: string;
}

const PropertyInformationSection = ({
    location,
    developer,
    status,
    Type,
    area_From,
    area,
    available_units,
    payment_plan,
    total_units
}: PropertyInformationI) => {
    return (
        <div className='max-w-[930px] flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold'>Property Information</h2>
            <ul className='grid md:grid-cols-2 grid-cols-1 gap-x-8 text-sm'>
                {location &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Location</span>
                        <Link className='font-medium text-secondary' href={area ? "/areas/" + CreateSlug(area) : "/areas"}>{location}</Link>
                    </li>
                }
                {developer &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Developer</span>
                        <Link className='font-medium text-secondary' href={"/developers/" + CreateSlug(developer)}>{developer}</Link>
                    </li>
                }
                {status &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Status of Project</span>
                        <span className='font-medium'>{status}</span>
                    </li>
                }
                {Type &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Type of Project</span>
                        <span className='font-medium'>{Type}</span>
                    </li>
                }
                {available_units &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Units</span>
                        <span className='font-medium'>{available_units}</span>
                    </li>
                }
                {area_From &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Area from</span>
                        <span className='font-medium'>{area_From} sq. ft.</span>
                    </li>
                }
                {payment_plan &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Payment Plan</span>
                        <span className='font-medium'>{payment_plan}</span>
                    </li>
                }
                {total_units &&
                    <li className='flex items-center border-t py-4'>
                        <span className='flex-[0_40%]'>Total Amount of Units</span>
                        <span className='font-medium'>{total_units}</span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default PropertyInformationSection