"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NextPageContext } from "next";
import useLanguageSwitcher, {
  LanguageDescriptor,
} from "@/lib/useLanguageSwitcher";
import { Skeleton } from "@/components/ui/skeleton";

export type SelectNationality = {
  context?: NextPageContext;
};

const SelectNationality = ({ context }: SelectNationality = {}) => {
  const [open, setopen] = useState(false);

  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher({ context });

  if (!languageConfig) {
    return null;
  }

  const activeLanguage = languageConfig.languages.find(
    (ld: LanguageDescriptor) => ld.name === currentLanguage
  );

  return (
    <div className="relative">
      {activeLanguage && activeLanguage.name && activeLanguage.icon ? (
        <div
          // onClick={() => setopen(!open)}
          className="w-6 h-6 cursor-pointer rounded-full overflow-hidden"
        >
          <Image
            width={24}
            height={24}
            className="w-full h-full object-cover"
            src={activeLanguage.icon}
            alt="en"
          />
        </div>
      ) : (
        <Skeleton className="w-6 h-6 bg-slate-400 rounded-full"></Skeleton>
      )}
      <div
        className={`${
          open ? "" : "hidden"
        } absolute flex flex-col border rounded-lg gap-4 px-3 py-4 top-8 overflow-hidden -left-3 z-30 bg-white shadow-xl`}
      >
        {activeLanguage &&
          languageConfig.languages.map(
            (language, index) =>
              language.name !== activeLanguage?.name && (
                <div
                  key={index}
                  // onClick={switchLanguage(language.name)}
                  className="w-6 h-6 cursor-pointer rounded-full overflow-hidden"
                >
                  <Image
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                    src={language.icon}
                    alt="en"
                  />
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default SelectNationality;
