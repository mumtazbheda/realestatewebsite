import { defineField, defineType } from 'sanity'
import { CircleDollarSign } from 'lucide-react'

export const ReadyToSellSection = defineType({
    name: 'readyToSell_section',
    type: 'object',
    title: 'Ready To Sell Section',
    icon: <CircleDollarSign strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly: true,
            initialValue: {
                asset: {
                    _ref: "image-88b328a6501eb273df64b796d71ca16e55675736-1324x506-png",
                    _type: "reference"
                }
            }
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            initialValue: "Ready To Sell?",
            validation: (Rule) => Rule.required().error("Title Field is Required"),
        }),
        defineField({
            title: 'Sub-Title',
            description: "This will be shown under Title",
            name: 'sub_title',
            type: 'string',
            initialValue: "List your Property with us, Professionals in your Area",
        }),
        defineField({
            title: 'Short Summary',
            name: 'short_summary',
            type: 'string',
            initialValue: "Contact us today and list your property with the assistance of experienced and knowledgeable real estate professionals. List your property for sale with the Top real estate company in Dubai.",
        }),
        {
            title: 'Agent',
            description: "This Will Show The Agent Image",
            name: 'agent',
            type: 'reference',
            to: [{ type: 'agent' }]
        } as any,
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'Ready To Sell Section',
                subtitle: 'Ready To Sell Section',
            }
        },
    },
})