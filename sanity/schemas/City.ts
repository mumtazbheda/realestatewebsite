import { defineField, defineType } from "sanity";

export const City = defineType({
    title: "City",
    name: "city",
    type: "document",
    fields: [
        defineField({
            title: "Name",
            name: "name",
            type: "string",
        }),
    ]
})  