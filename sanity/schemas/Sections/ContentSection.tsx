import { defineField, defineType } from "sanity";
import { PenLine } from "lucide-react";

export const ContentSection = defineType({
  name: "content_section",
  type: "object",
  title: "Content Section",
  icon: <PenLine strokeWidth={1.5} />,
  fields: [
    defineField({
      title: "Section Preview",
      description: "This Section can look like this",
      name: "section_image",
      type: "image",
      readOnly: true,
      initialValue: {
        asset: {
          _ref: "image-3975f2afaf3b5d6925e6cb0dbd04183488ca4b5b-1204x580-png",
          _type: "reference",
        },
      },
    }),
    defineField({
      title: "Title (Optional)",
      name: "title",
      type: "string",
    }),
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    } as any,
    defineField({
      title: "Show Images (Optional)",
      name: "show_images",
      type: "boolean",
      initialValue: false,
      description: "Set to True if you want to Show Images",
    }),
    defineField({
      title: "Show Images on the Left Side",
      name: "left_images_side",
      type: "boolean",
      initialValue: false,
      description:
        "Set this to True if you want to Show Images on the left Side (By Default it will be shown on Right Side)",
      hidden: ({ parent }) => !parent!.show_images,
    }),
    {
      title: "Content Images",
      name: "content_images",
      description: "3 Images are Required",
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
      hidden: ({ parent }: any) => !parent.show_images,
      validation: (Rule) => Rule.min(3).max(3),
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
        title: title || "Content Section",
        subtitle: "Content Section",
      };
    },
  },
});
