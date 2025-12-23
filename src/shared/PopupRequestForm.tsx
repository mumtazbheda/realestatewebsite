"use client"
import React, { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { SubmitContactForm } from '@/lib/actions/FormAction';
import { SubmitButton } from './SubmitButton';

interface PopupRequestFormI {
    children: React.ReactNode;
    title: string;
    buttonText: string
    messageField?: boolean
    wrapperClassName?: string
}

const PopupRequestForm = ({
    children,
    title,
    buttonText,
    messageField = true,
    wrapperClassName = ""
}: PopupRequestFormI) => {
    const [Open, setOpen] = useState(false)

    const form_name = title + '_form_' + Math.round(Math.random() * 99999)
    const checkbox_1 = title + '_checkbox_1' + Math.round(Math.random() * 99999)
    const checkbox_2 = title + '_checkbox_2' + Math.round(Math.random() * 99999)

    return (
        <div className={wrapperClassName}>
            {/* Request Form */}
            <Dialog open={Open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className='p-0 px-8 bg-transparent border-none shadow-none flex justify-center max-w-[420px]'>
                    <div className='relative z-20 flex flex-col w-full rounded-lg overflow-hidden bg-white'>
                        {/* Close Button */}
                        <X onClick={() => setOpen(false)} className='cursor-pointer stroke-white absolute z-10 right-0 top-0 m-2' size={20} />
                        {/* Header */}
                        <div className='text-white text-xl font-semibold bg-secondary flex items-center justify-center py-5'>{title}</div>

                        <form
                            id={form_name}
                            action={async (e) => {
                                const result = await SubmitContactForm(e);
                                if (result?.success) {
                                  setOpen(false);
                                }
                              }}
                            onSubmit={() => (setTimeout(() => {
                                (document.getElementById(form_name) as any)?.reset()
                            }, 1000))}
                            className='flex flex-col gap-3 mt-4 px-6 pb-6'>
                            <div className='w-full border-b border-slate-200 relative h-10 bg-white'>
                                <input name='name' required type="text" className='text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none' />
                                <label className='
                                peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]
                                peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:-left-0.5
                                '>Name*</label>
                            </div>
                            <div className='w-full border-b border-slate-200 relative h-10 bg-white'>
                                <input name='phone' required type="tel" className='text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none' />
                                <label className='
                                peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]
                                peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:-left-0.5
                                '>Phone*</label>
                            </div>
                            <div className='w-full border-b border-slate-200 relative h-10 bg-white'>
                                <input name='email' required type="email" className='text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none' />
                                <label className='
                                peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]
                                peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:-left-0.5
                                '>E-Mail*</label>
                            </div>
                            {messageField &&
                                <div className='w-full border-b border-slate-200 relative h-[120px] bg-white'>
                                    <textarea name='message' required className='text-sm peer relative w-full pt-4 pb-2 z-10 bg-transparent outline-none' />
                                    <label className='
                                    peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]
                                    peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:-left-0.5
                                    '>Message</label>
                                </div>
                            }
                            <div className='flex flex-col gap-2 mt-3'>
                                <div className="flex space-x-2">
                                    <Checkbox required className='mt-1 border border-secondary' id={checkbox_1} defaultChecked />
                                    <label
                                        htmlFor={checkbox_1}
                                        className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I agree to <Link className='underline' href={"terms-of-use"}>Terms of use</Link> and <Link className='underline' href={"privacy-policy"}>Privacy Policy</Link>
                                    </label>
                                </div>
                                <div className="flex space-x-2 pr-2">
                                    <Checkbox required className='mt-1 border border-secondary' id={checkbox_2} />
                                    <label
                                        htmlFor={checkbox_2}
                                        className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I agree to receive information about offers, deals and services from this website (optional)
                                    </label>
                                </div>
                            </div>
                            <div className='flex w-full mt-5'>
                                <SubmitButton className={`w-full bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5`}>
                                    <span className="relative text-white z-20">{buttonText}</span>
                                    <span className={`bg-primary/60 w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}></span>
                                </SubmitButton>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PopupRequestForm