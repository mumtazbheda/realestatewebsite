import { defineField, defineType } from 'sanity'
import { User } from 'lucide-react'

export const ContactSection = defineType({
    name: 'contact_section',
    type: 'object',
    title: 'Contact Section',
    icon: <User strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly: true,
            initialValue: {
                asset: {
                    _ref: "image-3e46827cf6fcce0e8af06f8d867841809e882bf7-1190x505-png",
                    _type: "reference"
                }
            }
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            readOnly: true,
            initialValue: "Contact Us",
            validation: (Rule) => Rule.required().error("Title Field is Required"),
        }),
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'Contact Section',
                subtitle: 'Contact Section',
            }
        },
    },
})