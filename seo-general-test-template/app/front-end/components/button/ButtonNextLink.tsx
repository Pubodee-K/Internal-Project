import Link from "next/link";
import { getButtonClasssNames } from "./helpers";

import type { ButtonNextLinkProps } from "./types";

export default function ButtonNextLink({
  href,

  className = "",
  size = "medium",
  variant = "primary",
  ...props
}: ButtonNextLinkProps): JSX.Element {
  return (
    <Link
      {...props}
      className={getButtonClasssNames(className, false, size, variant)}
      href={href}
    />
  );
}
