import { CreateSlug } from "@/lib/helper/CreateSlug";
import { defineArrayMember, defineField, defineType } from "sanity";

export const Area = defineType({
  title: "Area",
  name: "area",
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
    {
      title: "Area Images",
      name: "image",
      type: "array",
      of: [
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
    defineField({
      title: "Starting Price",
      description: "This will be the Starting Price",
      name: "price",
      type: "string",
    }),
    {
      title: "City",
      name: "city",
      type: "reference",
      to: [{ type: "city" }],
    } as any,
    {
      title: "Developers under this Area",
      name: "developer",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "developer" },
        },
      ],
    } as any,
    {
      title: "Agents under this Area",
      name: "agents",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "agent" },
        },
      ],
    } as any,
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        // Properties Slider Section
        defineArrayMember({
          type: "properties_slider_section",
        }),
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
          type: "readyToSell_section",
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
          type: "properties_list_section",
        }),
        defineArrayMember({
          type: "developers_section",
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
      type: "string"
    }),
    defineField({
      title: "Meta Description",
      name: "meta_description",
      type: "string"
    }),
  ],
});
