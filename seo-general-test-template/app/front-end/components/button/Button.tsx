import { forwardRef } from "react";
import { getButtonClasssNames } from "./helpers";

import type { ButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      disabled = false,
      size = "medium",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        className={getButtonClasssNames(className, disabled, size, variant)}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
