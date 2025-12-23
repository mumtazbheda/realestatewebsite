"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils'
import { SetCookie } from '@/lib/actions/Cookies'
import { Prices } from '@/lib/constants'

interface SelectCurrenciesFooterI {
    Price?: string,
    Area?: string,
    css?: string,
    SqFtBox?: boolean
}

const SelectCurrenciesFooter = ({ Price, Area, css, SqFtBox = true }: SelectCurrenciesFooterI) => {

    return (
        <>
            {SqFtBox &&
                <div>
                    <div className='flex items-center rounded-lg overflow-hidden w-full h-fit'>
                        <button
                            onClick={() => SetCookie({ name: "area", value: "SQ.FT" })}
                            className={cn([
                                'whitespace-nowrap py-3 md:px-8 px-5 text-sm font-semibold',
                                Area === "SQ.FT" ? "bg-primary text-white" : "bg-[#e0e0e0] text-[#bbb]",
                            ])}>
                            SQ FT
                        </button>
                        <button
                            onClick={() => SetCookie({ name: "area", value: "SQ.M" })}
                            className={cn([
                                'whitespace-nowrap py-3 md:px-8 px-5 text-sm font-semibold',
                                Area === "SQ.M" ? "bg-primary text-white" : "bg-[#e0e0e0] text-[#bbb]",
                            ])}>
                            SQ M
                        </button>
                    </div>
                </div>
            }
            <div className='w-full'>
                <Select value={Price || "AED"} onValueChange={(value) => SetCookie({ name: "price", value })}>
                    <SelectTrigger className={`${css} !w-full !max-w-[120px] font-semibold h-11 rounded-lg`}>
                        <SelectValue placeholder="AED" />
                    </SelectTrigger>
                    <SelectContent>
                        {Prices.map((items, i: number) => (
                            <SelectItem className='cursor-pointer' key={i} value={items.value}>
                                {items.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}

export default SelectCurrenciesFooter