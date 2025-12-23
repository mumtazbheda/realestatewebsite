"use client";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const PhoneInput = ({
  name = "phone",
  dark = false,
}: {
  name?: string;
  dark?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [Input , setInput] = useState("");
  const [countries, setcountries] = useState([]);
  const [selected, setselected] = useState({
    name: "India",
    code: "+91",
  });

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const Data = await res.json();

      const sortedData = Data.sort((previous: any, current: any) => {
        if (previous?.name?.common > current?.name?.common) {
          return 1;
        } else if (previous?.name?.common < current?.name?.common) {
          return -1;
        }
        return 0;
      });

      const allCountries = sortedData.map((country: any) => {
        return {
          name: country?.name?.common,
          code: country?.idd?.root + country?.idd?.suffixes,
        };
      });

      setcountries(allCountries);
    };
    fetchCountries();
  }, []);

  return (
    <div
      className={cn([
        "w-full h-[48px] group flex items-center gap-2 bg-transparent border border-[#dae0e5] divide-x divide-[#dae0e5] px-[15px] transition-all duration-300",
        dark ? "focus-within:border-[#33449b]/50 focus-within:divide-[#33449b]/50" : "rounded-full focus-within:border-[#dae0e5]/50 focus-within:divide-[#dae0e5]/50",
      ])}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="whitespace-nowrap w-full max-w-[85px] overflow-hidden">
          {selected.name} ({selected.code})
        </PopoverTrigger>
        <PopoverContent className={cn(["!w-64 h-96 mb-3 ml-40 border rounded-sm overflow-y-auto overflow-x-hidden CustomScrollBar bg-white text-black py-2"
      , dark ? "border-black/30" : "border-white/30"
      ])}>
          {countries?.map((item: any, id: number) => {
            const isSelected =
              item?.name?.toLowerCase() === selected?.name?.toLowerCase();
            return (
              <div
                key={id}
                onClick={() => {
                  setselected(item);
                  setOpen(false);
                }}
                className={cn([
                  "hover:bg-blue-500 px-4 hover:text-white",
                  isSelected ? "bg-blue-500 !text-white" : "",
                ])}
              >
                {item.name} ({item.code})
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
      <input
        type="tel"
        required
        placeholder="Phone No"
        value={Input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className={cn([
          "outline-none w-full h-[48px] bg-transparent px-[15px] transition-all duration-300"
        , dark ? "placeholder:text-black/70" : "placeholder:text-white"
        ])}
      />
      <input type="text" name={name} value={selected.code + Input} className="hidden" />
    </div>
  );
};

export default PhoneInput;
