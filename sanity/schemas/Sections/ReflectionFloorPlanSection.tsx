import { defineArrayMember, defineField, defineType } from "sanity";
import { GanttChartSquareIcon, ListIcon } from "lucide-react";
import { ProjectTypes } from "@/lib/constants";

export const ReflectionFloorPlanSection = defineType({
  name: "reflection_floor_plan_section",
  type: "object",
  title: "Reflection Floor Plans Section",
  icon: <ListIcon strokeWidth={1.5} />,
  fields: [
    defineField({
      title: "Section Preview",
      description: "This Section can look like this",
      name: "section_image",
      type: "image",
      readOnly: true,
      initialValue: {
        asset: {
          _ref: "image-8ad58639c678e599c843ca6d649de22467afb2b5-1240x664-png",
          _type: "reference",
        },
      },
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      initialValue: "Reflection Floor Plans",
      validation: (Rule) => Rule.required().error("Title Field is Required"),
    }),
    {
      title: "Reflection Floor Plans",
      description: "Add Reflection Floor Plan",
      name: "reflection_floor_plans",
      type: "array",
      of: [
        defineArrayMember({
          type: "reflection_floor_plan",
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
        title: title || "Properties List Section",
        subtitle: "Properties List Section",
      };
    },
  },
});

export const ReflectionFloorPlan = defineType({
  name: "reflection_floor_plan",
  type: "object",
  title: "Reflection Floor Plan",
  icon: <GanttChartSquareIcon strokeWidth={1.5} />,
  fields: [
    defineField({
      title: "Floor Image",
      name: "floor_image",
      type: "image",
    }),
    defineField({
      title: "Type",
      name: "type",
      type: "string",
    }),
    defineField({
      title: "Unit Type",
      name: "unit_type",
      type: "string",
    }),
    defineField({
      title: "Category",
      name: "category",
      type: "string",
      options: {
        list: ProjectTypes,
      },
    }),
    defineField({
      title: "Total Area in Square (ft)",
      name: "total_area",
      type: "number",
    }),
  ],
});
