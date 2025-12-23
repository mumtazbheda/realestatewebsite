import React from "react";
import { SanityFetch } from "@/lib/SanityFetch";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { CreateSlug } from "@/lib/helper/CreateSlug";
import HeroSearch from "@/widgets/HeroSearch";
import projects_bg from "@/assets/images/projects-bg.jpg";
import ProjectBox from "@/shared/ProjectBox";
import Navigation from "@/shared/Navigation";
import { Metadata } from "next";

export interface DeveloperSearchParamsI {
  input: string;
  areas: string;
  projectType: string;
}

export const metadata: Metadata = {
  title: "Projects",
  description: "List of All Projects in Kingdom Capital",
  openGraph: {
    title: "Projects",
    description: "List of All Projects in Kingdom Capital",
  },
};

const Projects = async ({
  searchParams,
}: {
  searchParams: DeveloperSearchParamsI;
}) => {
  const areas =
    searchParams.areas &&
    JSON.stringify(searchParams.areas.split(",,")).replaceAll('"', "'");
  const projectTypes =
    searchParams.projectType && searchParams.projectType.split(",,");
  const projectTypesQuery =
    projectTypes &&
    (projectTypes as any[])
      .map((items, i: number) => `&& '${items}' in project_type`)
      .join(" ");

  const Data = await SanityFetch({
    Query: `*[_type == 'project'
        ${
          searchParams.input && searchParams.input !== ""
            ? `&& title == '${searchParams.input}' || slug.current == '${searchParams.input}'`
            : ""
        }
        ${
          searchParams.areas && searchParams.areas !== ""
            ? `&& references(*[_type == "area" && title in ${areas} || slug.current in ${areas}]._id)`
            : ""
        }
        ${
          searchParams.projectType && searchParams.projectType !== ""
            ? projectTypesQuery
            : ""
        }
    ] {
         title,
         cover_image,
         location,
         slug,
         project_type,
         payment_plan,
         handover,
         coming_soon,
         area -> {
            title
         }
        }`,
  });

  return (
    <main className="sm:px-4 px-2 max-width">
      {/* Navs Section */}
      <section className="py-5">
        <Navigation title={"Projects in Dubai"} />
      </section>
      {/* Hero Section with Search */}
      <HeroSearch
        title="Off-Plan Projects in Dubai"
        Cover_Image={projects_bg}
        InputActiveValue={searchParams.input && searchParams.input}
        SelectedAreas={searchParams.areas ? searchParams.areas.split(",") : []}
        SelectedProjects={
          searchParams.projectType ? searchParams.projectType.split(",") : []
        }
        AreaDropDown={true}
        ProjectsTypeDropdown={true}
        PlaceHolder="Search Project Name"
        OptionType={["project"]}
      />
      {/* Developers Section */}
      <section className="mt-12">
        <div className="mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {Data &&
            Data.map((items: any, i: number) => {
              const Cover_Image = items?.cover_image?.asset ? urlForImage(
                items?.cover_image?.asset._ref
              ).url() : "";
              return (
                <ProjectBox
                  key={i}
                  offPlanimage={Cover_Image}
                  location={items.location}
                  paymentPlan={items.payment_plan}
                  handover={items.handover}
                  title={items.title}
                  project_Type={items.project_type}
                  comming_soon={items.coming_soon}
                  AreaTitle={items.area && items.area.title}
                  LinkSlug={items.slug?.current}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
