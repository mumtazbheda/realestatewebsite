import { defineField, defineType } from "sanity";

export const Publisher = defineType({
    title: "Publisher",
    name: "publisher",
    type: "document",
    fields: [
        defineField({
            title: "Name",
            name: "name",
            type: "string",
        }),
        defineField({
            title: "Publisher's Logo",
            name: "logo",
            type: "image",
            options: {
                storeOriginalFilename: true,
              },
              preview: {
                select: {
                  title: "asset.originalFilename",
                },
              },
        }),
        defineField({
            title: "Publisher's Page Url",
            name: "url",
            type: "url",
        }),
    ]
})  