import Navigation from "@/shared/Navigation";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import cover_image from "@/assets/images/commercial_cover.webp";
import btn_icon from "@/assets/Svgs/btn-icon-arrow-white.svg";
import PopupForm from "@/shared/PopupForm";
import { HowCanWeHelpData, HowDoWeWorkData, WhoWeAreData } from "./Data";
import commercial_1 from "@/assets/images/commercial-real-estate-1-1024x585.webp";
import commercial_2 from "@/assets/images/commercial-real-estate-2-1024x682.webp";
import commercial_3 from "@/assets/images/commercial-real-estate-3-1024x684.webp";
import AnimatedButton from "@/shared/AnimatedButton";
import { cn } from "@/lib/utils";
import PopupRequestForm from "@/shared/PopupRequestForm";
import ContactFormExpert from "@/shared/ContactFormExpert";
import PropertiesSliderSection from "@/PageSections/PropertiesSliderSection";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../../sanity/lib/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Properties",
  description: "Commercial Properties - Kingdom Capital",
  openGraph: {
    title: "Commercial Properties",
    description: "Commercial Properties - Kingdom Capital",
  },
};

const Commercial = () => {
  return (
    <main className="max-width py-6 sm:px-4 px-2">
      <div className="flex flex-col-reverse">
        {/* Hero Section */}
        <section className="md:mt-6">
          <div className="relative max-md:h-full w-full flex md:flex-row flex-col max-lg:items-end min-h-[440px] h-[50vh] rounded-lg md:overflow-hidden">
            <div className="z-10 bg-primary lg:flex-[0_0_500px] md:w-[70%] w-full lg:h-full h-fit flex flex-col justify-end max-md:items-center max-md:text-center gap-8 md:p-[50px] p-[25px] max-lg:m-[30px] max-md:m-0 max-lg:rounded-lg max-md:rounded-t-none max-md:rounded-b-lg">
              <h1 className="capitalize md:text-[42px] text-[32px] leading-none text-white font-bold">
                Commercial Properties
              </h1>
              <PopupForm>
                <button className="w-fit group text-[15px] text-white rounded-lg bg-secondary flex items-center gap-3 py-2 px-6">
                  Send a request{" "}
                  <Image
                    className="w-4 group-hover:translate-x-1 transition-all duration-300"
                    src={btn_icon}
                    alt="btn_icon"
                  />
                </button>
              </PopupForm>
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

        {/* Navigation */}
        <section>
          <Navigation title={"Commercial Properties"} />
        </section>
      </div>

      {/* Who we are Section */}
      <section className="sm:mt-16 mt-12">
        <h2 className="font-bold md:text-4xl text-[28px] max-md:leading-tight">
          Who We Are
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 sm:mt-10 mt-7">
          {WhoWeAreData.map((items, i: number) => (
            <div
              key={i}
              className="bg-white border rounded-lg flex flex-col text-center justify-center items-center py-9 xs:px-[30px] px-5"
            >
              <Image
                className="w-[50px] h-[50px]"
                src={items.icon}
                alt="Icon"
              />
              <h4 className="font-semibold pb-3 pt-6">
                {items.title.map((title, i: number) =>
                  title.colored ? (
                    <span key={i} className="text-secondary font-bold">
                      {" "}
                      {title.text}
                    </span>
                  ) : (
                    <span key={i}> {title.text}</span>
                  )
                )}
              </h4>
              <p className="text-xs leading-normal">{items.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="sm:mt-32 mt-16">
        <div
          className={`md:grid-cols-2 grid-cols-1 grid gap-[50px] items-center`}
        >
          <div
            className={`text-sm self-center text-[15px] leading-relaxed flex flex-col gap-4 max-w-[930px] max-md:order-2`}
          >
            <p>
              Whether you are a landlord, a tenant or a buyer, the commercial
              property department of Metropolitan Premium Properties will gladly
              assist you with handling any type of commercial asset. We offer a
              full service experience across office spaces, retail units, shops,
              warehouses, commercial villas, full buildings, factories,
              showrooms, land plots, labour camps and staff accommodation.
              <br /> <br />
              To help you make the right decision, our specialists will select a
              suitable commercial space for you in line with your requirements
              We will take into account the __cpLocation, the budget and the
              estimated return on investment, enabling you to enjoy a lucrative
              income.
              <br /> <br />
              By choosing Metropolitan&apos;s commercial property services, you
              are backed by an entire network of commercial real estate experts
              with a combined experience of 20+ years in the UAE market.
              <br /> <br />
              Our strong team of experts will provide you with full support,
              following each and every step of your journey in the world of
              Dubai&apos;s commercial real estate. That being said, our services
              extend to not just a brokerage, but also to consultancy, advisory,
              valuation and property management.
            </p>
          </div>
          <div className={`relative h-[450px]`}>
            <Image
              unoptimized
              fill
              className="!absolute !top-0 !left-[15%] !w-[70%] !h-[45%] rounded-lg object-cover"
              src={commercial_1}
              alt="commercial_1"
            />
            <Image
              unoptimized
              fill
              className="!absolute !bottom-0 !right-0 !top-auto !left-auto !w-[60%] !h-[calc(55%_-_5px)] rounded-lg object-cover"
              src={commercial_2}
              alt="commercial_2"
            />
            <Image
              unoptimized
              fill
              className="!absolute !top-[calc(45%_+_5px)] !left-0 !w-[calc(40%_-_5px)] !h-[30%] rounded-lg object-cover"
              src={commercial_3}
              alt="commercial_3"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="sm:mt-32 mt-16">
        <Suspense fallback={null}>
          <PropertiesSliderSection
            Title={"Offices for Sale in Dubai"}
            bySale_or_rent={"buy"}
            ByCatogery={"office"}
          />
        </Suspense>
      </section>

      {/* How can we help Section */}
      <section className="flex flex-col sm:gap-6 gap-4 sm:mt-32 mt-16">
        <h2 className="font-bold md:text-4xl text-[28px] max-md:leading-tight">
          How can we help you?
        </h2>
        <p className="sm:text-base text-sm">
          We can help you buy any type of commercial property that will fit with
          your goals and budget:
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 sm:mt-4 mt-2">
          {HowCanWeHelpData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 border border-[#e9e9e9] md:p-6 p-5 rounded-md"
            >
              <div className="flex items-center md:gap-6 gap-4">
                <Image width={45} src={item.icon} alt="Icon" />
                <h3 className="md:text-2xl sm:text-xl !leading-tight text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="lg:pl-[70px]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Do We work Section */}
      <section className="flex flex-col sm:gap-6 gap-4 sm:mt-16 mt-12">
        <h2 className="font-bold md:text-4xl text-[28px] max-md:leading-tight mb-8">
          How Do We Work?
        </h2>
        {/* Sections */}
        <div className="flex flex-col sm:gap-40 gap-28">
          {HowDoWeWorkData.map((item, index) => (
            <div
              key={index}
              className={cn(
                item.image_left ? "md:flex-row-reverse" : "md:flex-row",
                [
                  "w-full flex flex-col-reverse items-center lg:gap-[120px] gap-[50px]",
                ]
              )}
            >
              <div className="flex-grow flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-[27px]">{item.description}</p>
                <div className="max-md:mx-auto">
                  <PopupRequestForm
                    title="Send a request"
                    buttonText="GET A FREE CONSULTATION"
                    messageField={false}
                  >
                    <AnimatedButton
                      text="Send a request"
                      css="w-fit !px-6 bg-secondary mt-2"
                      hoverColor="bg-primary/50"
                    />
                  </PopupRequestForm>
                </div>
              </div>
              <Image
                className="h-full max-w-[500px] lg:w-[500px] md:w-[400px] w-full max-md:px-2"
                src={item.image}
                alt="image"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="md::mt-44 sm:mt-32 mt-28">
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
      commercial_agent -> {
        name,
        image,
        slug,
        phone,
        about,
      }
    }[0]`,
  });

  const Agent_Image =
    Data?.commercial_agent?.image &&
    urlForImage(Data.commercial_agent.image.asset._ref).url();

  return (
    <ContactFormExpert
      Agent={{
        name: Data?.commercial_agent?.name || null,
        image: Agent_Image ? Agent_Image : null,
        phone: Data?.commercial_agent?.phone || null,
      }}
      sub_title="Our Expert on Buying Offices in Dubai"
      description={Data?.commercial_agent?.about || null}
      Form={{
        Title: "Send a request",
        buttonText: "GET A FREE CONSULTATION",
        name: true,
        email: true,
        phone: true,
      }}
    />
  );
};

export default Commercial;
