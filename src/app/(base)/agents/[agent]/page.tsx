import { SanityFetch } from "@/lib/SanityFetch";
import { DecodeSlug } from "@/lib/helper/CreateSlug";
import Image from "next/image";
import React, { Suspense } from "react";
import logo from "@/assets/images/Logo.png";
import { Star } from "lucide-react";
import en from "@/assets/Svgs/en.svg";
import ar from "@/assets/Svgs/ar.svg";
import de from "@/assets/Svgs/de.svg";
import fr from "@/assets/Svgs/fr.svg";
import ru from "@/assets/Svgs/ru.svg";
import it from "@/assets/Svgs/it.svg";
import hi from "@/assets/Svgs/hi.svg";
import ur from "@/assets/Svgs/ur.svg";
import tr from "@/assets/Svgs/Turkey-Flag.svg";
import bn from "@/assets/Svgs/bosnian-flag.svg";
import Navigation from "@/shared/Navigation";
import globe_icon from "@/assets/Svgs/globus.svg";
import Link from "next/link";
import HeroForm from "./HeroForm";
import { associations } from "@/lib/constants";
import PropertiesSliderSection from "@/PageSections/PropertiesSliderSection";
import Projects from "@/PageSections/Projects";
import Areas from "@/PageSections/Areas";
import { urlForImage } from "../../../../../sanity/lib/image";
import BlogSection from "@/PageSections/BlogSection";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import { Metadata, ResolvingMetadata } from "next";

const LaguagesIcons = [
  { title: "English", icon: en },
  { title: "Arabic", icon: ar },
  { title: "Russian", icon: ru },
  { title: "Danish", icon: de },
  { title: "French", icon: fr },
  { title: "Italian", icon: it },
  { title: "Hindi", icon: hi },
  { title: "Urdu", icon: ur },
  { title: "Tarkish", icon: tr },
  { title: "Bosnaian", icon: bn },
];

interface ParamsI {
  params: { agent: string };
}

