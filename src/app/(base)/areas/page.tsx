import React from "react";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import HeroSearch from "@/widgets/HeroSearch";
import areas_bg from "@/assets/images/areas-bg.jpg";
import Navigation from "@/shared/Navigation";
import { Metadata } from "next";

export interface DeveloperSearchParamsI {
  input: string;
  areas: string;
}

export const metadata: Metadata = {
  title: "Areas",
  description: "List of All Areas in Kingdom Capital",
  openGraph: {
    title: "Areas",
    description: "List of All Areas in Kingdom Capital",
  },
};
const Areas = async ({
  searchParams,
}: {
  searchParams: DeveloperSearchParamsI;
}) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'area'
        ${
          searchParams.input && searchParams.input !== ""
            ? `&& title == '${searchParams.input}' || slug.current == '${searchParams.input}' `
            : ""
        }
        ] {
            title,
            slug,
            cover_image,
            price
        }`,
  });

  return (
    <main className="sm:px-4 px-2 max-width">
      {/* Navs Section */}
      <section className="py-5">
        <Navigation title={"All areas in Dubai"} />
      </section>
      {/* Hero Section with Search */}
      <HeroSearch
        title="All areas in Dubai"
        Cover_Image={areas_bg}
        InputActiveValue={searchParams.input && searchParams.input}
        SelectedAreas={searchParams.areas ? searchParams.areas.split(",") : []}
        className="!bg-black/5"
        PlaceHolder="Search Area Name"
        OptionType={["area"]}
      />
      {/* Developers Section */}
      <section className="mt-12">
        <div className="max-width mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {Data &&
            Data?.map((items: any, i: number) => {
              const LogoImage = urlForImage(items.cover_image.asset._ref).url();
              return (
                <div
                  key={i}
                  className="w-full h-full border rounded-lg overflow-hidden sm:min-h-[365px] xs:min-h-[385px] min-h-[375px]"
                >
                  {/* <div key={i} className='w-full h-full border rounded-lg overflow-hidden xs:min-h-[365px] min-h-[375px]'> */}
                  <div className="w-full h-full sm:max-h-[220px] max-h-[242px] overflow-hidden">
                    <Link
                      href={
                        "areas/" +
                        (items?.slug?.current ?? CreateSlug(items.title))
                      }
                    >
                      <Image
                        unoptimized
                        fill
                        className="!relative !w-full !h-full object-cover hover:scale-110 transition-all duration-500"
                        src={LogoImage}
                        alt={LogoImage + "Image"}
                      />
                    </Link>
                  </div>
                  <div className="xs:p-5 p-3">
                    <Link
                      href={
                        "areas/" +
                        (items?.slug?.current ?? CreateSlug(items.title))
                      }
                      className="text-lg font-medium hover:text-secondary transition-all duration-300"
                    >
                      {items.title}
                    </Link>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-[#8f8f8f]">
                        Price from {items?.price?.toLocaleString()} AED
                      </p>
                      <Link
                        className="text-xs leading-relaxed font-semibold text-secondary underline hover:no-underline"
                        href={"#"}
                      >
                        Open Area Guide
                      </Link>
                    </div>
                    {/* Buy and Rent Buttons */}
                    <div className="flex items-center gap-2 mt-4">
                      <Link
                        className="flex-1"
                        href={items.title ? "/buy/?Input=" + items.title : "/"}
                      >
                        <button className="w-full rounded-lg py-[7px] bg-primary text-white hover:text-primary hover:bg-white border hover:border-primary transition-all duration-300">
                          Buy Property
                        </button>
                      </Link>
                      <Link
                        className="flex-1"
                        href={items.title ? "/rent/?Input=" + items.title : "/"}
                      >
                        <button className="w-full rounded-lg py-[7px] bg-secondary text-white hover:text-secondary hover:bg-white border hover:border-secondary transition-all duration-300">
                          Rent Property
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Areas;
