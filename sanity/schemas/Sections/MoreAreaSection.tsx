import { defineField, defineType } from 'sanity'
import { Map } from 'lucide-react'

export const MoreAreaSection = defineType({
    name: 'more_areas_section',
    type: 'object',
    title: 'Areas Grid Section',
    icon: <Map strokeWidth={1.5} />,
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required().error("Title Field is Required"),
        }),
        defineField({
            title: 'Grid with Images:',
            name: 'grid_images',
            type: 'string',
            options: {
                list: [
                    { title: '2 Images Grid', value: 'two_images_grid' },
                    { title: '5 Images Grid', value: 'five_images_grid' },
                ],
                layout : "radio"
            },
            description: "Select Grid Type",
            validation: (Rule) => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'More Areas Section',
                subtitle: 'More Areas Section',
            }
        },
    },
})