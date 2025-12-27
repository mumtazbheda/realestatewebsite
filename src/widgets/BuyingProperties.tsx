import { SanityFetch } from "@/lib/SanityFetch";
import PropertyBox from "@/shared/PropertyBox";
import SliderWrapper from "@/shared/SliderWrapper";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";

const BuyingProperties = async () => {
  const Data = await SanityFetch({
    Query: `*[_type == 'property' && avaibility == 'buy' ] | order(_createdAt desc) {
            title,
            slug,
            baths,
            beds,
            squareft,
            location,
            price,
            image,
            property_type,
            avaibility,
            agent-> {
              name,
              image,
              phone,
              slug,
              language
            },
            project -> {
                project_type
            }
          }[0..17]`,
  });

  // Handle null/undefined data
  if (!Data || !Array.isArray(Data) || Data.length === 0) {
    return null;
  }

  return (
    <div>
      <SliderWrapper
        title="Buying Property in Dubai"
        For="Properties"
        buttonLink="/buy"
        autoHeight={true}
        Slides={Data.map((items: any, i: number) => {
          const PropertyImages =
            items.image &&
            items.image.filter((item: any) => item?.asset?._ref).map((item: any) => urlForImage(item.asset._ref).url());
          const AgentImage =
            items.agent &&
            items.agent.image &&
            items.agent.image.asset &&
            urlForImage(items.agent.image.asset._ref).url();

          return (
            <PropertyBox
              key={i}
              slug={items.slug?.current ?? ""}
              BuyORrent={items.avaibility}
              propertyimage={PropertyImages}
              Price={items.price}
              beds={items.beds}
              baths={items.baths}
              squareFT={items.squareft}
              title={items.title}
              location={items.location}
              agentImage={AgentImage}
              agentName={items.agent && items.agent.name}
              agentslug={items.agent?.slug?.current ?? ""}
              whatsappLink={
                items.agent && items.agent.phone
                  ? `https://wa.me/${items.agent.phone.replaceAll(" ", "")}`
                  : ""
              }
              PropertyType={items.property_type}
            />
          );
        })}
      />
    </div>
  );
};

export default BuyingProperties;
