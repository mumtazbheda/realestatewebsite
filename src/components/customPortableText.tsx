import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

export const CustomPortableText = ({ value }: { value: PortableTextBlock }) => {
  return (
    <div
      className="w-full max-w-none prose lg:prose-lg md:prose-base prose-sm
    prose-h2:my-4
    lg:prose-h4:text-xl sm:prose-h4:text-lg prose-h4:text-base prose-h4:font-semibold
    lg:prose-h5:text-lg sm:prose-h5:text-base prose-h5:text-sm prose-h5:font-semibold
    lg:prose-h6:text-base sm:prose-h6:text-sm prose-h6:text-xs prose-h6:font-semibold
    sm:prose-p:text-base prose-p:text-sm
    sm:prose-li:text-[15px] prose-li:text-sm prose-li:py-0 prose-li:pl-0 prose-li:my-2"
    >
      <PortableText
        value={value}
        components={{
          // ...HeadingComponents,
          types: {
            image: ({ value, isInline }) => {
              const image = urlForImage(value.asset._ref).url();
              return (
                <Image
                  fill unoptimized
                  src={image}
                  alt={value.alt || ""}
                  className="!relative !w-full !max-w-[800px] mx-auto !h-auto rounded-lg"
                />
              );
            },
          },
        }}
      />
    </div>
  );
};

// const HeadingComponents: PortableTextComponents = {
//     block: {
//       h1: ({ children }) => (
//         <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold tracking-tight mt-6">
//           {children}
//         </h1>
//       ),
//       h2: ({ children }) => (
//         <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold tracking-tight mt-6">
//           {children}
//         </h2>
//       ),
//       h3: ({ children }) => (
//         <h3 className="lg:text-2xl sm:text-xl text-lg font-semibold tracking-tight mt-6">
//           {children}
//         </h3>
//       ),
//       h4: ({ children }) => (
//         <h4 className="lg:text-xl sm:text-lg text-base font-semibold tracking-tight mt-6">
//           {children}
//         </h4>
//       ),
//       h5: ({ children }) => (
//         <h5 className="lg:text-lg sm:text-base text-sm font-semibold tracking-tight mt-6">
//           {children}
//         </h5>
//       ),
//       h6: ({ children }) => (
//         <h6 className="lg:text-base sm:text-sm text-xs font-semibold tracking-tight mt-6">
//           {children}
//         </h6>
//       ),
//     },
//   };
