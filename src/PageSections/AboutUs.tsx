/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import aboutus from "@/assets/images/aboutUs.jpg";
import hadi from "@/assets/images/hadi.jpg";
import wallpicture from "@/assets/images/wallpicture.png";
import salehmohammed from "@/assets/images/salhmohammed.jpg";
import mumtaz from "@/assets/images/mumtaz.jpg";
import venkatesh from "@/assets/images/venkatesh.jpg";
import React, { useState, useEffect, useRef } from "react";
const AboutUs = () => {
  const leftSideRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 768;
  const dynamicHeight = isSmallScreen ? "50vh" : "99vh";
  useEffect(() => {
    if (leftSideRef.current) {
      const contentHeight = leftSideRef.current.offsetHeight;
      setImageHeight(contentHeight);
    }
  }, []);
  return (
    <div>
      {/* Company Overview */}
      <section className="py-10 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6">
        {/* Left Side: About Us + Our Mission */}
        <div ref={leftSideRef} className="md:w-1/2 space-y-6">
          {/* About Us Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-green-600">About Us</h2>
            <p className="text-sm leading-6">
              With over 9 years of unwavering dedication to the UAE market, Kingdom Capital Real Estate L.L.C. has firmly established itself as one of the UAE's leading real estate firms. We pride ourselves on our deep knowledge and expertise in local real estate markets, emerging trends, and regulations, while embracing and leveraging innovative technologies to enhance the real estate experience.
              <br />
              <br />
              Beyond buying, selling, conveyancing, and managing properties, we offer comprehensive solutions tailored to meet each client's unique needs. At Kingdom Capital, we’re not just in the real estate business; we’re in the business of delivering extraordinary results. Whether you’re searching for your dream home or seeking a sound investment, our approach extends beyond mere transactions. It’s about building lasting relationships and creating value for our clients.
              <br />
              <br />
              With a wealth of experience and a steadfast commitment to integrity, we bring unparalleled expertise to every transaction. Our profound understanding of market dynamics and our dedication to exceeding expectations set us apart in the industry. By offering distinctive services, understanding our clients’ aspirations, and turning their real estate goals into reality, we remain committed to excellence.
              <br />
              <br />
              We are the key that unlocks the doors to your dreams!
            </p>
          </div>

          {/* Our Mission Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-green-600">
              Our Mission
            </h2>
            <p className="text-sm leading-6">
              Our mission is to elevate the living experience in the UAE by building genuine connections and weaving the unique stories of our clients into the very fabric of their living spaces. We are dedicated to helping individuals and families find homes that contribute positively to the social and cultural tapestry of the UAE.
              <br />
              <br />
              Through comprehensive assistance and exceptional service, we guide our clients with a commitment to understanding and fulfilling their unique needs and aspirations. At Kingdom Capital, we believe in creating homes, not just houses—spaces where memories are made and dreams come to life.
            </p>
          </div>
        </div>

        {/* Right Side: Common Image */}
        <div className="md:w-1/2 flex justify-center items-stretch">
          {imageHeight !== null && (
            <Image
              src={aboutus}
              alt="About Us"
              width={500}
              height={imageHeight}
              className="rounded-sm object-fill w-full "
              style={{ height: dynamicHeight }}
            />
          )}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-green-600 w-[90%]">
          Kingdom Capital Management
        </h2>

        {/* Leadership Members */}
        <div className="space-y-10">
          {/* HADI AL MANSOUR */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/4 relative">
              <div className="absolute top-0 left-1/4 right-0 h-[4px] bg-green-600"></div>
              <div className="absolute bottom-0 left-0 right-1/4 h-[4px] bg-green-600"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-green-600"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-green-600"></div>
              <Image
                src={hadi}
                alt="Hadi Al Mansour"
                className="rounded-lg object-contain w-full h-40"
              />
            </div>
            <div className="w-full md:w-3/4 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-green-600">
                Hadi Al Mansour
              </h3>
              <p className="text-gray-700 Times New Roman mb-4 text-green-600">
                Founder
              </p>
              <p className="text-sm">
                Hadi is the Founder of Kingdom Capital, a
                leading real estate company based in Dubai. With an illustrious
                career spanning over 25 years, Hadi brings a wealth of
                experience in project management to the forefront of the
                company's operations.
                <br />
                <br /> Hailing from a strong foundation in the Oil & Gas
                industry, Hadi has successfully managed high-stakes projects for
                global giants such as Saudi Aramco, Sumitomo, and Total. This
                extensive experience in complex, large-scale undertakings has
                equipped him with exceptional leadership and strategic planning
                skills.
                <br />
                <br /> Transitioning seamlessly into the dynamic world of real
                estate, Hadi has spearheaded numerous landmark projects in Saudi
                Arabia, demonstrating an unparalleled ability to transform
                visions into reality. This proven track record, coupled with a
                deep understanding of market trends and customer needs, has
                positioned Kingdom Capital as a dominant force in the Dubai real
                estate landscape.
              </p>
            </div>
          </div>

          {/* Large Image Section */}
          <div className="flex justify-center mt-10">
            <Image
              src={wallpicture}
              alt="Large Leadership Team"
              // className="object-cover w-[90%] h-[500px] rounded-lg"
              // className="object-cover w-[90vw] h-auto max-h-[500px] rounded-lg"
              className="object-cover w-[90vw] h-auto sm:max-h-[500px] md:max-h-[400px] lg:max-h-[500px] rounded-lg"
            />
          </div>

          {/* MUMTAZ AHMED */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/4 relative">
              <div className="absolute top-0 left-1/4 right-0 h-[4px] bg-green-600"></div>
              <div className="absolute bottom-0 left-0 right-1/4 h-[4px] bg-green-600"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-green-600"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-green-600"></div>
              <Image
                src={mumtaz}
                alt="Mumtaz Ahmed"
                className="rounded-lg object-contain w-full h-40"
              />
            </div>

            {/* Right Section: Text Content */}
            <div className="w-full md:w-3/4 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-green-600">
                Mumtaz Ahmed
              </h3>
              <p className="text-gray-700 Times New Roman mb-4 text-green-600">
                Managing Director
              </p>
              <p className="text-sm">
                Mumtaz Ahmed, Managing Director of Kingdom Capital, with years
                of extensive experience in real estate marketing, operations,
                and sales, focusing strongly on technology-driven solutions. His
                expertise and profound understanding of the UAE market have been
                instrumental in shaping the strategic vision that has guided the
                company's growth and success.
                <br />
                <br /> Renowned for his integrity and professionalism, Mumtaz
                Ahmed has earned a reputation for offering outstanding service
                to clients and partners alike. Under his leadership, Kingdom
                Capital has become a benchmark for reliability and innovation in
                the real estate sector. His dedication to building long-term
                relationships and his unwavering commitment to excellence ensure
                that Kingdom Capital remains a market leader.
              </p>
            </div>
          </div>

          {/* SALEH MOHAMMED AL SEDRAN */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/4 relative">
              <div className="absolute top-0 left-1/4 right-0 h-[4px] bg-green-600"></div>
              <div className="absolute bottom-0 left-0 right-1/4 h-[4px] bg-green-600"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-green-600"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-green-600"></div>{" "}
              <Image
                src={salehmohammed}
                alt="Saleh Mohammed Al Sedran"
                className="rounded-lg object-contain w-full h-40"
              />
            </div>
            <div className="w-full md:w-3/4 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-green-600">
                Saleh Mohammed Al Sedran
              </h3>
              <p className="text-gray-700 Times New Roman mb-4 text-green-600">
                VP of Business Development
              </p>
              <p className="text-sm">
                As the Vice President of Business Development, Saleh Mohammed Al
                Sedran is a key leader within Kingdom Capital Real Estate,
                responsible for spearheading strategic initiatives that enhance
                our market presence and drive revenue growth. With extensive
                experience in the business development sector, Saleh brings a
                visionary approach to business development, focusing on building
                robust relationships and identifying lucrative opportunities.
              </p>
            </div>
          </div>

          {/* VENKETESH ROWLO */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/4 relative">
              <div className="absolute top-0 left-1/4 right-0 h-[4px] bg-green-600"></div>
              <div className="absolute bottom-0 left-0 right-1/4 h-[4px] bg-green-600"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-green-600"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-green-600"></div>
              <Image
                src={venkatesh}
                alt="Venketesh Rowlo"
                className="rounded-lg object-contain w-full h-40"
              />
            </div>
            <div className="w-full md:w-3/4 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-green-600">
                Venketesh Rowlo
              </h3>
              <p className="text-gray-700 Times New Roman mb-4 text-green-600">
                Sales Director
              </p>
              <p className="text-sm">
                Venketesh Rowlo, Sales Director of Kingdom Capital, leads our
                team with a wealth of real estate expertise. His experience in
                handling large-volume deals and structuring investment
                strategies has played a crucial role in the company's
                development, driving our success in Dubai's competitive property
                market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
