import { getSiteSettings } from "@/lib/helper/getSiteSettings";
import Header from "./Header";

export default async function HeaderWrapper() {
  const settings = await getSiteSettings();

  return (
    <Header
      logoUrl={settings?.logo?.asset?.url}
      companyName={settings?.company_name}
      phone={settings?.phone || process.env.NEXT_PUBLIC_PHONE_NUMBER}
      whatsapp={settings?.whatsapp || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
    />
  );
}
