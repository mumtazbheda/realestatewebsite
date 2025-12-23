import { defineField, defineType } from 'sanity'
import { UserPlus2 } from 'lucide-react'

export const DeveloperSection = defineType({
    name: 'developers_section',
    type: 'object',
    title: 'Developers Section',
    icon: <UserPlus2 strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly: true,
            initialValue: {
                asset: {
                    _ref: "image-344fb7bcc0c790b048106752162144e24eb798a4-1245x338-png",
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
                title: title || 'Developers Section',
                subtitle: 'Developers Section',
            }
        },
    },
})