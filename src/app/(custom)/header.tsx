"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/goldenvisasuae logo.png";
import whatsapp_icon from "@/assets/Svgs/whatsappIcon.svg";
import download_alt_icon from "@/assets/Svgs/download-alt.svg";
import download_alt_dark_icon from "@/assets/Svgs/download-alt dark.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CarFrontIcon, MailIcon, MenuIcon, X } from "lucide-react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [Scrollshow, setScrollshow] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.href);
  }, [useSearchParams()]);

  useEffect(() => {
    if (window.scrollY >= 100) {
      setScrollshow(true);
    }

    window.addEventListener("scroll", function (e) {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition <= 100) {
        setScrollshow(false);
      } else {
        setScrollshow(true);
      }
    });
  }, []);

  return (
    <header
      className={cn([
        "fixed top-0 left-0 right-0 z-30 w-full transition-all duration-300",
        Scrollshow ? "bg-[#333]" : "bg-[#3336]",
      ])}
    >
      <div className="min-h-[40px] container max-lg:max-w-screen-md flex items-center xl:justify-between lg:justify-center justify-between">
        {/* <Link href={"/goldenvisasuae"}>
          <Image
            src={logo}
            alt="logo"
            className="max-w-[243px] max-xl:hidden max-lg:block"
          />
        </Link> */}
        <div className="max-w-[243px] max-xl:hidden max-lg:block"></div>
        <ul className="h-[60px] flex items-center gap-5 max-lg:hidden">
          {headerLinks.map((items, i: number) => {
            const isActive = pathname.includes(items.link);
            return (
              <li
                key={i}
                className={cn([
                  "flex items-center justify-center text-base font-medium text-white hover:text-black hover:bg-[#274685] transition-all duration-300",
                  isActive ? "h-full" : "",
                ])}
              >
                <Link
                  scroll={items.scroll ?? true}
                  href={items.link}
                  className={cn([
                    "flex items-center justify-center gap-1 h-full py-[5px] px-[15px]",
                    isActive ? "h-full" : "",
                    items.icon ? "italic" : "",
                  ])}
                >
                  {items.icon && items.icon}
                  {items.title}
                </Link>
              </li>
            );
          })}
          <li className="ml-4">
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+919920091726&text=Hi!%20I'm%20Interested%20In%20Palm%20Jebel%20Ali%20Project.%20Please%20Share%20Details."
              className="py-[5px] px-[15px]"
            >
              <Image width={36} src={whatsapp_icon} alt="whatsapp" />
            </Link>
          </li>
        </ul>
        {/* Mobile Menu */}
        <MenuIcon
          onClick={() => setShow(!show)}
          size={28}
          className="text-white lg:hidden"
        />

        <div
          className={cn([
            "fixed inset-0 z-40 bg-black/70 flex flex-col items-end px-4 transition-all duration-300",
            show ? "opacity-100 visible" : "opacity-0 invisible",
          ])}
        >
          <X
            onClick={() => setShow(!show)}
            size={22}
            className="text-white mt-3.5"
          />
          <div className="flex items-center w-full min-h-[570px] h-fit bg-white rounded-lg mx-auto mt-4">
            <ul className="w-full flex flex-col gap-3.5">
              {MobileheaderLinks.map((items, i: number) => {
                const isActive = pathname.includes(items.link);
                return (
                  <li
                    key={i}
                    className={cn([
                      "w-full flex items-center justify-start text-base font-medium text-black hover:text-white hover:bg-[#274685] transition-all duration-300",
                      isActive ? "h-full" : "",
                    ])}
                  >
                    <Link
                      href={items.link}
                      className={cn([
                        "flex items-center justify-center gap-1 h-full py-2 px-6",
                        isActive ? "h-full" : "",
                        items.icon ? "italic" : "",
                      ])}
                    >
                      {items.icon && items.icon}
                      {items.title}
                    </Link>
                  </li>
                );
              })}
              <li className="ml-6">
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=+919920091726&text=Hi!%20I'm%20Interested%20In%20Palm%20Jebel%20Ali%20Project.%20Please%20Share%20Details."
                >
                  <Image width={36} src={whatsapp_icon} alt="whatsapp" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const headerLinks = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Overview",
    link: "#overview",
  },
  {
    title: "Gallery",
    link: "#gallery",
  },
  {
    title: "Floor Plans",
    link: "#floor-plans",
  },
  {
    title: "Brochure",
    link: "/goldenvisasuae?open=true",
    scroll: false,
    icon: <Image width={18} src={download_alt_icon} alt="download_alt_icon" />,
  },
  {
    title: "Site Visit",
    link: "/goldenvisasuae?open=true",
    scroll: false,
    icon: <CarFrontIcon size={18} strokeWidth={1.5} />,
  },
  {
    title: "Enquiry Now",
    link: "/goldenvisasuae?open=true",
    scroll: false,
    icon: <MailIcon size={17} strokeWidth={1.8} />,
  },
];

const MobileheaderLinks = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Overview",
    link: "#overview",
  },
  {
    title: "Gallery",
    link: "#gallery",
  },
  {
    title: "Floor Plans",
    link: "#floor-plans",
  },
  {
    title: "Brochure",
    link: "/goldenvisasuae?open=true",
    scroll: false,
    icon: (
      <Image
        width={18}
        src={download_alt_dark_icon}
        alt="download_alt_dark_icon"
      />
    ),
  },
  {
    title: "Site Visit",
    link: "/goldenvisasuae?open=true",
    scroll: false,
    icon: <CarFrontIcon size={18} strokeWidth={1.5} />,
  },
  {
    title: "Enquiry Now",
    link: "/goldenvisasuae?open=true",
    scroll: false,
    icon: <MailIcon size={17} strokeWidth={1.8} />,
  },
];

export default Header;
