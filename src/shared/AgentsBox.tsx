import Image, { StaticImageData } from "next/image";
import React from "react";
import AgentImage2 from "@/assets/images/Saidi-Latipov.png";
import bg_agent from "@/assets/images/bg-agent.jpg";
import whatsapp_icon from "@/assets/Svgs/whatsappIcon.svg";
import Link from "next/link";
import { CreateSlug } from "@/lib/helper/CreateSlug";

interface AgentPropsI {
  AgentImage: StaticImageData | string;
  name: string;
  languages: string[];
  Phone: string;
  slug: string;
}

const AgentsBox = ({
  AgentImage,
  name,
  languages,
  Phone,
  slug,
}: AgentPropsI) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative flex justify-center items-end w-full h-[265px] overflow-hidden">
        {AgentImage && (
          <Link
            href={slug ? "/agents/" + slug : "/agents/" + CreateSlug(name)}
            style={{ maxHeight: "calc(100% - 15px)" }}
            className="max-w-[80%]"
          >
            <Image
              unoptimized
              fill
              style={{ maxHeight: "calc(100% - 15px)" }}
              className="!relative z-10 w-full object-top object-cover"
              src={AgentImage}
              alt="AgentImage"
            />
          </Link>
        )}
        <Image
          className="h-full w-full absolute object-cover"
          src={bg_agent}
          alt="bg_agent"
        />
        <Link href={"https://wa.me/" + Phone} target="_blank">
          <div className="bg-[#01c24a] flex items-center justify-center rounded-full w-10 h-10 absolute right-3 bottom-3 z-20">
            <Image src={whatsapp_icon} alt="whatsapp_icon" />
          </div>
        </Link>
      </div>
      <div className="px-5 py-4">
        <Link
          href={slug ? "/agents/" + slug : "/agents/" + CreateSlug(name)}
          className="text-lg font-medium"
        >
          {name}
        </Link>
        <p className="text-xs space-x-0.5">
          <span className="text-secondary">Speaks:</span>
          {languages &&
            languages.map((items, i: number) => (
              <span key={i}>
                {items}
                {languages.length > i + 1 && ","}{" "}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default AgentsBox;
