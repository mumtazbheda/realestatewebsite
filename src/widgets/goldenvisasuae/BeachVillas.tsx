import Title from "@/shared/goldenvisasuae/title";
import React from "react";
import Image from "next/image";
import Slider from "@/shared/goldenvisasuae/slider";
import bed from "@/assets/images/bed.png";
import wide from "@/assets/images/wide.png";
import The_Exterior_Day_View from "@/assets/images/The_Exterior_Day_View.jpg";
import The_Exterior_Front_night from "@/assets/images/The_Exterior_Front_night.jpg";
import Interior_Design from "@/assets/images/Interior_Design.jpg";
import Sapphire from "@/assets/images/Sapphire-img.jpg";
import Acquamarina from "@/assets/images/Acquamarina-img.jpg";
import Tropical_Mist from "@/assets/images/Tropical Mist-img.jpg";
import Azure_Blue from "@/assets/images/Azure Blue-img.jpg";
import Mediterranean from "@/assets/images/Mediterranean-img.jpg";
import Link from "next/link";

const BeachVillas = () => {
  return (
    <div>
      <Title>Park Greens</Title>
      <div className="max-md:max-w-[600px] mx-auto mt-12">
        <Slider
          Slides={BeachVillasData.map((items, i: number) => (
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
                    {/* <Image width={25} height={25} src={wide} alt={"wide"} />
                    <span>{items.sqft}</span> */}
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
    image: The_Exterior_Day_View,
    title: "The Exterior – Day View",
    beds: "5 Beds",
    sqft: "",
  },
  {
    image: The_Exterior_Front_night,
    title: "The Exterior - Front night",
    beds: "5 Beds",
    sqft: "",
  },
  {
    image: Interior_Design,
    title: "Interior Design",
    beds: "5 Beds",
    sqft: "",
  },
];

export default BeachVillas;
