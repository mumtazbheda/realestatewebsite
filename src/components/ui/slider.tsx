"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="flex items-center relative h-[1px] w-full grow rounded-full bg-slate-300">
      <SliderPrimitive.Range className="absolute h-[3px] bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block cursor-grab bg-secondary h-[18px] w-[18px] rounded-full border-2 border-white select-none focus:outline-none" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
