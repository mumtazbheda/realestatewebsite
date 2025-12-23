import Title from "@/shared/goldenvisasuae/title";
import React from "react";
import Image from "next/image";
import Slider from "@/shared/goldenvisasuae/slider";
import bed from "@/assets/images/bed.png";
import wide from "@/assets/images/wide.png";
import sev_BR_SERIES from "@/assets/images/sev_BR_SERIES.jpg";
import six_BR_SERIES from "@/assets/images/six_BR_SERIES.jpg";
import five_BR_SERIES from "@/assets/images/five_BR_SERIES.jpg";
import four_BR_SERIES from "@/assets/images/four_BR_SERIES.jpg";
import CranberrySky from "@/assets/images/CranberrySky-img.jpg";
import Terracotta from "@/assets/images/Terracotta.jpg";
import red_wood from "@/assets/images/red-wood-img.jpg";
import Ruby_Sunset from "@/assets/images/Ruby Sunset.jpg";
import Link from "next/link";

const CoralVillas = () => {
  return (
    <div>
      <Title>Autograph Collection</Title>
      <div className="max-md:max-w-[600px] mx-auto mt-12">
        <Slider
          Slides={CoralVillasData.map((items, i: number) => (
            <Link href={"/goldenvisasuae?open=true"} scroll={false} key={i}>
              <div className="relative rounded-[25px] overflow-hidden">
                <Image src={items.image} alt={"image"} />
                <div className="opacity-0 hover:opacity-100 text-white italic absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black/50 transition-all duration-300">
                  <h4 className="font-light text-[1.7rem] leading-none text-white">
                    {items.title}
                  </h4>
                  <div className="serif text-[0.8rem] tracking-[1px] flex items-center gap-2">
                    <Image width={30} height={30} src={bed} alt={"bed"} />
                    <span>{items.beds}</span>
                  </div>
                  <div className="serif text-[0.8rem] tracking-[1px] flex items-center gap-2">
                    <Image width={25} height={25} src={wide} alt={"wide"} />
                    <span>{items.sqft}</span>
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

const CoralVillasData = [
  {
    image: sev_BR_SERIES,
    title: "7 BR+ SERIES",
    beds: "7 Beds",
    sqft: "10,673 Sq. Ft.",
  },
  {
    image: six_BR_SERIES,
    title: "6 BR+ SERIES",
    beds: "6 Beds",
    sqft: "10,520 Sq. Ft.",
  },
  {
    image: five_BR_SERIES,
    title: "5 BR+ SERIES",
    beds: "5 Beds",
    sqft: "10,992 Sq. Ft.",
  },
  {
    image: four_BR_SERIES,
    title: "4 BR+ SERIES",
    beds: "4 Beds",
    sqft: "2,919 Sq. Ft.",
  }
];

export default CoralVillas;
