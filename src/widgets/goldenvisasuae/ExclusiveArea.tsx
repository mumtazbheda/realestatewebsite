import Title from "@/shared/goldenvisasuae/title";
import Link from "next/link";
import React from "react";

const ExclusiveArea = () => {
  return (
    <div>
      <Title>Exclusive Area & Pricing</Title>
      <ul className="grid md:grid-cols-3 gap-6 mt-7">
        <li className="group w-full max-w-md mx-auto">
          <div className="text-[#161616] group-hover:text-white flex flex-col items-center justify-center gap-5 bg-[whitesmoke] group-hover:bg-[#555] py-5 px-1.5 border-2 border-[rgb(239,239,239)] rounded-[20px] transition-all duration-300">
            <h2 className="font-light text-[2rem] leading-[1.2]">
              4 - 7 Bedroom
            </h2>
            <h2 className="font-light text-[21px] leading-[1.2]">
              ₹ 11 - ₹ 34 Cr*
            </h2>
            <p>OR</p>
            <h2 className="font-light text-[21px] leading-[1.2]">
              $ 1.3M - $ 4M
            </h2>
            <Link href={"/goldenvisasuae?open=true"} scroll={false}>
              <button className="bg-[#5468cb] group-hover:bg-white text-[1rem] leading-[1.2] text-[whitesmoke] group-hover:text-black py-2.5 px-[15px] rounded-[5px] transition-all duration-300">
                Get Price Breakup
              </button>
            </Link>
          </div>
        </li>

        <li className="group w-full max-w-md mx-auto">
          <div className="text-[#161616] group-hover:text-white flex flex-col items-center justify-center gap-5 bg-[whitesmoke] group-hover:bg-[#555] py-5 px-1.5 border-2 border-[rgb(239,239,239)] rounded-[20px] transition-all duration-300">
            <h2 className="font-light text-[2rem] leading-[1.2]">
            5 Bedroom
            </h2>
            <h2 className="font-light text-[21px] leading-[1.2]">
              ₹ 6.8Cr*
            </h2>
            <p>OR</p>
            <h2 className="font-light text-[21px] leading-[1.2]">
              $ 816K
            </h2>
            <Link href={"/goldenvisasuae?open=true"} scroll={false}>
              <button className="bg-[#5468cb] group-hover:bg-white text-[1rem] leading-[1.2] text-[whitesmoke] group-hover:text-black py-2.5 px-[15px] rounded-[5px] transition-all duration-300">
                Get Price Breakup
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExclusiveArea;
