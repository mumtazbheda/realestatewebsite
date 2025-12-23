import Slider from "@/shared/Slider";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Image2 from "@/assets/images/palm-jebel-ali-01.jpg";
import { urlForImage } from "../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/components/customPortableText";

interface ContentwithSliderI {
  title: string;
  TopContent: any;
  SliderImages: string[] | StaticImageData[];
  BottomContent: any;
  Large_Slider: boolean;
  Short_Slider: boolean;
  About_Section?: boolean;
  About_Section_Properties?: {
    starting_price?: string;
    area?: string;
    available_units?: string;
    handover?: string;
  };
  PriceValidity: boolean;
  PriceValidityText?: string;
}

const ContentwithSlider = ({
  title,
  TopContent,
  SliderImages,
  BottomContent,
  Large_Slider,
  Short_Slider,
  About_Section = false,
  About_Section_Properties,
  PriceValidity,
  PriceValidityText,
}: ContentwithSliderI) => {
  return (
    <div className="space-y-7">
      {title && title !== "" && (
        <h2 className="text-2xl font-semibold">{title}</h2>
      )}

      {/* About Section */}
      {About_Section && About_Section_Properties && (
        <div className="max-w-screen-lg pb-4">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-5 border-y">
            {About_Section_Properties.starting_price && (
              <div>
                <h4 className="text-2xl text-secondary font-semibold">
                  {About_Section_Properties.starting_price} AED
                </h4>
                <div className="text-sm">Starting Price from</div>
              </div>
            )}
            {About_Section_Properties.area && (
              <div>
                <h4 className="text-2xl text-secondary font-semibold">
                  {About_Section_Properties.area}
                </h4>
                <div className="text-sm">Area from (sq. ft.)</div>
              </div>
            )}
            {About_Section_Properties.available_units && (
              <div>
                <h4 className="text-2xl text-secondary font-semibold">
                  {About_Section_Properties.available_units}
                </h4>
                <div className="text-sm">Available Units</div>
              </div>
            )}
            {About_Section_Properties.handover && (
              <div>
                <h4 className="text-2xl text-secondary font-semibold">
                  {About_Section_Properties.handover}
                </h4>
                <div className="text-sm">Handover</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Top Content */}
      {TopContent && (
        <div className="flex flex-col gap-4 text-sm leading-relaxed max-w-screen-lg">
          <CustomPortableText value={TopContent} />
        </div>
      )}

      {Large_Slider && Large_Slider === true && (
        <div className="lg:h-[620px] md:h-[500px] sm:h-[300px] min-[450px]:h-[250px] h-[200px] rounded-lg overflow-hidden">
          <Slider
            SpaceBetween={20}
            BreakPoints={[1, 1, 1]}
            Slides={SliderImages.map((items: any, i: number) => (
              <Image
                unoptimized
                fill
                className="cursor-grab !relative !w-full !h-full object-cover rounded-lg"
                key={i}
                src={items}
                alt={items}
              />
            ))}
          />
        </div>
      )}

      {Short_Slider && Short_Slider === true && (
        <>
          <div className="absolute right-0 left-0 sm:h-[360px] xs:h-[250px] h-[200px] rounded-lg overflow-hidden sm:px-4 px-2">
            <Slider
              SpaceBetween={5}
              BreakPoints={[3, 2, 1]}
              Slides={SliderImages.map((items: any, i: number) => (
                <Image
                  unoptimized
                  fill
                  className="!relative !w-full !h-full object-cover rounded-lg"
                  key={i}
                  src={items}
                  alt={items}
                />
              ))}
            />
          </div>
          <div className="sm:h-[360px] xs:h-[250px] h-[200px]"></div>
        </>
      )}

      {/* Bottom Content */}
      {BottomContent && (
        <div className="flex flex-col gap-4 text-sm leading-relaxed max-w-screen-lg">
          <CustomPortableText value={BottomContent} />
        </div>
      )}
      {PriceValidity && (
        <div className="bg-[#f1f1f1] rounded-lg p-2.5 text-sm text-[15px] leading-relaxed max-w-[930px]">
          {PriceValidityText}
        </div>
      )}
    </div>
  );
};

export default ContentwithSlider;
