import Image from "next/image";
import Link from "next/link";
import React from "react";
import whatsappIcon from "@/assets/Svgs/whatsapp-mob.svg";
import trigger_request from "@/assets/Svgs/trigger-request-bg.svg";

const ContactExperts = ({
  title = "Our Expert Will Help You",
}: {
  title?: string;
}) => {
  return (
    <div className="relative bg-secondary rounded-lg overflow-hidden">
      <div className="flex lg:flex-row flex-col max-lg:gap-8 max-md:gap-4 max-lg:text-center items-center justify-between lg:py-[60px] lg:px-[50px] py-[40px] px-[20px] relative z-20">
        <div className="lg:space-y-3 md:space-y-5 space-y-3 text-white">
          <h2 className="lg:text-4xl md:text-[32px] text-2xl leading-none font-bold">
            {title}
          </h2>
          <p className="text-sm">
            Feel Free to Contact Us at Any Time, We Are Online 24/7
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-3 relative">
          <Link
            target="_blank"
            href={
              "https://wa.me/" +
              process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replaceAll(" ", "")
            }
          >
            <button
              className={`flex justify-center group border border-[#62d53a] relative overflow-hidden text-white rounded-lg py-2 md:px-8 max-md:w-[210px]`}
            >
              <span className="relative text-white z-20 flex items-center gap-2">
                <Image
                  className="w-[18px] h-[18px]"
                  src={whatsappIcon}
                  alt="whatsappIcon"
                />
                WhatsApp
              </span>
              <span
                className={`w-full bg-[#62d53a] group-hover:w-0 transition-all duration-500 absolute top-0 bottom-0 left-0`}
              ></span>
            </button>
          </Link>
          <Link
            target="_blank"
            href={
              "tel:" + process.env.NEXT_PUBLIC_PHONE_NUMBER?.replaceAll(" ", "")
            }
          >
            <button
              className={`flex justify-center group border border-solid border-white relative overflow-hidden text-white rounded-lg py-2 md:px-9 max-md:w-[210px]`}
            >
              <span className="relative text-secondary group-hover:text-white transition-all duration-300 z-20">
                Contact Us
              </span>
              <span
                className={`w-full bg-white group-hover:w-0 transition-all duration-500 absolute top-0 bottom-0 left-0`}
              ></span>
            </button>
          </Link>
        </div>
      </div>
      <Image
        className="absolute w-[445px] h-full top-0 right-0 object-cover"
        src={trigger_request}
        alt="trigger_request"
      />
    </div>
  );
};

export default ContactExperts;
