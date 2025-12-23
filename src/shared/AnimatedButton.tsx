import { cn } from "@/lib/utils";
import React from "react";
import { SubmitButton } from "./SubmitButton";

interface PropsI {
  name?: string;
  text: string;
  Icon?: JSX.Element;
  css?: string;
  hoverColor: string;
  type?: "button" | "submit" | "reset";
}

const AnimatedButton = ({
  name,
  text,
  Icon,
  css,
  hoverColor,
  type = "button",
}: PropsI) => {
  if (type !== "submit") {
    return (
      <button
        name={name}
        type={type}
        className={cn([
          css,
          "bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5",
        ])}
      >
        {Icon ? (
          <span className="relative text-white z-20 flex items-center gap-2">
            {Icon} {text}
          </span>
        ) : (
          <span className="relative text-white z-20">{text}</span>
        )}
        <span
          className={cn([
            hoverColor,
            "w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0",
          ])}
        ></span>
      </button>
    );
  } else {
    return (
      <SubmitButton
        name={name}
        type={type}
        className={cn([
          css,
          "flex items-center justify-center bg-secondary group relative overflow-hidden text-white rounded-lg py-2 px-5",
        ])}
      >
        {Icon ? (
          <span className="relative text-white z-20 flex items-center gap-2">
            {Icon} {text}
          </span>
        ) : (
          <span className="relative text-white z-20">{text}</span>
        )}
        <span
          className={cn([
            hoverColor,
            "w-0 group-hover:w-full transition-all duration-500 absolute top-0 bottom-0 right-0",
          ])}
        ></span>
      </SubmitButton>
    );
  }
};

export default AnimatedButton;
