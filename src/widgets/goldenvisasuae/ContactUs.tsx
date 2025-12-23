import Image from "next/image";
import React from "react";
import hero from "@/assets/images/hero.jpg";
import { Tenor_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import PhoneInput from "@/shared/goldenvisasuae/phoneInput";
import logo from "@/assets/images/goldenvisasuae logo.png";
import { SubmitCustomForm } from "@/lib/actions/FormAction";
import { SubmitButton } from "@/shared/SubmitButton";

const tenor_sans = Tenor_Sans({ subsets: ["latin"], weight: "400" });

const ContactUs = async () => {

  const formAction = SubmitCustomForm.bind(null, {
    emailTo: "leads@thekingdom.ae",
    subject: "Golden Visa UAE INDIA",
  });

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(/hero.jpg)",
        backgroundSize: "cover",
      }}
      className="relative py-[100px] rounded-tl-[55px] rounded-tr-[55px]"
    >
      <div className="container lg:max-w-[1200px] max-w-screen-sm flex flex-col justify-center items-center text-white z-30 inset-0">
        <div className="w-full flex lg:flex-row flex-col justify-between items-center sm:gap-20 gap-10 px-10">
          {/* left section */}
          <div className="col-span-5 flex-1 flex flex-col gap-4 text-center">
            <h2 className="text-[3rem] leading-none font-light uppercase">
              Enquire Now
            </h2>
            <p>Contact:- +91 83759 28127</p>
          </div>
          <hr className="col-span-1 lg:w-[0.5px] lg:h-52 w-full bg-white" />
          {/* right section */}
          <div className="col-span-5 w-full flex-1 mx-auto mb-16">
            <div className="w-full max-w-sm mx-auto">
              <h2
                className={cn([
                  "uppercase text-center text-[42px] font-light serif",
                  tenor_sans.className,
                ])}
              >
                CONTACT US
              </h2>
              <form action={formAction} className="flex flex-col gap-4 mt-10">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="outline-none w-full h-[48px] placeholder:text-white bg-transparent border border-[#dae0e5] focus:border-[#dae0e5]/50 rounded-full px-[15px] transition-all duration-300"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="outline-none w-full h-[48px] placeholder:text-white bg-transparent border border-[#dae0e5] focus:border-[#dae0e5]/50 rounded-full px-[15px] transition-all duration-300"
                />
                <PhoneInput name="phone" />
                <SubmitButton
                  style={{
                    background: "linear-gradient(-45deg, #022cffad, #33449b)",
                  }}
                  className="w-full text-white !bg-[#4285f4] text-[.81rem] leading-[1.5] text-center shadow-[0_10px_30px_0_rgba(0,0,0,0.15)] py-[15px] px-[30px]"
                >
                  REGISTER
                </SubmitButton>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center sm:gap-6 gap-4 mt-8 px-10">
          <hr className="w-full border-white" />
          {/* <Image className="sm:max-w-[230px] max-w-[156px]" src={logo} alt="logo" /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
