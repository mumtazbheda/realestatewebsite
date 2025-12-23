"use client";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const MobileMenu = ({
  headersLinksData,
  Menu,
  setMenu,
}: {
  headersLinksData: any;
  Menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <div
      className={`${
        Menu ? "" : "hidden"
      } xl:hidden bg-white overflow-y-auto w-full flex flex-col justify-between h-[92%] md:pt-12 pt-10`}
      // className={`${
      //   Menu ? "md:h-[calc(100vh-100px)] sm:h-[calc(100vh-81px)] h-[calc(100vh-73px)] fixed bottom-0" : "hidden"
      // } xl:hidden bg-white overflow-y-auto w-full flex flex-col justify-between h-full md:pt-12 pt-10`}
    >
      {/* Links */}
      <ul className="text-sm flex flex-col justify-start gap-4 px-3">
        {headersLinksData.map((items: any, i: number) => {
          return (
            <HeaderLink key={i} items={items} Menu={Menu} setMenu={setMenu} />
          );
        })}
      </ul>
      {/* Button */}
      <div className="w-full flex flex-col items-center px-2.5 pb-12">
        <Link href={"/services/sell"} className="w-1/2">
          <button className="group relative overflow-hidden bg-primary text-white rounded-lg py-2 w-full">
            <span className="relative text-white z-20">List Your Property</span>
            <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-secondary"></span>
          </button>
        </Link>
        <div className="flex w-full gap-2 mt-7">
          <Link
            className="w-full"
            target="_blank"
            href={
              "https://wa.me/" +
              process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replaceAll(" ", "")
            }
          >
            <button className="group relative overflow-hidden bg-[#62d53a] text-white rounded-lg py-2 w-full">
              <span className="relative text-white z-20">Whatsapp</span>
              <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-[#128c7e]"></span>
            </button>
          </Link>
          <Link
            className="w-full"
            target="_blank"
            href={
              "tel:" + process.env.NEXT_PUBLIC_PHONE_NUMBER?.replaceAll(" ", "")
            }
          >
            <button className="group relative overflow-hidden bg-[#01aee6] text-white rounded-lg py-2 w-full">
              <span className="relative text-white z-20">Call Us</span>
              <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-[#008ce4]"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HeaderLink = ({
  items,
  Menu,
  setMenu,
}: {
  items: any;
  Menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dropdown, setdropdown] = useState(false);

  return (
    <li className="group space-y-3">
      <div
        onClick={() => setdropdown(!dropdown)}
        className="flex items-center justify-between relative cursor-pointer gap-0.5"
      >
        <Link
          className="items-end text-black group-hover:text-secondary transition-all duration-300"
          href={items.dropdown ? "" : "/" + items.link}
        >
          {items.title}
        </Link>
        {items.dropdown && (
          <svg
            className="mt-0.5 stroke-black/50 group-hover:stroke-secondary transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </div>
      <hr />
      {/* DropDown */}
      {items.dropdown && (
        <div
          className={`${
            dropdown ? "block" : "hidden"
          } overflow-hidden gap-4 px-4 pb-3 flex flex-col`}
        >
          {items.dropdown.map((item: any, i: number) => (
            <div key={i} className="space-y-4">
              <Link href={item.link}>{item.title}</Link>
              {items.dropdown && items.dropdown.length > i + 1 && <hr />}
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default MobileMenu;
