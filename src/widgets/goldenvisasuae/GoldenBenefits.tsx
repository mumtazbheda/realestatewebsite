import Title from "@/shared/goldenvisasuae/title";
import React from "react";
import sponsorship from "@/assets/images/sponsorship.png";
import opportunities from "@/assets/images/opportunities.png";
import convenience from "@/assets/images/convenience.png";
import visas from "@/assets/images/visas.png";
import long_term_residency from "@/assets/images/long-term-residency.png";
import Image from "next/image";
import Link from "next/link";

const GoldenBenefits = () => {
  return (
    <div>
      <Title>Benefits Of Golden Visa</Title>
      <h5 className="font-light text-xl mt-4">
        The Golden Visa program in the United Arab Emirates (UAE) offers a range
        of benefits to foreign investors, entrepreneurs, and skilled
        professionals who meet the eligibility criteria. Here are some of the
        key benefits of the UAE Golden Visa:
      </h5>
      <ul className="grid md:grid-cols-12 gap-6 md:[&>*:nth-child(4)]:col-start-3 mt-7">
        {Data.map((items, i: number) => (
          <li
            key={i}
            className="col-span-4 text-center gap-2 shadow-[0px_2px_15px_rgb(0_0_0_/_10%)] "
          >
            <Link
              href={"/goldenvisasuae?open=true"}
              scroll={false}
              className="w-full flex flex-col items-center p-5"
            >
              <Image width={92} src={items.icon} alt="Icon" />
              <h3 className="text-[20px] font-medium text-[#274685]">
                {items.title}
              </h3>
              <p className="text-base text-[#161616] font-light">
                {items.desc}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Data = [
  {
    icon: sponsorship,
    title: "No Sponsorship Required",
    desc: "One of the biggest benefits of the UAE Golden Visa is that it eliminates the need for a sponsor. This makes the process of obtaining a visa much easier and less complicated. As an applicant, you won’t have to worry about finding a sponsor or obtaining a sponsor’s approval.",
  },
  {
    icon: opportunities,
    title: "Employment Opportunities",
    desc: "The UAE is one of the world’s leading business and financial centers, with a thriving economy and a wide range of employment opportunities. With the UAE Golden Visa, you’ll have the opportunity to take advantage of these opportunities and build a successful career in the UAE.",
  },
  {
    icon: convenience,
    title: "Travel Convenience",
    desc: "With the UAE Golden Visa, you’ll have the convenience of traveling in and out of the UAE without applying for a separate visa each time you enter the country. This is especially important for those who frequently travel for work or personal reasons.",
  },
  {
    icon: visas,
    title: "Family Visas",
    desc: "The UAE Golden Visa allows you to bring your family to the UAE. This includes your spouse and children, who can also obtain visas and live in the UAE with you. This benefits families who want to be together in the UAE and enjoy the country’s many benefits.",
  },
  {
    icon: long_term_residency,
    title: "Long-Term Residency",
    desc: "The UAE Golden Visa allows for long-term residency in the UAE, which can be a big advantage for those who want to stay in the country for an extended period. With this visa, you can stay in the UAE for up to 10 years, depending on your situation.",
  },
];

export default GoldenBenefits;