export async function generateMetadata(
  { params }: ParamsI,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const agentSlug = DecodeSlug(params.agent);

  const Data = await SanityFetch({
    Query: `*[_type == 'agent' && name == '${agentSlug}' || slug.current == '${params.agent}' ] {
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

const Agent = async ({ params }: { params: { agent: string } }) => {
  const agentSlug = DecodeSlug(params.agent);

  const Data = await SanityFetch({
    Query: `*[_type == 'agent' && name == '${agentSlug}' || slug.current == '${params.agent}' ] {
            name,
            image,
            slug,
            phone,
            language,
            association,
            sections[] {
                ...,
                title,
                area ->,
            },
            schemaMarkup
        }[0]`,
  });

  const ProjectsDone = await SanityFetch({
    Query: `*[_type == 'property' && references(*[_type == "agent" && name == '${agentSlug}' || slug.current == '${params.agent}']._id) ]`,
  });

  const for_sale =
    ProjectsDone &&
    ProjectsDone.filter((project: any) => project.avaibility === "buy");
  const for_rent =
    ProjectsDone &&
    ProjectsDone.filter((project: any) => project.avaibility === "rent");
  const association =
    Data?.association &&
    associations.find((association) => association.value === Data?.association);

  const HeroImage = Data?.image
    ? urlForImage(Data?.image?.asset?._ref).url()
    : "";

  return (
    <main className="max-width sm:px-4 px-2">
      {/* Schema Markup */}
      {Data?.schemaMarkup && <SchemaMarkup schema={Data?.schemaMarkup} />}
      <div className="flex flex-col-reverse">
        {/* Hero Section */}
        <section className="flex gap-2  w-full md:min-h-[600px] min-h-[530px] rounded-lg overflow-hidden">
          {/* Left Side */}
          <div className="relative lg:w-[65%] min-[970px]:w-[70%] md:w-[80%] w-full text-white">
            {/* Agent Image */}
            {HeroImage && (
              <Image
                unoptimized
                fill
                className="max-md:hidden !inset-auto !h-[625px] !w-fit !absolute !right-0 pt-10"
                src={HeroImage}
                alt={Data?.name}
              />
            )}
            <div className="w-full h-full flex">
              <div className="w-full flex flex-col h-full">
                <div className="max-md:relative flex justify-between min-[970px]:w-[405px] md:w-[350px] w-full md:basis-[60%] basis-full">
                  <div className="max-md:relative max-md:z-10 max-md:h-[95%] min-[970px]:w-[405px] md:w-[350px] w-[40%] max-md:min-w-[170px] h-full md:bg-white bg-white flex flex-col gap-6 justify-between max-md:items-center max-md:text-center max-md:rounded-br-lg overflow-hidden sm:px-6 px-1 md:py-16 pt-12">
                    <Image
                      className="md:max-w-[200px] max-w-[150px]"
                      src={logo}
                      alt="logo"
                    />
                    <div className="text-secondary flex flex-col gap-6">
                      <div className="capitalize">
                        <h3 className="md:text-2xl text-lg font-medium">
                          {Data?.name}
                        </h3>
                        {association && <h6>{association.title}</h6>}
                      </div>
                      <div>
                        <div className="flex max-md:justify-center items-center gap-1.5">
                          <div className="pr-0.5 font-medium">5</div>
                          {["", "", "", "", ""].map((_, i: number) => (
                            <Star
                              key={i}
                              size={15}
                              fill="#ffdb02"
                              stroke="#ffdb02"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Contact Form Popup */}
                    <div className="w-full md:hidden">
                      <HeroForm />
                    </div>
                  </div>

                  {HeroImage && (
                    <Image
                      unoptimized
                      fill
                      className="md:hidden !inset-auto absolute !bottom-0 !right-0 !w-fit !h-[420px] -mr-9 -mb-[70px]"
                      src={HeroImage}
                      alt={Data?.name}
                    />
                  )}
                </div>
                <div className="max-md:relative max-md:z-10 min-[970px]:w-[405px] md:w-[350px] bg-primary basis-[40%] flex flex-col justify-between gap-2 md:p-6 p-4 pr-16">
                  <div className="flex flex-col gap-2">
                    <h6 className="text-xs">SPEAKING IN LANGUAGES</h6>
                    <div className="flex items-center gap-4 flex-wrap">
                      {Data?.language &&
                        Data?.language.map((lang: string, i: number) => {
                          const languageIcon = LaguagesIcons.find(
                            (item) =>
                              item.title.toLowerCase() === lang.toLowerCase()
                          )?.icon;
                          return (
                            <div
                              key={i}
                              className="text-sm flex items-center gap-2"
                            >
                              <div className="w-6 h-6 rounded-full overflow-hidden">
                                <Image
                                  className="w-full h-full object-cover"
                                  src={languageIcon ? languageIcon : globe_icon}
                                  alt={lang}
                                />
                              </div>
                              <span>{lang}</span>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 mt-2">
                    {for_sale && for_sale.length !== 0 && (
                      <div className="max-md:flex-1 flex flex-col gap-1">
                        <h6 className="text-xs">FOR SALE</h6>
                        <h5 className="font-semibold">
                          {for_sale.length} properties
                        </h5>
                      </div>
                    )}
                    {for_rent && for_rent.length !== 0 && (
                      <div className="max-md:flex-1 flex flex-col gap-1">
                        <h6 className="text-xs">FOR RENT</h6>
                        <h5 className="font-semibold">
                          {for_rent.length} properties
                        </h5>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-grow flex items-center justify-end pr-6 max-md:hidden">
            <div className="min-[970px]:bg-[#f7f7f7] bg-white/70 rounded-lg lg:w-[350px] w-[300px] min-[970px]:relative absolute">
              <HeroForm />
            </div>
          </div>
        </section>

        {/* Navs Section */}
        <section className="py-5">
          <Navigation
            from={[
              {
                title: "Agents",
                link: "/agents",
              },
            ]}
            title={Data?.name}
          />
        </section>
      </div>

      {Data &&
        Data?.sections &&
        Data?.sections.map((item: any, i: number) => {
          {
            /* Properties Slider Section */
          }
          if (item._type === "properties_slider_section") {
            return (
              <section key={i} className="mt-14">
                <Suspense fallback={null}>
                  <PropertiesSliderSection
                    Title={item.title}
                    AgentName={Data?.name}
                    AgentSlug={Data?.slug?.current ?? ""}
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
            /* Projects Section */
          }
          if (item._type === "projects_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <Suspense fallback={null}>
                  <Projects
                    AgentName={Data?.name}
                    AgentSlug={Data?.slug?.current ?? ""}
                    amount={13}
                  />
                </Suspense>
              </section>
            );
          }

          {
            /* Areas Section */
          }
          if (item._type === "areas_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <Suspense fallback={null}>
                  <Areas
                    title={item.title}
                    AgentName={Data?.name}
                    AgentSlug={Data?.slug?.current ?? ""}
                    amount={13}
                  />
                </Suspense>
              </section>
            );
          }

          {
            /* Blog Section */
          }
          if (item._type === "blog_section") {
            return (
              <section key={i} className="mt-14 space-y-8">
                <Suspense fallback={null}>
                  <BlogSection
                    title={item.title}
                    AgentName={Data?.name}
                    AgentSlug={Data?.slug?.current ?? ""}
                  />
                </Suspense>
              </section>
            );
          }
        })}
    </main>
  );
};

export default Agent;
