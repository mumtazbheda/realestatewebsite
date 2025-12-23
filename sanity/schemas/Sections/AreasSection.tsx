import { Map } from "lucide-react"
import { defineField, defineType } from 'sanity'

export const AreasSection = defineType({
    name: 'areas_section',
    type: 'object',
    title: 'Areas Section',
    icon: <Map strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly : true,
            initialValue : {
                asset : {
                    _ref : "image-1df097f5c7a5913d38b5ac05f63b08a7088819e4-1135x765-png",
                    _type : "reference"
                }
            }
        }),
        defineField({
            title: "Title",
            description: "This will be the Title Shown above the Areas",
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required().error("Title Field is Required"),
        }),
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'Areas Section',
                subtitle: 'Section Showing all the Areas',
            }
        },
    },
})