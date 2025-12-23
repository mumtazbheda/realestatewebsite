import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import AgentsBox from "@/shared/AgentsBox";

const AgentSection = async ({
  title,
  Area,
  developer,
}: {
  title: string;
  Area?: string;
  developer?: string;
}) => {
  const Data = await SanityFetch({
    Query: `*[_type == 'agent'
        ${
          Area && Area !== ""
            ? `&& references(*[_type == "area" && title == '${Area}' || slug.current == '${Area}']._id)`
            : ""
        }
        ${
          developer && developer !== ""
            ? `&& references(*[_type == "developer" && slug.current == '${developer}']._id)`
            : ""
        } 
    ] {
            name,
            image,
            phone,
            slug,
            language
          }`,
  });

  return (
    <div>
      <SliderWrapper
        title={title}
        titleCss="!text-2xl !font-semibold"
        For="Agents"
        MobileNavButtons={false}
        showAllButton={false}
        BreakPoints={[4, 3, 2, 1]}
        Slides={Data.map((items: any, i: number) => {
          const AgentImage = urlForImage(items.image.asset._ref).url();
          return (
            <AgentsBox
              key={i}
              AgentImage={AgentImage}
              name={items.name}
              languages={items.language}
              Phone={items.phone.replaceAll(" ", "") ?? ""}
              slug={items?.slug?.current ?? ""}
            />
          );
        })}
      />
    </div>
  );
};

export default AgentSection;
