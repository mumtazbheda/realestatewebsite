import Title from "@/shared/goldenvisasuae/title";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Overview = () => {
  return (
    <div>
      <Title>Overview</Title>
      <div className="flex gap-6 mt-4">
        <h5 className="flex-1 font-light text-xl">
          Experience luxury living at its finest with Autograph Collection at
          Damac Hills, the latest residential series by Damac Properties with 4
          to 7-bedroom boutique villas. (Autograph Collection Damac Hills)
        </h5>
        <h5 className="flex-1 font-light text-xl max-md:hidden">
          Park Greens in Damac Hills 2 offers modern living surrounded by lush
          greenery, with a range of amenities for residents to enjoy.
        </h5>
      </div>
      <div className="flex md:flex-row flex-col gap-6 mt-5">
        <ul className="flex-1 flex flex-col gap-6">
          {AutographData.map((items, i: number) => (
            <li key={i}>
              <Link
                href={"/goldenvisasuae?open=true"}
                scroll={false}
                className="flex items-center hover:bg-[#e8c99b] shadow-[0px_2px_15px_rgb(0_0_0_/_10%)] p-5"
              >
                <h3 className="text-base leading-tight font-medium text-[#63676d]">
                  {items}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
        <h5 className="flex-1 font-light text-xl md:hidden">
          Park Greens in Damac Hills 2 offers modern living surrounded by lush
          greenery, with a range of amenities for residents to enjoy.
        </h5>
        <ul className="flex-1 flex flex-col gap-6">
          {ParkGreenData.map((items, i: number) => (
            <li key={i}>
              <Link
                href={"/goldenvisasuae?open=true"}
                scroll={false}
                className="flex items-center hover:bg-[#e8c99b] shadow-[0px_2px_15px_rgb(0_0_0_/_10%)] p-5"
              >
                <h3 className="text-base leading-tight font-medium text-[#63676d]">
                  {items}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AutographData = [
  "Autograph Collection offers exclusive boutique villas with 4 to 7 bedrooms, each meticulously designed for luxury living.",
  "With only 50 villas in this collection, residents can enjoy a sense of privacy and community spirit in a sophisticated setting.",
  "The Autograph Collection showcases modern architecture and premium amenities, providing residents with a prestigious lifestyle in one of Dubai's most sought-after communities.",
];

const ParkGreenData = [
  "Park Greens at Damac Hills 2 offers modern living amidst lush greenery, providing a tranquil retreat from urban life.",
  "Residents enjoy access to landscaped parks, playgrounds, and recreational facilities, fostering a vibrant community atmosphere.",
  "Prime location and contemporary design, Park Greens is the perfect choice for families seeking a balanced lifestyle.",
];

export default Overview;
