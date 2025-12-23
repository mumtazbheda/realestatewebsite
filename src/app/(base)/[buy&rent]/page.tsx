import Image from "next/image";
import React, { Suspense } from "react";
import search_image from "@/assets/images/offplan-search.jpg";
import HeroSearchBox from "@/widgets/Hero/HeroSearchBox";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../sanity/lib/image";
import PropertyBox from "@/shared/PropertyBox";
import FiltersSection from "./FiltersSection";
import { GetCookies } from "@/lib/actions/Cookies";
import { ConvertCurrency } from "@/lib/ConvertCurrency";
import { Currency, Loader2 } from "lucide-react";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import {
  ConvertAreaSquare,
  Convert_sqm_to_sqft,
} from "@/lib/ConvertAreaSquare";

export const dynamicParams = false;

export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: { "buy&rent": string };
    searchParams: SearchParamsI;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const param = params["buy&rent"];
  const capitalized = param.charAt(0).toUpperCase() + param.slice(1);

  return {
    title: capitalized,
    description:
      param == "buy"
        ? "List of Properties Available for Buy"
        : "List of Properties Available for Rent",
  };
}

export function generateStaticParams() {
  return [{ "buy&rent": "buy" }, { "buy&rent": "rent" }];
}

export interface SearchParamsI {
  // "type": string
  status: string;
  Input: string;
  propertyType: string;
  "min-area": string;
  "max-area": string;
  "min-bedrooms": string;
  "max-bedrooms": string;
  "min-price": string;
  "max-price": string;
  "sort-by": string;
  page: string;
}

