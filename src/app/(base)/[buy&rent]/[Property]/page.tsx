import { SanityFetch } from "@/lib/SanityFetch";
import Navigation from "@/shared/Navigation";
import Content from "@/widgets/Property/Content";
import Hero from "@/widgets/Property/Hero";
import Image from "next/image";
import Features from "@/widgets/Property/Features";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import Mortgage_Calculator from "@/widgets/Property/Mortgage_Calculator";
import ContactUs_White from "@/shared/ContactUs_White";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { Suspense } from "react";
import PropertiesSliderSection from "@/PageSections/PropertiesSliderSection";
import { SchemaMarkup } from "@/lib/schemaMarkup";
import { Metadata, ResolvingMetadata } from "next";

interface ParamsI {
  params: { Property: string; "buy&rent": string };
}

export async function generateMetadata(
  { params }: ParamsI,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const Data = await SanityFetch({
    Query: `*[_type == 'property' && slug.current == '${params.Property}' ] {
            title,
            schemaMarkup,
            meta_title,
            meta_description
          }[0]`,
  });

  return {
    title:
      Data?.meta_title ?? Data?.title
        ? Data?.title
        : "Kingdom Capital - Real Estate",
    description: Data?.meta_description ?? (await parent).description ?? "",
  };
}

const PropertyPage = async ({ params }: ParamsI) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'property' && slug.current == '${params.Property}' ] {
            title,
            unit_reference,
            slug,
            baths,
            beds,
            squareft,
            parking,
            location,
            price,
            image,
            avaibility,
            property_name,
            emirate,
            permit_number,
            unit_reference,
            purpose,
            content,
            status,
            property_type,
            community_description,
            project -> {
                project_type
            },
            area -> {
                title,
                slug
            },
            agent -> {
              name,
              image,
              phone,
              email,
              slug,
              language
            },
            features_amenities {
                indoor,
                outdoor,
                lot,
                image
            },
            sections[] {
                ...,
                title,
                project -> {
                    title,
                    project_type,
                    slug
                }
            },
            _createdAt,
            _updatedAt,
            schemaMarkup
          }[0]`,
  });

  const AreaLink =
    Data?.area && Data?.area?.slug?.current
      ? "/areas/" + Data?.area?.slug?.current
      : Data?.area?.title
      ? "/areas/" + CreateSlug(Data?.area?.title)
      : "";

  return (
    <main className="max-width sm:pb-20 pb-10">
      {/* Schema Markup */}
      {Data?.schemaMarkup && <SchemaMarkup schema={Data.schemaMarkup} />}

      <div className="flex md:flex-col flex-col-reverse">
        {/* Navs Section */}
        <section className="md:mt-6 md:px-2 sm:px-6 xs:px-4 px-2">
          <Navigation
            Buttons={false}
            from={[
              {
                title: "Buy",
                link: "/buy",
              },
            ]}
            title={Data.title}
            PrefetchHomeLink={false}
          />
        </section>
        {/* Hero Section */}
        <section className="md:mt-6 md:px-2">
          <Hero Data={Data} />
        </section>
      </div>
      {/* Content Section */}
      <section className="md:mt-6 mt-4 md:px-2 sm:px-6 xs:px-4 px-2">
        <Content Data={Data} />
      </section>
      {/* Features Section */}
      {Data?.features_amenities && (
        <section className="md:mt-20 mt-6 md:px-2 sm:px-6 xs:px-4 px-2">
          <Features Data={Data?.features_amenities} />
        </section>
      )}
      {/* Community Description Section */}
      {Data.community_description && (
        <section className="md:mt-20 mt-10 md:px-2 sm:px-6 xs:px-4 px-2">
          <div className="flex flex-col gap-4 max-w-[515px]">
            <h3 className="text-2xl font-medium">Community Description</h3>
            <p className="text-sm">{Data.community_description}</p>
            <Link
              href={AreaLink}
              className="group text-xs cursor-pointer text-secondary hover:text-primary transition-all duration-300 font-medium flex items-center gap-0.5"
            >
              LEARN MORE ABOUT
              <ChevronRight
                className="group-hover:translate-x-1 transition-all duration-300"
                size={16}
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </section>
      )}
      {/* Mortgage Calculator Section */}
      {params["buy&rent"] !== "rent" && (
        <section className="md:mt-20 mt-10 md:px-2 sm:px-6 xs:px-4 px-2">
          <Mortgage_Calculator Price={Data.price} />
        </section>
      )}
      {/* Contact Us Section */}
      <section className="md:mt-20 mt-10 md:px-2">
        <div className="mb-8 px-2">
          <h3 className="text-2xl font-medium">Explore the Area</h3>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1">
              <MapPin size={20} />
              {Data.area && (
                <Link
                  href={AreaLink}
                  className="text-base cursor-pointer underline hover:no-underline text-black"
                >
                  {Data.area.title}
                </Link>
              )}
            </div>
            <Link
              href={AreaLink}
              className="group text-xs cursor-pointer text-secondary hover:text-primary transition-all duration-300 font-medium flex items-center gap-0.5"
            >
              VIEW LOCAL INFORMATION
              <ChevronRight
                className="group-hover:translate-x-1 transition-all duration-300"
                size={16}
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <ContactUs_White />
        
      </section>

      {/* Properties Sliders Section */}
      {Data &&
        Data.sections &&
        Data.sections.map((item: any, i: number) => (
          <section key={i} className="mt-14">
            <Suspense fallback={null}>
              <PropertiesSliderSection
                Title={item.title}
                Area={Data.area.title}
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
        ))}
    </main>
  );
};

export default PropertyPage;
