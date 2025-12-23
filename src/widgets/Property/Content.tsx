import ContactBox from "@/shared/ContactBox";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import community_icon from "@/assets/Svgs/community-icon.svg";
import Image from "next/image";
import SelectCurrencies from "@/shared/SelectCurrenciesFooter";
import bedroomsIcon from "@/assets/Svgs/bedrooms-icon.svg";
import baths_icon from "@/assets/Svgs/baths-icon.svg";
import square_icon from "@/assets/Svgs/square-icon.svg";
import { Box, Map, Video } from "lucide-react";
import Link from "next/link";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { PortableText } from "@portabletext/react";
import { cn } from "@/lib/utils";

const Content = ({ Data }: { Data: any }) => {
  const AgentImage =
    Data.agent &&
    Data.agent.image &&
    urlForImage(Data.agent.image.asset._ref).url();

  const AreaLink =
    Data?.area && Data?.area?.slug?.current
      ? "/areas/" + Data?.area?.slug?.current
      : Data.area.title
      ? "/areas/" + CreateSlug(Data.area.title)
      : "";

  return (
    <div className="grid lg:grid-cols-3 gap-5 relative">
      {/* Left Section */}
      <div className="flex flex-col gap-6 col-span-2">
        {Data.unit_reference && (
          <h5 className="text-[#8f8f8f]">
            Unit Reference: {`(${Data.unit_reference})`}
          </h5>
        )}
        <div className="space-y-2.5">
          <h2 className="text-2xl font-medium">{Data.title}</h2>
          {Data.area && (
            <Link
              href={AreaLink}
              className="flex items-center gap-2 text-sm underline text-black"
            >
              <Image src={community_icon} alt="community_icon" />{" "}
              {Data.area.title}
            </Link>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            {Data.price && (
              <div className="text-4xl font-bold">
                {Data.price.toLocaleString()} AED
              </div>
            )}
            {Data.squareft && (
              <p className="text-sm">
                {Data.squareft.toLocaleString()} AED per ft²
              </p>
            )}
          </div>
          <div className="flex items-center gap-4 max-md:hidden">
            <h6 className="whitespace-nowrap text-sm">Payout Currency</h6>
            <SelectCurrencies css="!min-w-[70px] !h-[40px]" SqFtBox={false} />
          </div>
        </div>
        <div className="flex  items-center max-xs:justify-between sm:gap-x-20 xs:gap-x-12 gap-x-8 gap-y-4 border-y py-4 max-sm:pr-2">
          {Data.beds && (
            <div className="space-y-1">
              <div className="flex text-2xl text-secondary gap-1 font-semibold">
                {Data.beds} <Image src={bedroomsIcon} alt="bedroomsIcon" />{" "}
              </div>
              <p className="text-base text-black">Beds</p>
            </div>
          )}
          {Data.baths && (
            <div className="space-y-1">
              <div className="flex text-2xl text-secondary gap-1 font-semibold">
                {Data.baths} <Image src={baths_icon} alt="baths_icon" />{" "}
              </div>
              <p className="text-base text-black">Baths</p>
            </div>
          )}
          {Data.squareft && (
            <div className="space-y-1">
              <div className="flex text-2xl text-secondary gap-1 font-semibold">
                {Data.squareft.toLocaleString()}{" "}
                <Image src={square_icon} alt="square_icon" />{" "}
              </div>
              <p className="text-base text-black">Square (ft)</p>
            </div>
          )}
          {Data.parking && (
            <div className="space-y-1">
              <div className="flex text-2xl text-secondary gap-1 font-semibold">
                {Data.parking}
              </div>
              <p className="text-base text-black">Parking</p>
            </div>
          )}
        </div>
        {/* <div className='flex flex-row items-center gap-1 py-2 md:hidden'>
                    <button className='px-3 py-1.5 text-xs bg-secondary hover:bg-secondary text-white flex items-center gap-1 rounded-lg transition-all duration-300'>
                        <Map size={15} /> Map
                    </button>
                    <button className='px-3 py-1.5 text-xs bg-secondary hover:bg-secondary text-white flex items-center gap-1 rounded-lg transition-all duration-300'>
                        <Video size={16} /> Get video
                    </button>
                    <button className='px-3 py-1.5 text-xs bg-secondary hover:bg-secondary text-white flex items-center gap-1 rounded-lg transition-all duration-300'>
                        <Box size={15} /> Get Virtual Tour
                    </button>
                </div> */}
        {Data.agent && (
          <div className="lg:hidden">
            <ContactBox
              Agent={{
                name: Data.agent && Data.agent.name && Data.agent.name,
                image: AgentImage,
                email: Data.agent && Data.agent.email && Data.agent.email,
                phone: Data.agent && Data.agent.phone && Data.agent.phone.replaceAll(" ", ""),
                slug: Data.agent && Data.agent.slug && Data.agent.slug.current,
              }}
            />
          </div>
        )}

        {/* Content */}
        {Data.content && (
          <div className="flex flex-col gap-4 text-sm leading-relaxed">
            <PortableText value={Data.content} />
          </div>
        )}
        <div className={cn([Data.agent ? "sm:mt-16 mt-8" : "sm:mt-8"])}>
          <h3 className="text-2xl font-medium">Project Details</h3>
          <table className="mt-3">
            <tbody className="text-sm flex flex-col gap-1">
              {Data.unit_reference && (
                <tr>
                  <td className="min-w-[190px] font-medium">Unit Reference</td>
                  <td>{Data.unit_reference}</td>
                </tr>
              )}
              {Data.parking && (
                <tr>
                  <td className="min-w-[190px] font-medium">Parking Slot</td>
                  <td>{Data.parking}</td>
                </tr>
              )}
              {Data.property_name && (
                <tr>
                  <td className="min-w-[190px] font-medium">Property Name</td>
                  <td>{Data.property_name}</td>
                </tr>
              )}
              {Data.permit_number && (
                <tr>
                  <td className="min-w-[190px] font-medium">Permit Number</td>
                  <td>{Data.permit_number}</td>
                </tr>
              )}
              {Data.emirate && (
                <tr>
                  <td className="min-w-[190px] font-medium">Emirate</td>
                  <td>{Data.emirate}</td>
                </tr>
              )}
              {Data.status && (
                <tr>
                  <td className="min-w-[190px] font-medium">Status</td>
                  <td className="capitalize">{Data.status}</td>
                </tr>
              )}
              {Data.purpose && (
                <tr>
                  <td className="min-w-[190px] font-medium">Purpose</td>
                  <td>{Data.purpose}</td>
                </tr>
              )}
              {Data._createdAt && (
                <tr>
                  <td className="min-w-[190px] font-medium">Added On</td>
                  <td>
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Data._createdAt))}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Right Section */}
      <div className="col-span-1 max-lg:hidden">
        <ContactBox
          Agent={{
            name: Data.agent && Data.agent.name && Data.agent.name,
            image: AgentImage,
            email: Data.agent && Data.agent.email && Data.agent.email,
            phone: Data.agent && Data.agent.phone && Data.agent.phone.replaceAll(" ", ""),
            slug: Data.agent && Data.agent.slug && Data.agent.slug.current,
          }}
        />
      </div>
    </div>
  );
};

export default Content;