const Buy = async ({
  params,
  searchParams,
}: {
  params: { "buy&rent": string };
  searchParams: SearchParamsI;
}) => {
  const Price = await GetCookies({ name: "price" });
  const Area = await GetCookies({ name: "area" });

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div
          className="flex flex-col gap-6 items-center justify-center lg:h-[380px] h-auto relative w-full bg-cover bg-[center_bottom] bg-no-repeat max-lg:py-[50px]"
          style={{ backgroundImage: `url(${search_image.src})` }}
        >
          <h2 className="lg:text-[40px] text-[32px] leading-none text-center font-bold text-white max-lg:px-[5%]">
            Search Properties for Sale and Rent
          </h2>
          <HeroSearchBox
            buyORrent={params["buy&rent"].toLowerCase()}
            Params={searchParams}
            title={false}
            priceType={Price}
            areaType={Area}
          />
        </div>
      </section>
      {/* Properties Section */}
      <section className="max-width py-12 px-5">
        {/* Filter Section */}
        <FiltersSection
          Price={Price}
          Area={Area}
          FeaturedValue={
            searchParams &&
            searchParams["sort-by"] &&
            searchParams["sort-by"].toLowerCase()
          }
        />

        <hr className="mt-4" />
        {/* Properties Section */}
        <div>
          <Suspense
            fallback={
              <Loader2 className="stroke-secondary my-2 mx-auto animate-spin" />
            }
          >
            <Properties
              buyORrent={params["buy&rent"].toLowerCase()}
              Params={searchParams}
            />
          </Suspense>
        </div>
      </section>
      {/* Popular Searches Section */}
      {/* <section className="max-width py-12 px-5 space-y-4">
        <h3 className="text-2xl font-semibold">Popular Searches</h3>
        <div className="flex max-md:flex-nowrap max-md:max-w-[1160px] max-md:min-h-[90px] max-md:overflow-y-hidden max-md:overflow-x-auto">
          <div className="flex max-md:flex-[0_0_auto] w-full max-md:w-[1160px] flex-wrap items-center gap-2">
            {PopularSearches.map((items, i: number) => (
              <button
                key={i}
                className="bg-secondary/10 max-md:border max-md:border-[#3dcbf9] hover:bg-secondary hover:text-white transition-all duration-300 text-secondary text-sm py-2 px-3 rounded-lg"
              >
                {items}
              </button>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
};

const Properties = async ({
  buyORrent,
  Params,
}: {
  buyORrent: string;
  Params: SearchParamsI;
}) => {
  const currency = (await GetCookies({ name: "price" }))?.toLowerCase();
  const exchange_rate = await ConvertCurrency({
    convert_to: currency ? currency : "aed",
  });

  const area = (await GetCookies({ name: "area" }))?.toUpperCase();

  const Input =
    Params.Input &&
    JSON.stringify(Params.Input.split(",,")).replaceAll('"', "'");

  const aed_exchange_rate = await ConvertCurrency({
    convert_from: currency,
  });

  // For Price
  const min_price = Params["min-price"] ? Number(Params["min-price"]) : 0;
  const min_converted_price = Math.round(min_price * aed_exchange_rate["aed"]);
  const max_price = Params["max-price"] ? Number(Params["max-price"]) : 0;
  const max_converted_price = Math.round(max_price * aed_exchange_rate["aed"]);

  // For Area
  const min_area = Params["min-area"] ? Number(Params["min-area"]) : 0;
  const min_converted_area =
    area === "SQ.M" ? Convert_sqm_to_sqft({ value: min_area }) : min_area;
  const max_area = Params["max-area"] ? Number(Params["max-area"]) : 0;
  const max_converted_area =
    area === "SQ.M" ? Convert_sqm_to_sqft({ value: max_area }) : max_area;

  const Data = await SanityFetch({
    Query: `*[_type == 'property' 
        && avaibility == '${buyORrent.toLowerCase()}' 
        ${
          Params.Input
            ? `&& references(*[_type=="area" && title in ${Input} || slug.current in ${Input} || references(*[_type=="city" && name in ${Input} ]._id) ]._id) || references(*[_type=="project" && title in ${Input} ]._id)`
            : ""
        }
        ${
          Params.propertyType
            ? `&& property_type == '${Params.propertyType}'`
            : ""
        }
        ${Params.status ? `&& status == '${Params.status}'` : ""}
        ${min_converted_area ? `&& squareft >= ${min_converted_area}` : ""}
        ${max_converted_area ? `&& squareft <= ${max_converted_area}` : ""}
        ${Params["min-bedrooms"] ? `&& beds >= ${Params["min-bedrooms"]}` : ""}
        ${Params["max-bedrooms"] ? `&& beds <= ${Params["max-bedrooms"]}` : ""}
        ${min_converted_price ? `&& price >= ${min_converted_price}` : ""}
        ${max_converted_price ? `&& price <= ${max_converted_price}` : ""}
        ] ${Params["sort-by"] === "newest" ? `| order(_createdAt desc)` : ""}
          ${Params["sort-by"] === "price (low)" ? `| order(price asc)` : ""}
          ${Params["sort-by"] === "price (high)" ? `| order(price desc)` : ""}
          ${Params["sort-by"] === "beds (least)" ? `| order(beds asc)` : ""}
          ${Params["sort-by"] === "beds (most)" ? `| order(beds desc)` : ""}
          ${Params["sort-by"] === "area (least)" ? `| order(squareft asc)` : ""}
          ${Params["sort-by"] === "area (most)" ? `| order(squareft desc)` : ""}
         {
            title,
            slug,
            baths,
            beds,
            squareft,
            location,
            price,
            image,
            avaibility,
            property_type,
            status,
            project_type,
            agent-> {
              name,
              image,
              phone,
              slug,
              language
            },
            area -> {
                title
            },
            project -> {
                project_type
            }
          }${
            Params.page && Number(Params.page) > 15
              ? `[0...${Params.page}]`
              : "[0..15]"
          }`,
  });

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7 gap-y-16 py-8">
        {Data &&
          Data?.map((items: any, i: number) => {
            const PropertyImages = items.image.map((item: any) =>
              urlForImage(item.asset._ref).url()
            );
            const AgentImage =
              items.agent &&
              items.agent.image &&
              urlForImage(items.agent.image.asset._ref).url();

            const converted_price = Math.round(
              items.price * exchange_rate[currency ? currency : "aed"]
            );

            const converted_area_squareft = ConvertAreaSquare({
              AreaType: area ?? "",
              value: items?.squareft,
            });

            return (
              <PropertyBox
                key={i}
                imageSlider={true}
                slug={items?.slug?.current}
                BuyORrent={items.avaibility}
                propertyimage={PropertyImages}
                Price={converted_price}
                beds={items.beds}
                baths={items.baths}
                AreaSquareType={area as any}
                squareFT={converted_area_squareft}
                title={items.title}
                location={items.location}
                agentImage={AgentImage}
                agentName={items.agent && items.agent.name}
                agentslug={items.agent?.slug?.current}
                whatsappLink={
                  items?.agent?.phone
                    ? "https://wa.me/" +
                      items?.agent?.phone?.replaceAll(" ", "")
                    : ""
                }
                PropertyType={items.property_type}
              />
            );
          })}
      </div>
      {Data && Number(Params.page)! <= Data.length + 1 && (
        <Link
          scroll={false}
          href={
            Params.page && Params.page !== ""
              ? `/${buyORrent}?page=${Number(Params.page) + 15}`
              : `/${buyORrent}?page=15`
          }
          className="flex justify-center w-fit mx-auto"
        >
          <button className="mx-auto min-w-[243px] py-2 bg-white border border-secondary text-secondary hover:text-white hover:bg-secondary rounded-lg transition-all duration-500">
            Show More
          </button>
        </Link>
      )}
    </>
  );
};

const PopularSearches = [
  "Flats for Sale in Dubai",
  "Apartments for Sale in Dubai",
  "Land Residential for Sale in Dubai",
  "Houses for Sale in Dubai",
  "Villas for Sale in Dubai",
  "Townhouses for Sale in Dubai",
  "Ponthouses for Sale in Dubai Hill Estate",
  "Hotel Apartments for Sale in Dubai",
  "Flats for Sale in Dubai",
  "Apartments for Sale in Dubai",
  "Land Residential for Sale in Dubai",
  "Houses for Sale in Dubai",
  "Villas for Sale in Dubai",
  "Townhouses for Sale in Dubai",
  "Ponthouses for Sale in Dubai Hill Estate",
  "Hotel Apartments for Sale in Dubai",
  "Flats for Sale in Dubai",
  "Apartments for Sale in Dubai",
  "Land Residential for Sale in Dubai",
  "Houses for Sale in Dubai",
  "Villas for Sale in Dubai",
  "Townhouses for Sale in Dubai",
  "Ponthouses for Sale in Dubai Hill Estate",
  "Hotel Apartments for Sale in Dubai",
];

export default Buy;
