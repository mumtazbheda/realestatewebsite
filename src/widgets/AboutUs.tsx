import Image from "next/image";
import React from "react";
import icon_customer from "@/assets/Svgs/icon-customer.svg";
// import icon_property from "@/assets/Svgs/icon-property.svg"
// import icon_agents from "@/assets/Svgs/icon-agents.svg"
import icon_calendar from "@/assets/Svgs/icon-calendar.svg";
// import contract from "@/assets/Svgs/contract.svg"
// import feedback from "@/assets/Svgs/feedback.svg"
// import company from "@/assets/Svgs/company.svg"
import payment from "@/assets/Svgs/payment.svg";
import YoutubePlay from "@/shared/YoutubePlay";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="md:text-4xl text-3xl font-bold">About Us</h2>
      <p className="max-w-3xl">
        Welcome to Kingdom Capital Real Estate LLC, the leading real estate
        company in Dubai and your premier partner in Dubai real estate. With a
        commitment to excellence, we redefine luxury living, offering bespoke
        solutions for your property needs. Elevate your lifestyle with us.
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
        {GridsData.map((items, i: number) => (
          <div
            key={i}
            className="bg-white border rounded-lg flex flex-col text-center justify-center items-center py-14 px-[30px]"
          >
            <Image className="w-[50px] h-[50px]" src={items.icon} alt="Icon" />
            <h4 className="font-semibold pb-4 pt-6">
              <span className="text-secondary font-bold">{items.title[0]}</span>{" "}
              {items.title[1]}
            </h4>
            <p className="text-xs leading-normal">{items.text}</p>
          </div>
        ))}
      </div>
      {/* <YoutubePlay /> */}
    </div>
  );
};

const GridsData = [
  {
    icon: icon_customer,
    title: ["10+", "Languages"],
    text: "We speak the most popular languages",
  },
  {
    icon: icon_calendar,
    title: ["7", "years"],
    text: "of productive work",
  },
  {
    icon: payment,
    title: ["Excellent", "Partnership"],
    text: "Partners with all the Major Developers",
  },
  // {
  //     icon: icon_customer,
  //     title: ["120,000", "customers"],
  //     text: "private clients and the Real Estate market professionals"
  // },
  // {
  //     icon: icon_property,
  //     title: ["6,000+", "properties"],
  //     text: "have been sold, rented and leased"
  // },
  // {
  //     icon: icon_agents,
  //     title: ["250+", "top performing agents"],
  //     text: "who specialize in your target area"
  // },
  // {
  //     icon: icon_calendar,
  //     title: ["15", "years"],
  //     text: "of productive work"
  // },
  // {
  //     icon: contract,
  //     title: ["AED 11", "Billion"],
  //     text: "The total amount of real estate sold by us in 2022"
  // },
  // {
  //     icon: feedback,
  //     title: ["18+", "Languages"],
  //     text: "We speak the most popular languages"
  // },
  // {
  //     icon: company,
  //     title: ["18", "Offices"],
  //     text: "In Dubai, Abu Dhabi and Vienna"
  // },
  // {
  //     icon: payment,
  //     title: ["Top Selling Partner", "Partner"],
  //     text: "With UAE Developers"
  // },
];

export default AboutUs;
