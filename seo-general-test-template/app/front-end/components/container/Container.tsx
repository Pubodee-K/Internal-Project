import { cn } from "@/front-end/utils/cn";

import type { ContainerProps } from "./types";

export default function Container({
  className = "",
  isFullWidth = false,
  noPadding = false,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn(
        "container mx-auto",
        { "mx-0 w-full max-w-none": isFullWidth, "px-0": noPadding },
        className
      )}
    />
  );
}
