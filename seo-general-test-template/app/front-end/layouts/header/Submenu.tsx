import { Container } from "@/app/front-end/components/container";
import { cn } from "@/app/front-end/utils/cn";

import type { SubmenuProps } from "./types";

export default function Submenu({
  className = "",
  children = null,
  ...props
}: SubmenuProps): JSX.Element {
  return (
    <div
      {...props}
      className={cn(
        "border-b border-solid border-b-black-100 pb-3.75 pt-4.5 lg:border-0 lg:pb-0 lg:pt-0",
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between">{children}</div>
      </Container>
    </div>
  );
}
