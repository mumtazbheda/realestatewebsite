"use client";
import React from "react";
import bg_agent from "@/assets/images/bg-agent.jpg";
import agent from "@/assets/images/alina-adamco-2.webp";
import Image, { StaticImageData } from "next/image";
import phone_icon from "@/assets/Svgs/phone_blue.svg";
import letter_icon from "@/assets/Svgs/icon-envelope.svg";
import Link from "next/link";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "@/assets/images/Logo.png";
import { SubmitButton } from "./SubmitButton";

interface ContactFormExpertI {
  Agent: {
    name: string;
    image?: StaticImageData | string;
    phone?: string;
  };
  sub_title?: string;
  description: string;
  Form: {
    Title: string;
    buttonText: string;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
    purpose?: boolean;
    property_type?: boolean;
    location?: boolean;
  };
}

const ContactFormExpert = ({
  Agent,
  sub_title,
  description,
  Form = {
    Title: "Send a request",
    buttonText: "GET A FREE CONSULTATION",
    name: false,
    email: false,
    phone: false,
    message: false,
    purpose: false,
    property_type: false,
    location: false,
  },
}: ContactFormExpertI) => {
  const form_name = "ContactFormExpert_" + Math.round(Math.random() * 99999);
  const checkbox_1 =
    "ContactFormExpert_" + "_checkbox_1" + Math.round(Math.random() * 99999);
  const checkbox_2 =
    "ContactFormExpert_" + "_checkbox_2" + Math.round(Math.random() * 99999);

  return (
    <div className="w-[75%] flex justify-center min-[1120px]:flex-nowrap flex-wrap bg-secondary/20 rounded-md overflow-hidden mx-auto">
      {/* Agent Section */}

      {/* Description Section */}
      <div className="min-[1120px]:flex-1 md:flex-[0_0_50%] sm:flex-[0_1_50%] flex-[0_1_100%] max-md:bg-primary md:text-black text-white flex flex-col justify-between md:py-14 md:pr-8 sm:px-7 sm:py-5 p-4">
        <div className="flex flex-col items-center mx-auto">
          <div className="relative md:rounded-lg sm:rounded-none rounded-lg overflow-hidden h-[320px]">
            <Image
              className="object-center object-cover w-full h-full"
              src={bg_agent}
              alt="bg_agent"
            />
            {Agent.image && (
              <Image
                unoptimized
                fill
                className="absolute w-full h-full object-contain bottom-0 pt-5"
                src={Agent.image}
                alt={Agent.name}
              />
            )}
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center xl:gap-8 gap-4 text-sm font-semibold">
          {Agent.phone && (
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5" src={phone_icon} alt="phone_icon" />
              <Link
                target="_blank"
                href={"tel:" + Agent.phone.replaceAll(" ", "")}
              >
                {Agent.phone}
              </Link>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Image className="w-5 h-5" src={letter_icon} alt="letter_icon" />{" "}
            {process.env.NEXT_PUBLIC_EMAIL}
          </div>
        </div>
      </div>
      {/* Form Section */}
      <div className="min-[1120px]:flex-[0_0_350px] md:flex-grow sm:flex-[0_1_50%] flex-[0_1_100%] bg-secondary flex flex-col gap-4 sm:px-[30px] sm:pt-[30px] sm:pb-6 p-4">
        <h3 className="text-2xl font-semibold text-white">{Form.Title}</h3>
        <form
          id={form_name}
          action={SubmitContactForm}
          onSubmit={() =>
            setTimeout(() => {
              (document.getElementById(form_name) as any)?.reset();
            }, 1000)
          }
          className="flex flex-col gap-2.5"
        >
          {Form.name && (
            <div className="w-full relative min-[1120px]:h-9 h-10 rounded-sm bg-white min-[1120px]:text-sm">
              <input
                required
                name="name"
                type="text"
                className="peer relative w-full min-[1120px]:h-9 h-10 px-2 py-4 z-10 bg-transparent outline-none"
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
          )}
          {Form.email && (
            <div className="w-full relative min-[1120px]:h-9 h-10 rounded-sm bg-white min-[1120px]:text-sm">
              <input
                required
                name="email"
                type="email"
                className="peer relative w-full min-[1120px]:h-9 h-10 px-2 py-4 z-10 bg-transparent outline-none"
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
          )}
          {Form.phone && (
            <div className="w-full relative min-[1120px]:h-9 h-10 rounded-sm bg-white min-[1120px]:text-sm">
              <input
                required
                name="phone"
                type="tel"
                className="peer relative w-full min-[1120px]:h-9 h-10 px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label
                className="
                            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
              >
                Phone with country code*
              </label>
            </div>
          )}
          {Form.purpose && (
            <div className="cursor-pointer w-full relative min-[1120px]:h-9 h-10 rounded-sm bg-white min-[1120px]:text-sm">
              <select
                required
                name="purpose"
                className="cursor-pointer peer relative w-full min-[1120px]:h-9 h-10 px-1 z-10 bg-transparent outline-none"
              >
                <option value={""}></option>
                <option value={"Sell"}>Sell</option>
                <option value={"Rent"}>Rent</option>
              </select>
              <label
                className="
                            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
              >
                I want to...
              </label>
            </div>
          )}
          {Form.property_type && (
            <div className="cursor-pointer w-full relative min-[1120px]:h-9 h-10 rounded-sm bg-white min-[1120px]:text-sm">
              <select
                required
                name="property_type"
                className="cursor-pointer peer relative w-full min-[1120px]:h-9 h-10 px-1 z-10 bg-transparent outline-none"
              >
                <option value={""}></option>
                <option value={"Residential"}>Residential</option>
                <option value={"Commercial"}>Commercial</option>
                <option value={"Other"}>Other</option>
              </select>
              <label
                className="
                            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
              >
                Property Type
              </label>
            </div>
          )}
          {Form.location && (
            <div className="cursor-pointer w-full relative min-[1120px]:h-9 h-10 rounded-sm bg-white min-[1120px]:text-sm">
              <select
                required
                name="location"
                className="cursor-pointer peer relative w-full min-[1120px]:h-9 h-10 px-1 z-10 bg-transparent outline-none"
              >
                <option value={""}></option>
                <option value={"Dubai"}>Dubai</option>
                <option value={"Abu Dhabi"}>Abu Dhabi</option>
                <option value={"Sharjah"}>Sharjah</option>
                <option value={"Other"}>Other</option>
              </select>
              <label
                className="
                            peer-focus:bg-primary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                            peer-valid:bg-primary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
              >
                Location
              </label>
            </div>
          )}
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex gap-x-2">
              <Checkbox
                className="mt-1"
                required
                id={checkbox_1}
                defaultChecked
              />
              <label
                htmlFor={checkbox_1}
                className="text-white cursor-pointer text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
            <div className="flex gap-x-2">
              <Checkbox className="mt-1" required id={checkbox_2} />
              <label
                htmlFor={checkbox_2}
                className="text-white cursor-pointer text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive information about offers, deals and services
                from this website (optional)
              </label>
            </div>
          </div>
          <div className="flex lg:justify-end justify-start w-full mt-2">
            <SubmitButton
              className={`flex items-center justify-center md:w-full w-fit bg-primary group relative overflow-hidden text-white min-[1120px]:text-sm rounded-lg py-2 px-5`}
            >
              <span className="relative text-white z-20 group-hover:text-black transition-all duration-500">
                {Form.buttonText}
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

export default ContactFormExpert;
