"use client";
import { Root as RadixSeparator } from "@radix-ui/react-separator";

import { cn } from "@/app/front-end/utils/cn";

import type { SeparatorProps } from "./types";

export default function Separator({
  className = "",
  orientation = "horizontal",
  variant = "solid",
}: SeparatorProps): JSX.Element {
  const isDotted = variant === "dotted";
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";

  return (
    <RadixSeparator
      orientation={orientation}
      className={cn(
        "border-solid border-primary-100",
        {
          "border-dotted": isDotted,
          "border-s-px h-full w-px": isVertical,
          "border-t-px h-px w-full": isHorizontal,
        },
        className
      )}
      decorative={isVertical}
    />
  );
}
