import { SanityFetch } from '@/lib/SanityFetch'
import ProjectBox from '@/shared/ProjectBox'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'

const Projects = async ({ Area , AgentName  , AgentSlug,developer , amount }: { Area?: string , AgentName?:string , AgentSlug?:string , developer?:string , amount?:number | string }) => {

    const Data = await SanityFetch({
        Query: `*[_type == 'project'
        ${Area && Area !== "" ? `&& references(*[_type == "area" && title == '${Area}' || slug.current == '${Area}']._id)` : ""}
        ${AgentName && AgentName !== "" ? `&& references(*[_type == "agent" && name == '${AgentName}' || slug.current == '${AgentSlug}']._id)` : ""}
        ${developer && developer !== "" ? `&& references(*[_type == "developer" && slug.current == '${developer}']._id)` : ""}
    ] {
            title,
            slug,
            payment_plan,
            coming_soon,
            project_type,
            handover,
            location,
            cover_image,
            image,
            area -> {
                title
            }
          }${amount ? `[0..${amount}]` : "[0..8]"}`
    })

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {Data && Data.map((items: any, i: number) => {
                const offPlanimage = urlForImage(items.cover_image.asset._ref).url()
                return (
                    <ProjectBox key={i}
                        AreaTitle={items.area.title}
                        offPlanimage={offPlanimage}
                        location={items.location}
                        paymentPlan={items.payment_plan}
                        handover={items.handover}
                        title={items.title}
                        project_Type={items.project_type}
                        comming_soon={items.coming_soon}
                        LinkSlug={items.slug.current}
                    />
                )
            })}
        </div>
    )
}

export default Projects