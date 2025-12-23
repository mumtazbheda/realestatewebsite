"use client";
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { SubmitContactForm } from "@/lib/actions/FormAction";
import { SubmitButton } from "./SubmitButton";

const PopupForm = ({ children }: { children: React.ReactNode }) => {
  const [Open, setOpen] = useState(false);

  return (
    <Dialog open={Open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 px-8 bg-transparent border-none shadow-none flex justify-center max-w-[550px]">
        <div className="relative z-20 flex flex-col w-full rounded-lg overflow-hidden bg-white max-w-[550px]">
          <X
            onClick={() => setOpen(false)}
            className="cursor-pointer stroke-secondary absolute xs:top-3 top-1 xs:right-7 right-2"
            size={20}
          />
          {/* Right Side */}
          <form
            id="Popup_form"
            action={async (e) => {
              const result = await SubmitContactForm(e);
              if (result?.success) {
                setOpen(false);
              }
            }}
            onSubmit={() =>
              setTimeout(() => {
                (document.getElementById("Popup_form") as any)?.reset();
              }, 1000)
            }
            className="flex flex-col gap-2.5 xs:px-8 xs:py-8 px-4 py-6"
          >
            <h3 className="text-lg leading-tight font-semibold text-secondary text-center">
              Submit Your Info to Know More!
            </h3>
            <div className="w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
              <input
                name="name"
                required
                type="text"
                className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label
                className="
                            peer-focus:text-xs peer-focus:right-2.5 peer-focus:top-2.5 peer-focus:left-auto absolute top-1.5 left-2.5 text-[#bbb]
                            peer-valid:text-xs peer-valid:right-2.5 peer-valid:top-2.5 peer-valid:left-auto
                            "
              >
                Name*
              </label>
            </div>
            <div className="w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
              <input
                name="phone"
                required
                type="tel"
                className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label
                className="
                            peer-focus:text-xs peer-focus:right-2.5 peer-focus:top-2.5 peer-focus:left-auto absolute top-1.5 left-2.5 text-[#bbb]
                            peer-valid:text-xs peer-valid:right-2.5 peer-valid:top-2.5 peer-valid:left-auto
                            "
              >
                Phone*
              </label>
            </div>
            <div className="w-full border focus-within:border-secondary relative h-10 rounded-sm bg-white transition-all duration-300">
              <input
                name="email"
                required
                type="email"
                className="peer relative w-full h-10 px-2 py-4 z-10 bg-transparent outline-none"
              />
              <label
                className="
                            peer-focus:text-xs peer-focus:right-2.5 peer-focus:top-2.5 peer-focus:left-auto absolute top-1.5 left-2.5 text-[#bbb]
                            peer-valid:text-xs peer-valid:right-2.5 peer-valid:top-2.5 peer-valid:left-auto
                            "
              >
                E-Mail*
              </label>
            </div>
            <SubmitButton
              className={`w-full bg-secondary group relative overflow-hidden text-white rounded-lg py-2 5 px-5`}
            >
              <span className="relative text-white font-medium z-20">
                SUBMIT
              </span>
              <span
                className={`bg-primary/60 w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0`}
              ></span>
            </SubmitButton>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
