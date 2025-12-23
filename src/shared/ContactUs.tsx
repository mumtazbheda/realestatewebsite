"use client";
import Image from "next/image";
import React, { useState } from "react";
import icon_envelope from "@/assets/Svgs/icon-envelope.svg";
import phone_blue from "@/assets/Svgs/phone_blue.svg";
import placeholder_blue from "@/assets/Svgs/placeholder_blue.svg";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import { useRouter } from "next/navigation";
import { SubmitButton } from "./SubmitButton";

const ContactUs = ({ title = "Contact Us" }: { title?: string }) => {
  const router = useRouter();
  return (
    <div className="flex sm:flex-row flex-col rounded-lg overflow-hidden">
      {/* Left Section */}
      <div className="bg-primary lg:w-[35%] sm:w-1/2 text-white sm:p-10 p-[30px]">
        <h4 className="text-2xl font-medium">{title}</h4>
        <h5>Kingdom Capital Real Estate</h5>
        <ul className="flex flex-col mt-8 gap-6">
          <li>
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              target="_blank"
              className="flex gap-2.5"
            >
              <Image
                className="w-5 h-5 mt-[3px]"
                src={icon_envelope}
                alt="icon_envelope"
              />
              <span className="text-[15px] leading-normal font-medium">
                {process.env.NEXT_PUBLIC_EMAIL}
              </span>
            </Link>
          </li>
          <hr className="border-secondary/40 w-[220px] ml-[30px]" />
          <li>
            <Link
              href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              className="flex gap-2.5"
              target="_blank"
            >
              <Image
                className="w-5 h-5 mt-[3px]"
                src={phone_blue}
                alt="phone_blue"
              />
              <span className="text-[15px] leading-normal font-medium">
                {process.env.NEXT_PUBLIC_PHONE_NUMBER}
              </span>
            </Link>
          </li>
          <hr className="border-secondary/40 w-[220px] ml-[30px]" />
          <li className="flex gap-2.5">
            <Image
              className="w-5 h-5 mt-[3px]"
              src={placeholder_blue}
              alt="placeholder_blue"
            />
            <span className="text-[13px] leading-normal">
                Office 513, AB centre, sheikh Zayed road, Dubai, UAE
              </span>
          </li>
        </ul>
      </div>
      {/* Right Section */}
      <div className="bg-secondary lg:w-[65%] sm:w-1/2 sm:p-10 p-[30px]">
        <h4 className="text-white text-2xl font-medium">
          Get A Free Consultation
        </h4>
        <h5 className="text-white">Ready for your new home?</h5>
        <form
          id="form"
          action={SubmitContactForm}
          onSubmit={() =>
            setTimeout(() => {
              (document.getElementById("form") as any)?.reset();
            }, 1000)
          }
          className="flex flex-wrap gap-2.5 mt-6"
        >
          <div className="lg:w-[calc(30%_-_5px)] w-full relative h-10 rounded-sm bg-white">
            <input
              required
              name="name"
              type="text"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
            "
            >
              Name*
            </label>
          </div>
          <div className="lg:w-[calc(40%_-_10px)] w-full relative min-h-10 rounded-sm bg-white">
            <input
              required
              name="email"
              type="email"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
            "
            >
              E-Mail*
            </label>
          </div>
          <div className="lg:w-[calc(30%_-_5px)] w-full relative h-10 rounded-sm bg-white">
            <input
              required
              name="phone"
              type="tel"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
            "
            >
              Phone*
            </label>
          </div>
          <div className="w-full relative h-[120px] rounded-sm bg-white">
            <textarea
              required
              name="message"
              className="peer relative w-full px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
            "
            >
              Message*
            </label>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex lg:items-center space-x-2">
              <Checkbox required id="terms1" defaultChecked />
              <label
                htmlFor="terms1"
                className="text-white cursor-pointer text-[15px] leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
              <Checkbox required id="terms2" />
              <label
                htmlFor="terms2"
                className="text-white cursor-pointer text-[15px] leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive information about offers, deals and services
                from this website (optional)
              </label>
            </div>
          </div>
          <div className="flex lg:justify-end justify-start w-full mt-2">
            <SubmitButton
              className={`flex items-center justify-center max-w-[200px] w-full bg-primary group relative overflow-hidden text-white rounded-lg py-2 px-5`}
            >
              <span className="relative text-white z-20 group-hover:text-black transition-all duration-500">
                PROPERTY INQUIRY
              </span>
              <span
                className={`bg-white w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}
              ></span>
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
