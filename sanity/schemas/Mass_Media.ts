import { CreateSlug } from "@/lib/helper/CreateSlug";
import { defineField, defineType } from "sanity";

export const Mass_Media = defineType({
  title: "Mass Media",
  name: "mass_media",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Link Slug",
      name: "slug",
      description: "This will be the link slug shown in the Url bar",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "title",
        slugify: (input: string) => CreateSlug(input),
      },
    }),
    defineField({
      title: "Cover Image",
      name: "cover_image",
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
      title: "Page Image",
      name: "page_image",
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
      title: "Short Summary",
      name: "short_summary",
      type: "text",
    }),
    {
      title: "Summary",
      name: "summary",
      type: "array",
      of: [{ type: "block" }],
    } as any,
    {
      title: "Publisher",
      name: "publisher",
      type: "reference",
      to: [{ type: "publisher" }],
    } as any,
    defineField({
      title: "Published On",
      name: "published_on",
      type: "string",
    }),
    defineField({
      title: "Total Views",
      name: "views",
      type: "number",
    }),
    defineField({
      title: "Schema Markup",
      name: "schemaMarkup",
      type: "schemaMarkup",
    }),
    defineField({
      title: "Meta Title",
      name: "meta_title",
      type: "string",
    }),
    defineField({
      title: "Meta Description",
      name: "meta_description",
      type: "string",
    }),
  ],
});
