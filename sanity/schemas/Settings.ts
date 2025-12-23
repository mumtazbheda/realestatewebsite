import { defineField, defineType } from "sanity";

export const Settings = defineType({
  title: "Settings",
  name: "settings",
  type: "document",
  fields: [
    {
      title: "Agent Shown in commercial Page Contact Form",
      name: "commercial_agent",
      type: "reference",
      to: [{ type: "agent" }],
    } as any,
    {
      title: "Agent Shown in List Your Property Page Contact Form",
      name: "sell_agent",
      type: "reference",
      to: [{ type: "agent" }],
    } as any,
  ],
});
