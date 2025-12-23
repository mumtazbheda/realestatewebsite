"use client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { Heart, Printer, Share2, Star } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { cn } from "@/lib/utils";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import { SubmitButton } from "@/shared/SubmitButton";

const HeroDialogContent = ({ Data }: { Data: any }) => {
  return (
    <div className="flex flex-col">
      {/* Top Section */}
      <div className="w-full pl-[5px] flex justify-between">
        <h2 className="text-2xl font-medium">{Data.title}</h2>
        {/* <div className="flex items-center pt-1 gap-2 h-fit 2xl:min-w-[393px] lg:min-w-[397px] min-w-[170px]">
          <button className="max-md:w-1/3 text-sm text-secondary border md:border-transparent border-secondary hover:border-secondary transition-all duration-300 flex items-center justify-center gap-2 py-1 px-2.5 rounded-md">
            <Heart size={15} />
            <span className="max-lg:hidden max-md:block">SAVE</span>
          </button>
          <button className="max-md:w-1/3 text-sm text-secondary border md:border-transparent border-secondary hover:border-secondary transition-all duration-300 flex items-center justify-center gap-2 py-1 px-2.5 rounded-md">
            <Printer size={15} />
            <span className="max-lg:hidden max-md:block">BROCHURE</span>
          </button>
          <button className="max-md:w-1/3 text-sm text-secondary border md:border-transparent border-secondary hover:border-secondary transition-all duration-300 flex items-center justify-center gap-2 py-1 px-2.5 rounded-md">
            <Share2 size={15} />
            <span className="max-lg:hidden max-md:block">SHARE</span>
          </button>
        </div> */}
      </div>

      <div className="flex 2xl:gap-8 gap-6 pr-6 pt-5">
        {/* Left Image Grid Section */}
        <div className="max-h-[calc(90vh-72px)] HideScrollBar overflow-y-scroll">
          <div
            className="w-full block
                        [&>*:nth-of-type(5n+1)]:!w-1/2 
                        [&>*:nth-of-type(5n+2)]:!w-1/2
                        [&>*:nth-of-type(5n+3)]:!w-1/3
                        [&>*:nth-of-type(5n+4)]:!w-1/3
                        [&>*:nth-of-type(5n+5)]:!w-1/3"
          >
            {Data?.image?.map((items: any, i: number) => {
              if (items.asset) {
                return (
                  <Image
                    key={i}
                    fill
                    unoptimized
                    className="!relative p-[5px] !inline-block !h-fit object-cover"
                    src={urlForImage(items.asset._ref).url()}
                    alt={
                      (urlForImage(items.asset._ref)?.options
                        ?.source as string) ??
                      "Property Image" + " - " + i
                    }
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        {/* Right Contact Section */}
        <div className="flex-[0_0_360px] mt-[5px] max-h-[calc(90vh-72px)] HideScrollBar overflow-y-scroll">
          <div className="flex flex-col justify-between h-full gap-5">
            <div>
              <h4 className="text-black">Ready for your new home?</h4>
              <h5 className="text-black text-lg font-bold">
                Send us an Inquiry
              </h5>
            </div>

            <form
              id="HeroContactDialog_form"
              action={SubmitContactForm}
              onSubmit={() =>
                setTimeout(() => {
                  (
                    document.getElementById("HeroContactDialog_form") as any
                  )?.reset();
                }, 1000)
              }
              className="flex flex-wrap gap-2.5 mt-4"
            >
              <div className="w-full border relative h-10 rounded-sm bg-white">
                <input
                  required
                  name="name"
                  type="text"
                  className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
                />
                <label
                  className="
                peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2.5 left-3.5 text-[#bbb]
                peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                "
                >
                  Name*
                </label>
              </div>
              <div className="w-full border relative h-10 rounded-sm bg-white">
                <input
                  required
                  name="email"
                  type="email"
                  className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
                />
                <label
                  className="
                peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2.5 left-3.5 text-[#bbb]
                peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                "
                >
                  Email Address*
                </label>
              </div>
              <div className="w-full border relative min-h-10 rounded-sm bg-white">
                <input
                  required
                  name="phone"
                  type="tel"
                  className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
                />
                <label
                  className="
                peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2.5 left-3.5 text-[#bbb]
                peer-valid:bg-secondary peer-valid:text-white peer-valid:z-20 peer-valid:px-1 peer-valid:text-xs peer-valid:-top-2 peer-valid:left-2
                "
                >
                  Phone Number*
                </label>
              </div>
              <div className="w-full border relative h-[120px] rounded-sm bg-white">
                <textarea
                  required
                  name="message"
                  className="peer relative w-full px-2 py-4 z-10 bg-transparent outline-none"
                />
                <label
                  className="
                peer-focus:bg-secondary peer-focus:text-white peer-focus:z-20 peer-focus:px-1 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 transition-all duration-300 absolute top-2.5 left-3.5 text-[#bbb]
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
                    id="HeroContactDialog_terms1"
                  />
                  <label
                    htmlFor="HeroContactDialog_terms1"
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
                    id="HeroContactDialog_terms2"
                  />
                  <label
                    htmlFor="HeroContactDialog_terms2"
                    className="text-black cursor-pointer text-[15px] leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to receive information about offers, deals and
                    services from this website (optional)
                  </label>
                </div>
              </div>
              <div className="flex w-full mt-5">
                <SubmitButton
                  className={`flex justify-center items-center max-w-[150px] w-full bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5`}
                >
                  <span className="relative text-white z-20">Send</span>
                  <span
                    className={`bg-primary/60 w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}
                  ></span>
                </SubmitButton>
              </div>
            </form>

            <div
              className={cn([
                "md:w-full sm:w-1/2 flex items-center gap-5",
                !Data.agent && "h-full",
              ])}
            >
              {Data.agent && (
                <>
                  {Data &&
                    Data.agent &&
                    Data.agent.name &&
                    Data.agent.image && (
                      <div className="sm:w-[95px] sm:h-[95px] w-[108px] h-[108px] bg-[#d9d9d9] rounded-xl overflow-hidden">
                        <Link
                          href={Data?.agent?.slug?.current ?? CreateSlug(Data.agent.name) ?? ""}
                          className="flex items-end justify-center"
                        >
                          <Image
                            unoptimized
                            fill
                            className="!relative !w-full !h-full object-cover"
                            src={urlForImage(Data.agent.image.asset._ref).url()}
                            alt={Data.agent.name}
                          />
                        </Link>
                      </div>
                    )}
                  <div>
                    <h5 className="text-sm">Listing by</h5>
                    {Data.agent.name && (
                      <h4 className="font-medium">{Data.agent.name}</h4>
                    )}
                    <div className="flex items-center gap-2 mt-2.5">
                      {["", "", "", "", ""].map((_, i: number) => (
                        <Star key={i} fill="#ffdb02" stroke="#ffdb02" />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDialogContent;
