import { defineField, defineType } from 'sanity'
import { Map } from 'lucide-react'

export const PropertiesListSection = defineType({
    name: 'properties_list_section',
    type: 'object',
    title: 'Properties List Section',
    icon: <Map strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly: true,
            initialValue: {
                asset: {
                    _ref: "image-c9703eedf3daccf868ce44140a41f0c1f7ac7ff2-1206x636-png",
                    _type: "reference"
                }
            }
        }),
        defineField({
            title: 'Title',
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
                title: title || 'Properties List Section',
                subtitle: 'Properties List Section',
            }
        },
    },
})