import Title from "@/shared/goldenvisasuae/title";
import React from "react";
import money_bill_slash from "@/assets/Svgs/money-bill-slash.svg";
import postcard from "@/assets/Svgs/postcard.svg";
import sort_amount_up from "@/assets/Svgs/sort-amount-up.svg";
import Image from "next/image";
import Link from "next/link";

const BuyingBenefits = () => {
  return (
    <div>
      <Title>Benefits Of Buying A Property In Dubai</Title>
      <ul className="grid md:grid-cols-3 gap-6 mt-10">
        {Data.map((items, i: number) => (
          <li key={i}>
            <Link
              href={"/goldenvisasuae?open=true"}
              scroll={false}
              className="flex items-center gap-2 shadow-[0px_2px_15px_rgb(0_0_0_/_10%)] p-5"
            >
              <Image width={50} src={items.icon} alt="Icon" />
              <h3 className="text-base font-medium text-[#63676d]">
                {items.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Data = [
  {
    title: "Tax - Free Rental Income No Property Tax",
    icon: money_bill_slash,
  },
  {
    title: "10 - Year Renewable Dubai Golden Visa",
    icon: postcard,
  },
  {
    title: "Good Returns On Investment",
    icon: sort_amount_up,
  },
];

export default BuyingBenefits;
