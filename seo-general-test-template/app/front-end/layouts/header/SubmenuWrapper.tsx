import { cn } from "@/app/front-end/utils/cn";
import type { SubmenuWrapperProps } from "./types";

export default function SubmenuWrapper({
  className = "",
  ...props
}: SubmenuWrapperProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn(
        "hidden lg:flex lg:flex-1 lg:items-center lg:justify-between",
        className
      )}
    />
  );
}
