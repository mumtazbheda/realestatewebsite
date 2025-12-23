import Link from "next/link";
import React from "react";
import Image from "next/image";
import feefo from "@/assets/Svgs/feefo.svg";
import google from "@/assets/Svgs/google.svg";
import github from "@/assets/Svgs/github-mark.svg";
import Metropolitan_Group from "@/assets/Svgs/Metropolitan_Group_2022_Certification_Badge.svg";
import ribbon from "@/assets/Svgs/ribbon-arabia_2023.svg";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import SelectCurrenciesFooter from "@/shared/SelectCurrenciesFooter";
import { GetCookies } from "@/lib/actions/Cookies";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import { SubmitButton } from "@/shared/SubmitButton";

const Footer = async () => {
  const Area = await GetCookies({ name: "area" });
  const Price = await GetCookies({ name: "price" });

  return (
    <footer className="bg-[#f9f9f9] mt-8 pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto md:px-3 sm:px-6 px-2">
        <div className="flex flex-col items-center gap-5">
          <h3 className="sm:text-4xl text-3xl font-semibold">Our newsletter</h3>
          <p className="xs:mt-3 text-center sm:text-base text-sm">
            Sign up for our weekly newsletter for market updates!
          </p>
          <form
            action={SubmitContactForm}
            className="flex md:flex-row flex-col items-center w-full gap-2 max-w-[750px]"
          >
            <div className="flex items-center gap-2 w-full max-md:justify-center max-[450px]:flex-col">
              <input
                name="name"
                className="bg-white border focus:border-secondary outline-none transition-all duration-300 min-w-[220px] w-full md:max-w-[340px] min-[450px]:max-w-[220px] rounded-lg py-2 px-3 placeholder-black/40"
                type="text"
                placeholder="Enter Your Name*"
              />
              <input
                name="email"
                className="bg-white border focus:border-secondary outline-none transition-all duration-300 min-w-[220px] w-full md:max-w-[340px] min-[450px]:max-w-[220px] rounded-lg py-2 px-3 placeholder-black/40"
                type="email"
                placeholder="Enter Your E-mail*"
              />
            </div>
            <SubmitButton className="flex items-center justify-center max-w-[120px] w-full group relative overflow-hidden bg-secondary text-white rounded-lg py-2 px-5">
              <span className="relative text-white z-20">Subscribe</span>
              <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary/60"></span>
            </SubmitButton>
          </form>
        </div>

        <hr className="mt-12 mb-10" />

        <div className="flex max-lg:flex-wrap items-start justify-start lg:justify-between lg:gap-5 gap-6">
          <div className="footerGridItem">
            <h5 className="font-bold text-sm">
              Kingdom Capital Real Estate LLC
            </h5>
            <ul className="flex flex-col lg:gap-1.5 gap-2 mt-4">
              {FooterItems.Metropolitan.map((items, i: number) => (
                <li key={i}>
                  <Link
                    className="text-sm hover:text-secondary transition-all duration-300"
                    href={items.Link}
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='footerGridItem'>
                        <h5 className='font-bold text-sm'>Services</h5>
                        <ul className='flex flex-col lg:gap-1.5 gap-2 mt-4'>
                            {FooterItems.Services.map((items, i: number) => (
                                <li key={i}><Link className='text-sm hover:text-secondary transition-all duration-300' href={items.Link}>{items.title}</Link></li>
                            ))}
                        </ul>
                    </div> */}
          <div className="footerGridItem">
            <h5 className="font-bold text-sm">Popular areas</h5>
            <ul className="flex flex-col lg:gap-1.5 gap-2 mt-4">
              {FooterItems.PopularAreas.map((items, i: number) => (
                <li key={i}>
                  <Link
                    className="text-sm hover:text-secondary transition-all duration-300"
                    href={items.link}
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerGridItem">
            <h5 className="font-bold text-sm">Popular projects in Dubai</h5>
            <ul className="flex flex-col lg:gap-1.5 gap-2 mt-4">
              {FooterItems.PopularProjects.map((items, i: number) => (
                <li key={i}>
                  <Link
                    className="text-sm hover:text-secondary transition-all duration-300"
                    href={items.Link}
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerGridItemSpan2">
            {/* SELECT CURRENCY BUTTONS */}
            <div className="max-md:hidden flex gap-3 h-fit w-full">
              <SelectCurrenciesFooter Price={Price} Area={Area} />
            </div>
            {/* <div className='w-full flex justify-between gap-5 mt-8 max-md:pl-4'>
                            <div className='w-full'>
                                <div className='w-full h-fit flex justify-between flex-wrap items-end gap-2'>
                                    <Image className='' src={feefo} alt='feefo' />
                                    <div className='bg-white relative border rounded-md overflow-hidden'>
                                        <Image src={google} alt='google' />
                                        <p className='absolute bottom-1 right-1 text-[9px] font-semibold'>347 Review</p>
                                    </div>
                                </div>
                                // SELECT CURRENCY BUTTONS
                                <div className='md:hidden flex flex-col gap-3 h-fit mt-8 w-fit'>
                                    <SelectCurrenciesFooter Price={Price} Area={Area} />
                                </div>
                            </div>
                            <div className='flex w-[70%] gap-3 items-start'>
                                <Image className='w-1/2' src={Metropolitan_Group} alt='Metropolitan_Group' />
                                <Image className='w-2/5' src={ribbon} alt='ribbon' />
                            </div>
                        </div> */}
            <div className="w-full mt-12 md:max-w-[250px] text-sm text-black/80 max-md:text-center">
              2803, API Trio Tower, Sheikh Zayed Road,
              <br className="xs:hidden" />
              Dubai, United Arab Emirates
              <br />
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex md:flex-row flex-col-reverse max-md:gap-6 max-sm:gap-4 justify-between md:items-end items-center max-sm:pb-8">
          {/* <Link className='underline text-xs text-black/50 decoration-black/30 hover:decoration-secondary hover:text-secondary transition-all duration-300' href={"/sitemap"}>Sitemap</Link> */}
          <div className="flex md:flex-row flex-col md:items-end items-center sm:gap-5 gap-3">
            <div className="flex items-center gap-5">
              <div className=" md:max-w-[250px] text-xs text-black/80 max-md:text-center">
                © 2024. All rights reserved Kingdom Capital Real Estate
              </div>
              <Link
                className="underline text-xs text-black/50 decoration-black/30 hover:decoration-secondary hover:text-secondary transition-all duration-300"
                href={"/disclaimers"}
              >
                Disclaimers
              </Link>
              <Link
                className="underline text-xs text-black/50 decoration-black/30 hover:decoration-secondary hover:text-secondary transition-all duration-300"
                href={"/privacy-policy"}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-md:order-1">
            <div className="flex flex-row items-center gap-3 max-md:order-1">
              <a
                target="_blank"
                href="https://www.instagram.com/thekingdom.realestate?igsh=emVyaTVpZGFweWc5"
              >
                <Instagram className="stroke-secondary hover:stroke-black/50 transition-all duration-300" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/kingdomcapitalrealestate"
              >
                <Facebook
                  size={25}
                  className="fill-secondary stroke-none hover:fill-black/50 transition-all duration-300"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/kingdom-capital-real-estate/"
              >
                <Linkedin
                  size={25}
                  className="fill-secondary stroke-none hover:fill-black/50 transition-all duration-300"
                />
              </a>
              {/* <a target="_blank" href="">
              <Twitter
                size={25}
                className="fill-secondary stroke-none hover:fill-black/50 transition-all duration-300"
              />
            </a> */}
            </div>
          </div>
          {/* <div className='flex gap-3 items-center'>
                        <svg width="56" height="18" viewBox="0 0 56 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.0412 17.6966H19.5156L22.3482 0.310547H26.8738L24.0412 17.6966Z" fill="#005CA9"></path>
                            <path d="M15.7116 0.309338L11.3953 12.2675L10.8837 9.69073L9.35814 1.87213C9.35814 1.87213 9.17209 0.304688 7.2093 0.304688H0.0837211L0 0.597711C0 0.597711 2.1814 1.05353 4.73488 2.58376L8.66977 17.6907H13.3814L20.586 0.304688H15.7116V0.309338Z" fill="#005CA9"></path>
                            <path d="M51.3192 17.6966H55.4773L51.8541 0.310547H48.2122C46.5331 0.310547 46.1238 1.60822 46.1238 1.60822L39.375 17.7012H44.0913L45.0355 15.1198H50.789L51.3192 17.6966ZM46.3378 11.5478L48.7145 5.04078L50.0541 11.5478H46.3378Z" fill="#005CA9"></path>
                            <path d="M39.7243 4.49302L40.3708 0.75814C40.3708 0.75814 38.3755 0 36.3011 0C34.0545 0 28.7197 0.981396 28.7197 5.75814C28.7197 10.2512 34.9801 10.307 34.9801 12.6651C34.9801 15.0233 29.3662 14.6047 27.5104 13.1163L26.8359 17.0186C26.8359 17.0186 28.8592 18 31.9476 18C35.0359 18 39.6964 16.4 39.6964 12.0465C39.6964 7.52558 33.3801 7.10232 33.3801 5.13953C33.3801 3.17209 37.7894 3.42326 39.7243 4.49302Z" fill="#005CA9"></path>
                            <path d="M10.8884 9.69073L9.36279 1.87213C9.36279 1.87213 9.17674 0.304688 7.21395 0.304688H0.0837211L0 0.597711C0 0.597711 3.42791 1.30934 6.72093 3.9698C9.86046 6.51864 10.8884 9.69073 10.8884 9.69073Z" fill="#F7A823"></path>
                        </svg>
                        <svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4286_41702)">
                                <path d="M37.8856 29.5938V29.6709H37.9577C37.9712 29.6711 37.9846 29.6677 37.9963 29.661C38.001 29.6577 38.0048 29.6533 38.0074 29.6481C38.0099 29.643 38.0111 29.6373 38.0108 29.6315C38.0111 29.6259 38.0099 29.6203 38.0073 29.6153C38.0048 29.6103 38.001 29.606 37.9963 29.6028C37.9847 29.5958 37.9713 29.5924 37.9577 29.593H37.8856V29.5938ZM37.9585 29.5392C37.9894 29.5373 38.02 29.5462 38.045 29.5643C38.0551 29.5725 38.0631 29.5829 38.0683 29.5948C38.0736 29.6066 38.076 29.6196 38.0754 29.6325C38.0758 29.6437 38.0739 29.6548 38.0697 29.6651C38.0655 29.6755 38.0591 29.6848 38.051 29.6925C38.0317 29.7093 38.0074 29.7193 37.9819 29.7212L38.0785 29.8311H38.0041L37.9152 29.722H37.8864V29.8311H37.8242V29.5394H37.9594L37.9585 29.5392ZM37.9392 29.9317C37.9718 29.932 38.0041 29.9255 38.034 29.9125C38.0629 29.9001 38.0891 29.8823 38.1113 29.8602C38.1336 29.8381 38.1513 29.8119 38.1637 29.7831C38.189 29.722 38.189 29.6533 38.1637 29.5922C38.1512 29.5635 38.1334 29.5373 38.1113 29.5151C38.0891 29.493 38.0628 29.4752 38.034 29.4628C38.0039 29.4505 37.9717 29.4444 37.9392 29.4447C37.9061 29.4444 37.8733 29.4506 37.8426 29.4628C37.8131 29.475 37.7862 29.4927 37.7635 29.5151C37.7294 29.5501 37.7062 29.5943 37.6971 29.6423C37.6879 29.6903 37.6931 29.7399 37.712 29.785C37.7237 29.814 37.7413 29.8402 37.7635 29.8621C37.7863 29.8845 37.8131 29.9022 37.8426 29.9144C37.8731 29.9274 37.906 29.934 37.9392 29.9337V29.9317ZM37.9392 29.3745C38.0241 29.3745 38.1056 29.4077 38.1662 29.4671C38.1954 29.4956 38.2186 29.5296 38.2346 29.5672C38.2511 29.6057 38.2596 29.6472 38.2596 29.6891C38.2596 29.731 38.2511 29.7725 38.2346 29.811C38.2182 29.8484 38.195 29.8823 38.1662 29.9111C38.1365 29.9395 38.102 29.9623 38.0644 29.9786C38.0248 29.9954 37.9822 30.0039 37.9392 30.0037C37.8956 30.004 37.8525 29.9954 37.8124 29.9786C37.7743 29.9627 37.7395 29.9398 37.7098 29.9111C37.681 29.8813 37.6581 29.8462 37.6424 29.8078C37.6259 29.7692 37.6174 29.7277 37.6174 29.6858C37.6174 29.6439 37.6259 29.6024 37.6424 29.5639C37.6583 29.5263 37.6816 29.4923 37.7108 29.4638C37.7401 29.4346 37.775 29.4117 37.8134 29.3963C37.8535 29.3795 37.8966 29.371 37.9401 29.3713L37.9392 29.3745ZM8.35637 28.248C8.35637 27.6918 8.72151 27.2348 9.31831 27.2348C9.88864 27.2348 10.2735 27.6721 10.2735 28.248C10.2735 28.8239 9.88864 29.2612 9.31831 29.2612C8.72151 29.2612 8.35637 28.8042 8.35637 28.248ZM10.9236 28.248V26.6651H10.2341V27.0507C10.0154 26.7657 9.68365 26.587 9.23253 26.587C8.34381 26.587 7.64636 27.2826 7.64636 28.2488C7.64636 29.2149 8.34342 29.9105 9.23253 29.9105C9.68346 29.9105 10.0154 29.7316 10.2341 29.4468V29.8311H10.9228V28.248H10.9236ZM34.222 28.248C34.222 27.6918 34.5871 27.2348 35.1841 27.2348C35.755 27.2348 36.1393 27.6721 36.1393 28.248C36.1393 28.8239 35.755 29.2612 35.1841 29.2612C34.5873 29.2612 34.222 28.8042 34.222 28.248ZM36.79 28.248V25.3945H36.0999V27.0507C35.8812 26.7657 35.5495 26.587 35.0983 26.587C34.2096 26.587 33.5122 27.2826 33.5122 28.2488C33.5122 29.2149 34.2092 29.9105 35.0983 29.9105C35.5495 29.9105 35.8812 29.7316 36.0999 29.4468V29.8311H36.79V28.248ZM19.4816 27.2022C19.926 27.2022 20.2113 27.4803 20.2842 27.9698H18.6389C18.7125 27.5128 18.9905 27.2022 19.4818 27.2022H19.4816ZM19.4955 26.5853C18.5662 26.5853 17.9161 27.2601 17.9161 28.247C17.9161 29.2533 18.5923 29.9088 19.5417 29.9088C20.0193 29.9088 20.4567 29.7898 20.8415 29.4654L20.5036 28.9554C20.2378 29.1675 19.8993 29.2864 19.5811 29.2864C19.1367 29.2864 18.7322 29.0811 18.6327 28.5114H20.9872C20.994 28.4258 21.0009 28.3394 21.0009 28.2468C20.994 27.2603 20.3827 26.5851 19.4951 26.5851L19.4955 26.5853ZM27.8201 28.2468C27.8201 27.6906 28.1853 27.2337 28.7821 27.2337C29.3524 27.2337 29.7372 27.6709 29.7372 28.2468C29.7372 28.8227 29.3524 29.26 28.7821 29.26C28.1853 29.26 27.8199 28.8031 27.8199 28.2468H27.8201ZM30.3872 28.2468V26.6651H29.698V27.0507C29.4785 26.7657 29.1476 26.587 28.6965 26.587C27.8077 26.587 27.1103 27.2826 27.1103 28.2488C27.1103 29.2149 27.8074 29.9105 28.6965 29.9105C29.1476 29.9105 29.4785 29.7316 29.698 29.4468V29.8311H30.3874V28.248L30.3872 28.2468ZM23.9262 28.2468C23.9262 29.2068 24.5958 29.9086 25.6178 29.9086C26.0954 29.9086 26.4136 29.8026 26.7577 29.5313L26.4266 28.9751C26.1677 29.1607 25.8958 29.26 25.5958 29.26C25.0454 29.2533 24.6406 28.8561 24.6406 28.2468C24.6406 27.6376 25.0454 27.2406 25.5958 27.2337C25.8951 27.2337 26.1669 27.333 26.4266 27.5186L26.7577 26.9624C26.413 26.6911 26.0948 26.5851 25.6178 26.5851C24.5958 26.5851 23.9262 27.2867 23.9262 28.2468ZM32.8153 26.5851C32.4175 26.5851 32.1584 26.7708 31.9793 27.0488V26.6651H31.296V29.8294H31.9863V28.0556C31.9863 27.5319 32.2117 27.241 32.6625 27.241C32.8101 27.2389 32.9566 27.2659 33.0937 27.3206L33.3062 26.672C33.1536 26.6121 32.9546 26.5857 32.8149 26.5857L32.8153 26.5851ZM14.3326 26.9167C14.0009 26.6985 13.5438 26.5857 13.0395 26.5857C12.2362 26.5857 11.719 26.9699 11.719 27.5986C11.719 28.1146 12.1041 28.4329 12.8131 28.5322L13.1388 28.5785C13.5169 28.6315 13.6954 28.7308 13.6954 28.9095C13.6954 29.1542 13.4443 29.2938 12.9727 29.2938C12.4951 29.2938 12.1504 29.1414 11.918 28.9627L11.594 29.4993C11.9721 29.7773 12.4497 29.91 12.9669 29.91C13.8827 29.91 14.4134 29.4796 14.4134 28.8771C14.4134 28.3209 13.9957 28.0299 13.3056 27.9306L12.9806 27.8836C12.6821 27.845 12.4429 27.7851 12.4429 27.573C12.4429 27.3416 12.6684 27.2024 13.0467 27.2024C13.4514 27.2024 13.8432 27.3547 14.0353 27.4737L14.3338 26.9175L14.3326 26.9167ZM23.2297 26.5862C22.8319 26.5862 22.5728 26.7719 22.3945 27.0499V26.6651H21.7111V29.8294H22.4007V28.0556C22.4007 27.5319 22.6261 27.241 23.0769 27.241C23.2245 27.2389 23.371 27.2659 23.5081 27.3206L23.7206 26.672C23.568 26.6121 23.369 26.5857 23.2293 26.5857L23.2297 26.5862ZM17.3456 26.6651H16.2181V25.7051H15.521V26.6651H14.8778V27.294H15.521V28.7375C15.521 29.4717 15.8065 29.909 16.6222 29.909C16.9215 29.909 17.2662 29.8164 17.4849 29.6643L17.2857 29.0751C17.0799 29.1941 16.8545 29.254 16.6752 29.254C16.3305 29.254 16.2181 29.042 16.2181 28.7244V27.2946H17.3456V26.6651ZM7.03662 29.8301V27.8443C7.03662 27.0964 6.55903 26.5932 5.78912 26.5864C5.38437 26.5797 4.96686 26.7054 4.67455 27.1494C4.45585 26.7985 4.11118 26.5864 3.62664 26.5864C3.28796 26.5864 2.957 26.6857 2.69792 27.0563V26.6651H2.00781V29.8294H2.70333V28.0749C2.70333 27.5256 3.00859 27.2337 3.48 27.2337C3.93788 27.2337 4.16953 27.5315 4.16953 28.0679V29.829H4.86659V28.0745C4.86659 27.5252 5.18479 27.2333 5.64248 27.2333C6.11331 27.2333 6.33801 27.5312 6.33801 28.0675V29.8286L7.03662 29.8301Z" fill="#231F20"></path>
                                <path d="M38.272 19.3026V18.8398H38.1513L38.0116 19.1574L37.8727 18.8398H37.7515V19.3026H37.8373V18.954L37.9679 19.2548H38.0568L38.1874 18.9532V19.3026H38.2724H38.272ZM37.506 19.3026V18.9191H37.6605V18.841H37.2656V18.9191H37.4202V19.3026H37.5052H37.506Z" fill="#F79410"></path>
                                <path d="M24.5432 21.2872H14.0938V2.54688H24.5434L24.5432 21.2872Z" fill="#FF5F00"></path>
                                <path d="M14.7605 11.9185C14.7605 8.11698 16.5441 4.7306 19.3215 2.54828C17.2192 0.893934 14.6188 -0.00393484 11.9415 1.2963e-05C5.34623 1.2963e-05 0 5.336 0 11.9185C0 18.5009 5.34623 23.8369 11.9415 23.8369C14.6189 23.8409 17.2193 22.943 19.3217 21.2886C16.5445 19.1067 14.7605 15.7201 14.7605 11.9185Z" fill="#EB001B"></path>
                                <path d="M38.643 11.9185C38.643 18.5009 33.2968 23.8369 26.7015 23.8369C24.0238 23.8408 21.4231 22.943 19.3203 21.2886C22.0985 19.1063 23.8822 15.7201 23.8822 11.9185C23.8822 8.11679 22.0985 4.7306 19.3203 2.54828C21.4231 0.893984 24.0237 -0.00386564 26.7013 1.25108e-05C33.2966 1.25108e-05 38.6428 5.336 38.6428 11.9185" fill="#F79E1B"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_4286_41702">
                                    <rect width="38.64" height="30" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg></div> */}
        </div>
      </div>
    </footer>
  );
};

const FooterItems = {
  Metropolitan: [
    {
      title: "Buy",
      Link: "/buy",
    },
    {
      title: "Rent",
      Link: "/rent",
    },
    {
      title: "Areas",
      Link: "/areas",
    },
    {
      title: "Contact Us",
      Link:
        "https://wa.me/" +
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replaceAll(" ", ""),
    },
    {
      title: "Blogs",
      Link: "/blogs",
    },
    // {
    //     title: "about Us",
    //     Link: "/about"
    // },
    // {
    //     title: "Careers",
    //     Link: "/careers"
    // },
    // {
    //     title: "Media",
    //     Link: "/media"
    // },
    // {
    //     title: "Blog",
    //     Link: "/blog"
    // },
  ],
  // Services: [
  //     {
  //         title: "Property Handover Services",
  //         Link: ""
  //     },
  //     {
  //         title: "Legal Services in The UAE",
  //         Link: "services"
  //     },
  //     {
  //         title: "Properties in Abu Dhabi",
  //         Link: ""
  //     },
  //     {
  //         title: "Properties in Austria",
  //         Link: ""
  //     },
  //     {
  //         title: "Properties in Cyprus",
  //         Link: ""
  //     },
  //     {
  //         title: "Properties in UK",
  //         Link: ""
  //     },
  // ],
  PopularAreas: [
    { title: "Palm Jebel Ali", link: "/areas/palm-jebel-Ali" },
    { title: "Downtown Dubai", link: "/areas/downtown-dubai" },
    { title: "Palm Jumeirah", link: "/areas/palm-jumeirah" },
    { title: "Dubai Marina", link: "/areas/dubai-marina" },
    { title: "Business Bay", link: "/areas/business-bay" },
    { title: "See all Areas in Dubai", link: "/areas" },
    // {
    //     title: "All areas in Dubai",
    //     Link: "areas"
    // },
    // {
    //     title: "All areas in Abu Dhabi",
    //     Link: "areas"
    // },
    // {
    //     title: "All areas in Sharjah",
    //     Link: "areas"
    // },
    // {
    //     title: "All areas in Ras Al Khaimah",
    //     Link: "areas"
    // },
  ],
  PopularProjects: [
    {
      title: "Apartments",
      Link: "/projects?&projectType=apartment",
    },
    // {
    //   title: "Penthouses",
    //   Link: "/projects?&projectType=penthouse",
    // },
    {
      title: "Townhouses",
      Link: "/projects?&projectType=townhouse",
    },
    {
      title: "Villas",
      Link: "/projects?&projectType=villa",
    },
    // {
    //   title: "Offices",
    //   Link: "/projects?&projectType=office",
    // },
    // {
    //   title: "Hotels",
    //   Link: "/projects?&projectType=hotel",
    // },
    {
      title: "Projects in Dubai",
      Link: "/projects",
    },
  ],
};

export default Footer;
