"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DropboxI {
    name?: string;
    PlaceHolder: string;
    Options: { label: string, value: string | number }[];
    boxCss?: string;
    Activevalue?: string,
    initialValue?: string
}

export const Dropbox = ({ name, PlaceHolder, Options, boxCss, Activevalue, initialValue }: DropboxI) => {

    const ParamsValue = Options.find((item) => item.value === Activevalue)

    const [activeItem, setActiveItem] = useState<string | number>(ParamsValue ? ParamsValue.label : PlaceHolder)
    const [activeValue, setactiveValue] = useState<string | number>(initialValue ? initialValue : Activevalue ? Activevalue : "")
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className={`${boxCss} cursor-pointer rounded shadow-2xl shadow-black relative whitespace-nowrap flex justify-between items-center bg-white text-sm text-black font-light px-2 py-3`}>
                    <div className='overflow-hidden w-full cursor-pointer'>{activeItem}</div>
                    <input name={name} className='hidden' value={activeValue} placeholder={PlaceHolder} aria-disabled={true} readOnly />
                    <span className={`${open ? "rotate-180" : "rotate-0"} transition-all duration-300`}>
                        <svg className={`${open ? "stroke-secondary" : ""} mt-0.5 stroke-black/50 group-hover:stroke-secondary transition-all duration-300`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </span>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-full max-h-56 rounded-[2px] overflow-hidden">
                <ul className={`overflow-y-auto CustomScrollBar z-10 transition-all duration-300 max-h-56 text-sm w-full bg-white`}>
                    {Options.map((items, i: number) => (
                        <li onClick={() => {
                            setActiveItem(items.label)
                            setactiveValue(items.value)
                            setOpen(!open)
                        }} key={i} className={`${items.label === activeItem ? "bg-secondary text-white hover:text-white" : ""} px-2 py-1 cursor-pointer hover:text-secondary transition-all duration-300`}>{items.label}</li>
                    ))}
                </ul>
            </PopoverContent>
        </Popover>
    )
}
