import { SanityFetch } from '@/lib/SanityFetch'
import PropertyBox from '@/shared/PropertyBox'
import SliderWrapper from '@/shared/SliderWrapper'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'
import { ProjectTypes } from '@/lib/constants'

interface PropertiesSliderSectionI {
    Title: string;
    Area?: string;
    AgentName?: string;
    AgentSlug?: string;
    ByCatogery?: string;
    ByProject?: string;
    bySale_or_rent?: string;
    bySoldOrRented?: string[];
    showAllButton?: boolean;
}

const PropertiesSliderSection = async ({
    Title,
    Area,
    AgentName,
    AgentSlug,
    ByCatogery,
    ByProject,
    bySale_or_rent,
    bySoldOrRented,
    showAllButton
}: PropertiesSliderSectionI) => {

    const BySoldOrRented = bySoldOrRented && JSON.stringify(bySoldOrRented).replaceAll('"', "'")

    const Data = await SanityFetch({
        Query: `*[_type == 'property' 
        ${bySale_or_rent && bySale_or_rent.toLowerCase() !== "sold" ? `&& avaibility != 'sold'` : ""}
        ${!bySale_or_rent && !bySoldOrRented ? `&& avaibility != 'sold'` : ""}
        ${bySale_or_rent && bySale_or_rent !== "" ? `&& avaibility == '${bySale_or_rent}'` : ""}
        ${BySoldOrRented && BySoldOrRented !== "" ? `&& avaibility in ${BySoldOrRented}` : ""}
        ${Area && Area !== "" ? `&& references(*[_type == "area" && title == '${Area}' || slug.current == '${Area}']._id)` : ""}
        ${AgentName && AgentName !== "" ? `&& references(*[_type == "agent" && name == '${AgentName}' || slug.current == '${AgentSlug}']._id)` : ""}
        ${ByCatogery && ByCatogery !== "" ? `&& property_type == '${ByCatogery}'` : ""}
        ${ByProject && ByProject !== "" ? `&& references(*[_type == "project" && slug.current == '${ByProject}']._id)` : ""}
    ] {
            title,
            slug,
            baths,
            beds,
            squareft,
            location,
            price,
            image,
            avaibility,
            property_type,
            agent-> {
              name,
              image,
              phone,
              language
            },
            project -> {
                project_type
            }
          }[0..15]`
    })

    const Category = ByCatogery && ByCatogery !== "" && ProjectTypes.find((ProjectTypes) => ProjectTypes.value === ByCatogery)

    return (
        <div className='max-md:px-4'>
            <SliderWrapper
                title={Title}
                For={Category ? Category.title : "Properties"}
                titleCss='!text-2xl !font-semibold'
                buttonLink={(bySale_or_rent && bySale_or_rent !== "" && bySale_or_rent === "rent") ?
                    (ByCatogery && ByCatogery !== "" ? `/rent?propertyType=${ByCatogery}` : "/rent")
                    :
                    (ByCatogery && ByCatogery !== "" ? `/buy?propertyType=${ByCatogery}` : "/buy")
                }
                showAllButton={showAllButton !== undefined ? showAllButton : true}
                Slides={Data && Data.map((items: any, i: number) => {
                    const PropertyImages = items.image ? items.image.map((item: any) => (
                        urlForImage(item.asset._ref).url()
                    )) : []
                    const AgentImage = items.agent && items.agent.image && urlForImage(items.agent.image.asset._ref).url()
                    return (
                        <PropertyBox key={i}
                            slug={items.slug.current}
                            BuyORrent={items.avaibility}
                            propertyimage={PropertyImages}
                            Price={items.price}
                            beds={items.beds}
                            baths={items.baths}
                            squareFT={items.squareft}
                            title={items.title}
                            location={items.location}
                            agentImage={AgentImage}
                            agentName={items.agent && items.agent.name && items.agent.name}
                            agentslug={items.agent && items.agent.slug && items.agent.slug.current}
                            whatsappLink={""}
                            PropertyType={items.property_type}
                        />
                    )
                })} />
        </div>
    )
}

export default PropertiesSliderSection