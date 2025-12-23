"use client";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import React from "react";
// @ts-ignore
import { useFormStatus } from "react-dom";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: React.ReactNode;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, ...props }) => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className={cn([
          className,
          "disabled:cursor-not-allowed disabled:opacity-60",
        ])}
        {...props}
      >
        {pending ? <Loader2Icon className="animate-spin" /> : children}
      </button>
    );
  }
);

SubmitButton.displayName = "Button";

export { SubmitButton };
