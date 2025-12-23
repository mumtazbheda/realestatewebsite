import Title from "@/shared/goldenvisasuae/title";
import React from "react";
import Image from "next/image";
import Slider from "@/shared/goldenvisasuae/slider";
import red_wood_plan from "@/assets/images/red-wood-plan.jpg";
import Ruby_Sunset_plan from "@/assets/images/Ruby Sunset -plan.jpg";
import Azure_Blue_plan from "@/assets/images/Azure Blue-plan.jpg";
import Blue_Horizon_plan from "@/assets/images/Blue Horizon-plan.jpg";
import Indigo_Ocean_plan from "@/assets/images/Indigo-Ocean-plan.jpg";
import Mediterranean_plan from "@/assets/images/Mediterranean-plan.jpg";
import Provence_plan from "@/assets/images/Provence-plan.jpg";
import Sapphire_plan from "@/assets/images/Sapphire-plan.jpg";
import Tropical_Mist_plan from "@/assets/images/Tropical Mist-plan.jpg";
import Acquamarina_plan from "@/assets/images/Acquamarina-plan.jpg";
import svfpln from "@/assets/images/svfpln.jpg";
import sxfp from "@/assets/images/sxfp.jpg";
import fivplan from "@/assets/images/fivplan.jpg";
import pg_fplan from "@/assets/images/pg_fplan.jpg";
import CranberrySky_plan from "@/assets/images/CranberrySky-plan.jpg";
import Terracotta_plan from "@/assets/images/Terracotta-plan.jpg";
import Link from "next/link";

const FloorPlan = () => {
  return (
    <div>
      <Title>Floor Plans</Title>
      <div className="max-md:max-w-[600px] mx-auto mt-12">
        <Slider
          Slides={BeachVillasData.map((items, i: number) => (
            <Link href={"/goldenvisasuae?open=true"} scroll={false} key={i}>
              <div className="relative border border-black/10 rounded-[25px] overflow-hidden">
                <Image src={items.image} alt={"image"} />
                <div className="opacity-0 hover:opacity-100 text-white italic absolute inset-0 flex flex-col gap-1.5 items-center justify-center bg-black/50 transition-all duration-300">
                  <h6 className="serif text-[1rem] font-light leading-none tracking-[1px]">
                    {items.villas}
                  </h6>
                  <h4 className="font-light text-[1.7rem] leading-none text-white">
                    {items.title}
                  </h4>
                  <div className="serif text-[0.8rem] tracking-[1px] flex items-center gap-2">
                    Floor Plan
                  </div>
                </div>
              </div>
            </Link>
          ))}
        />
      </div>
    </div>
  );
};

const BeachVillasData = [
  {
    image: svfpln,
    title: "Seven Floor Plan",
    villas: "Autograph Collection",
  },
  {
    image: sxfp,
    title: "six Floor Plan",
    villas: "Autograph Collection",
  },
  {
    image: fivplan,
    title: "Five Floor Plan",
    villas: "Autograph Collection",
  },
  {
    image: pg_fplan,
    title: "Park Greens Floor Plan",
    villas: "Park Greens",
  },
];

export default FloorPlan;
