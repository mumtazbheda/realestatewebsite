import Image, { StaticImageData } from 'next/image';
import community_icon from "@/assets/Svgs/community-icon-gray.svg"
import Link from 'next/link';

export interface PropsI {
    offPlanimage: StaticImageData | string;
    location: string;
    paymentPlan: string;
    handover: string;
    title: string;
    project: string | string[];
    comming_soon: boolean
}


const OffPlanBox = ({
    offPlanimage,
    location,
    paymentPlan,
    handover,
    title,
    project,
    comming_soon
}: PropsI) => {

    return (
        <div className='rounded-lg overflow-hidden border pb-2'>
            <div className='relative'>
                <Image unoptimized fill className='!h-[220px] !relative object-cover' src={offPlanimage} alt='Image1' />
                <div className='text-xs font-medium flex flex-col gap-1 absolute top-0 left-0 p-4'>
                    {paymentPlan && <button className='px-3 py-1.5 rounded-lg bg-white'>{paymentPlan} Payment Plan</button>}
                    {handover && <button className='px-3 py-1.5 rounded-lg bg-white'>Handover {handover}</button>}
                    {comming_soon && <button className='px-3 py-1.5 rounded-lg bg-white'>Coming soon</button>}
                </div>
            </div>
            <div className='p-4 flex flex-col gap-3'>
                <h5 className='max-w-xs text-lg leading-tight font-medium'>{title}</h5>
                <Link href="" className='flex items-center gap-2 text-xs text-black/50 underline hover:no-underline'><Image src={community_icon} alt='community_icon' />{location}</Link>
                <button className='border hover:bg-secondary hover:text-white border-secondary text-secondary text-sm w-fit px-3 py-0.5 rounded-lg transition-all duration-300 mt-1'>{project}</button>
            </div>
        </div>
    )
}

export default OffPlanBox