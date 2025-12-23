import Image, { StaticImageData } from "next/image";
import community_icon from "@/assets/Svgs/community-icon-gray.svg";
import Link from "next/link";
import { CreateSlug } from "@/lib/helper/CreateSlug";

export interface PropsI {
  offPlanimage: StaticImageData | string;
  location: string;
  paymentPlan: string;
  handover: string;
  title: string;
  project_Type: string | string[];
  comming_soon: boolean;
  AreaTitle: string;
  LinkSlug: string;
}

const ProjectBox = ({
  offPlanimage,
  location,
  paymentPlan,
  handover,
  title,
  project_Type,
  comming_soon,
  AreaTitle,
  LinkSlug,
}: PropsI) => {
  return (
    <div className="rounded-lg overflow-hidden border pb-2">
      <Link
        className="!h-[220px]"
        href={
          "/areas/" +
          CreateSlug(AreaTitle ? AreaTitle : "project") +
          "/" +
          LinkSlug
        }
      >
        <div className="!relative !h-[220px] !group !overflow-hidden">
          <div className="relative overflow-hidden !h-[220px]">
            <Image
              unoptimized
              fill
              className="!h-[220px] !relative object-cover transition-all duration-500"
              src={offPlanimage}
              alt="Image1"
            />
          </div>
          <div className="text-xs font-medium flex flex-col gap-1 !absolute z-10 !top-0 !left-0 !p-4">
            {paymentPlan && (
              <button className="px-3 py-1.5 rounded-lg bg-white">
                {paymentPlan} Payment Plan
              </button>
            )}
            {handover && (
              <button className="px-3 py-1.5 rounded-lg bg-white">
                Handover {handover}
              </button>
            )}
            {comming_soon && (
              <button className="px-3 py-1.5 rounded-lg bg-white">
                Coming soon
              </button>
            )}
          </div>
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-3">
        {title && (
          <Link
            href={
              "/areas/" +
              CreateSlug(AreaTitle ? AreaTitle : "project") +
              "/" +
              LinkSlug
            }
            className="max-w-xs text-lg leading-tight font-medium hover:text-secondary transition-all duration-300"
          >
            {title}
          </Link>
        )}
        <Link
          href=""
          className="flex items-center gap-2 text-xs text-black/50 underline hover:no-underline"
        >
          <Image src={community_icon} alt="community_icon" />
          {location}
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          {typeof project_Type === "object" ? (
            project_Type.map((items: string, i: number) => (
              <Link
                href={"/projects?projectType=" + items}
                key={i}
                className="border uppercase hover:bg-secondary hover:text-white border-secondary text-secondary text-xs w-fit px-3 py-0.5 rounded-lg transition-all duration-300 mt-1"
              >
                {items.replaceAll("_", " ")}
              </Link>
            ))
          ) : (
            <button className="border uppercase hover:bg-secondary hover:text-white border-secondary text-secondary text-xs w-fit px-3 py-0.5 rounded-lg transition-all duration-300 mt-1">
              {project_Type.replaceAll("_", " ")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
