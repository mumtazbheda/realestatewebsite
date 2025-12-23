import { ProjectTypes } from "@/lib/constants";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { defineArrayMember, defineField, defineType } from "sanity";

export const Property = defineType({
  title: "Property",
  name: "property",
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
      title: "Property Name",
      name: "property_name",
      type: "string",
    }),
    defineField({
      title: "Emirate",
      name: "emirate",
      type: "string",
    }),
    defineField({
      title: "Permit Number",
      name: "permit_number",
      type: "string",
    }),
    defineField({
      title: "Unit Reference",
      name: "unit_reference",
      type: "string",
    }),
    defineField({
      title: "Purpose (optional)",
      description: "Can be like 'For Sale' etc",
      name: "purpose",
      type: "string",
    }),
    {
      title: "Image (At least 3 Images are required)",
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
      validation: (rule) => rule.min(3),
    } as any,
    defineField({
      title: "Price",
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Beds",
      name: "beds",
      type: "number",
    }),
    defineField({
      title: "Baths",
      name: "baths",
      type: "number",
    }),
    defineField({
      title: "Parking",
      name: "parking",
      type: "number",
    }),
    defineField({
      title: "Area in Square (ft)",
      name: "squareft",
      type: "number",
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string",
    }),
    defineField({
      title: "Availability",
      name: "avaibility",
      type: "string",
      options: {
        list: [
          { title: "buy", value: "buy" },
          { title: "rent", value: "rent" },
          { title: "Sold", value: "sold" },
          { title: "Rented", value: "rented" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Ready", value: "ready" },
          { title: "Off-Plan", value: "Off-Plan" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      title: "Property Type",
      name: "property_type",
      type: "string",
      options: {
        list: ProjectTypes,
      },
    }),
    {
      title: "Property Page Content",
      description:
        "This will the page content that is shown below the Property page Title",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    } as any,
    {
      title: "Features & Amenities Section",
      description:
        "This will be the Features & Amenities Section shown under Project Details",
      name: "features_amenities",
      type: "object",
      fields: [
        {
          title: "Indoor List",
          name: "indoor",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          title: "Outdoor List",
          name: "outdoor",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          title: "Lot List",
          name: "lot",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          title: "Image",
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
        },
      ],
    } as any,
    defineField({
      title: "Community Description",
      name: "community_description",
      type: "text",
    }),
    {
      title: "Agent",
      name: "agent",
      type: "reference",
      to: [{ type: "agent" }],
    } as any,
    {
      title: "Area",
      name: "area",
      type: "reference",
      to: [{ type: "area" }],
    } as any,
    {
      title: "Project",
      name: "project",
      type: "reference",
      to: [{ type: "project" }],
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
