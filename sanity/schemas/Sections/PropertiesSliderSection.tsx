import SliderIcon from "@/assets/Svgs/ImageSlider.svg"
import { ProjectTypes } from "@/lib/constants"
import { ImageIcon } from "lucide-react"
import Image from "next/image"
import { defineField, defineType } from 'sanity'

export const PropertiesSliderSection = defineType({
    name: 'properties_slider_section',
    type: 'object',
    title: 'Properties Slider Section',
    icon: <ImageIcon />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly : true,
            initialValue : {
                asset : {
                    _ref : "image-f5c63c85076a876f7d486fc4d35034023770a3a0-1241x559-png",
                    _type : "reference"
                }
            }
        }),
        defineField({
            title: "Title",
            description: "This will be the Title Shown above the Slider",
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required().error("Title Field is Required"),
        }),
        // defineField({
        //     title: 'Status of Properties',
        //     name: 'status',
        //     type: 'string',
        //     options: {
        //         list: [
        //             { title: 'Ready', value: 'ready' },
        //             { title: 'Off-Plan', value: 'offplan' },
        //         ],
        //         layout: 'radio',
        //     }
        // }),
        defineField({
            title: 'By Avaibility?',
            name: 'by_avaibility',
            type: 'boolean',
            initialValue: false,
            description: "Set to True if you want the slider to show by a specific Availability.",
        }),
        defineField({
            title: 'Available For',
            name: 'avaibility',
            type: 'string',
            options: {
                list: [
                    { title: 'Buy', value: 'buy' },
                    { title: 'Rent', value: 'rent' },
                    { title: 'Sold', value: 'sold' },
                    { title: 'Rented', value: 'rented' },
                ],
                layout: 'radio',
            },
            hidden: ({ parent }) => !parent.by_avaibility,
        }),
        defineField({
            title: 'By Catogery',
            name: 'by_catogery',
            type: 'boolean',
            initialValue: false,
            description: "Set to True if you want the slider to show by a specific category.",
        }),
        defineField({
            title: 'Catogery',
            name: 'catogery',
            type: 'string',
            options: {
                list: ProjectTypes,
            },
            hidden: ({ parent }) => !parent.by_catogery,
        }),
        defineField({
            title: 'By Project?',
            name: 'by_project',
            type: 'boolean',
            initialValue: false,
            description: "Set to True if you want the slider to show by a specific category.",
        }),
        {
            title: 'Project',
            name: 'project',
            type: 'reference',
            to: [{ type: 'project' }],
            hidden: ({ parent }: any) => !parent.by_project,
        } as any,
    ],
    preview: {
        select: {
            title: "title"
        },
        prepare({ title }) {
            return {
                title: title || 'Slider Section',
                subtitle: 'Slider Section for Properties, Apartements, Villas, etc',
            }
        },
    },
})