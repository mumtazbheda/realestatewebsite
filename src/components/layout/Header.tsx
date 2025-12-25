"use client";
import Image from "next/image";
import mpd_logo from "@/assets/images/Logo.png";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import whatsapp_icon from "@/assets/Svgs/whatsapp-icon.svg";
import SelectNationality from "@/shared/SelectNationality";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logoUrl?: string;
  companyName?: string;
  phone?: string;
  whatsapp?: string;
}

const Header = ({ logoUrl, companyName, phone, whatsapp }: HeaderProps) => {
  const phoneNumber = phone || process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
  const whatsappNumber = whatsapp || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const [show, setShow] = useState(true);
  const [Menu, setMenu] = useState(false);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    const handleScroll = () => {
      currentScrollPosition = window.scrollY;
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }
      previousScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn([
        "sticky top-0 bg-white w-full z-40 shadow-lg transition-all duration-300",
        !Menu && (show ? "top-0" : "md:-top-36 -top-28"),
        Menu && "h-screen",
      ])}
    >
      <div className="flex items-center bg-white xl:py-4 sm:py-4 py-3 xl:px-2.5 px-4 max-w-[1180px] mx-auto z-40">
        <div className="flex-shrink-0 relative z-30">
          <Link prefetch={false} href={"/"}>
            {logoUrl ? (
              <img
                className="max-xl:w-[140px] max-md:w-[100px] w-[160px] h-auto"
                src={logoUrl}
                alt={companyName || "Company Logo"}
              />
            ) : (
              <Image
                className="max-xl:w-[140px] max-md:w-[100px]"
                width={160}
                src={mpd_logo}
                alt={companyName || "Company Logo"}
              />
            )}
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-grow gap-4 sm:pr-2">
          <div className="flex items-center justify-end md:gap-6 gap-4">
            <Link
              target="_blank"
              href={"tel:" + phoneNumber.replaceAll(" ", "")}
              className="text-sm max-md:hidden mt-0.5"
            >
              {phoneNumber}
            </Link>
            <Link
              href={"https://wa.me/" + whatsappNumber.replaceAll(" ", "")}
              target="_blank"
              className="relative z-30"
            >
              <Image className="w-6" src={whatsapp_icon} alt="whatsapp_icon" />
            </Link>

            <div className="z-50 mt-[1px]">
              <SelectNationality />
            </div>

            <div
              onClick={() => setMenu(!Menu)}
              className="w-6 flex flex-col gap-1.5 mt-0.5 xl:hidden cursor-pointer"
            >
              <span className={`w-full bg-black h-[2px]`}></span>
              <span className={`w-full bg-black h-[2px]`}></span>
              <span className={`w-full bg-black h-[2px]`}></span>
            </div>
          </div>
          <div className="max-xl:hidden flex items-center justify-end gap-[30px]">
            <ul className="text-sm flex items-center justify-end flex-grow gap-6">
              {headersLinksData.map((items, i: number) => (
                <li
                  key={i}
                  className="group flex items-center relative cursor-pointer gap-0.5"
                >
                  <Link
                    className="items-end text-black group-hover:text-secondary transition-all duration-300"
                    href={"/" + items.link}
                  >
                    {items.title}
                  </Link>
                  {items.dropdown && (
                    <div
                      className={`${
                        items.dropdown.length > i + 3 ? "/" : "right-0"
                      } invisible group-hover:visible bg-white p-4 flex flex-col gap-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg absolute top-7`}
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,.12)" }}
                    >
                      {items.dropdown.map((item, i: number) => (
                        <Link
                          className="hover:text-secondary transition-all duration-300"
                          key={i}
                          href={item.link}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {/* List Your Property Button removed from here */}
          </div>
        </div>
      </div>

      <MobileMenu
        Menu={Menu}
        setMenu={setMenu}
        headersLinksData={headersLinksData}
      />
    </header>
  );
};

const headersLinksData = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "Buy",
    link: "buy",
  },
  {
    title: "Rent",
    link: "rent",
  },
  {
    title: "Areas",
    link: "areas",
    dropdown: [
      { title: "Palm Jebel Ali", link: "/areas/palm-jebel-Ali" },
      { title: "Downtown Dubai", link: "/areas/downtown-dubai" },
      { title: "Palm Jumeirah", link: "/areas/palm-jumeirah" },
      { title: "Dubai Marina", link: "/areas/dubai-marina" },
      { title: "Business Bay", link: "/areas/business-bay" },
      { title: "See all Areas in Dubai", link: "/areas" },
    ],
  },
  {
    title: "Off-Plan Projects",
    link: "projects",
    dropdown: [
      { title: "See all Projects in Dubai", link: "/projects" },
      { title: "Townhouses", link: "/projects?input=&projectType=townhouse" },
      { title: "Villas", link: "/projects?input=&projectType=villa" },
      { title: "Apartments", link: "/projects?input=&projectType=apartment" },
    ],
  },
  {
    title: "Developers",
    link: "developers",
    dropdown: [
      { title: "Emaar", link: "/developers?input=Emaar" },
      { title: "DAMAC", link: "/developers?input=DAMAC" },
      { title: "Aldar", link: "/developers?input=aldar" },
      { title: "See all Developers in Dubai", link: "/developers" },
    ],
  },
];

export default Header;
