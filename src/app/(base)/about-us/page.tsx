// import Navigation from "@/shared/Navigation";
// import Image from "next/image";
// import React from "react";
// import about_cover from "@/assets/images/about.jpg";
// import logo from "@/assets/images/Logo.png";
// import logo_penthouse from "@/assets/Svgs/logo_penthouse_black.svg";
// import logo_LUXURY_AUSTRIA from "@/assets/Svgs/LUXURY_AUSTRIA.svg";
// import ContactUs from "@/shared/ContactUs";
// import { cn } from "@/lib/utils";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Us",
//   description: "About Us - Kingdom Capital",
// };

// const AboutUs = () => {
//   return (
//     <main className="py-6">
//       <div className="max-width sm:px-4 px-2 flex flex-col-reverse">
//         {/* Hero Section */}
//         <section className="flex md:flex-row flex-col gap-8 md:mt-7 mt-5">
//           <div className="flex-[0_1_35%] flex flex-col gap-3.5">
//             <h6 className="text-2xl leading-none font-semibold">About Us</h6>
//             <h1 className="md:text-[54px] text-[38px] leading-[100%] font-bold">
//               Kingdom group
//             </h1>
//             <hr className="h-1 w-20 bg-secondary md:mt-8 mt-2" />
//             <p className="">
//               Established in 2008, The Metropolitan Group takes pride in
//               providing our local and overseas clients with the highest possible
//               level of service, advice, support and assistance with all their
//               property requirements
//             </p>
//           </div>
//           <div className="flex-[0_1_65%]">
//             <Image
//               className="sm:min-h-[440px] min-h-[220px] object-cover object-right rounded-[8px]"
//               src={about_cover}
//               alt="about_cover"
//             />
//           </div>
//         </section>

//         {/* Navigation */}
//         <section>
//           <Navigation title={"About Us"} wrapperClassName="!block" />
//         </section>
//       </div>

//       {/* What Can We Do */}
//       <section className="bg-secondary/10 mt-12 md:py-[90px] py-[50px]">
//         <div className="flex flex-col gap-4 max-width sm:px-4 px-2">
//           <h2 className="md:text-[36px] text-[28px] leading-[110%] font-bold">
//             What Can We Do for You?
//           </h2>
//           <p className="md:text-2xl text-[20px] leading-[1.4] mt-2.5">
//             The group includes three full-service real estate agencies:
//             Metropolitan Premium Properties (Dubai), Metropolitan Capital Real
//             Estate LLC (Abu Dhabi) and Luxury Immobilien GmbH (Vienna).
//           </p>
//           <p className="text-base leading-[150%] md:border-t md:border-black/5 pt-1">
//             Plus supporting company Metropolitan Consulting FZE, providing
//             personal and business legal services in the UAE.
//           </p>
//         </div>
//       </section>

//       {/* Good Company Section */}
//       <section className="max-width sm:px-4 px-2 mt-16">
//         <div className="flex flex-col gap-4">
//           <h2 className="md:text-[36px] text-[28px] leading-[110%] font-bold">
//             We&apos;re in Good Company
//           </h2>
//           <p className="md:text-lg text-base leading-[150%]">
//             Metropolitan Premium Properties is a part of Metropolitan Group:
//           </p>
//         </div>
//         <ul className="w-full pl-[18px] md:mt-12 mt-8">
//           {GoodCompanyData.map((item, index) => (
//             <li
//               key={index}
//               className={cn([
//                 "border-l-2 flex md:flex-row flex-col w-full relative md:pl-[70px] pl-8 pr-4 md:pb-[55px] pb-[30px]",
//                 GoodCompanyData.length > index + 1
//                   ? "border-secondary/20"
//                   : "border-white",
//               ])}
//             >
//               <div className="bg-white absolute -left-[31px] -top-4 max-md:scale-[.65]">
//                 <div className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full border-[10px] border-white bg-secondary/[15%]">
//                   <div className="w-2 h-2 bg-secondary rounded-full"></div>
//                   <div className="absolute w-6 h-6 bg-secondary/20 rounded-full"></div>
//                 </div>
//               </div>
//               <div className="w-full -mt-0.5">
//                 <h3 className="text-2xl font-semibold text-secondary">
//                   {item.title}
//                 </h3>
//                 <div className="w-full flex md:flex-row flex-col">
//                   <div className="md:flex-[0_0_75%] md:max-w-[75%] md:pt-4 pt-2">
//                     <p className="text-base md:pr-[115px]">{item.desc}</p>
//                   </div>
//                   <div className="md:flex-[0_0_25%] md:max-w-[25%] max-md:mt-5 md:-mt-1">
//                     <div className="w-full flex items-center md:justify-center md:border-t-[3px] border-t-2 border-secondary md:py-[30px] py-4 md:px-[20px]">
//                       <Image
//                         className="w-full md:max-w-[180px] max-w-[150px]"
//                         src={item.logo}
//                         alt="logo"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Contact Us Section */}
//       <section className="max-width sm:px-4 px-2 sm:mt-32 mt-20">
//         <ContactUs />
//       </section>
//     </main>
//   );
// };

// const GoodCompanyData = [
//   {
//     title: "Metropolitan Premium Properties",
//     desc: "A leader in UAE market and the flagship company of the group, Metropolitan Premium Properties is considered one of the best Dubai real estate agencies. It is an accredited broker for all licensed developers in Dubai, Abu Dhabi and Sharjah. The company has multiple rewards for the best sales from the biggest UAE real estate developers, such as EMAAR, Dubai Properties, MERAAS, DAMAC and ALDAR.",
//     logo: logo,
//   },
//   {
//     title: "Metropolitan Capital Real Estate",
//     desc: "The company is accredited by the largest developers in Abu Dhabi and is confidently conquering the leading positions in this emirate. Official broker of Abu Dhabi development group ALDAR.",
//     logo: logo,
//   },
//   {
//     title: "Metropolitan Premium Properties Hong Kong",
//     desc: "The division of Metropolitan Premium Properties in Hong Kong aims to cater to our clients in China who are interested in purchasing or renting Dubai real estate, and relocating to the UAE. Our agents offer a wide range of services both within the primary and secondary market, including sales, rentals, acquisition and property management. We will also help you and your family take advantage of local residence-by-investment programmes where you can enjoy all the perks of a long-term visa in the UAE.",
//     logo: logo,
//   },
//   {
//     title: "Metropolitan Consulting",
//     desc: "The first company in the group, was established in 2008. it specializes in the assimilation of new and supporting of existing business in UAE, rendering corporate services to customers from all over the world. the portfolio of services also includes legal and court services, as well as offering various residence and citizenship programs. Company offices work in Dubai and Sharjah.",
//     logo: logo,
//   },
//   {
//     title: "Luxury Immobilien GmbH",
//     desc: "The first company in the group, was established in 2008. it specializes in the assimilation of new and supporting of existing business in UAE, rendering corporate services to customers from all over the world. the portfolio of services also includes legal and court services, as well as offering various residence and citizenship programs. Company offices work in Dubai and Sharjah.",
//     logo: logo_penthouse,
//   },
//   {
//     title: "Penthouse.ae",
//     desc: "This division of Metropolitan Group was created specifically for high-profile clients who want to acquire exclusive luxury properties across the most prestigious destinations in Dubai, which are not available to the general public. The company specializes in assisting+ high net worth individuals in purchasing and selling luxurious villas and penthouses in the emirate of Dubai",
//     logo: logo_LUXURY_AUSTRIA,
//   },
// ];

// export default AboutUs;

import AboutUs from "@/PageSections/AboutUs";
import React from "react";

export default function page() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
