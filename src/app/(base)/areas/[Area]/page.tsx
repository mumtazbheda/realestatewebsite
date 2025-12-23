import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import btn_icon from "@/assets/Svgs/btn-icon-arrow-white.svg";
import Image from "next/image";
import Projects from "@/PageSections/Projects";
import Developers from "@/PageSections/Developers";
import ContactUs from "@/shared/ContactUs";
import MoreAreas from "@/PageSections/MoreAreas";
import PropertiesList from "@/PageSections/PropertiesList";
import Content from "@/PageSections/Content";
import ContentwithSlider from "@/PageSections/ContentwithSlider";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../../sanity/lib/image";
import { DecodeSlug } from "@/lib/helper/CreateSlug";
import ContactExperts from "@/PageSections/ContactExperts";
import ReadyToSell from "@/PageSections/ReadyToSell";
import AgentSection from "@/PageSections/AgentSection";
import PropertiesSliderSection from "@/PageSections/PropertiesSliderSection";
import Navigation from "@/shared/Navigation";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import { Metadata, ResolvingMetadata } from "next";

interface ParamsI {
  params: { Area: string };
}

export async function generateMetadata(
  { params }: ParamsI,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const Data = await GetAreasData({ params });

  return {
    title:
      Data?.meta_title ?? Data?.title
        ? Data?.title
        : "Kingdom Capital - Real Estate",
    description: Data?.meta_description ?? (await parent).description ?? "",
  };
}

