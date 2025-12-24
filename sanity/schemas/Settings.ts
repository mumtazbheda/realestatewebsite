import { defineField, defineType } from "sanity";

export const Settings = defineType({
  title: "Site Settings",
  name: "settings",
  type: "document",
  groups: [
    { name: "branding", title: "Company Branding" },
    { name: "contact", title: "Contact Information" },
    { name: "social", title: "Social Media" },
    { name: "agents", title: "Default Agents" },
    { name: "footer", title: "Footer Settings" },
  ],
  fields: [
    // ===== COMPANY BRANDING =====
    defineField({
      title: "Company Name",
      name: "company_name",
      type: "string",
      group: "branding",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Company Logo (Light/Default)",
      description: "Logo for light backgrounds (colored or dark logo)",
      name: "logo",
      type: "image",
      group: "branding",
      options: {
        storeOriginalFilename: true,
      },
    }),
    defineField({
      title: "Company Logo (Dark/White)",
      description: "Logo for dark backgrounds (white or light logo)",
      name: "logo_white",
      type: "image",
      group: "branding",
      options: {
        storeOriginalFilename: true,
      },
    }),
    defineField({
      title: "Favicon",
      description: "Small icon shown in browser tabs",
      name: "favicon",
      type: "image",
      group: "branding",
      options: {
        storeOriginalFilename: true,
      },
    }),

    // ===== CONTACT INFORMATION =====
    defineField({
      title: "Phone Number",
      name: "phone",
      type: "string",
      group: "contact",
      description: "Main contact phone number (e.g., +971 4 XXX XXXX)",
    }),
    defineField({
      title: "WhatsApp Number",
      name: "whatsapp",
      type: "string",
      group: "contact",
      description: "WhatsApp number with country code (e.g., +971501234567)",
    }),
    defineField({
      title: "Email Address",
      name: "email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.email(),
    }),
    defineField({
      title: "Office Address",
      name: "address",
      type: "text",
      group: "contact",
      rows: 3,
    }),
    defineField({
      title: "Google Maps Link",
      name: "google_maps_link",
      type: "url",
      group: "contact",
      description: "Link to Google Maps location",
    }),

    // ===== SOCIAL MEDIA =====
    defineField({
      title: "Instagram URL",
      name: "instagram",
      type: "url",
      group: "social",
    }),
    defineField({
      title: "Facebook URL",
      name: "facebook",
      type: "url",
      group: "social",
    }),
    defineField({
      title: "LinkedIn URL",
      name: "linkedin",
      type: "url",
      group: "social",
    }),
    defineField({
      title: "Twitter/X URL",
      name: "twitter",
      type: "url",
      group: "social",
    }),
    defineField({
      title: "YouTube URL",
      name: "youtube",
      type: "url",
      group: "social",
    }),
    defineField({
      title: "TikTok URL",
      name: "tiktok",
      type: "url",
      group: "social",
    }),

    // ===== DEFAULT AGENTS =====
    {
      title: "Agent Shown in Commercial Page Contact Form",
      name: "commercial_agent",
      type: "reference",
      to: [{ type: "agent" }],
      group: "agents",
    } as any,
    {
      title: "Agent Shown in List Your Property Page Contact Form",
      name: "sell_agent",
      type: "reference",
      to: [{ type: "agent" }],
      group: "agents",
    } as any,
    {
      title: "Default Contact Agent",
      description: "Default agent shown in contact forms across the site",
      name: "default_agent",
      type: "reference",
      to: [{ type: "agent" }],
      group: "agents",
    } as any,

    // ===== FOOTER SETTINGS =====
    defineField({
      title: "Footer Text",
      description: "Text shown at the bottom of the footer",
      name: "footer_text",
      type: "text",
      group: "footer",
      rows: 2,
    }),
    defineField({
      title: "Copyright Text",
      description: "Copyright notice (e.g., © 2024 Company Name. All rights reserved.)",
      name: "copyright_text",
      type: "string",
      group: "footer",
    }),
    defineField({
      title: "RERA Number",
      description: "Real Estate Regulatory Agency registration number",
      name: "rera_number",
      type: "string",
      group: "footer",
    }),
    defineField({
      title: "ORN Number",
      description: "Office Registration Number",
      name: "orn_number",
      type: "string",
      group: "footer",
    }),
  ],
  preview: {
    select: {
      title: "company_name",
      media: "logo",
    },
    prepare({ title, media }) {
      return {
        title: title || "Site Settings",
        subtitle: "Company branding and contact info",
        media,
      };
    },
  },
});
