import { ProjectTypes } from "@/lib/constants";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { defineArrayMember, defineField, defineType } from "sanity";

export const Projects = defineType({
  title: "Project",
  name: "project",
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
      title: "Image",
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
      title: "Location",
      name: "location",
      type: "string",
    }),
    defineField({
      title: "Project Type",
      name: "project_type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ProjectTypes,
      },
    }),
    defineField({
      title: "Pyment Plan Ratio",
      name: "payment_plan",
      type: "string",
    }),
    defineField({
      title: "Handover",
      name: "handover",
      type: "string",
    }),
    defineField({
      title: "Coming Soon?",
      name: "coming_soon",
      type: "boolean",
    }),
    {
      title: "Developer",
      name: "developer",
      type: "reference",
      to: [{ type: "developer" }],
    } as any,
    {
      title: "Area",
      name: "area",
      type: "reference",
      to: [{ type: "area" }],
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
          type: "content_section",
        }),
        defineArrayMember({
          type: "content_slider_section",
        }),
        defineArrayMember({
          type: "contact_section",
        }),
        defineArrayMember({
          type: "floor_plan_section",
        }),
        defineArrayMember({
          type: "payment_plan_section",
        }),
        defineArrayMember({
          type: "property_information_section",
        }),
        defineArrayMember({
          type: "faq_section",
        }),
        defineArrayMember({
          type: "reflection_floor_plan_section",
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
