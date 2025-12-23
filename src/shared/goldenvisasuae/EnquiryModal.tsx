"use client";
import React, { useEffect, useState } from "react";
import PhoneInput from "./phoneInput";
import { X } from "lucide-react";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitCustomForm } from "@/lib/actions/FormAction";
import { SubmitButton } from "../SubmitButton";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const EnquiryModal = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    if (params.get("open") === "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [params]);

  useEffect(() => {
    setOpen(false);
    router.replace("/goldenvisasuae", { scroll: false });
  }, []);

  const formAction = SubmitCustomForm.bind(null, {
    emailTo: "leads@thekingdom.ae",
    subject: "Six Senses Dubai Marina",
  });

  return (
    <div
      className={cn([
        "flex justify-center fixed z-40 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] transition-all duration-500",
        open ? "opacity-100 visible" : "opacity-0 invisible",
      ])}
    >
      <div
        onClick={() => {
          setOpen(false);
          router.replace("/goldenvisasuae", { scroll: false });
        }}
        className="fixed z-40 inset-0"
      ></div>
      <div
        className={cn([
          "relative z-50 bg-white w-full max-w-[500px] h-fit rounded-[.125rem] overflow-hidden transition-all duration-500",
          open ? "translate-y-20 opacity-100" : "-translate-y-20 opacity-0",
        ])}
      >
        <div className="flex items-center justify-between p-[1rem] border-b border-[#dee2e6]">
          <h5 className="font-light text-black text-xl">Quick Enquiry!</h5>
          <X
            onClick={() => {
              setOpen(false);
              router.replace("/goldenvisasuae", { scroll: false });
            }}
            name="close"
            className="stroke-black/50 hover:stroke-black"
          />
        </div>
        <form
          action={formAction}
          className={cn(["flex flex-col gap-4 p-[1rem]", roboto.className])}
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Enter Your Name"
            className="outline-none w-full h-[48px] placeholder:text-black/70 bg-transparent border border-[#dae0e5] focus:border-[#33449b] px-[15px] transition-all duration-300"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Enter Email"
            className="outline-none w-full h-[48px] placeholder:text-black/70 bg-transparent border border-[#dae0e5] focus:border-[#33449b] px-[15px] transition-all duration-300"
          />
          <PhoneInput name="phone" dark />
          <SubmitButton
            type="submit"
            style={{
              background: "linear-gradient(-45deg, #022cffad, #33449b)",
            }}
            className="w-full text-white !bg-[#4285f4] text-[.81rem] leading-[1.5] text-center shadow-[0_10px_30px_0_rgba(0,0,0,0.15)] hover:shadow-[0_5px_11px_0_rgba(0,0,0,0.18),0_4px_15px_0_rgba(0,0,0,0.15)] py-[15px] px-[30px] transition-all duration-300"
          >
            REGISTER
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
