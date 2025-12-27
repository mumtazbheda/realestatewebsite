import React from "react";
import Image, { StaticImageData } from "next/image";
import bedroomsIcon from "@/assets/Svgs/bedrooms-icon-black.svg";
import baths_icon from "@/assets/Svgs/baths-icon-black.svg";
import square_icon from "@/assets/Svgs/square-icon-black.svg";
import community_icon from "@/assets/Svgs/community-icon-gray.svg";
import whatsapp_icon from "@/assets/Svgs/whatsapp-icon.svg";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { GetCookies } from "@/lib/actions/Cookies";
import logo from "@/assets/images/Logo Only.png";
import { cn } from "@/lib/utils";

export interface PropsI {
  imageSlider?: boolean;
  slug: string | undefined;
  BuyORrent: "buy" | "rent" | "sold" | "rented" | undefined;
  propertyimage: StaticImageData[] | string[];
  Price: string | number;
  beds: number;
  baths: number;
  AreaSquareType?: "SQ.FT" | "SQ.FM";
  squareFT: number | string;
  title: string;
  location: string;
  agentImage: StaticImageData | string;
  agentName: string;
  agentslug?: string;
  whatsappLink?: string;
  PropertyType: string;
}

const PropertyBox = async ({
  imageSlider = false,
  slug,
  BuyORrent,
  propertyimage,
  Price,
  beds,
  baths,
  AreaSquareType = "SQ.FT",
  squareFT,
  title,
  location,
  agentImage,
  agentName,
  whatsappLink,
  PropertyType,
  agentslug,
}: PropsI) => {
  const currency = await GetCookies({ name: "price" });

  return (
    <div className="rounded-lg h-fit overflow-hidden border pb-2">
      {!imageSlider ? (
        <div className="relative">
          {BuyORrent && !["rented", "sold"].includes(BuyORrent) ? (
            <Link
              href={
                slug
                  ? `${BuyORrent}/` + slug
                  : `${BuyORrent}/` + CreateSlug(title)
              }
            >
              {propertyimage && propertyimage.length > 0 && (
                <Image
                  unoptimized
                  fill
                  className="!h-[200px] !w-full !relative object-cover"
                  src={propertyimage[0]}
                  alt="Image1"
                />
              )}
            </Link>
          ) : (
            propertyimage && propertyimage.length > 0 && (
              <Image
                unoptimized
                fill
                className="!h-[200px] !w-full !relative object-cover"
                src={propertyimage[0]}
                alt="Image1"
              />
            )
          )}
          <div className="text-xs font-medium flex items-center gap-1 absolute top-0 left-0 p-2">
            <button className="py-1 px-3 bg-secondary hover:bg-white hover:text-secondary text-white rounded-lg uppercase transition-all duration-300">
              {BuyORrent}
            </button>
            {PropertyType && (
              <Link
                href={"/buy?propertyType=" + PropertyType}
                className="py-1 px-3 bg-primary hover:bg-white hover:text-primary text-white rounded-lg uppercase transition-all duration-300"
              >
                {PropertyType.replaceAll("_", " ")}
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div>
          <ImageSlider
            Slides={
              propertyimage &&
              propertyimage.map((image, i: number) => {
                return (
                  <div key={i} className="relative">
                    {BuyORrent && !["rented", "sold"].includes(BuyORrent) ? (
                      <Link
                        href={
                          slug
                            ? `${BuyORrent}/` + slug
                            : `${BuyORrent}/` + CreateSlug(title)
                        }
                      >
                        <Image
                          unoptimized
                          fill
                          className="!h-[200px] !w-full !relative object-cover"
                          src={image}
                          alt="Image1"
                        />
                      </Link>
                    ) : (
                      <Image
                        unoptimized
                        fill
                        className="!h-[200px] !w-full !relative object-cover"
                        src={image}
                        alt="Image1"
                      />
                    )}
                    <div className="text-xs font-medium flex items-center gap-1 absolute top-0 left-0 p-2">
                      <button className="py-1 px-3 bg-secondary hover:bg-white hover:text-secondary text-white rounded-lg uppercase transition-all duration-300">
                        {BuyORrent}
                      </button>
                      {PropertyType && (
                        <Link
                          href={"/buy?propertyType=" + PropertyType}
                          className="py-1 px-3 bg-primary hover:bg-white hover:text-primary text-white rounded-lg uppercase transition-all duration-300"
                        >
                          {PropertyType.replaceAll("_", " ")}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })
            }
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-2">
        <h4 className="text-primary text-2xl font-semibold">
          {Price.toLocaleString()} {currency?.toUpperCase()}
        </h4>
        <div className="flex items-center gap-8">
          {beds && (
            <div className="space-y-1">
              <div className="flex text-lg gap-1 font-bold">
                {beds} <Image src={bedroomsIcon} alt="bedroomsIcon" />{" "}
              </div>
              <p className="text-xs text-black/50">Beds</p>
            </div>
          )}
          {baths && (
            <div className="space-y-1">
              <div className="flex text-lg gap-1 font-bold">
                {baths} <Image src={baths_icon} alt="baths_icon" />{" "}
              </div>
              <p className="text-xs text-black/50">Baths</p>
            </div>
          )}
          {squareFT && (
            <div className="space-y-1">
              <div className="flex text-lg gap-1 font-bold">
                {squareFT.toLocaleString()}{" "}
                <Image src={square_icon} alt="square_icon" />{" "}
              </div>
              <p className="text-xs text-black/50">
                {AreaSquareType === "SQ.FT" ? "Square (ft)" : "Square (m)"}
              </p>
            </div>
          )}
        </div>
        {BuyORrent && !["rented", "sold"].includes(BuyORrent) ? (
          <Link
            href={
              slug
                ? `${BuyORrent}/` + slug
                : `${BuyORrent}/` + CreateSlug(title)
            }
          >
            <h5 className="hover:text-secondary transition-all duration-300 max-w-xs text-lg leading-tight font-medium">
              {title}
            </h5>
          </Link>
        ) : (
          <h5 className="pointer-events-none transition-all duration-300 max-w-xs text-lg leading-tight font-medium">
            {title}
          </h5>
        )}
        <div className="flex items-center gap-2 text-xs text-black/50">
          <Image src={community_icon} alt="community_icon" />
          {location}
        </div>
        <>
          <hr className="my-2" />
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <Link
                href={
                  agentslug
                    ? "agents/" + agentslug
                    : "agents/" + CreateSlug(agentName)
                }
                className={cn([
                  "w-[67px] h-[67px] overflow-hidden rounded-md",
                  agentImage ? "bg-[#d9d9d9]" : "bg-slate-100/90",
                ])}
              >
                <Image
                  width={agentImage ? 67 : 55}
                  height={agentImage ? 67 : 55}
                  className={cn(["", agentImage ? "mt-1" : "mt-[5px] ml-2"])}
                  src={agentImage ?? logo}
                  alt={agentImage ? "AgentImage" : "logo"}
                />
              </Link>
              <div className="space-y-1">
                <h6 className="text-sm leading-none">Listing</h6>
                <h5 className="text-base font-medium leading-tight">
                  {agentName ?? "Kingdom Capital Properties"}
                </h5>
              </div>
            </div>
            {whatsappLink && (
              <Link href={whatsappLink ? whatsappLink : ""}>
                <Image
                  width={42}
                  height={42}
                  className="w-[42px] h-[42px]"
                  src={whatsapp_icon}
                  alt="whatsapp_icon"
                />
              </Link>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default PropertyBox;
