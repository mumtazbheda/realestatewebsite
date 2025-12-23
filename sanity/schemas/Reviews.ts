import { defineField, defineType } from "sanity";

export const Reviews = defineType({
    title: "Reviews",
    name: "reviews",
    type: "document",
    fields: [
        defineField({
            title: "Review",
            name: "review",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            title: "Review Stars",
            name: "stars",
            type: "number",
            options: {
                list: [
                    { title: "1", value: 1 },
                    { title: "2", value: 2 },
                    { title: "3", value: 3 },
                    { title: "4", value: 4 },
                    { title: "5", value: 5 },
                ],
                layout: "radio"
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            title: "Source Name",
            name: "source",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            title: "Source Logo",
            name: "source_logo",
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
            title: "When was this Published?",
            description : "can be like '4 months ago' ",
            name: "published_on",
            type: "string",
        }),
    ]
})  