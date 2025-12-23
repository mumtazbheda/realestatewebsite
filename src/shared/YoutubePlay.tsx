"use client"
import React, { useState } from 'react'
import youtubeImage from "@/assets/images/maxresdefault.jpg"
import Image from 'next/image'

const YoutubePlay = () => {
    const [playVideo, setPlayVideo] = useState(false)
    return (
        <div className='relative w-full h-full group cursor-pointer'>
            {!playVideo &&
                <div onClick={() => setPlayVideo(true)}>
                    <Image className='w-full h-full object-cover' src={youtubeImage} alt='youtubeImage' />
                    <svg className='z-10 group-hover:w-[60px] group-hover:h-[60px] cursor-pointer w-[50px] h-[50px] absolute top-1/2 left-1/2 transition-all duration-300' style={{ transform: "translate3d(-50%,-50%,0)", transformOrigin: "0 0" }} width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="20" cy="20" r="20" fill="#fff" fillOpacity="0.7">
                            </circle>
                        </g>
                        <path className='group-hover:fill-secondary' d="M26 20L17 25.1962L17 14.8038L26 20Z" fill="#222222">
                        </path>
                    </svg>
                </div>
            }
            {playVideo &&
                <div className='w-full h-full'>
                    <iframe className='w-full' height="652.5" src="https://azureserv.com/embed/cN_D_nfU7K4?rel=0&modestbranding=1&showinfo=0&autohide=1&rel=0&enablejsapi=1&__cpo=aHR0cHM6Ly93d3cueW91dHViZS5jb20"></iframe>
                </div>
            }
        </div>

    )
}

export default YoutubePlay