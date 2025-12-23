import { MediaTypes } from "@/lib/constants";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { defineField, defineType } from "sanity";

export const Media = defineType({
  title: "Media",
  name: "media",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
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
      title: "Media Type",
      name: "media_type",
      type: "string",
      options: {
        list: MediaTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "news",
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
      title: "Short Summary",
      name: "short_summary",
      type: "text",
    }),
    {
      title: "Page Content Top",
      description: "This will the page content that is above the page Image",
      name: "top_content",
      type: "array",
      of: [{ type: "block" }],
    } as any,
    defineField({
      title: "Page Content Image",
      description: "This will the Page Image",
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
    {
      title: "Page Content Bottom",
      description: "This will the page content that is below the page Image",
      name: "bottom_content",
      type: "array",
      of: [{ type: "block" }],
    } as any,
    {
      title: "Agent",
      name: "agent",
      type: "reference",
      to: [{ type: "agent" }],
      validation: (Rule) => Rule.required(),
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
      type: "string"
    }),
    defineField({
      title: "Meta Description",
      name: "meta_description",
      type: "string"
    }),
  ],
});
