import React from 'react'
import SliderWrapper from './SliderWrapper'
import ReviewBox from './ReviewBox'
import { SanityFetch } from '@/lib/SanityFetch'
import { urlForImage } from '../../sanity/lib/image'

const Reviews = async () => {

    const Data = await SanityFetch({
        Query: `*[_type == 'reviews'] | order(_createdAt desc) {
            review,
            stars,
            source,
            source_logo,
            published_on
          }[0..14]`
    })

    return (
        <SliderWrapper
            autoHeight={true}
            autoPlay={true}
            loop={(Data && Data.length) > 5 ? true : false}
            showAllButton={false}
            alignNavButtons='max-md:top-[55%]'
            title='Reviews About Our Company' For='Reviews'
            Slides={Data && Data.map((items: any, i: number) => {
                const Source_Logo = items.source_logo && urlForImage(items.source_logo.asset._ref).url()
                return (
                    <ReviewBox
                        review={items.review}
                        stars={items.stars}
                        source={items.source}
                        source_logo={Source_Logo}
                        published_on={items.published_on}
                        key={i} />
                )
            })}
        />
    )
}

export default Reviews