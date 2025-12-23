"use client"
import Image from 'next/image'
import React from 'react'
import map_white from "@/assets/Svgs/map-white.svg"
import { Dropbox } from '@/shared/Dropbox'
import { SetCookie } from '@/lib/actions/Cookies'
import { Areas, Prices } from '@/lib/constants'
import { SelectCurrencies } from '@/shared/SelectCurrencies'
import { SetFeatured } from '@/shared/SetFeatured'

const FiltersSection = ({ Price, Area, FeaturedValue }: { Price: string | undefined, Area: string | undefined, FeaturedValue?: string }) => {
  return (
    <div className='flex items-center justify-between'>

      <div className='flex items-center lg:gap-8 gap-4 max-md:hidden'>
        <div className='flex items-center gap-3'>
          <h5 className='text-sm max-lg:hidden'>Show price in:</h5>
          <div className='h-[36px] border-x'>
            {Prices.map((items, i: number) => (
              <button onClick={() => SetCookie({ name: "price", value: items.value })} key={i} className={`${Price === items.value.toUpperCase() ? "bg-secondary !text-white" : "border-y text-black"} text-sm h-full px-2.5 font-light hover:text-secondary transition-all duration-300`}>{items.label.toUpperCase()}</button>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <h5 className='text-sm max-lg:hidden'>Show area in:</h5>
          <div className='h-[36px] border-x'>
            {Areas.map((items, i: number) => (
              <button onClick={() => SetCookie({ name: "area", value: items.value })} key={i} className={`${Area === items.value.toUpperCase() ? "bg-secondary !text-white" : "border-y text-black"} text-sm h-full px-2.5 font-light hover:text-secondary transition-all duration-300`}>{items.label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className='flex items-center gap-3 md:hidden'>
        <SelectCurrencies CookieName="price" ActiveValue={Price} boxCss='!shadow-none !py-2 w-[68px] border' Options={Prices.map((item) => ({ label: item.label, value: item.value }))} />
        <SelectCurrencies CookieName="area" ActiveValue={Area} boxCss='!shadow-none !py-2 w-[75px] border' Options={Areas.map((item) => ({ label: item.label, value: item.value }))} />
      </div>

      <div className='flex items-center gap-4'>
        {/* <button className="flex items-center gap-2 group relative overflow-hidden bg-secondary text-white py-2 px-5 max-md:hidden">
          <span className="relative text-white z-20 text-sm">Go to Map</span>
          <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary/60"></span>
          <Image className='w-5 z-20 map-animation' src={map_white} alt='map_white' />
        </button> */}
        <div className='flex items-center gap-3'>
          <h5 className='text-sm whitespace-nowrap max-lg:hidden'>Sort by:</h5>
          <div className='w-[140px] border hover:border-secondary transition-all duration-300'>
            <SetFeatured Activevalue={FeaturedValue && FeaturedValue} name='Featured' boxCss='!shadow-none !py-2' PlaceHolder='Featured' Options={[
              { label: "Featured", value: "featured" },
              { label: "Newest", value: "newest" },
              { label: "Price (low)", value: "price (low)" },
              { label: "Price (high)", value: "price (high)" },
              { label: "Beds (least)", value: "beds (least)" },
              { label: "Beds (most)", value: "beds (most)" },
              { label: "Area (least)", value: "area (least)" },
              { label: "Area (most)", value: "area (most)" }]
            } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersSection