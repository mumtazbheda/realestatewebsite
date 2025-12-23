"use client";
import { SearchBar } from "@/shared/SearchBar";
import { SelectDropbox } from "@/shared/SelectDropbox";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProjectTypes } from "@/lib/constants";

interface HeroSearchI {
  wrapperClassname?: string;
  title: string;
  description?: string;
  PlaceHolder: string;
  OptionType?: string[];
  Cover_Image: StaticImageData | string;
  InputActiveValue?: string;
  SelectedAreas?: string[];
  SelectedProjects?: string[];
  className?: string;
  AreaDropDown?: boolean;
  ProjectsTypeDropdown?: boolean;
}

const HeroSearch = ({
  wrapperClassname,
  title,
  description,
  PlaceHolder,
  OptionType = ["area"],
  Cover_Image,
  InputActiveValue,
  SelectedAreas,
  SelectedProjects,
  className,
  AreaDropDown = false,
  ProjectsTypeDropdown = false,
}: HeroSearchI) => {
  const router = useRouter();
  const [CheckedAreas, setCheckedAreas] = useState<string[]>(
    SelectedAreas ? SelectedAreas : []
  );
  const [CheckedProjectTypes, setCheckedProjectTypes] = useState<string[]>(
    SelectedProjects ? SelectedProjects : []
  );

  const FormSubmit = (event: any) => {
    event.preventDefault();
    const url = new URL(window.location.href);

    const Input = event.target.elements.input.value;
    const checkedAreas =
      CheckedAreas && CheckedAreas.length !== 0
        ? "&areas=" + CheckedAreas.join(",,")
        : "";
    const checkedProjectTypes =
      CheckedProjectTypes && CheckedProjectTypes.length !== 0
        ? "&projectType=" + CheckedProjectTypes.join(",,")
        : "";

    router.replace(
      url.pathname + `?input=${Input}` + checkedAreas + checkedProjectTypes
    );
  };

  return (
    <section
      className={cn([
        wrapperClassname,
        "relative max-width mx-auto rounded-lg w-full h-full min-h-[300px]",
      ])}
    >
      <Image
        className="absolute top-0 right-0 left-0 bottom-0 rounded-lg object-cover w-full h-full min-h-[300px]"
        src={Cover_Image}
        alt="Bg Cover"
      />
      <div
        className={cn([
          className,
          "rounded-lg absolute bg-black/20 w-full h-full flex flex-col gap-4 items-center justify-center px-4",
        ])}
      >
        <h1 className="sm:text-4xl text-3xl text-center font-semibold text-white">
          {title}
        </h1>
        <form
          onSubmit={FormSubmit}
          className={cn([
            "w-full rounded-lg flex lg:flex-row flex-col items-center max-w-screen-md bg-white max-lg:p-1",
            AreaDropDown === true && ProjectsTypeDropdown === true
              ? "max-w-screen-lg"
              : "max-lg:!p-0",
          ])}
        >
          <div
            className={cn([
              "flex-grow flex items-center gap-2 rounded-lg",
              AreaDropDown === false && ProjectsTypeDropdown === false
                ? "w-full"
                : "w-full",
              AreaDropDown === true && ProjectsTypeDropdown === true
                ? "max-lg:w-full"
                : "",
            ])}
          >
            <SearchBar
              InputCss="!rounded-lg"
              name="input"
              PlaceHolder={PlaceHolder}
              OptionType={OptionType}
              Activevalue={InputActiveValue}
              MultiSelect={false}
            />
            <button
              type="submit"
              className="lg:hidden bg-secondary hover:bg-[#3e8b22] transition-all duration-300 rounded-lg px-2 xs:py-2 py-1.5 mr-1"
            >
              <SearchIcon
                size={20}
                className="max-xs:w-[16px]"
                stroke="white"
                strokeWidth={1}
              />
            </button>
          </div>
          {!(AreaDropDown === false && ProjectsTypeDropdown === false) && (
            <hr className="w-[98%] border-slate-200 lg:hidden" />
          )}
          <div
            className={cn([
              "flex sm:flex-row flex-col max-sm:divide-y items-center justify-end sm:gap-2 max-lg:px-2",
              AreaDropDown === false && ProjectsTypeDropdown === false
                ? ""
                : "lg:w-1/4 w-full",
              AreaDropDown === true && ProjectsTypeDropdown === true
                ? "lg:!w-2/4 w-full"
                : "",
            ])}
          >
            {AreaDropDown === true && (
              <div className="w-full flex items-center gap-2">
                <span className="max-lg:hidden rounded-full bg-slate-300 h-6 w-[0.5px]"></span>
                <SelectDropbox
                  name="areas"
                  PlaceHolder="Areas"
                  Checked={CheckedAreas}
                  setChecked={setCheckedAreas}
                />
              </div>
            )}

            {ProjectsTypeDropdown === true && (
              <div className="w-full flex items-center gap-2">
                <span className="max-lg:hidden rounded-full bg-slate-300 h-6 w-[0.5px]"></span>
                <SelectDropbox
                  name="projectType"
                  PlaceHolder="Property Type"
                  Checked={CheckedProjectTypes}
                  setChecked={setCheckedProjectTypes}
                  options={ProjectTypes.map((item) => ({
                    label: item.title,
                    value: item.value,
                  }))}
                />
              </div>
            )}

            <button
              type="submit"
              className="bg-secondary max-lg:hidden hover:bg-[#3e8b22] transition-all duration-300 rounded-lg p-2 mr-1"
            >
              <SearchIcon size={20} stroke="white" strokeWidth={1} />
            </button>
          </div>
        </form>
        {description && (
          <p className="text-center text-white font-semibold -mt-1.5">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSearch;
