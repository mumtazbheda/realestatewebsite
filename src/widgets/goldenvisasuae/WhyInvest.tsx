import Title from "@/shared/goldenvisasuae/title";
import Link from "next/link";
import React from "react";

const WhyInvest = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:gap-16 gap-8 max-md:w-fit max-md:mx-auto">
      {/* left section */}
      <div className="md:max-w-[550px]">
        <Title>WHY INVEST NOW IN DUBAI ???</Title>
        <ul className="grid sm:grid-cols-2 gap-6 mt-4">
          {whyInvestData.map((items, i: number) => (
            <li key={i}>
              <Link
                href={"/goldenvisasuae?open=true"}
                scroll={false}
                className="flex items-center shadow-[0px_2px_15px_rgb(0_0_0_/_10%)] p-5"
              >
                <h3 className="text-base font-medium text-[#63676d]">
                  {items}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* right section */}
      <div className="md:max-w-[550px]">
        <Title>WHY BOOK NOW WITH US ??</Title>
        <ul className="grid sm:grid-cols-2 gap-6 mt-4">
          {whyBookData.map((items, i: number) => (
            <li
              key={i}
              className="flex items-center shadow-[0px_2px_15px_rgb(0_0_0_/_10%)] p-5"
            >
              <h3 className="text-base font-medium text-[#63676d]">{items}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const whyInvestData = [
  "4th Safest City in the World",
  "No Income Tax",
  "Highest Rental Yield ( Upto 15% )",
  "Upto 40% Capital Appreciation",
];

const whyBookData = [
  "Pay token and Fly to Dubai Free",
  "Payment Plans & Flexibility Available",
  "100% Privacy",
  "Golden Visa Assistance",
];

export default WhyInvest;
