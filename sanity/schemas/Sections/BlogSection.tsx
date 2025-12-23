import { FileTextIcon } from "lucide-react"
import { defineField, defineType } from 'sanity'

export const BlogSection = defineType({
    name: 'blog_section',
    type: 'object',
    title: 'Blog Section',
    icon: <FileTextIcon strokeWidth={1.5} />,
    fields: [
        defineField({
            title: "Section Preview",
            description: "This Section can look like this",
            name: 'section_image',
            type: 'image',
            readOnly : true,
            initialValue : {
                asset : {
                    _ref : "image-b0e18a0ff4b671d48628d4223a004597cbc66fe8-1113x573-png",
                    _type : "reference"
                }
            }
        }),
        defineField({
            title: "Title",
            description: "This will be the Title Shown above the Blog",
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
                title: title || 'Blog Section',
                subtitle: 'Section Showing Blogs',
            }
        },
    },
})