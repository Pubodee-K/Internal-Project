import { cn } from "@/app/front-end/utils/cn";
import type { RootProps } from "./types";

export default function Root({
  className = "",
  ...props
}: RootProps): JSX.Element {
  return (
    <header
      {...props}
      className={cn(
        "bg-blue-700 shadow-header-root-mobile backdrop-blur-2.5 sm:shadow-none",
        className
      )}
    />
  );
}
