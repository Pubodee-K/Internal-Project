import { Container } from "@/app/front-end/components/container";
import { cn } from "@/app/front-end/utils/cn";

import type { MenuProps } from "./types";

export default function Menu({
  className = "",
  children = null,
  ...props
}: MenuProps): JSX.Element {
  return (
    <div {...props} className={cn("pb-2 pt-5 md:pb-4 md:pt-4", className)}>
      <Container>
        <div className="flex items-center justify-between">{children}</div>
      </Container>
    </div>
  );
}
