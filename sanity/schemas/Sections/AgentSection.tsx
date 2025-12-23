import { Users2 } from "lucide-react"
import { defineField, defineType } from 'sanity'

export const AgentSection = defineType({
    name: 'agents_section',
    type: 'object',
    title: 'Agents Section',
    icon: <Users2 strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly : true,
            initialValue : {
                asset : {
                    _ref : "image-98adc67439c8cee129876238eb836862042661a2-1133x434-png",
                    _type : "reference"
                }
            }
        }),
        defineField({
            title: "Title",
            description: "This will be the Title Shown above the Agents Slider",
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
                title: title || 'Agents Section',
                subtitle: 'Agents Section Showing all the agents in this Area',
            }
        },
    },
})