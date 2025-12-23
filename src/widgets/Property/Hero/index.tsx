import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { Box, ImageIcon, Map, Video, X } from "lucide-react";
import ImageSlider from "@/shared/ImageSlider";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import HeroDialogContent from "./HeroDialogContent";

const Hero = ({ Data }: { Data: any }) => {
  return (
    <div>
      <Dialog>
        <DialogContent className="!w-11/12 h-full max-h-[92vh] outline-none">
          <HeroDialogContent Data={Data} />
          <DialogClose asChild>
            <X
              size={30}
              className="absolute cursor-pointer stroke-secondary lg:top-[27px] top-[26px] right-6"
            />
          </DialogClose>
        </DialogContent>

        {/* Images Grid */}
        <div className="grid grid-cols-3 gap-5 max-md:hidden">
          <div className="col-span-2 !h-[480px] relative">
            <DialogTrigger asChild>
              <div className="cursor-pointer relative rounded-lg overflow-hidden !h-[480px]">
                <Image
                  fill
                  unoptimized
                  className="hover:scale-110 transition-all duration-500 !relative !w-full !h-full object-cover"
                  src={
                    Data?.image[0]
                      ? urlForImage(Data.image[0].asset._ref).url()
                      : ""
                  }
                  alt={"Image - " + Data.title}
                />
                {/* top buttons */}
                <div className="text-xs font-medium flex items-center gap-1 absolute top-0 left-0 p-4">
                  <button className="py-1 px-3 bg-secondary hover:bg-white hover:text-secondary text-white rounded-lg uppercase transition-all duration-300">
                    BUY
                  </button>
                  <button className="py-1 px-3 bg-primary hover:bg-white hover:text-primary text-white rounded-lg uppercase transition-all duration-300">
                    {Data.property_type}
                  </button>
                </div>
                {/* bottom buttons */}
                {/* <div className="flex flex-row items-center gap-1 absolute bottom-0 left-0 p-4">
                  <button className="px-3 py-1.5 text-xs bg-primary hover:bg-secondary text-white flex items-center gap-1 rounded-lg transition-all duration-300">
                    <Map size={15} /> Map
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-primary hover:bg-secondary text-white flex items-center gap-1 rounded-lg transition-all duration-300">
                    <Video size={16} /> Get video
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-primary hover:bg-secondary text-white flex items-center gap-1 rounded-lg transition-all duration-300">
                    <Box size={15} /> Get Virtual Tour
                  </button>
                </div> */}
              </div>
            </DialogTrigger>
          </div>
          <div className="col-span-1 space-y-5 relative">
            <DialogTrigger asChild>
              <div className="cursor-pointer rounded-lg overflow-hidden relative !h-[230px]">
                <Image
                  fill
                  unoptimized
                  className="hover:scale-110 transition-all duration-500 !relative !w-full !h-full object-cover"
                  src={
                    Data?.image[1]
                      ? urlForImage(Data?.image[1]?.asset?._ref)?.url()
                      : ""
                  }
                  alt={"Image - " + Data.title}
                />
              </div>
            </DialogTrigger>
            <DialogTrigger asChild>
              <div className="cursor-pointer rounded-lg overflow-hidden relative group !h-[230px]">
                <Image
                  fill
                  unoptimized
                  className="group-hover:scale-110 transition-all duration-500 !relative !w-full !h-full object-cover"
                  src={
                    Data?.image[2]
                      ? urlForImage(Data?.image[2]?.asset?._ref)?.url()
                      : ""
                  }
                  alt={"Image - " + Data.title}
                />
                <div className="flex items-center justify-center rounded-lg bg-primary/90 group-hover:bg-primary transition-all duration-500 absolute top-0 w-full h-full">
                  <div className="flex items-center text-white text-2xl leading-none">
                    <ImageIcon
                      className="w-10 h-10 mt-1"
                      strokeWidth={0.9}
                      stroke="white"
                    />{" "}
                    +{Data.image.length}
                  </div>
                </div>
              </div>
            </DialogTrigger>
          </div>
        </div>
        {/* Image Slider on small Screens */}
        <div className="md:hidden">
          <ImageSlider
            fixedTypeButtons
            ButtonHover={false}
            buyORrent={"buy"}
            projectType={Data.property_type}
            Slides={Data.image.map((items: any, i: number) => {
              const image = items.asset
                ? urlForImage(items.asset._ref).url()
                : "";
              return (
                <div key={i} className="relative select-none">
                  <Image
                    unoptimized
                    fill
                    className="sm:!h-[350px] !h-[240px] !w-full !relative object-cover"
                    src={image}
                    alt="Image1"
                  />
                </div>
              );
            })}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Hero;
