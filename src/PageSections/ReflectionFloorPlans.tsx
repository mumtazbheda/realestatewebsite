import PopupRequestForm from "@/shared/PopupRequestForm";
import { ImageView, ImageViewerProvider } from "@/shared/imageViewer";
import Image from "next/image";
import React from "react";
import { PhotoView } from "react-photo-view";

export interface ReflectionFloorPlanI {
  floor_image?: string;
  type?: string;
  unit_type?: string;
  category?: string;
  total_area?: number;
}

interface ReflectionFloorPlansI {
  title?: string;
  ReflectionFloorPlans: ReflectionFloorPlanI[];
}

const ReflectionFloorPlans = async ({
  title = "Reflection Floor Plans",
  ReflectionFloorPlans,
}: ReflectionFloorPlansI) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="max-lg:overflow-x-scroll">
        <div className="relative w-full max-lg:min-w-[1180px]">
          <div className="!sticky lg:top-[135px] top-0 z-10">
            <div className="flex gap-2 w-full rounded-lg bg-secondary text-white px-6 py-2.5">
              <div className="min-w-[120px] pl-[4px] pr-[25px]">Floor Plan</div>
              <div className="w-full min-w-[170px] px-[25px]">Type</div>
              <div className="w-full min-w-[170px] px-[25px]">Unit Type</div>
              <div className="w-full min-w-[170px] px-[25px]">Category</div>
              <div className="w-full min-w-[170px] px-[25px]">Total Area</div>
              <div className="w-full min-w-[170px] px-[25px]">
                Starting prices
              </div>
            </div>
          </div>
          <ImageViewerProvider>
            <div className="flex flex-col cursor-pointer mt-1">
              {ReflectionFloorPlans &&
                ReflectionFloorPlans.length !== 0 &&
                ReflectionFloorPlans.map((items, i: number) => (
                  <div
                    key={i}
                    className="text-sm cursor-pointer flex items-center gap-2 w-full hover:bg-stone-200/50 transition-all duration-300 px-6 py-3"
                  >
                    <div className="min-w-[120px] pr-[25px]">
                      {items?.floor_image && (
                        <ImageView key={i} src={items?.floor_image}>
                          <Image
                            unoptimized
                            fill
                            className="!relative !w-[90px] !h-[90px]"
                            src={items?.floor_image}
                            alt={"Floor_Plan_" + i}
                          />
                        </ImageView>
                      )}
                    </div>
                    <PopupRequestForm
                      title="Leave a request"
                      buttonText="Property Inquiry"
                      messageField={true}
                      wrapperClassName="flex w-full"
                    >
                      <div className="flex w-full">
                        <div className="w-full min-w-[170px] px-[25px]">
                          {items?.type}
                        </div>
                        <div className="w-full min-w-[170px] px-[25px]">
                          {items?.unit_type}
                        </div>
                        <div className="w-full min-w-[170px] px-[25px]">
                          {items?.category}
                        </div>
                        <div className="w-full min-w-[170px] px-[25px]">
                          {items?.total_area?.toLocaleString()} sq. ft.
                        </div>
                        <div className="w-full min-w-[170px] px-[25px]">
                          Ask for Price
                        </div>
                      </div>
                    </PopupRequestForm>
                  </div>
                ))}
            </div>
          </ImageViewerProvider>
        </div>
      </div>
    </div>
  );
};

export default ReflectionFloorPlans;
