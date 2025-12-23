import { CreateSlug } from "@/lib/helper/CreateSlug";
import { defineArrayMember, defineField, defineType } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const Developers = defineType({
  title: "Developer",
  name: "developer",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "category" }),
    defineField({
      title: "Developers Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Link Slug",
      name: "slug",
      description: "This will be the link slug shown in the Url bar",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "name",
        slugify: (input: string) => CreateSlug(input),
      },
    }),
    defineField({
      title: "Developers Logo",
      name: "image",
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
      title: "Page Cover Image",
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
      title: "Founded In",
      name: "founded",
      type: "string",
    }),
    defineField({
      title: "Price From",
      name: "price_from",
      type: "number",
    }),
    {
      title: "Areas",
      name: "area",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "area" },
        },
      ],
    } as any,
    {
      name: "sections",
      type: "array",
      title: "Page Sections",
      of: [
        // Contact Experts Section
        defineArrayMember({
          type: "contact_expert_section",
        }),
        defineArrayMember({
          type: "projects_section",
        }),
        defineArrayMember({
          type: "agents_section",
        }),
        defineArrayMember({
          type: "content_section",
        }),
        defineArrayMember({
          type: "content_slider_section",
        }),
        defineArrayMember({
          type: "more_areas_section",
        }),
        defineArrayMember({
          type: "contact_section",
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
      type: "string",
    }),
    defineField({
      title: "Meta Description",
      name: "meta_description",
      type: "string",
    }),
  ],
});
