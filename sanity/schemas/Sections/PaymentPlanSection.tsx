import { GanttChartSquare } from "lucide-react"
import Image from "next/image"
import { defineArrayMember, defineField, defineType } from 'sanity'

export const PaymentPlanSection = defineType({
    name: 'payment_plan_section',
    type: 'object',
    title: 'Payment Plan Section',
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
                    _ref: "image-de9342f1ea2ed12ca4cb4abb3baf9388385e8eae-1168x236-png",
                    _type: "reference"
                }
            }
        }),
        defineField({
            title: "Title",
            name: 'title',
            type: 'string',
            initialValue: "Payment Plan"
        }),
        {
            name: 'payment_plans',
            type: 'array',
            title: 'Payment Plans',
            of: [
                defineArrayMember({
                    type: 'payment_plans',
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
                title: title || 'Payment Plan Section',
                subtitle: 'Section Showing Plans Plans for the current project',
            }
        },
    },
})

export const PaymentPlans = defineType({
    name: 'payment_plans',
    type: 'object',
    title: 'Payment Plans',
    fields: [
        defineField({
            title: "Type",
            name: "type",
            type: "string",
        }),
        defineField({
            title: "Value",
            name: "value",
            type: "string",
        }),
    ],
    preview: {
        select: {
            type: "type"
        },
        prepare({ type }) {
            return {
                title: type || 'Payment Plan',
            }
        },
    },
})