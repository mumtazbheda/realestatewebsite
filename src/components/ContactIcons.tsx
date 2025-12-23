import React from "react";
import whatsappIcon from "@/assets/Svgs/whatsappIcon.svg";
import Phone from "@/assets/Svgs/Phone.svg";
import Image from "next/image";

const ContactIcons = () => {
  return (
    <div className="fixed sm:w-fit w-full h-fit z-30 right-0 bottom-0 sm:p-4">
      <div className="flex sm:flex-col flex-row sm:gap-4">
        <a
          href={
            "tel:" + process.env.NEXT_PUBLIC_PHONE_NUMBER?.replaceAll(" ", "")
          }
          target="_blank"
          className="max-sm:w-1/2"
        >
          <div
            className="max-sm:gap-4 bg-[#01aee6] hover:bg-sky-600 sm:py-4 sm:px-4 px-4 py-2 flex items-center justify-center sm:w-[56px] sm:h-[56px] h-[40px] sm:rounded-full max-sm:!shadow-none"
            style={{ boxShadow: "0 0 15px rgb(0,0,0,.45)" }}
          >
            <Image
              className="sm:w-full w-fit h-full"
              src={Phone}
              alt="whatsappIcon"
            />
            <h4 className="sm:hidden text-white font-semibold text-sm">
              Call us
            </h4>
          </div>
        </a>
        <a
          href={
            "https://wa.me/" +
            process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replaceAll(" ", "")
          }
          target="_blank"
          className="max-sm:w-1/2"
        >
          <div
            className="max-sm:gap-4 bg-[#01c24a] hover:bg-[#08a84a] sm:px-3 sm:py-4 px-4 py-2 flex items-center justify-center sm:w-[56px] sm:h-[56px] h-[40px] sm:rounded-full max-sm:!shadow-none"
            style={{ boxShadow: "0 0 15px rgb(0,0,0,.45)" }}
          >
            <Image
              className="sm:w-full h-full"
              src={whatsappIcon}
              alt="whatsappIcon"
            />
            <h4 className="sm:hidden text-white font-semibold text-sm">
              Whatsapp
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
