import React from "react";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import HeroSearch from "@/widgets/HeroSearch";
import agents_bg from "@/assets/images/agents-bg.jpg";
import Navigation from "@/shared/Navigation";
import AgentsBox from "@/shared/AgentsBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agents",
  description: "List of All Agents in Kingdom Capital",
  openGraph: {
    title: "Agents",
    description: "List of All Agents in Kingdom Capital",
  },
};

export interface DeveloperSearchParamsI {
  input: string;
}

const Agents = async ({
  searchParams,
}: {
  searchParams: DeveloperSearchParamsI;
}) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'agent'
        ${
          searchParams.input && searchParams.input !== ""
            ? `&& name == '${searchParams.input}' || slug.current == '${searchParams.input}'`
            : ""
        }
        ] {
            name,
            image,
            phone,
            slug,
            language,
        }`,
  });

  return (
    <main className="sm:px-4 px-2 max-width">
      {/* Navs Section */}
      <section className="py-5">
        <Navigation title={"Agents"} />
      </section>
      {/* Hero Section with Search */}
      <HeroSearch
        wrapperClassname="!mt-0"
        title="Our Agents"
        description="Meet and contact the agents working at Kingdom Capital Real Estate"
        Cover_Image={agents_bg}
        InputActiveValue={searchParams.input && searchParams.input}
        className="!bg-black/5"
        PlaceHolder="Search Agent Name"
        OptionType={["agent"]}
      />
      {/* Developers Section */}
      <section className="mt-12">
        <div className="max-width mx-auto grid lg:grid-cols-4 md:grid-cols-3 min-[480px]:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
          {Data &&
            Data.map((items: any, i: number) => {
              const AgentImage =
                items.image && urlForImage(items.image.asset._ref).url();
              return (
                <AgentsBox
                  key={i}
                  AgentImage={AgentImage}
                  name={items.name}
                  languages={items.language && items.language}
                  Phone={items.phone.replaceAll(" ", "") ?? ""}
                  slug={items?.slug?.current}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Agents;
