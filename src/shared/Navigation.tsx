import { CreateSlug } from "@/lib/helper/CreateSlug";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Printer,
  Share2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navigation = ({
  title,
  from,
  Buttons = false,
  PrefetchHomeLink = true,
  wrapperClassName,
}: {
  title?: string;
  from?: {
    title: string;
    link: string;
  }[];
  Buttons?: boolean;
  PrefetchHomeLink?: boolean;
  wrapperClassName?: string;
}) => {
  return (
    <div
      className={cn([
        wrapperClassName,
        "flex items-center justify-between max-md:hidden",
      ])}
    >
      <div className="flex items-center gap-6">
        <Link
          href={"/buy"}
          className="max-md:hidden group hover:text-secondary transition-all duration-300 flex items-center text-xs gap-0.5"
        >
          <ChevronLeft
            className="group-hover:stroke-secondary group-hover:-translate-x-1 transition-all duration-300"
            size={16}
            strokeWidth={1}
          />
          <span>Go to Search</span>
        </Link>
        <div className="flex items-center text-xs text-[#bbb] gap-1">
          <Link
            prefetch={PrefetchHomeLink}
            href={"/"}
            className="hover:text-secondary transition-all duration-300"
          >
            Home
          </Link>
          <ChevronRight className="mt-0.5" size={16} strokeWidth={1} />
          {from &&
            from.map((items, i: number) => {
              return (
                <div className="flex items-center gap-1" key={i}>
                  <Link
                    href={items.link}
                    className="hover:text-secondary transition-all duration-300"
                  >
                    {items.title}
                  </Link>
                  <ChevronRight className="mt-0.5" size={16} strokeWidth={1} />
                </div>
              );
            })}
          {title && <h5 className="text-black">{title}</h5>}
        </div>
      </div>
      {Buttons && (
        <div className="flex items-center gap-2 max-md:w-full">
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
        </div>
      )}
    </div>
  );
};

export default Navigation;
