import React from "react";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import HeroSearch from "@/widgets/HeroSearch";
import developers_bg from "@/assets/images/bg-developers.jpg";
import Navigation from "@/shared/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developers",
  description: "List of All Developers in Kingdom Capital",
  openGraph: {
    title: "Developers",
    description: "List of All Developers in Kingdom Capital",
  },
};

export interface DeveloperSearchParamsI {
  input: string;
  areas: string;
}

const Developers = async ({
  searchParams,
}: {
  searchParams: DeveloperSearchParamsI;
}) => {
  const areas =
    searchParams.areas &&
    JSON.stringify(searchParams.areas.split(",,")).replaceAll('"', "'");

  const Data = await SanityFetch({
    Query: `*[_type == 'developer'
        ${
          searchParams.input && searchParams.input !== ""
            ? `&& name == '${searchParams.input}'`
            : ""
        }
        ${
          searchParams.areas && searchParams.areas !== ""
            ? `&& references(*[_type == "area" && title in ${areas}]._id)`
            : ""
        }] | order(orderRank) {
            name,
            image,
            slug
        }`,
  });

  return (
    <main className="sm:px-4 px-2 max-width">
      {/* Navs Section */}
      <section className="py-5">
        <Navigation title={"Developers in Dubai"} />
      </section>
      {/* Hero Section with Search */}
      <HeroSearch
        title="Developers in Dubai"
        Cover_Image={developers_bg}
        InputActiveValue={searchParams.input && searchParams.input}
        SelectedAreas={searchParams.areas ? searchParams.areas.split(",") : []}
        AreaDropDown={true}
        PlaceHolder="Search Developer Name"
        OptionType={["developer"]}
        className="!bg-none"
      />
      {/* Developers Section */}
      <section>
        <h2 className="sm:text-2xl text-[22px] font-semibold sm:my-6 my-5">Our Partners</h2>
        <div className="max-width mx-auto grid md:grid-cols-4 grid-cols-2 gap-5">
          {Data &&
            Data.map((items: any, i: number) => {
              const LogoImage =
                items.image && urlForImage(items.image.asset._ref).url();
              return (
                <div
                  key={i}
                  className="relative md:!min-h-[220px] !min-h-[135px] rounded-lg border hover:border-secondary transition-all duration-300"
                >
                  <Link
                    href={
                      items?.slug?.current
                        ? "/developers/" + items?.slug?.current
                        : "/developers/" + CreateSlug(items.name)
                    }
                    className="flex flex-col gap-2.5 items-center justify-center h-full w-full"
                  >
                    {LogoImage && (
                      <Image
                        fill
                        unoptimized
                        className="!relative !object-contain !w-1/2 !h-[80px]"
                        src={LogoImage}
                        alt={items.name}
                      />
                    )}
                    <h4 className="text-sm">{items.name}</h4>
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Developers;