const GetAreasData = async ({ params }: ParamsI) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'area' && slug.current == '${
      params.Area
    }' || title == '${DecodeSlug(params.Area)}' ] {
            title,
            cover_image,
            price,
            slug,
            sections[] {
                ...,
                title,
                agent ->
            },
            schemaMarkup,
            meta_title,
            meta_description
          }[0]`,
  });
  return Data;
};

const Area = async ({ params }: ParamsI) => {
  const Data = await GetAreasData({ params });

  const cover_Image =
    Data?.cover_image && urlForImage(Data.cover_image.asset._ref).url();

  const AreaSlug = Data?.slug?.current
    ? Data?.slug?.current
    : DecodeSlug(params.Area);

  return (
    <main className="max-width py-6 md:px-2 sm:px-4 px-2">
      {/* Schema Markup */}
      {Data?.schemaMarkup && <SchemaMarkup schema={Data.schemaMarkup} />}

      <div className="w-full flex flex-col-reverse">
        {/* Hero Section */}
        <section className="mt-6">
          <div className="relative max-md:h-full w-full flex md:flex-row flex-col max-lg:items-end min-h-[440px] h-[50vh] rounded-lg md:overflow-hidden">
            <div className="z-10 bg-primary lg:flex-[0_0_500px] md:w-[70%] w-full lg:h-full h-fit flex flex-col justify-end max-md:items-center max-md:text-center gap-8 md:p-[50px] p-[25px] max-lg:m-[30px] max-md:m-0 max-lg:rounded-lg max-md:rounded-t-none max-md:rounded-b-lg">
              <h1 className="capitalize md:text-[42px] text-[32px] leading-none text-white font-bold">
                Properties in {Data.title}
              </h1>
              <Link href={"/buy?Input=" + Data.title}>
                <button className="w-fit group text-white rounded-lg bg-secondary flex items-center gap-4 py-2 px-10">
                  Find Property{" "}
                  <Image
                    className="w-4 group-hover:translate-x-1 transition-all duration-300"
                    src={btn_icon}
                    alt="btn_icon"
                  />
                </button>
              </Link>
            </div>
            {Data.cover_image && (
              <div className="max-md:-order-1 h-full w-full max-lg:absolute max-md:relative">
                <Image
                  unoptimized
                  fill
                  className="!relative !w-full !h-full object-cover max-md:min-h-[260px] max-md:max-h-[50vh] max-md:rounded-t-lg"
                  src={cover_Image}
                  alt="Image1"
                />
              </div>
            )}
          </div>
        </section>

        {/* Navigation */}
        <section>
          <Navigation
            from={[{ title: "Areas", link: "/areas" }]}
            title={Data.title}
          />
        </section>
      </div>
      {Data &&
        Data.sections &&
        Data.sections.map((item: any, i: number) => {
          {
            /* Properties Slider Section */
          }
          if (item._type === "properties_slider_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <Suspense fallback={null}>
                  <PropertiesSliderSection
                    Title={item.title}
                    Area={AreaSlug}
                    bySale_or_rent={
                      item.by_avaibility === true ? item.avaibility : undefined
                    }
                    ByCatogery={
                      item.by_catogery === true ? item.catogery : undefined
                    }
                    ByProject={
                      item.by_project === true
                        ? item.project.slug.current
                        : undefined
                    }
                  />
                </Suspense>
              </section>
            );
          }

          {
            /* Agents Section */
          }
          if (item._type === "agents_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <Suspense fallback={null}>
                  <AgentSection title={item.title} Area={AreaSlug} />
                </Suspense>
              </section>
            );
          }

          {
            /* Projects Section */
          }
          if (item._type === "projects_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <Suspense fallback={null}>
                  <Projects Area={AreaSlug} />
                </Suspense>
              </section>
            );
          }

          {
            /* Contact Experts Section */
          }
          if (item._type === "contact_expert_section") {
            return (
              <section key={i} className="mt-14">
                <ContactExperts title={item.title} />
              </section>
            );
          }

          {
            /* Content With Slider Section */
          }
          if (item._type === "content_slider_section") {
            const SliderImages = item.slider_images.map((items: any) =>
              urlForImage(items.asset._ref).url()
            );
            return (
              <section key={i} className="mt-14">
                <ContentwithSlider
                  title={item.title}
                  SliderImages={SliderImages}
                  TopContent={item.top_content}
                  BottomContent={item.bottom_content}
                  Large_Slider={item.large_slider}
                  Short_Slider={item.short_slider}
                  PriceValidity={item.price_validity}
                  PriceValidityText={item?.price_validity_text}
                />
              </section>
            );
          }

          {
            /* Ready to Sell Section */
          }
          if (item._type === "readyToSell_section") {
            const AgentImage =
              item.agent &&
              item.agent.image &&
              urlForImage(item.agent.image.asset._ref).url();
            return (
              <section key={i} className="mt-20">
                <ReadyToSell
                  title={item.title}
                  SubTitle={item.sub_title}
                  ShortSummary={item.short_summary}
                  Agent={{
                    name: item.agent && item.agent.name && item.agent.name,
                    Image: AgentImage,
                  }}
                />
              </section>
            );
          }

          {
            /* Content with Images Section */
          }
          if (item._type === "content_section") {
            const ContentImages =
              item.content_images &&
              item.content_images.map((items: any) =>
                urlForImage(items.asset._ref).url()
              );
            return (
              <section key={i} className="mt-14">
                <Content
                  title={item.title}
                  ShowImages={item.show_images}
                  content={item.content}
                  Images={ContentImages}
                  ImagesOnLeft={item.left_images_side}
                  PriceValidity={item.price_validity}
                  PriceValidityText={item?.price_validity_text}
                />
              </section>
            );
          }

          {
            /* Developers Section */
          }
          if (item._type === "developers_section") {
            return (
              <Suspense key={i} fallback={null}>
                <section className="mt-14">
                  <Developers title={item.title} Area={AreaSlug} />
                </section>
              </Suspense>
            );
          }

          {
            /* More Areas Section */
          }
          if (item._type === "more_areas_section") {
            return (
              <Suspense key={i} fallback={null}>
                <MoreAreas
                  Title={item.title}
                  Two_Images_Grid={item.grid_images === "two_images_grid"}
                  Five_Images_Grid={item.grid_images === "five_images_grid"}
                />
              </Suspense>
            );
          }

          {
            /* Properties Details List Section */
          }
          if (item._type === "properties_list_section") {
            return (
              <section key={i} className="mt-14">
                <Suspense fallback={null}>
                  <PropertiesList Area={AreaSlug} />
                </Suspense>
              </section>
            );
          }

          {
            /* ContactUs Section */
          }
          if (item._type === "contact_section") {
            return (
              <section key={i} className="mt-14">
                <ContactUs title={item.title} />
              </section>
            );
          }
        })}
    </main>
  );
};

export default Area;
