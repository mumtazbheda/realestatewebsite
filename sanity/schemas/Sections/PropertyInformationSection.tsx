import { defineField, defineType } from 'sanity'
import { Book } from 'lucide-react'

export const PropertyInformationSection = defineType({
    name: 'property_information_section',
    type: 'object',
    title: 'Property Information Section',
    icon: <Book strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly: true,
            initialValue: {
                asset: {
                    _ref: "image-a5cb46fbac9d608d11b789530e1b08730ecccd38-1005x307-png",
                    _type: "reference"
                }
            }
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
            initialValue: "Property Information",
            validation: (Rule) => Rule.required().error("Title Field is Required"),
        }),
        defineField({
            title: 'Status',
            name: 'status',
            type: 'string',
        }),
        defineField({
            title: 'Area From (in sqr.ft)',
            name: 'area_from',
            type: 'string',
        }),
        defineField({
            title: 'Project Type',
            name: 'project_type',
            type: 'string',
        }),
        defineField({
            title: 'Units',
            name: 'units',
            type: 'string',
        }),
        defineField({
            title: 'Payment Plan',
            name: 'payment_plan',
            type: 'string',
        }),
        defineField({
            title: 'Total Amount of Units (Optional)',
            name: 'total_units',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'Property Information Section',
                subtitle: 'Section Showing Information',
            }
        },
    },
})