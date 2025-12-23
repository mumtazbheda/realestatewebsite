import { GanttChartSquare } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const FloorPlanSection = defineType({
  name: "floor_plan_section",
  type: "object",
  title: "Floor Plan Section",
  icon: <GanttChartSquare strokeWidth={1.5} />,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title Field is Required"),
    }),
    {
      title: "Floor Plans",
      description: "Add Floor Plans",
      name: "floor_plans",
      type: "array",
      of: [
        defineArrayMember({
          type: "floor_plan",
        }),
      ],
    } as any,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Floor Plan Section",
        subtitle: "Section Showing Floor Plans for the current project",
      };
    },
  },
});

export const FloorPlan = defineType({
  name: "floor_plan",
  type: "object",
  title: "Floor Plan",
  icon: <GanttChartSquare strokeWidth={1.5} />,
  fields: [
    defineField({
      title: "Section Preview",
      description: "This Section can look like this",
      name: "section_image",
      type: "image",
      readOnly: true,
      initialValue: {
        asset: {
          _ref: "image-70136e2152b7df660c1214c2a2cb38f6c7f6af90-1115x495-png",
          _type: "reference",
        },
      },
    }),
    defineField({
      title: "Name",
      description:
        "This will be the Name of the floor plan Button (like 5BR, 6BR, etc)",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Floor Plan Type",
      name: "floor_plan_type",
      type: "string",
    }),
    defineField({
      title: "Type",
      name: "type",
      type: "string",
    }),
    defineField({
      title: "Total Area (in sqr.ft)",
      name: "total_area",
      type: "string",
    }),
    defineField({
      title: "Starting Price",
      name: "starting_price",
      type: "string",
    }),
    defineField({
      title: "Floor Plan Image",
      name: "floor_plan_image",
      type: "image",
      options: {
        storeOriginalFilename: true,
      },
      preview: {
        select: {
          title: "asset.originalFilename",
        },
      },
      validation: (Rule) =>
        Rule.required().error("Floor Plan Image is Required"),
    }),
  ],
});
