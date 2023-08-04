"use client";

import { cn } from "@/app/front-end/utils/cn";
import type { SearchFieldProps } from "./types";

// TODO: this is a mock-up, implement this when you start working on search field component
export default function SearchField({
  className = "",
  ...props
}: SearchFieldProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn("h-9.5 w-full rounded-full bg-black-200", className)}
    />
  );
}
