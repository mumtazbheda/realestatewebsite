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
import { urlForImage } from "../../../../../../sanity/lib/image";
import { CreateSlug, DecodeSlug } from "@/lib/helper/CreateSlug";
import ContactExperts from "@/PageSections/ContactExperts";
import ReadyToSell from "@/PageSections/ReadyToSell";
import AgentSection from "@/PageSections/AgentSection";
import PropertiesSliderSection from "@/PageSections/PropertiesSliderSection";
import Logo from "@/assets/images/Logo.png";
import PropertyInformationSection from "@/PageSections/PropertyInformationSection";
import PopupForm from "@/shared/PopupForm";
import FloorPlans from "@/PageSections/FloorPlans";
import FAQSection from "@/PageSections/FAQSection";
import ReflectionFloorPlans, {
  ReflectionFloorPlanI,
} from "@/PageSections/ReflectionFloorPlans";
import { ProjectTypes } from "@/lib/constants";
import Navigation from "@/shared/Navigation";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import { Metadata, ResolvingMetadata } from "next";

interface ParamType {
  params: { Area: string; Project: string };
}

export async function generateMetadata(
  { params }: ParamType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const Data = await GetProjectData({ params });

  return {
    title:
      Data?.meta_title ?? Data?.title
        ? Data?.title
        : "Kingdom Capital - Real Estate",
    description: Data?.meta_description ?? (await parent).description ?? "",
  };
}

const GetProjectData = async ({ params }: ParamType) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'project' && slug.current == '${params.Project}' ] {
            title,
            location,
            cover_image,
            area -> {
                title,
                slug
            },
            developer -> {
                name,
                image,
                slug
            },
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

// Page
const Project = async ({ params }: ParamType) => {
  const Data = await GetProjectData({ params });

  const AreaSlug = Data?.area?.slug?.current
    ? Data?.area?.slug?.current
    : DecodeSlug(params.Area);

  const cover_Image = Data?.cover_image?.asset?._ref
    ? urlForImage(Data?.cover_image?.asset._ref).url()
    : "";
  const developers_Logo =
    Data.developer &&
    Data.developer.image &&
    urlForImage(Data.developer.image.asset._ref).url();

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
                {Data.title}
              </h1>
              <div className="flex xs:flex-row flex-col items-center gap-2">
                <PopupForm>
                  <button className="xs:w-fit w-full whitespace-nowrap group text-white rounded-lg bg-secondary flex items-center gap-4 py-2 px-5">
                    Property Inquiry{" "}
                    <Image
                      className="w-4 group-hover:translate-x-1 transition-all duration-300"
                      src={btn_icon}
                      alt="btn_icon"
                    />
                  </button>
                </PopupForm>
                <PopupForm>
                  <button className="xs:w-fit w-full whitespace-nowrap rounded-lg bg-white text-secondary hover:text-white hover:bg-secondary py-2 px-4 transition-all duration-300">
                    Download Brochure
                  </button>
                </PopupForm>
              </div>
            </div>
            <div className="max-md:-order-1 w-full h-full max-lg:absolute max-md:relative">
              <div className="w-full h-full relative">
                <Image
                  unoptimized
                  fill
                  className="!relative !w-full !h-full object-cover max-md:min-h-[260px] max-md:max-h-[50vh] max-md:rounded-t-lg"
                  src={cover_Image}
                  alt="Image1"
                />
                <div className="flex items-center gap-6 absolute right-5 top-5 z-20">
                  {/* <Image className='!relative z-20 w-fit !h-[65px] object-contain' src={Logo} alt='Logo' /> */}
                  {Data.developer && developers_Logo && (
                    <>
                      {/* <hr className='bg-white h-[65px] w-px rotate-180' /> */}
                      <Image
                        unoptimized
                        fill
                        className="!relative z-20 max-w-[125px] !h-[65px] object-contain"
                        src={developers_Logo}
                        alt={Data.developer.name}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section>
          <Navigation
            from={[
              {
                title: "Areas",
                link: "/areas",
              },
              {
                title: Data.area.title,
                link: `/areas/${params.Area}`,
              },
            ]}
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
              <section key={i} className="mt-14">
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
            /* Floor Plan Section */
          }
          if (item._type === "floor_plan_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <FloorPlans
                  title={item.title}
                  FloorPlans={
                    item.floor_plans &&
                    item.floor_plans.map((plans: any, i: number) => ({
                      title: plans.title && plans.title,
                      floor_plan_type:
                        plans.floor_plan_type && plans.floor_plan_type,
                      type: plans.type && plans.type,
                      total_area: plans.total_area && plans.total_area,
                      starting_price:
                        plans.starting_price && plans.starting_price,
                      floor_plan_image:
                        plans.floor_plan_image && plans.floor_plan_image,
                    }))
                  }
                />
              </section>
            );
          }

          {
            /* Payment Plan Section */
          }
          if (item._type === "payment_plan_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <div className="max-w-screen-lg">
                  {item.title && (
                    <h2 className="text-2xl font-medium mb-8">{item.title}</h2>
                  )}
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-5 border-y">
                    {item.payment_plans &&
                      item.payment_plans.map((plan: any, i: number) => (
                        <div key={i}>
                          <h4 className="text-2xl text-secondary font-semibold">
                            {plan.value}
                          </h4>
                          <div className="text-sm">{plan.type}</div>
                        </div>
                      ))}
                  </div>
                </div>
              </section>
            );
          }

          {
            /* Property Information Section */
          }
          if (item._type === "property_information_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <PropertyInformationSection
                  area={
                    Data.area && Data.area.title ? Data.area.title : undefined
                  }
                  location={Data.location}
                  developer={
                    Data.developer && Data.developer.name
                      ? Data.developer.name
                      : undefined
                  }
                  status={item.status}
                  Type={item.project_type}
                  area_From={item.area_from}
                  available_units={item.units}
                  payment_plan={item.payment_plan}
                />
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
              items?.asset?._ref ? urlForImage(items?.asset?._ref)?.url() : ""
            );
            return (
              <section key={i} className="mt-14">
                <ContentwithSlider
                  About_Section={item.about_section}
                  About_Section_Properties={{
                    area: item.area && item.area,
                    available_units:
                      item.available_units && item.available_units,
                    handover: item.handover && item.handover,
                    starting_price: item.starting_price && item.starting_price,
                  }}
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

          {
            /* FAQ Section */
          }
          if (item._type === "faq_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <FAQSection
                  title={item.title}
                  FAQs={
                    item.faqs &&
                    item.faqs.map((items: any) => ({
                      question: items.question,
                      answer: items.answer,
                    }))
                  }
                />
              </section>
            );
          }

          {
            /* Reflection Floor Plans Section */
          }
          if (item._type === "reflection_floor_plan_section") {
            const Reflection_Floor_Plans =
              item.reflection_floor_plans &&
              item.reflection_floor_plans.map((plans: any) => {
                const floor_image =
                  plans.floor_image &&
                  urlForImage(plans.floor_image.asset._ref).url();
                const category = ProjectTypes.find(
                  (items) => items.value === plans.category
                );
                const FloorPlan: ReflectionFloorPlanI = {
                  floor_image: floor_image,
                  type: plans.type,
                  unit_type: plans.unit_type,
                  category: category?.title,
                  total_area: plans.total_area,
                };
                return FloorPlan;
              });

            return (
              <section key={i} className="mt-14">
                <ReflectionFloorPlans
                  key={i}
                  title={item.title}
                  ReflectionFloorPlans={Reflection_Floor_Plans}
                />
              </section>
            );
          }
        })}
    </main>
  );
};

export default Project;
