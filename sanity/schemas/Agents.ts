import { associations } from "@/lib/constants";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import { defineArrayMember, defineField, defineType } from "sanity";

export const Agents = defineType({
  title: "Agent",
  name: "agent",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
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
        source: "name",
        slugify: (input: string) => CreateSlug(input),
      },
    }),
    defineField({
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
    }),
    defineField({
      title: "Phone Number",
      name: "phone",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Email",
      name: "email",
      type: "string",
    }),
    {
      title: "Speaks Languages",
      name: "language",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "English", value: "English" },
          { title: "Russian", value: "Russian" },
          { title: "Turkish", value: "Turkish" },
          { title: "Danish", value: "Danish" },
          { title: "French", value: "French" },
          { title: "Italian", value: "Italian" },
          { title: "Hindi", value: "Hindi" },
          { title: "Urdu", value: "Urdu" },
          { title: "Arabic", value: "Arabic" },
          { title: "Bosnian", value: "Bosnian" },
          { title: "Spanish", value: "Spanish" },
          { title: "German", value: "German" },
          { title: "Chinese", value: "Chinese" },
          { title: "Portuguese", value: "Portuguese" },
          { title: "Japanese", value: "Japanese" },
          { title: "Bengali", value: "Bengali" },
          { title: "Korean", value: "Korean" },
          { title: "Swahili", value: "Swahili" },
          { title: "Punjabi", value: "Punjabi" },
          { title: "Vietnamese", value: "Vietnamese" },
          { title: "Malay/Indonesian", value: "Malay/Indonesian" },
          { title: "Tamil", value: "Tamil" },
          { title: "Persian (Farsi)", value: "Persian (Farsi)" },
          { title: "Turkmen", value: "Turkmen" },
          { title: "Thai", value: "Thai" },
          { title: "Malayalam", value: "Malayalam" },
          { title: "Tagalog", value: "Tagalog" },
          { title: "Pashto", value: "Pashto" },
          { title: "Amharic", value: "Amharic" },
          { title: "Sinhala", value: "Sinhala" },
        ],
      },
    } as any,
    defineField({
      title: "About This Agent",
      name: "about",
      type: "text",
    }),
    defineField({
      title: "Associated with what type of work?",
      name: "association",
      type: "string",
      options: {
        list: associations,
      },
    }),
    {
      title: "Area",
      name: "area",
      type: "reference",
      to: [{ type: "area" }],
    } as any,
    {
      title: "Associated with Developers?",
      description: "Is this Agent associated with any Developer?",
      name: "developers",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "developer" },
        },
      ],
    } as any,
    {
      name: "sections",
      type: "array",
      title: "Page Sections",
      of: [
        defineArrayMember({
          type: "properties_slider_section",
        }),
        defineArrayMember({
          type: "projects_section",
        }),
        defineArrayMember({
          type: "areas_section",
        }),
        defineArrayMember({
          type: "blog_section",
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
