"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import mail_popup from "@/assets/Svgs/mail-popup.svg"
import icon_user from "@/assets/Svgs/icon-user.svg"
import icon_envelope from "@/assets/Svgs/icon-envelope.svg"
import { X } from 'lucide-react'
import { Dialog, DialogContent } from './ui/dialog'
import { GetCookies, SetCookie } from '@/lib/actions/Cookies'

const MailPopup = () => {

    const [open, setopen] = useState(false)
    const [open2, setopen2] = useState(false)
    const [open3, setopen3] = useState(false)

    useEffect(() => {
        GetCookies({ name: "mlp" }).then((cookie) => {
            if (!cookie) {
                setTimeout(() => {
                    setopen(true)
                }, 6400);
                setTimeout(() => {
                    setopen2(true)
                }, 6500);
                setTimeout(() => {
                    setopen3(true);
                    SetCookie({
                        name: "mlp",
                        value: "true",
                        maxAge: 21600000
                    });
                }, 6000);
            }
        })

    }, [])


    return (
        <Dialog open={open} onOpenChange={setopen}>
            <DialogContent className='!bg-transparent !shadow-none !outline-none !border-none flex items-center justify-center !w-full !h-full'>
                <div className={`relative ${open3 ? "" : "overflow-hidden"}`}>
                    <div className={`${open2 ? "md:h-[340px] opacity-100" : "h-0 opacity-0"} transition-all duration-1000 flex md:flex-row flex-col w-full md:max-w-[700px] max-w-[350px] bg-white rounded-md`}>
                        {/* Cross Icon */}
                        {open3 &&
                            <div onClick={() => {
                                setopen(false);
                                setopen2(false);
                                setopen3(false);
                            }} className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-red-500 absolute -top-3 min-[370px]:-right-3 -right-1'>
                                <X className='stroke-white' strokeWidth={1} />
                            </div>
                        }

                        {/* Left Section */}
                        <div className='md:w-[55%] w-full md:rounded-l-md max-md:rounded-t-md h-full bg-primary md:p-10 p-7'>
                            <div className='flex items-center gap-3'>
                                <div className='relative w-fit h-fit'>
                                    <Image width={50} height={50} src={mail_popup} alt='mail_popup' />
                                    <span className='w-6 h-6 text-white font-semibold text-sm absolute -top-2.5 -right-2.5 flex items-center justify-center rounded-full overflow-hidden bg-red-500'>1</span>
                                </div>
                                <h5 className='text-xl text-white font-bold'>Mail</h5>
                            </div>
                            <div>
                                <h3 className='md:text-3xl text-2xl font-bold text-white mt-10 mb-4'>Sign Up <br /> and Stay Informed</h3>
                                <p className='text-white max-md:text-sm leading-tight'>Join <b>over 20,000 members</b> to get weekly updates on new off-plan launches and latest news &amp; tips</p>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div className='md:w-[45%] w-full h-full px-8 md:pt-16 max-md:pt-8 max-md:pb-4'>
                            <div className='flex flex-col max-md:items-center max-md:text-center gap-4'>
                                <div className='relative flex items-center gap-3 w-full h-[46px]'>
                                    <Image width={20} height={20} className='z-20 ml-2' src={icon_user} alt='icon_user' />
                                    <input className='outline-none focus:border-secondary border text-sm absolute w-full h-full pl-10 transition-all duration-300' type="text" placeholder='Enter Your Name*' />
                                </div>
                                <div className='relative flex items-center gap-3 w-full h-[46px]'>
                                    <Image width={20} height={20} className='z-20 ml-2' src={icon_envelope} alt='icon_envelope' />
                                    <input className='outline-none focus:border-secondary border text-sm absolute w-full h-full pl-10 transition-all duration-300' type="email" placeholder='Enter Your E-mail*' />
                                </div>
                                <div>
                                    <button className="max-w-[120px] w-full group relative overflow-hidden bg-secondary text-white py-3 md:px-5 px-7">
                                        <span className="relative text-xs tracking-wide font-bold text-white z-20 uppercase">Subscribe</span>
                                        <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary/60"></span>
                                    </button>
                                    <p className='text-[0.65rem] text-black/70 mt-2'>Zero spam, Unsubscribe any time</p>
                                </div>
                                <p onClick={() => {
                                    setopen(false);
                                    setopen2(false);
                                    setopen3(false);
                                }} className='underline max-md:text-sm hover:no-underline cursor-pointer decoration-black/40 text-black/60'>I&apos;m not interested</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default MailPopup