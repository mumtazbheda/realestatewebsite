"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import Image from "next/image";
import Beds_icon from "@/assets/Svgs/bedrooms-icon.svg";
import scale_icon from "@/assets/Svgs/square-icon.svg";
import price_icon from "@/assets/Svgs/price-icon.svg";
import AnimatedButton from "@/shared/AnimatedButton";
import image from "@/assets/images/park-greens-20.jpg.webp";
import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import { SubmitButton } from "@/shared/SubmitButton";

interface FloorPlansI {
  title: string;
  FloorPlans: {
    title?: string;
    floor_plan_type?: string;
    type?: string;
    total_area?: string;
    starting_price?: string;
    floor_plan_image?: any;
  }[];
}

const FloorPlans = ({ title, FloorPlans }: FloorPlansI) => {
  const [swiper, setswiper] = useState<SwiperCore>();
  const [index, setindex] = useState(0);

  return (
    <div className="flex flex-col w-full gap-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="relative flex flex-col w-full gap-8">
        {/* Floor Plans Buttons */}
        <div className="flex items-center flex-wrap gap-x-6 gap-y-3 absolute z-10 bg-white lg:max-w-md">
          {FloorPlans &&
            FloorPlans.map((plans, i: number) => (
              <button
                key={i}
                className="flex items-center gap-2"
                onClick={() => {
                  swiper?.slideTo(i);
                  setindex(i);
                }}
              >
                <div className="flex justify-center items-center w-[18px] h-[18px] border border-secondary rounded-full">
                  <div
                    className={cn([
                      "w-[10px] h-[10px] bg-secondary rounded-full",
                      index === i ? "block" : "hidden",
                    ])}
                  ></div>
                </div>
                <p className="text-[15px]">{plans.title}</p>
              </button>
            ))}
        </div>
        <div>
          <Swiper
            onInit={(swiper) => setswiper(swiper)}
            className="w-full h-full"
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            noSwiping={true}
            allowTouchMove={false}
          >
            {FloorPlans &&
              FloorPlans.map((plans, i: number) => {
                const floor_image = plans.floor_plan_image
                  ? urlForImage(plans.floor_plan_image?.asset?._ref).url()
                  : "";
                return (
                  <SwiperSlide key={i}>
                    <div className="flex lg:items-center lg:flex-row flex-col-reverse">
                      {/* Left Side */}
                      <div className="basis-2/5 flex flex-col gap-5">
                        <div className="w-full flex flex-col gap-5">
                          {plans.floor_plan_type && (
                            <h6 className="font-semibold">
                              {plans.floor_plan_type}
                            </h6>
                          )}
                          {/* Type */}
                          {plans.type && (
                            <div className="flex items-center">
                              <div className="min-w-[200px] flex items-center gap-2 max-w-[135px]">
                                <Image
                                  className="w-6 h-6"
                                  src={Beds_icon}
                                  alt="Beds_icon"
                                />
                                <p className="font-semibold text-sm">Type:</p>
                              </div>
                              <p className="text-left text-sm">{plans.type}</p>
                            </div>
                          )}
                          {/* Total Area */}
                          {plans.total_area && (
                            <div className="flex items-center">
                              <div className="min-w-[200px] flex items-center gap-2 max-w-[135px]">
                                <Image
                                  className="w-6 h-6"
                                  src={scale_icon}
                                  alt="scale_icon"
                                />
                                <p className="font-semibold text-sm">
                                  Total Area:
                                </p>
                              </div>
                              <p className="text-left text-sm">
                                {plans.total_area} sq. ft.
                              </p>
                            </div>
                          )}
                          {/* Starting Price */}
                          {plans.starting_price && (
                            <div className="flex items-center">
                              <div className="min-w-[200px] flex items-center gap-2 max-w-[135px]">
                                <Image
                                  className="w-6 h-6"
                                  src={price_icon}
                                  alt="price_icon"
                                />
                                <p className="font-semibold text-sm">
                                  Starting Price:
                                </p>
                              </div>
                              <p className="text-left text-sm">
                                {plans.starting_price} AED
                              </p>
                            </div>
                          )}
                        </div>
                        {/* Request Form */}
                        <RequestForms />
                      </div>
                      {/* Right Side */}
                      {plans.floor_plan_image && (
                        <div className="basis-3/5 max-lg:mb-6 max-lg:mt-10">
                          <Image
                            fill
                            unoptimized
                            className="!relative !w-full !max-h-[380px] !object-contain"
                            src={floor_image}
                            alt="Floor Image"
                          />
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const RequestForms = () => {
  const [Open, setOpen] = useState(false);
  const [Open2, setOpen2] = useState(false);

  return (
    <div className="flex xs:flex-row flex-col items-center gap-2 mt-4 w-full lg:max-w-sm">
      {/* Request Form */}
      <Dialog open={Open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="max-lg:flex-1 max-xs:w-full">
            <AnimatedButton
              text="Leave a request"
              css="lg:flex-1 w-full"
              hoverColor="bg-primary/40"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 px-8 bg-transparent border-none shadow-none flex justify-center max-w-[420px]">
          <div className="relative z-20 flex flex-col w-full rounded-lg overflow-hidden bg-white">
            {/* Close Button */}
            <X
              onClick={() => setOpen(false)}
              className="cursor-pointer stroke-white absolute z-10 right-0 top-0 m-2"
              size={20}
            />
            {/* Header */}
            <div className="text-white text-xl font-semibold bg-secondary flex items-center justify-center py-5">
              Leave a request
            </div>

            <form
              action={async (e) => {
                const result = await SubmitContactForm(e);
                if (result?.success) {
                  setOpen(false);
                }
              }}
              className="flex flex-col gap-3 mt-4 px-6 pb-6"
            >
              <div className="w-full border-b border-slate-200 relative h-10 bg-white">
                <input
                  required
                  type="text"
                  name="name"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]">
                  Name*
                </label>
              </div>
              <div className="w-full border-b border-slate-200 relative h-10 bg-white">
                <input
                  required
                  type="text"
                  name="phone"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]">
                  Phone*
                </label>
              </div>
              <div className="w-full border-b border-slate-200 relative h-10 bg-white">
                <input
                  required
                  type="email"
                  name="email"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]">
                  E-Mail*
                </label>
              </div>
              <div className="w-full border-b border-slate-200 relative h-[120px] bg-white">
                <input
                  required
                  type="text"
                  name="message"
                  className="text-sm peer relative w-full pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]">
                  Message
                </label>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex space-x-2">
                  <Checkbox
                    className="mt-1 border border-secondary"
                    id="requestCheckbox1"
                    defaultChecked
                  />
                  <label
                    htmlFor="requestCheckbox1"
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
                    id="requestCheckbox2"
                  />
                  <label
                    htmlFor="requestCheckbox2"
                    className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to receive information about offers, deals and
                    services from this website (optional)
                  </label>
                </div>
              </div>
              <div className="flex w-full mt-5">
                <SubmitButton
                  className={`flex items-center justify-center w-full bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5`}
                >
                  <span className="relative text-white z-20">
                    Property Inquiry
                  </span>
                  <span
                    className={`bg-primary/60 w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}
                  ></span>
                </SubmitButton>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Request Form */}
      <Dialog open={Open2} onOpenChange={setOpen2}>
        <DialogTrigger asChild>
          <div className="max-lg:flex-1 max-xs:w-full">
            <button
              className={
                "lg:flex-1 w-full bg-white border border-secondary group relative overflow-hidden text-secondary rounded-lg py-[7.5px] px-5"
              }
            >
              <span className="relative z-20 group-hover:text-white transition-all duration-500">
                Get All Floor Plans
              </span>
              <span
                className={
                  "w-0 bg-secondary group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0"
                }
              ></span>
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 px-8 bg-transparent border-none shadow-none flex justify-center max-w-[420px]">
          <div className="relative z-20 flex flex-col w-full rounded-lg overflow-hidden bg-white">
            {/* Close Button */}
            <X
              onClick={() => setOpen2(false)}
              className="cursor-pointer stroke-white absolute z-10 right-0 top-0 m-2"
              size={20}
            />
            {/* Header */}
            <div className="text-white text-xl font-semibold bg-secondary flex items-center justify-center py-5">
              Get All Floor Plans
            </div>

            <form
              action={async (e) => {
                const result = await SubmitContactForm(e);
                if (result?.success) {
                  setOpen(false);
                }
              }}
              className="flex flex-wrap gap-2.5 mt-4 px-6 pb-6"
            >
              <div className="w-full border-b border-slate-200 relative h-10 bg-white">
                <input
                  required
                  type="text"
                  name="name"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]">
                  Name*
                </label>
              </div>
              <div className="w-full border-b border-slate-200 relative h-10 bg-white">
                <input
                  required
                  type="text"
                  name="phone"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]">
                  Phone*
                </label>
              </div>
              <div className="w-full border-b border-slate-200 relative h-10 bg-white">
                <input
                  required
                  type="email"
                  name="email"
                  className="text-sm peer relative w-full h-10 pt-4 pb-2 z-10 bg-transparent outline-none"
                />
                <label className="peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:-left-0.5 transition-all duration-300 absolute top-2 left-0 text-[#bbb]">
                  E-Mail*
                </label>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex space-x-2">
                  <Checkbox
                    className="mt-1 border border-secondary"
                    id="request-Checkbox-1"
                    defaultChecked
                  />
                  <label
                    htmlFor="request-Checkbox-1"
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
                    id="request-Checkbox-2"
                  />
                  <label
                    htmlFor="request-Checkbox-2"
                    className="text-black cursor-pointer text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to receive information about offers, deals and
                    services from this website (optional)
                  </label>
                </div>
              </div>
              <div className="flex w-full mt-5">
                <SubmitButton
                  className={`flex items-center justify-center w-full bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5`}
                >
                  <span className="relative text-white z-20">
                    Download Floor Plans
                  </span>
                  <span
                    className={`bg-primary/60 w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}
                  ></span>
                </SubmitButton>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FloorPlans;
