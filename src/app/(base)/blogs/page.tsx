import React from "react";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../sanity/lib/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import HeroSearch from "@/widgets/HeroSearch";
import areas_bg from "@/assets/images/areas-bg.jpg";
import Navigation from "@/shared/Navigation";
import { Blogbox } from "@/shared/blogbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "List of All Blogs in Kingdom Capital",
  openGraph: {
    title: "Blogs",
    description: "List of All Blogs in Kingdom Capital",
  },
};

export interface DeveloperSearchParamsI {
  input: string;
}

const Blogs = async ({
  searchParams,
}: {
  searchParams: DeveloperSearchParamsI;
}) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'blog'
        ${
          searchParams.input && searchParams.input !== ""
            ? `&& slug.current == '${searchParams.input}'`
            : ""
        }
        ] {
            title,
            slug,
            cover_image,
        }`,
  });

  return (
    <main className="sm:px-4 px-2 max-width">
      {/* Navs Section */}
      <section className="py-5">
        <Navigation title={"Blogs"} wrapperClassName="!block" />
      </section>
      {/* Hero Section with Search */}
      <HeroSearch
        title="Blogs"
        Cover_Image={areas_bg}
        InputActiveValue={searchParams.input && searchParams.input}
        className="!bg-black/5"
        PlaceHolder="Search Blog"
        OptionType={["blog"]}
      />
      {/* Developers Section */}
      <section className="mt-12">
        <div className="max-width mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {Data &&
            Data.map((items: any, i: number) => {
              const LogoImage = urlForImage(items.cover_image.asset._ref).url();
              return (
                <Blogbox
                  key={i}
                  title={items.title}
                  CoverImage={LogoImage}
                  slug={items?.slug?.current}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
