import Link from "next/link";
import React, { Suspense } from "react";
import btn_icon from "@/assets/Svgs/btn-icon-arrow-white.svg";
import Image from "next/image";
import cover_image from "@/assets/images/sell-page.jpg.webp";
import sell_new from "@/assets/images/sell_pic_new_edited.jpeg";
import Navigation from "@/shared/Navigation";
import checkIcon from "@/assets/Svgs/icon-cheked-blue.svg";
import { BenefitsData, marketing_tools_Data } from "./data";
import YoutubePlay from "@/shared/YoutubePlay";
import PropertiesSliderSection from "@/PageSections/PropertiesSliderSection";
import ContactFormExpert from "@/shared/ContactFormExpert";
import { urlForImage } from "../../../../../sanity/lib/image";
import { SanityFetch } from "@/lib/SanityFetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell",
  description: "Sell - Kingdom Capital",
  openGraph: {
    title: "Sell",
    description: "Sell - Kingdom Capital",
  },
};

const Sell = () => {
  return (
    <main className="max-width py-6 sm:px-4 px-2">
      {/* Navigation */}
      <section>
        <Navigation title={"Benefits of Listing Your Property with Us"} />
      </section>

      {/* Hero Section */}
      <section className="mt-6">
        <div className="relative max-md:h-full w-full flex md:flex-row flex-col max-lg:items-end min-h-[440px] h-[50vh] rounded-lg md:overflow-hidden">
          <div className="z-10 bg-primary lg:flex-[0_0_500px] md:w-[70%] w-full lg:h-full h-fit flex flex-col justify-end max-md:items-center max-md:text-center gap-8 md:p-[50px] p-[25px] max-lg:m-[30px] max-md:m-0 max-lg:rounded-lg max-md:rounded-t-none max-md:rounded-b-lg">
            <h1 className="capitalize md:text-[42px] text-[32px] leading-none text-white font-bold">
              SELL OR RENT OUT YOUR PROPERTY IN DUBAI
            </h1>
            <Link href={"#contact"}>
              <button className="w-fit group text-[15px] text-white rounded-lg bg-secondary flex items-center gap-3 py-2 px-6">
                LIST YOUR PROPERTY{" "}
                <Image
                  className="w-4 group-hover:translate-x-1 transition-all duration-300"
                  src={btn_icon}
                  alt="btn_icon"
                />
              </button>
            </Link>
          </div>
          <div className="max-md:-order-1 h-full w-full max-lg:absolute max-md:relative">
            <Image
              unoptimized
              fill
              className="!relative !w-full !h-full object-cover max-md:min-h-[260px] max-md:max-h-[50vh] max-md:rounded-t-lg"
              src={cover_image}
              alt="Image1"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section  */}
      <section className="sm:mt-16 mt-12">
        <h2 className="font-bold md:text-4xl text-[28px] max-md:leading-tight">
          Benefits of Listing Your Property with Us
        </h2>
        <div className="flex flex-col gap-4 text-[#222] text-md leading-relaxed py-10 max-w-[930px]">
          <p>
            Dubai&apos;s real estate sector is always known to be competitive,
            and lately the industry has been witnessing a whopping surge in
            demand for properties for sale and to rent.
          </p>
          <p>
            We are here to help you sell or rent out your property as fast as
            possible with 100% transparency, keeping you informed with
            up-to-date market trends that may affect your property&apos;s sale
            or rental value.
          </p>
          <p>
            We have been operating within the Dubai real estate market since
            2018, and our network of trusted clients has been growing ever
            since, placing us in a favourable position to sell your property in
            the most efficient and professional way.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href={"#contact"} className="w-fit mx-auto">
            <button className="group relative overflow-hidden bg-secondary text-white rounded-lg py-2 px-5">
              <span className="relative text-white z-20 uppercase">
                List Your Property
              </span>
              <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary"></span>
            </button>
          </Link>
        </div>
      </section>

      {/* Marketing Tools Section */}
      <section className="space-y-10 sm:mt-20 mt-12">
        <h2 className="font-bold md:text-4xl text-[28px] max-md:leading-tight">
          Our Marketing Tools
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[50px] items-center">
          <p className="text-md leading-6 max-md:order-2">
            Our marketing efforts reach people worldwide, giving your property
            lots of attention and bringing in inquiries from everywhere. This
            means you won&apos;t have to spend as much time looking for buyers,
            and it can even help you sell your property for a better price
          </p>
          <Image className="mx-auto" src={sell_new} alt="sell_new" />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 sm:pt-10 pt-7">
          {marketing_tools_Data.map((item, index) => (
            <div
              key={index}
              className="flex max-lg:items-center gap-5 border border-[#e9e9e9] md:p-6 p-5 rounded-lg"
            >
              <Image
                className="w-[50px] h-[50px]"
                src={item.icon}
                alt={"sell_icon_" + index}
              />
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="space-y-10 sm:mt-20 mt-12">
        <h2 className="font-bold md:text-4xl text-[28px] max-md:leading-tight">
          Why Choose Our Company?
        </h2>
        <YoutubePlay />
      </section> */}

      {/* Marketing Tools Cards Large Section */}
      {/* <section className="sm:mt-16 mt-12">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 sm:mt-16 mt-12">
          {BenefitsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 border border-[#e9e9e9] md:p-6 p-5 rounded-md"
            >
              <div className="flex items-center md:gap-6 gap-4">
                <Image width={45} src={checkIcon} alt="checked Icon" />
                <h3 className="md:text-[22px] sm:text-xl max-sm:leading-tight text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="lg:pl-[70px]">{item.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Sold and rented Section */}
      {/* <section className="space-y-10 sm:mt-20 mt-12">
        <Suspense fallback={null}>
          <PropertiesSliderSection
            Title="Sold & Rented"
            bySoldOrRented={["sold", "rented"]}
            showAllButton={false}
          />
        </Suspense>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="sm:mt-20 mt-12">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </section>
    </main>
  );
};

const ContactForm = async () => {
  const Data = await SanityFetch({
    Query: `*[_type == 'settings'] {
        sell_agent -> {
          name,
          image,
          phone,
          about,
        }
      }[0]`,
  });

  const Agent_Image =
    Data?.sell_agent?.image &&
    urlForImage(Data.sell_agent.image.asset._ref).url();

  return (
    <ContactFormExpert
      Agent={{
        name: Data?.sell_agent?.name || null,
        image: Agent_Image ? Agent_Image : null,
        phone: Data?.sell_agent?.phone || null,
      }}
      description={Data?.sell_agent?.about || null}
      Form={{
        Title: "LIST YOUR PROPERTY",
        buttonText: "GET A FREE CONSULTATION",
        name: true,
        email: true,
        phone: true,
        message: true,
        purpose: true,
        property_type: true,
        location: true,
      }}
    />
  );
};

export default Sell;
