import { SanityFetch } from "@/lib/SanityFetch";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import AgentsBox from "@/shared/AgentsBox";

const Agents = async () => {
  const Data = await SanityFetch({
    Query: `*[_type == 'agent'] {
            name,
            image,
            phone,
            slug,
            language
          }[0..9]`,
  });

  // Handle null/undefined data
  if (!Data || !Array.isArray(Data) || Data.length === 0) {
    return null;
  }

  return (
    <div>
      <SliderWrapper
        title="Agents"
        For="Agents"
        MobileNavButtons={false}
        showAllButton={false}
        BreakPoints={[4, 3, 2, 1]}
        Slides={Data.map((items: any, i: number) => {
          const AgentImage =
            items.image && urlForImage(items.image.asset._ref).url();
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

export default Agents;
