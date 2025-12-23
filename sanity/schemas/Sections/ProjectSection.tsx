import icon_property from "@/assets/Svgs/icon-property-black.svg"
import { FolderKanbanIcon } from "lucide-react"
import Image from "next/image"
import { defineField, defineType } from 'sanity'

export const ProjectSection = defineType({
    name: 'projects_section',
    type: 'object',
    title: 'Projects Section',
    icon: <FolderKanbanIcon />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly: true,
            initialValue: {
                asset: {
                    _ref: "image-9b5ecd2ed557c4c099e4ca44b75063c5feebacb9-1085x842-png",
                    _type: "reference"
                }
            }
        }),
        defineField({
            title: "Title",
            description: "This will be the Title Shown above the Projects",
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
                title: title || 'Projects Section',
                subtitle: 'Projects Section for all available Projects under this Area',
            }
        },
    },
})