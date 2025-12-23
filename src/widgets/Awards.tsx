import React from 'react'
import Darglobal_Logo from "@/assets/images/Darglobal_Logo-01.webp"
import topPerforming from "@/assets/images/top-performing-agency-2023.webp"
import toppartner from "@/assets/images/no-1-top-partner-2022.webp"
import annualbrokers from "@/assets/images/annual-brokers-awards-2022.webp"
import damacbrokerawards from "@/assets/images/damac-broker-awards-2nd-place-2022.webp"
import topbrokeronline from "@/assets/images/top-broker-online-marketing-ellington-2022.webp"
import Q2_2022 from "@/assets/images/Q2-2022-Sobha.webp"
import DBA2022 from "@/assets/images/DBA-2022.webp"
import Image from 'next/image'

const Awards = () => {
    return (
        <div>
            <h2 className='md:text-4xl text-3xl font-bold'>Awards</h2>
            <div className='mt-8 flex flex-col'>
                {AwardsData.map((items, i: number) => (
                    <div key={i}>
                        <div className='relative group'>
                            <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                                <h2 className='md:text-4xl text-3xl font-bold cursor-pointer hover:text-secondary transition-all duration-500'>{items.title}</h2>
                                <Image className='opacity-50 w-[75px] h-fit' src={items.logoImage} alt='Darglobal_Logo' />
                            </div>
                            <Image className='max-md:hidden absolute right-[5%] -top-10 w-[150px] rotate-[15deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300' src={items.Image} alt='Image1' />
                        </div>
                        {(AwardsData.length > i + 1) && <hr className='my-6' />}
                    </div>
                ))}
            </div>
        </div>
    )
}


const AwardsData = [
    {
        title: "Top Performing Agency 2023",
        logoImage: Darglobal_Logo,
        Image: topPerforming
    },
    {
        title: "No 1` Top Partner 2022",
        logoImage: Darglobal_Logo,
        Image: toppartner
    },
    {
        title: "Annual Brokers Awards 2022",
        logoImage: Darglobal_Logo,
        Image: annualbrokers
    },
    {
        title: "Damac Broker Awards 2nd place 2022",
        logoImage: Darglobal_Logo,
        Image: damacbrokerawards
    },
    {
        title: "Top Broker Online Marketing Ellington 2022",
        logoImage: Darglobal_Logo,
        Image: topbrokeronline
    },
    {
        title: "1 Place Sobha Q2 2022",
        logoImage: Darglobal_Logo,
        Image: Q2_2022
    },
    {
        title: "Damac Broker Awards 2022 Mid-Year 2nd Place",
        logoImage: Darglobal_Logo,
        Image: DBA2022
    },
    {
        title: "Broker Awards Q1 2022",
        logoImage: Darglobal_Logo,
        Image: topPerforming
    },
]



export default Awards