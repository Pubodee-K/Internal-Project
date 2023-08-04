import { cn } from "@/app/front-end/utils/cn";
import type { MenuWrapperProps } from "./types";

export default function MenuWrapper({
  className = "",
  ...props
}: MenuWrapperProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-between gap-4 xl:gap-8",
        className
      )}
    />
  );
}
