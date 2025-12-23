"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SanityFetch } from "@/lib/SanityFetch";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface DropboxI {
  name?: string;
  PlaceHolder: string;
  boxCss?: string;
  Activevalue?: string;
  Checked: string[];
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
  OptionType?: string[];
  DropDownCss?: string;
  options?: {
    label: string;
    value: string;
  }[];
}

export const SelectDropbox = ({
  name,
  PlaceHolder,
  boxCss,
  Activevalue,
  Checked,
  OptionType = ["area"],
  setChecked,
  DropDownCss,
  options,
}: DropboxI) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={`${boxCss} w-full cursor-pointer text-sm flex items-center justify-between px-2 xs:py-3 py-2`}
        >
          <h4>{PlaceHolder}</h4>
          <span
            className={`${
              open ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          >
            <svg
              className={`${
                open ? "stroke-secondary" : ""
              } mt-0.5 stroke-secondary group-hover:stroke-secondary transition-all duration-300`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={cn([
          DropDownCss,
          "w-full lg:min-w-[170px] max-lg:!mt-0.5 max-h-60 rounded overflow-hidden",
        ])}
      >
        <Suspense>
          <Options
            Options={options}
            OptionType={OptionType}
            Checked={Checked}
            setChecked={setChecked}
          />
        </Suspense>
      </PopoverContent>
    </Popover>
  );
};

const Options = ({
  Options,
  OptionType = ["area"],
  Checked,
  setChecked,
}: {
  Options?: { label: string; value: string }[];
  OptionType?: string[];
  Checked: string[];
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    Options ? Options : []
  );
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    if (!Options) {
      setloading(true);
      SanityFetch({
        Query: `*[_type in ${JSON.stringify(OptionType)} ]`,
      })
        .then((data: any) => {
          const Data = data.map((items: any) =>
            items.name
              ? {
                  label: items.name,
                  value: items?.slug?.current
                    ? items.slug.current
                    : items?.name,
                }
              : {
                  label: items.title,
                  value: items?.slug?.current
                    ? items.slug.current
                    : items.title,
                }
          );

          setOptions(Data);
          setloading(false);
        })
        .catch(() => setloading(false));
    }
  }, []);

  return (
    <ul
      className={`overflow-y-scroll CustomScrollBar z-10 transition-all duration-300 max-h-60 text-sm !w-full bg-white py-1 pl-1`}
    >
      {isLoading ? (
        <Loader2
          className="stroke-secondary animate-spin w-fit mx-auto"
          strokeWidth={1.3}
        />
      ) : (
        <>
          <div className="flex lg:items-center space-x-2 px-2 py-1">
            <Checkbox
              checked={Checked.length == 0}
              onCheckedChange={(checked) => checked === true && setChecked([])}
              defaultChecked
              className="border border-secondary"
              id="See All"
            />
            <label htmlFor="See All" className="cursor-pointer text-sm">
              See All
            </label>
          </div>
          {options &&
            options.map((items: any, i: number) => (
              <div key={i} className="flex lg:items-center space-x-2 px-2 py-1">
                <Checkbox
                  checked={Checked.includes(items.value)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? setChecked([...Checked, items.value])
                      : setChecked(
                          Checked.filter((value: any) => value !== items.value)
                        );
                  }}
                  className="border border-secondary"
                  id={"option" + i}
                />
                <label
                  htmlFor={"option" + i}
                  className="cursor-pointer text-sm"
                >
                  {items.label}
                </label>
              </div>
            ))}
        </>
      )}
    </ul>
  );
};
