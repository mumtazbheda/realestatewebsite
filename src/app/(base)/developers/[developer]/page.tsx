import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import btn_icon from "@/assets/Svgs/btn-icon-arrow-white.svg";
import Projects from "@/PageSections/Projects";
import Developers from "@/PageSections/Developers";
import ContactUs from "@/shared/ContactUs";
import MoreAreas from "@/PageSections/MoreAreas";
import PropertiesList from "@/PageSections/PropertiesList";
import Content from "@/PageSections/Content";
import ContentwithSlider from "@/PageSections/ContentwithSlider";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../../sanity/lib/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import ContactExperts from "@/PageSections/ContactExperts";
import ReadyToSell from "@/PageSections/ReadyToSell";
import AgentSection from "@/PageSections/AgentSection";
import Image from "next/image";
import clock from "@/assets/Svgs/clock.svg";
import wallet from "@/assets/Svgs/wallet.svg";
import building from "@/assets/Svgs/building.svg";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import { Metadata, ResolvingMetadata } from "next";

interface ParamsI {
  params: { developer: string };
}

export async function generateMetadata(
  { params }: ParamsI,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const DeveloperSlug = CreateSlug(params.developer);

  const Data = await SanityFetch({
    Query: `*[_type == 'developer' && slug.current == '${DeveloperSlug}' ] {
            name,
            meta_title,
            meta_description
          }[0]`,
  });

  return {
    title:
      Data?.meta_title ?? Data?.name
        ? Data?.name
        : "Kingdom Capital - Real Estate",
    description: Data?.meta_description ?? (await parent).description ?? "",
  };
}

const Developer = async ({ params }: { params: { developer: string } }) => {
  const DeveloperSlug = CreateSlug(params.developer);

  const Data = await SanityFetch({
    Query: `*[_type == 'developer' && slug.current == '${DeveloperSlug}' ] {
            name,
            cover_image,
            founded,
            price_from,
            sections[] {
                ...,
                title,
                agent ->
            },
            schemaMarkup
          }[0]`,
  });

  const projectsCount = await SanityFetch({
    Query: `*[_type == 'project' && references(*[_type == "developer" && slug.current == '${DeveloperSlug}']._id) ] `,
  });

  const cover_Image =
    Data && Data.cover_image && urlForImage(Data.cover_image.asset._ref).url();

  return (
    <main className="max-width py-6 md:px-2 sm:px-4 px-2">
      {/* Schema Markup */}
      {Data?.schemaMarkup && <SchemaMarkup schema={Data.schemaMarkup} />}
      <div className="flex flex-col-reverse">
        {/* Hero Section */}
        <section className="mt-5">
          <div className="relative max-md:h-full w-full flex md:flex-row flex-col max-lg:items-center min-h-[440px] h-[50vh] rounded-lg md:overflow-hidden">
            <div className="text-white z-10 lg:flex-[0_0_500px] md:w-[60%] w-full lg:h-full h-fit max-lg:rounded-lg max-md:rounded-t-none max-md:rounded-b-lg max-lg:m-[30px] max-md:m-0 overflow-hidden">
              <div className="flex flex-col gap-2 bg-primary lg:p-[50px] xs:p-[25px] p-5">
                <div className="text-lg">About Developer</div>
                <h1 className="md:text-[42px] text-[32px] leading-none font-bold">
                  {Data.name && Data.name}
                </h1>
              </div>
              <div className="bg-secondary flex flex-col gap-4 h-full lg:p-[50px] xs:p-[25px] p-5">
                <div className="flex items-center">
                  <div className="flex-1 flex items-center gap-4 md:text-lg">
                    <Image src={clock} alt="clock" /> Projects
                  </div>
                  <div className="flex-1 md:text-2xl text-xl font-semibold">
                    {projectsCount.length && projectsCount.length}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 flex items-center gap-4 md:text-lg">
                    <Image src={wallet} alt="wallet" /> Founded in
                  </div>
                  <div className="flex-1 md:text-2xl text-xl font-semibold">
                    {Data.founded && Data.founded} y.
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 flex items-center gap-4 md:text-lg">
                    <Image src={building} alt="building" /> Price from
                  </div>
                  <div className="flex-1 md:text-2xl text-xl font-semibold">
                    {Data.price_from && Data.price_from.toLocaleString()} AED
                  </div>
                </div>
                <hr className="border-white/30" />
                <button className="w-fit max-md:min-w-[200px] max-md:font-medium md:text-base text-sm whitespace-nowrap rounded-lg bg-white text-secondary hover:text-white hover:bg-primary py-2 px-6 transition-all duration-300">
                  Find Property
                </button>
              </div>
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href={"/"}
              className="group hover:text-secondary transition-all duration-300 flex items-center text-xs gap-0.5"
            >
              <ChevronLeft
                className="mt-0.5 group-hover:stroke-secondary group-hover:-translate-x-1 transition-all duration-300"
                size={16}
                strokeWidth={1}
              />
              <span>Go to Search</span>
            </Link>
            <div className="flex items-center text-xs text-[#bbb] gap-1">
              <Link
                href={"/"}
                className="hover:text-secondary transition-all duration-300"
              >
                Home
              </Link>
              <ChevronRight className="mt-0.5" size={16} strokeWidth={1} />
              <Link
                href={"/developers"}
                className="hover:text-secondary transition-all duration-300"
              >
                Developers
              </Link>
              <ChevronRight className="mt-0.5" size={16} strokeWidth={1} />
              <div>{Data.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 max-md:hidden">
            <button className="text-sm text-secondary border border-transparent hover:border-secondary transition-all duration-300 flex items-center gap-2 py-1 px-2.5 rounded-md">
              <Heart size={15} />
              <span>SAVE</span>
            </button>
            <button className="text-sm text-secondary border border-transparent hover:border-secondary transition-all duration-300 flex items-center gap-2 py-1 px-2.5 rounded-md">
              <Share2 size={15} />
              <span>SHARE</span>
            </button>
          </div>
        </div>
      </div>

      {Data &&
        Data.sections &&
        Data.sections.map((item: any, i: number) => {
          {
            /* Agents Section */
          }
          if (item._type === "agents_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <Suspense fallback={null}>
                  <AgentSection title={item.title} developer={DeveloperSlug} />
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
                  <Projects amount={14} developer={DeveloperSlug} />
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
            const AgentImage = urlForImage(item.agent.image.asset._ref).url();
            return (
              <section key={i} className="mt-20">
                <ReadyToSell
                  title={item.title}
                  SubTitle={item.sub_title}
                  ShortSummary={item.short_summary}
                  Agent={{
                    name: item.agent.name,
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
            /* Areas Grid Section */
          }
          if (item._type === "more_areas_section") {
            return (
              <Suspense key={i} fallback={null}>
                <MoreAreas
                  Title={item.title}
                  Two_Images_Grid={item.grid_images === "two_images_grid"}
                  Five_Images_Grid={item.grid_images === "five_images_grid"}
                  developer={DeveloperSlug}
                />
              </Suspense>
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

export default Developer;
