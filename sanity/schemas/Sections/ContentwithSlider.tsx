import { Book } from "lucide-react";
import { defineField, defineType } from "sanity";

export const ContentSliderSection = defineType({
  name: "content_slider_section",
  type: "object",
  title: "Content With Slider Section",
  icon: <Book strokeWidth={1.5} />,
  fields: [
    defineField({
      title: "Section Preview",
      description: "This Section can look like this",
      name: "section_image",
      type: "image",
      readOnly: true,
      initialValue: {
        asset: {
          _ref: "image-4a71854fc420d36b86bc6c9f9b1e0dccd36f4628-1920x582-png",
          _type: "reference",
        },
      },
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    {
      title: "Top Content",
      name: "top_content",
      type: "array",
      of: [{ type: "block" }],
    } as any,

    defineField({
      title: "About Section?",
      name: "about_section",
      type: "boolean",
      initialValue: false,
      description:
        "Set this to True if you want to Use About Section (That has values like Starting Price , Handover)",
    }),
    defineField({
      title: "Starting Price",
      name: "starting_price",
      type: "string",
      hidden: ({ parent }) => !parent.about_section,
    }),
    defineField({
      title: "Area",
      name: "area",
      type: "string",
      hidden: ({ parent }) => !parent.about_section,
    }),
    defineField({
      title: "Available Units",
      name: "available_units",
      type: "string",
      hidden: ({ parent }) => !parent.about_section,
    }),
    defineField({
      title: "Handover",
      name: "handover",
      type: "string",
      hidden: ({ parent }) => !parent.about_section,
    }),

    defineField({
      title: "Large Image Slider",
      name: "large_slider",
      type: "boolean",
      initialValue: false,
      description: "Set to True if you want to Use Large Image Slider",
      readOnly: ({ parent }) => parent!.short_slider === true,
    }),
    defineField({
      title: "Short Image Slider",
      name: "short_slider",
      type: "boolean",
      initialValue: false,
      description: "Set to True if you want to Use Short Image Slider",
      readOnly: ({ parent }) => parent!.large_slider === true,
    }),
    {
      title: "Slider Images",
      name: "slider_images",
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
      hidden: ({ parent }: any) => !parent.large_slider && !parent.short_slider,
      validation: (Rule) => Rule.required().min(3),
    } as any,
    {
      title: "Bottom Content",
      name: "bottom_content",
      type: "array",
      of: [{ type: "block" }],
    } as any,
    defineField({
      title: "Price Validity",
      name: "price_validity",
      type: "boolean",
      initialValue: false,
      description: "This Will Show the Price Validity Line",
    }),
    defineField({
      title: "Price Validity Text",
      name: "price_validity_text",
      type: "string",
      initialValue: "*The price is valid for 2023",
      hidden: ({ parent }) => !parent.price_validity,
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Content With Slider Section",
        subtitle: "Content With Slider Section",
      };
    },
  },
});
