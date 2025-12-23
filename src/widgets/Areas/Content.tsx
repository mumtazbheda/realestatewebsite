import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/images/Palm-Jebel-Ali-10-1024x418.webp'
import img2 from '@/assets/images/Palm-Jebel-Ali-9-1024x679.webp'
import img3 from '@/assets/images/Palm-Jebel-Ali-8.webp'

const Content = () => {
    return (
        <div>
            <h4 className='text-2xl font-medium mb-8'>Attractions</h4>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-[50px] items-center'>
                <div className='self-center text-[15px] leading-relaxed flex flex-col gap-4 max-w-[930px] max-md:order-2'>
                    <p>Michael R. Henderson, the co-founder of a Canadian architectural company, is planning to construct a sensational 900-foot replica of the moon atop a 100-foot building on Palm Jebel Ali. Called MOON, the extraordinary USD 5B development will house a 4,000-room hotel, an arena with the capacity to hold 10,000 people, and the authentic Lunar Colony.</p>
                    <p>In addition, there will be a boutique 6-star hotel, a Private Member&apos;s Club, a spa, a night club, a moon shuttle and training services. One can also become a property owner in the MOON, as the development will offer 500 luxury apartments and 300 lavish Sky Villas.</p>
                    <p>According to Michael R. Henderson, the MOON is set to become the MENA region&apos;s biggest and most successful tourism development. It is expected to double annual tourism visits to Dubai due to the global appeal and unique offerings. The MOON will be able to easily accommodate 10 million guests annually.</p>
                    <div className='bg-[#f1f1f1] rounded-lg p-2.5'>*The price is valid for 2023</div>
                </div>
                <div className='relative h-[450px]'>
                    <Image className='absolute top-0 left-[15%] w-[70%] h-[45%] rounded-lg object-cover' src={img1} alt='img1' />
                    <Image className='absolute bottom-0 right-0 w-[60%] h-[calc(55%_-_5px)] rounded-lg object-cover' src={img2} alt='img2' />
                    <Image className='absolute top-[calc(45%_+_5px)] left-0 w-[calc(40%_-_5px)] h-[30%] rounded-lg object-cover' src={img3} alt='img3' />
                </div>
            </div>
        </div>
    )
}

export default Content