import { defineField, defineType } from "sanity";

export const Slider = defineType({
  title: "Slider",
  name: "slider",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Logo",
      name: "logo_image",
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
      title: "Starting Price",
      name: "starting_price",
      description: "You can enter value like 15M or 750K",
      type: "string",
    }),
    defineField({
      title: "Pyment Plan Ratio",
      name: "payment_plan",
      type: "string",
    }),
    defineField({
      title: "Button Link",
      description: `This is the Url that the Discover more button will link to, It can be like "/areas/damac-hills-2/park-greens", just copy the link you want after the domain name example: "https://localhost:3000"`,
      name: "button_link",
      type: "string",
    }),
    defineField({
      title: "Video Link (Optional)",
      name: "video_link",
      type: "string",
    }),
  ],
});
