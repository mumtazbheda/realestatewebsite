import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import ProjectBox from "@/shared/ProjectBox";

const OffPlan = async () => {
  const Data = await SanityFetch({
    Query: `*[_type == 'project'] | order(_createdAt desc) {
            title,
            slug,
            payment_plan,
            coming_soon,
            project_type,
            handover,
            location,
            cover_image,
            area -> {
                title
            }
          }[0..9]`,
  });

  // Handle null/undefined data
  if (!Data || !Array.isArray(Data) || Data.length === 0) {
    return null;
  }

  return (
    <div>
      <SliderWrapper
        title="Off-Plan Latest Launches"
        For="Projects"
        alignNavButtons="max-md:top-[52%]"
        buttonLink="/projects"
        Slides={
          Data.map((items: any, i: number) => {
            const offPlanimage =
              items.cover_image && items.cover_image.asset &&
              urlForImage(items.cover_image.asset._ref).url();
            return (
              <ProjectBox
                key={i}
                AreaTitle={items.area && items.area.title}
                offPlanimage={offPlanimage}
                location={items.location}
                paymentPlan={items.payment_plan}
                handover={items.handover}
                title={items.title}
                project_Type={items.project_type}
                comming_soon={items.coming_soon}
                LinkSlug={items.slug?.current ?? ""}
              />
            );
          })
        }
      />
    </div>
  );
};

export default OffPlan;
