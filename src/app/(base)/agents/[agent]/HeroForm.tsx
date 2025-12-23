"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import AnimatedButton from "@/shared/AnimatedButton";
import Link from "next/link";
import React, { useState } from "react";
import whatsappIcon from "@/assets/Svgs/whatsapp-mob.svg";
import Image from "next/image";
import { Phone, X } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { SubmitButton } from "@/shared/SubmitButton";

const HeroForm = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full h-fit flex flex-col gap-5 px-[20px] py-[20px] rounded-lg max-md:!hidden`}
      >
        <h5 className="text-black text-lg font-bold">Get Free Consultation</h5>
        <form
          id="contactbox_form"
          action={async (e) => {
            const result = await SubmitContactForm(e);
            if (result?.success) {
              setOpen(false);
            }
          }}
          onSubmit={() =>
            setTimeout(() => {
              (document.getElementById("contactbox_form") as any)?.reset();
            }, 1000)
          }
          className="flex flex-wrap gap-2.5"
        >
          <div className="w-full border relative h-10 rounded-sm bg-white">
            <input
              name="name"
              required
              type="text"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
              Name*
            </label>
          </div>
          <div className="w-full border relative h-10 rounded-sm bg-white">
            <input
              name="phone"
              required
              type="tel"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
              Phone*
            </label>
          </div>
          <div className="w-full border relative min-h-10 rounded-sm bg-white">
            <input
              name="email"
              required
              type="email"
              className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
              E-Mail*
            </label>
          </div>
          <div className="w-full border relative h-[70px] rounded-sm bg-white">
            <textarea
              name="message"
              required
              className="peer h-full relative w-full px-2 py-4 z-10 bg-transparent outline-none"
            />
            <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2 left-2.5 text-[#bbb]">
              Message
            </label>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex space-x-2">
              <Checkbox
                defaultChecked
                required
                className="mt-1 border border-secondary"
                id="agent_terms1"
              />
              <label
                htmlFor="agent_terms1"
                className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                id="agent_terms2"
              />
              <label
                htmlFor="agent_terms2"
                className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive information about offers, deals and services
                from this website (optional)
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 w-full mt-5">
            <AnimatedButton
              type="submit"
              text="Contact me"
              css="bg-secondary w-full"
              hoverColor="bg-primary/60"
            />
            <div className="flex gap-2.5">
              <Link
                className="flex-1"
                href={
                  "https://wa.me/" +
                  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replaceAll(" ", "")
                }
                target="_blank"
              >
                <AnimatedButton
                  text="WhatsApp"
                  Icon={
                    <Image
                      className="w-[18px] h-[18px]"
                      src={whatsappIcon}
                      alt="whatsappIcon"
                    />
                  }
                  css="w-full flex justify-center !px-0 !bg-[#62d53a]"
                  hoverColor="bg-[#128c7e]"
                />
              </Link>
              <Link
                className="flex-1"
                href={
                  "https://wa.me/" +
                  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replaceAll(" ", "")
                }
                target="_blank"
              >
                <AnimatedButton
                  text="Call"
                  Icon={<Phone size={15} className="mt-0.5" />}
                  css="w-full flex justify-center bg-secondary"
                  hoverColor="bg-primary/60"
                />
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* Request Form */}
      <Dialog open={Open} onOpenChange={setOpen}>
        <DialogTrigger className="md:!hidden absolute bottom-0 left-0 p-2.5 w-full bg-primary text-white text-center">
          Contact me
        </DialogTrigger>
        <DialogContent className="md:!hidden p-0 px-8 bg-transparent border-none shadow-none flex justify-center max-w-[420px]">
          <div className="relative z-20 flex flex-col w-full rounded-lg overflow-hidden bg-white">
            {/* Close Button */}
            <X
              onClick={() => setOpen(false)}
              className="cursor-pointer stroke-white absolute z-10 right-0 top-0 m-2"
              size={20}
            />
            {/* Header */}
            <div className="text-white text-lg font-semibold bg-secondary flex items-center justify-center py-5">
              Get Free Сonsultation
            </div>

            <form
              id="contactbox_form2"
              action={async (e) => {
                const result = await SubmitContactForm(e);
                if (result?.success) {
                  setOpen(false);
                }
              }}
              onSubmit={() =>
                setTimeout(() => {
                  (document.getElementById("contactbox_form2") as any)?.reset();
                }, 1000)
              }
              className="flex flex-col gap-3 mt-4 px-6 pb-6"
            >
              <div className="w-full border px-1 rounded-sm border-slate-200 relative h-10 bg-white">
                <input
                  name="name"
                  required
                  type="text"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-1 transition-all duration-300 absolute top-2 left-2 text-[#bbb]">
                  Name*
                </label>
              </div>
              <div className="w-full border px-1 rounded-sm border-slate-200 relative h-10 bg-white">
                <input
                  name="phone"
                  required
                  type="text"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-1 transition-all duration-300 absolute top-2 left-2 text-[#bbb]">
                  Phone*
                </label>
              </div>
              <div className="w-full border px-1 rounded-sm border-slate-200 relative h-10 bg-white">
                <input
                  name="email"
                  required
                  type="email"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-1 transition-all duration-300 absolute top-2 left-2 text-[#bbb]">
                  E-Mail*
                </label>
              </div>
              <div className="w-full border px-1 rounded-sm border-slate-200 relative h-[120px] bg-white">
                <textarea
                  name="message"
                  required
                  className="text-sm peer relative w-full pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-1 transition-all duration-300 absolute top-2 left-2 text-[#bbb]">
                  Message
                </label>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex space-x-2">
                  <Checkbox
                    className="mt-1 border border-secondary"
                    id="HeroFormCheckbox1"
                    defaultChecked
                  />
                  <label
                    htmlFor="HeroFormCheckbox1"
                    className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                    className="mt-1 border border-secondary"
                    id="HeroFormCheckbox2"
                  />
                  <label
                    htmlFor="HeroFormCheckbox2"
                    className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to receive information about offers, deals and
                    services from this website (optional)
                  </label>
                </div>
              </div>
              <div className="flex w-full mt-5">
                <SubmitButton
                  className={`w-full flex items-center justify-center bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5`}
                >
                  <span className="relative text-white z-20">Contact me</span>
                  <span
                    className={`bg-primary/60 w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}
                  ></span>
                </SubmitButton>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroForm;
