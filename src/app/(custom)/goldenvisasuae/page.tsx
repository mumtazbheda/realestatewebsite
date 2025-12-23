import Hero from "@/widgets/goldenvisasuae/Hero";
import WhyInvest from "@/widgets/goldenvisasuae/WhyInvest";
import Image from "next/image";
import React from "react";
import "../globals.css";
import BuyingBenefits from "@/widgets/goldenvisasuae/BuyingBenefits";
import GoldenBenefits from "@/widgets/goldenvisasuae/GoldenBenefits";
import Overview from "@/widgets/goldenvisasuae/Overview";
import CoralVillas from "@/widgets/goldenvisasuae/CoralVillas";
import BeachVillas from "@/widgets/goldenvisasuae/BeachVillas";
import FloorPlan from "@/widgets/goldenvisasuae/FloorPlan";
import ExclusiveArea from "@/widgets/goldenvisasuae/ExclusiveArea";
import Connectivity from "@/widgets/goldenvisasuae/Connectivity";
import Amenities from "@/widgets/goldenvisasuae/Amenities";
import ContactUs from "@/widgets/goldenvisasuae/ContactUs";

const Goldenvisasuae = () => {
  return (
    <main>
      <Hero />
      <div className="container max-2xl:overflow-hidden flex flex-col gap-11 mt-10">
        {/* Why Invest Section */}
        <section>
          <WhyInvest />
        </section>
        {/* Buying Benefits Section */}
        <section>
          <BuyingBenefits />
        </section>
        {/* Golden Benefits Section */}
        <section>
          <GoldenBenefits />
        </section>
        {/* Overview Section */}
        <section className="mt-8" id="overview">
          <Overview />
        </section>
        {/* Coral Villas Section */}
        <section className="mt-8" id="gallery">
          <CoralVillas />
        </section>
        {/* Coral Villas Section */}
        <section className="mt-8">
          <BeachVillas />
        </section>
        {/* Floor Plan Section */}
        <section className="mt-8" id="floor-plans">
          <FloorPlan />
        </section>
        {/* Exclusive Area Section */}
        <section className="mt-8">
          <ExclusiveArea />
        </section>
        {/* Connectivity Section */}
        <section className="mt-8">
          <Connectivity />
        </section>
      </div>
      {/* Amenities Section */}
      <section className="bg-[#e7eeea] mt-8 py-16">
        <div className="container">
          <Amenities />
        </div>
      </section>
      {/* Amenities Section */}
      <section>
        <ContactUs />
      </section>
    </main>
  );
};

export default Goldenvisasuae;
