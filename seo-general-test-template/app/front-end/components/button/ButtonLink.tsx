import { getButtonClasssNames } from "./helpers";
import type { ButtonLinkProps } from "./types";

export default function ButtonLink({
  className = "",
  size = "medium",
  variant = "primary",
  ...props
}: ButtonLinkProps): JSX.Element {
  return (
    <a
      {...props}
      className={getButtonClasssNames(className, false, size, variant)}
    />
  );
}
