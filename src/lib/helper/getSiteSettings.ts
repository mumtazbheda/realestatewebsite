import { SanityFetch } from "@/lib/SanityFetch";
import { cache } from "react";

// Site Settings Type
export interface SiteSettings {
  company_name: string;
  logo?: {
    asset: {
      url: string;
    };
  };
  logo_white?: {
    asset: {
      url: string;
    };
  };
  favicon?: {
    asset: {
      url: string;
    };
  };
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  google_maps_link?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
  footer_text?: string;
  copyright_text?: string;
  rera_number?: string;
  orn_number?: string;
}

// Cache the settings fetch to avoid multiple requests per page load
export const getSiteSettings = cache(async (): Promise<SiteSettings | null> => {
  try {
    const query = `*[_type == "settings"][0]{
      company_name,
      logo{
        asset->{
          url
        }
      },
      logo_white{
        asset->{
          url
        }
      },
      favicon{
        asset->{
          url
        }
      },
      phone,
      whatsapp,
      email,
      address,
      google_maps_link,
      instagram,
      facebook,
      linkedin,
      twitter,
      youtube,
      tiktok,
      footer_text,
      copyright_text,
      rera_number,
      orn_number
    }`;

    const data = await SanityFetch({ Query: query });

    if (!data || typeof data === "string") {
      return null;
    }

    return data as SiteSettings;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return null;
  }
});

// Helper to get phone number with fallback to env
export const getPhoneNumber = async (): Promise<string> => {
  const settings = await getSiteSettings();
  return settings?.phone || process.env.NEXT_PUBLIC_PHONE_NUMBER || "";
};

// Helper to get whatsapp number with fallback to env
export const getWhatsAppNumber = async (): Promise<string> => {
  const settings = await getSiteSettings();
  return settings?.whatsapp || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
};

// Helper to get email with fallback to env
export const getEmail = async (): Promise<string> => {
  const settings = await getSiteSettings();
  return settings?.email || process.env.NEXT_PUBLIC_EMAIL || "";
};

// Helper to get company name with fallback
export const getCompanyName = async (): Promise<string> => {
  const settings = await getSiteSettings();
  return settings?.company_name || "Kingdom Capital Real Estate";
};
