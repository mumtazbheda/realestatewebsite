"use client";
import Image from "next/image";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import { Mail, MapPin, Phone } from "lucide-react";
import { SubmitContactForm } from "@/lib/actions/FormAction";

const ContactUs_White = () => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="flex md:flex-row flex-col-reverse bg-[#f9f9f9] pt-[50px] pb-[35px] md:px-[35px]">
        {/* Left Section */}
        <div className="bg-[#f9f9f9] md:w-[40%] max-md:px-5 max-xs:px-2">
          <h4 className="text-2xl font-medium max-md:hidden">Contact Us</h4>
          <h5 className="text-lg max-md:hidden">Kingdom Capital Real Estate</h5>
          <ul className="flex flex-col mt-8 sm:gap-8 gap-6">
            <li>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                target="_blank"
                className="flex gap-6"
              >
                <Mail className="w-5 h-5 stroke-secondary mt-[3px]" />
                <span className="text-[15px] leading-normal">
                  {process.env.NEXT_PUBLIC_EMAIL}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                target="_blank"
                className="flex gap-6"
              >
                <Phone className="w-5 h-5 stroke-secondary mt-[3px]" />
                <span className="text-[15px] leading-normal">
                  {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                </span>
              </Link>
            </li>
            <li className="flex gap-6">
              <MapPin
                strokeWidth={1.5}
                className="w-5 h-5 stroke-secondary mt-[3px]"
              />
              <span className="text-[13px] leading-normal">
                2803, API Trio Tower, Sheikh Zayed Road, Dubai, United Arab
                Emirates.
              </span>
            </li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="bg-[#f9f9f9] md:w-[60%] xs:px-5 px-2">
          <h4 className="text-black text-lg">Ready for your new home?</h4>
          <h5 className="text-black text-lg font-medium md:leading-none">
            Send us an Inquiry
          </h5>
          <form
            id="form2"
            action={SubmitContactForm}
            onSubmit={() =>
              setTimeout(() => {
                (document.getElementById("form2") as any)?.reset();
              }, 1000)
            }
            className="flex flex-wrap gap-2.5 mt-6"
          >
            <div className="sm:w-[calc(50%_-_5px)] w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
              <input
                name="name"
                required
                type="text"
                className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label className="peer-focus:bg-secondary peer-valid:Label peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
                Name*
              </label>
            </div>
            <div className="sm:w-[calc(50%_-_5px)] w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
              <input
                name="phone"
                required
                type="tel"
                className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label className="peer-focus:bg-secondary peer-valid:Label peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
                Phone*
              </label>
            </div>
            <div className="lg:w-full border focus-within:border-secondary w-full relative min-h-10 rounded-sm bg-white transition-all duration-300">
              <input
                name="email"
                required
                type="email"
                className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label className="peer-focus:bg-secondary peer-valid:Label peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
                E-Mail*
              </label>
            </div>
            <div className="w-full border focus-within:border-secondary relative h-[120px] rounded-sm bg-white transition-all duration-300">
              <textarea
                name="message"
                required
                className="peer h-full relative w-full px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label className="peer-focus:bg-secondary peer-valid:Label peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
                Message
              </label>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex lg:items-center space-x-2">
                <Checkbox
                  required
                  className="border border-secondary"
                  defaultChecked
                  id="Check_terms1"
                />
                <label
                  htmlFor="Check_terms1"
                  className="text-black cursor-pointer sm:text-[15px] text-xs leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept the terms of the{" "}
                  <Link className="underline" href={"terms-of-use"}>
                    User Agreement
                  </Link>{" "}
                  and{" "}
                  <Link className="underline" href={"privacy-policy"}>
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <div className="flex lg:items-center space-x-2">
                <Checkbox
                  required
                  className="border border-secondary"
                  id="Check_terms2"
                />
                <label
                  htmlFor="Check_terms2"
                  className="text-black cursor-pointer sm:text-[15px] text-xs leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to receive information about offers, deals and
                  services from this website (optional)
                </label>
              </div>
            </div>
            <div className="flex lg:justify-start justify-start w-full mt-2">
              <div className="w-1/2 md:w-full md:max-w-[150px]">
                <AnimatedButton
                  type="submit"
                  text="Send"
                  css="bg-secondary w-full"
                  hoverColor="bg-primary/60"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs_White;
