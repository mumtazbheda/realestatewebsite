import Title from "@/shared/goldenvisasuae/title";
import React from "react";
import marina from "@/assets/images/marina.png";
import downtown from "@/assets/images/downtown.png";
import airport from "@/assets/images/airport.png";
import Image from "next/image";

const Connectivity = () => {
  return (
    <div>
      <Title>Connectivity</Title>
      <ul className="mt-7">
        <li className="w-full">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-16 sm:gap-10 gap-5 bg-[rgb(248,248,248)] border-2 border-[rgb(239,239,239)] rounded-[25px] sm:p-7 p-5">
            {Data.map((items: any, i: number) => (
              <div
                key={i}
                className="w-full text-center flex flex-col items-center justify-center gap-5 bg-white hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[20px] p-[30px] transition-all duration-300"
              >
                <Image width={100} src={items.icon} alt="Icon" />
                <h6 className="text-[#4c4c4c] text-[19px] leading-[1.2] font-light">
                  {items.min} Mins
                </h6>
                <p className="text-[#4c4c4c] text-[20px] leading-[1.2] font-light pb-4">
                  {items.title}
                </p>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

const Data = [
  {
    icon: marina,
    min: 15,
    title: "Sheikh Zayed Road",
  },
  {
    icon: downtown,
    min: 20,
    title: "Mall of Emirates",
  },
  {
    icon: airport,
    min: 20,
    title: "Metro",
  },
  {
    icon: airport,
    min: 30,
    title: "Airport",
  },
];

export default Connectivity;
