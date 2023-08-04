import { cn } from "@/app/front-end/utils/cn";
import type { ButtonSize, ButtonVariant } from "./types";

export function getButtonClasssNames(
  className: string,
  disabled: boolean,
  size: ButtonSize,
  variant: ButtonVariant
): string {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  const isLarge = size === "large";
  const isMedium = size === "medium";
  const isSmall = size === "small";
  const isCircleSmall = size === "circle-small";
  const isCircleMedium = size === "circle-medium";
  const isCircleLarge = size === "circle-large";

  return cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full border border-solid border-transparent",
    {
      "bg-primary-900 text-white-900": isPrimary,
      "hover:shadow-hover-primary-button": isPrimary && !disabled,
      "bg-black-100 text-white-900": isPrimary && disabled,
      "bg-primary-50 text-black-900": isSecondary,
      "hover:border-primary-300": isSecondary && !disabled,
      "bg-primary-50 text-white-900": isSecondary && disabled,
      "px-21.75 py-3 text-base font-bold leading-5.5": isLarge,
      "text-xs font-bold leading-4": isSmall || isMedium,
      "px-10 py-2.25": isMedium,
      "px-7.5 py-1.75": isSmall,
      "px-1.5 py-1.5 text-sm leading-none": isCircleSmall,
      "px-2.25 py-2.25 text-xl leading-none": isCircleMedium,
      "px-2.25 py-2.25 text-2.75xl leading-none": isCircleLarge,
    },
    className
  );
}
