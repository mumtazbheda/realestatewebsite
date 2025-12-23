import { defineField, defineType } from 'sanity'
import { User2 } from 'lucide-react'

export const ContactExpertsSection = defineType({
    name: 'contact_expert_section',
    type: 'object',
    title: 'Contact Experts Section',
    icon: <User2 strokeWidth={1} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly : true,
            initialValue : {
                asset : {
                    _ref : "image-6e1a33eb312a1a9881050caa501ba8b799ac2bb4-1192x244-png",
                    _type : "reference"
                }
            }
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            initialValue: "Our Expert Will Help You",
        }),
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'Contact Experts Section',
                subtitle: 'Contact Experts Section',
            }
        },
    },
})