"use client";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { Checkbox } from "@/components/ui/checkbox";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import PopupRequestForm from "./PopupRequestForm";
import { SubmitButton } from "./SubmitButton";
import logo from "@/assets/images/Logo Only.png";

interface ContactBoxI {
  Agent: {
    name: string;
    image: StaticImageData | string;
    phone?: string;
    email?: string;
    slug: string;
  };
}

const ContactBox = ({ Agent }: ContactBoxI) => {
  const [activeTab, setactiveTab] = useState(1);
  return (
    <div className="rounded-lg overflow-hidden sticky top-[200px]">
      <ul className="flex">
        <li className="flex-1">
          <button
            onClick={() => setactiveTab(1)}
            className={`${
              activeTab === 1
                ? "bg-primary text-white"
                : "bg-[#eaeaea] text-[#bbb] hover:bg-[#bbb] hover:text-white"
            } w-full flex items-center justify-center transition-all duration-500 py-2`}
          >
            Contact Agent
          </button>
        </li>
        <li className="flex-1 max-sm:hidden">
          <button
            onClick={() => setactiveTab(2)}
            className={`${
              activeTab === 2
                ? "bg-primary text-white"
                : "bg-[#eaeaea] text-[#bbb] hover:bg-[#bbb] hover:text-white"
            } w-full flex items-center justify-center transition-all duration-500 py-2`}
          >
            Request Info
          </button>
        </li>
      </ul>
      <div
        className={`${
          activeTab === 1 ? "opacity-100" : "opacity-0 hidden"
        } bg-[#f7f7f7] flex md:flex-col sm:flex-row flex-col gap-5 md:px-[30px] px-5 py-[20px] transition-all duration-500`}
      >
        <div className="md:w-full sm:w-1/2 flex items-center gap-5">
          {Agent.name && Agent.image ? (
            <div className="sm:w-[95px] sm:h-[95px] w-[108px] h-[108px] bg-[#d9d9d9] rounded-xl overflow-hidden">
              <Link
                href={
                  Agent?.slug
                    ? "/agents/" + Agent?.slug
                    : Agent?.name
                    ? "/agents/" + CreateSlug(Agent.name)
                    : ""
                }
                className="flex items-end justify-center"
              >
                <Image
                  unoptimized
                  fill
                  className="!relative !w-full !h-full object-cover"
                  src={Agent.image}
                  alt={Agent.name}
                />
              </Link>
            </div>
          ) : (
            <div className="sm:w-[95px] sm:h-[95px] w-[108px] h-[108px] bg-slate-100/90 rounded-xl overflow-hidden">
              <Image
                className="relative w-full h-full object-cover"
                src={logo}
                alt={"logo"}
              />
            </div>
          )}
          <div>
            <h5 className="text-sm">Listing by</h5>
            <h4 className="font-medium leading-[1.3]">
              {Agent.name ?? "Kingdom Capital Properties"}
            </h4>
            <div className="flex items-center gap-2 mt-2.5">
              {["", "", "", "", ""].map((_, i: number) => (
                <Star key={i} fill="#ffdb02" stroke="#ffdb02" />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-full sm:w-1/2 flex md:flex-row sm:flex-col items-center gap-5">
          {Agent.email && (
            <div className="md:flex-1 max-md:w-full">
              {/* <PopupRequestForm buttonText="Send" title="Send E-mail"> */}
              <Link
                href={
                  "https://mail.google.com/mail/?view=cm&fs=1&to=" + Agent.email
                }
                className="w-full"
              >
                <AnimatedButton
                  text="E-mail"
                  css="w-full"
                  hoverColor="bg-primary/60"
                />
              </Link>
              {/* </PopupRequestForm> */}
            </div>
          )}
          {Agent.phone && (
            <Link
              href={"https://wa.me/" + Agent.phone?.replaceAll(" ", "")}
              target="_blank"
              className="md:flex-1 max-md:w-full "
            >
              <AnimatedButton
                text="Whatsapp"
                css="w-full !bg-[#62d53a]"
                hoverColor="bg-[#128c7e]"
              />
            </Link>
          )}
        </div>
      </div>
      <div
        className={`${
          activeTab === 2 ? "opacity-100" : "opacity-0 hidden"
        } bg-[#f7f7f7] flex flex-col gap-5 px-[20px] py-[20px] transition-all duration-500`}
      >
        <div>
          <h4 className="text-black">Ready for your new home?</h4>
          <h5 className="text-black text-lg font-bold">Send us an Inquiry</h5>
        </div>
        <form
          id="contactbox_form"
          action={SubmitContactForm}
          onSubmit={() =>
            setTimeout(() => {
              (document.getElementById("contactbox_form") as any)?.reset();
            }, 1000)
          }
          className="flex flex-wrap gap-2.5 mt-4"
        >
          <div className="w-full border relative h-10 rounded-sm bg-white">
            <input
              required
              type="text"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
                        peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                        peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
            >
              Name*
            </label>
          </div>
          <div className="w-full border relative h-10 rounded-sm bg-white">
            <input
              required
              type="text"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
                        peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                        peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
            >
              Phone*
            </label>
          </div>
          <div className="w-full border relative min-h-10 rounded-sm bg-white">
            <input
              required
              type="email"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
                        peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                        peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
            >
              E-Mail*
            </label>
          </div>
          <div className="w-full border relative h-[120px] rounded-sm bg-white">
            <textarea
              required
              className="peer h-full relative w-full px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label
              className="
                        peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]
                        peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                        "
            >
              Message
            </label>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex space-x-2">
              <Checkbox
                defaultChecked
                required
                className="mt-1 border border-secondary"
                id="contactbox_terms1"
              />
              <label
                htmlFor="contactbox_terms1"
                className="text-black cursor-pointer text-[15px] leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to{" "}
                <Link className="underline" href={"terms-of-use"}>
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link className="underline" href={"privacy-policy"}>
                  Privacy Policy
                </Link>
              </label>
            </div>
            <div className="flex space-x-2 pr-2">
              <Checkbox
                required
                className="mt-1 border border-secondary"
                id="contactbox_terms2"
              />
              <label
                htmlFor="contactbox_terms2"
                className="text-black cursor-pointer text-[15px] leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive information about offers, deals and services
                from this website (optional)
              </label>
            </div>
          </div>
          <div className="flex w-full mt-5">
            <SubmitButton
              className={`flex items-center justify-center max-w-[150px] w-full bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5`}
            >
              <span className="relative text-white z-20">Send</span>
              <span
                className={`bg-[#008ce4] w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}
              ></span>
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactBox;
