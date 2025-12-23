import { CreateSlug } from "@/lib/helper/CreateSlug";
import { Star } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const Blog = defineType({
  title: "Blog",
  name: "blog",
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
    {
      title: "Content",
      description: "This will the page content",
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            storeOriginalFilename: true,
          },
          preview: {
            select: {
              title: "asset.originalFilename",
            },
          },
        },
      ],
    } as any,
    {
      name: "sections",
      type: "array",
      title: "Page Sections",
      of: [
        defineArrayMember({
          type: "faq_section",
        }),
        defineArrayMember({
          type: "review_section",
        }),
      ],
    } as any,
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
