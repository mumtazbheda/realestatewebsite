import { SanityFetch } from '@/lib/SanityFetch'
import ProjectBox from '@/shared/ProjectBox'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'

const Projects = async () => {

    const Data = await SanityFetch({
        Query: `*[_type == 'project'] {
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
          }`
    })

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {Data.map((items: any, i: number) => {
                const offPlanimage = urlForImage(items.cover_image.asset._ref).url()
                return (
                    <ProjectBox key={i}
                        AreaTitle={items.title}
                        LinkSlug={items.slug.current}
                        offPlanimage={offPlanimage}
                        location={items.location}
                        paymentPlan={items.payment_plan}
                        handover={items.handover}
                        title={items.title}
                        project_Type={items.project_type}
                        comming_soon={items.coming_soon}
                    />
                )
            })}
        </div>
    )
}

export default Projects