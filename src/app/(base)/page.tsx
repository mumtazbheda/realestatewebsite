import Hero from "@/widgets/Hero/Hero";
import PopularAreas from "@/widgets/PopularAreas";
import AboutUs from "@/widgets/AboutUs";
import Awards from "@/widgets/Awards";
import Image from "next/image";
import Property_Value_Image from "@/assets/images/fron-page-a-b-test-3.webp";
import BuyingProperties from "@/widgets/BuyingProperties";
import RentingProperties from "@/widgets/RentingProperties";
import OffPlan from "@/widgets/OffPlanSection";
import Agents from "@/widgets/Agents";
import Media from "@/widgets/Media";
import LifeStyle from "@/widgets/LifeStyle";
import { Suspense } from "react";
import PopupForm from "@/shared/PopupForm";
import Reviews from "@/widgets/Reviews";

export default function Home() {
  return (
    <main className="md:space-y-20 space-y-10">
      {/* Hero Section */}
      <Hero />

      {/* OffPlan Section */}
      <section className="max-w-[1180px] mx-auto md:px-2 px-5">
        <Suspense fallback={null}>
          <OffPlan />
        </Suspense>
      </section>

      {/* Buying Properties Section */}
      <section className="max-w-[1180px] mx-auto md:px-2 px-5">
        <Suspense fallback={null}>
          <BuyingProperties />
        </Suspense>
      </section>

      {/* Areas Section */}
      <section className="max-w-[1180px] mx-auto px-2">
        <Suspense fallback={null}>
          <PopularAreas />
        </Suspense>
      </section>

      {/* Renting Properties Section */}
      {/* <section className='max-w-[1180px] mx-auto md:px-2 px-5'>
        <Suspense fallback={null}>
          <RentingProperties />
        </Suspense>
      </section> */}

      {/* About Us Section */}
      <section className="bg-secondary/10">
        <div className="max-w-[1180px] mx-auto md:px-2 px-5 py-20">
          <AboutUs />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-[1180px] mx-auto md:px-2 px-5">
        <Suspense fallback={null}>
          <Reviews />
        </Suspense>
        <p className="text-sm text-center text-[#8f8f8f]">
          *Some reviews may be translated automatically for your convenience
        </p>
      </section>

      {/* Agents  Section */}
      <section className="max-w-[1180px] mx-auto md:px-2 px-5">
        <Suspense fallback={null}>
          <Agents />
        </Suspense>
      </section>

      {/* Awards Section */}
      {/* <section className='max-w-[1180px] mx-auto px-2'>
        <Awards />
      </section> */}

      {/* Media Section */}
      {/* <section className='max-w-[1180px] mx-auto md:px-2 px-5'>
        <Suspense fallback={null}>
          <Media />
        </Suspense>
      </section> */}

      {/* Property Value Section */}
      <section className="max-w-[1180px] mx-auto md:px-2 px-5">
        <div className="rounded-lg overflow-hidden">
          <Image src={Property_Value_Image} alt="Property_Value_Image" />
          <div className="sm:p-12 p-4 flex flex-col sm:gap-8 gap-6 bg-secondary/10">
            <h2 className="md:text-4xl text-[28px] font-bold">
              What is Your Property Real Value?
            </h2>
            <div className="text-sm space-y-4 leading-relaxed">
              <p>
                If you&apos;re considering listing your property for sale or
                rent, our seasoned advisors in the secondary market are ready to
                assist you. As a prominent Real Estate firm in the UAE, Kingdom
                Capital Real Estate LLC boasts extensive local expertise with
                offices in Dubai and Abu Dhabi. Whether you&apos;re interested
                in off-plan or ready properties, we provide comprehensive
                insights into the true value of your current or prospective
                property.
              </p>
              <p>
                Our evaluation experts conduct a thorough analysis, considering
                factors like location, area development potential, rental
                prospects, amenities, and recreational attractions. If
                you&apos;re contemplating an investment in Dubai, we&apos;re
                here to navigate the entire process for you, ensuring a seamless
                experience. Relax and let us handle all the formalities and
                paperwork associated with property acquisition in the UAE. Trust
                us to simplify and enhance your journey in real estate.
              </p>
            </div>
            <PopupForm>
              <button className="w-fit group relative overflow-hidden bg-secondary text-white rounded-lg py-2 px-5">
                <span className="relative text-white z-20">
                  Request Validation
                </span>
                <span className="w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0 bg-primary/60"></span>
              </button>
            </PopupForm>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      {/* <section className='max-w-[1180px] mx-auto md:px-2 px-5'>
        <Suspense fallback={null}>
          <LifeStyle />
        </Suspense>
      </section> */}
    </main>
  );
}
