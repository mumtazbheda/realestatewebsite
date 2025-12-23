"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { SetCookie } from '@/lib/actions/Cookies';

interface DropboxI {
    CookieName : string,
    ActiveValue?: string,
    Options: { label: string, value: string }[];
    boxCss: string;
}

export const SelectCurrencies = ({ CookieName, ActiveValue, Options, boxCss }: DropboxI) => {

    const ActiveLabel = Options.find((item) => item.value === ActiveValue)

    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className={`${boxCss} cursor-pointer rounded shadow-2xl shadow-black relative whitespace-nowrap flex justify-between items-center bg-white text-sm text-black font-light px-2 py-3`}>
                    <div className='overflow-hidden w-full cursor-pointer'>{ActiveLabel?.label}</div>
                    <span className={`${open ? "rotate-180" : "rotate-0"} transition-all duration-300`}>
                        <svg className={`${open ? "stroke-secondary" : ""} mt-0.5 stroke-black/50 group-hover:stroke-secondary transition-all duration-300`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-full max-h-56 rounded-[2px] overflow-hidden">
                <ul className={`overflow-hidden z-10 transition-all duration-300 max-h-56 text-sm w-full bg-white`}>
                    {Options.map((items, i: number) => (
                        <li onClick={() => {
                            SetCookie({ name: CookieName, value: items.value });
                            setOpen(false)
                        }} key={i} className={`${items.value.toUpperCase() === ActiveValue?.toUpperCase() ? "bg-secondary text-white hover:text-white" : ""} px-2 py-1 cursor-pointer hover:text-secondary transition-all duration-300`}>{items.label}</li>
                    ))}
                </ul>
            </PopoverContent>
        </Popover>
    )
}
