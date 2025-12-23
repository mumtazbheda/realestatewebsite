import { GanttChartSquare } from "lucide-react"
import Image from "next/image"
import { defineArrayMember, defineField, defineType } from 'sanity'

export const FAQSection = defineType({
    name: 'faq_section',
    type: 'object',
    title: 'FAQ Section',
    icon: <GanttChartSquare strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly: true,
            initialValue: {
                asset: {
                    _ref: "image-0163fc8f5efe77bac0e1bb9310efab14071505d3-1217x563-png",
                    _type: "reference"
                }
            }
        }),
        defineField({
            title: "Title",
            name: 'title',
            type: 'string',
            initialValue: "FAQ"
        }),
        {
            name: 'faqs',
            type: 'array',
            title: 'Frequently Asked Questions',
            of: [
                defineArrayMember({
                    type: 'faq',
                }),
            ],
        } as any,
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'FAQ Section',
                subtitle: 'Section Showing FAQs',
            }
        },
    },
})

export const FAQs = defineType({
    name: 'faq',
    type: 'object',
    title: 'FAQ',
    fields: [
        defineField({
            title: "Question",
            name: "question",
            type: "string",
        }),
        defineField({
            title: "Answer",
            name: "answer",
            type: "string",
        }),
    ],
    preview: {
        select: {
            question: "question"
        },
        prepare({ question }) {
            return {
                title: question || 'FAQ',
            }
        },
    },
})