import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/front-end/utils/cn";

import { getDefaultHTMLTag } from "./helpers";

import type { TypographyProps } from "./types";

export default function Typography({
  asChild = false,
  className = "",
  variant = "body-1",
  style = {},
  ...props
}: TypographyProps) {
  const defaultHTMLTag = getDefaultHTMLTag(variant);
  const Component = asChild ? Slot : defaultHTMLTag;

  return (
    <Component
      {...props}
      className={cn(
        "font-normal tracking-default ",
        {
          "text-heading-1 font-bold leading-23": variant === "heading-1",
          "text-heading-2 font-bold leading-13": variant === "heading-2",
          "text-heading-3 font-bold leading-10": variant === "heading-3",
          "text-heading-4 font-bold leading-9": variant === "heading-4",
          "text-2xl font-bold leading-8": variant === "heading-5",

          "text-xl font-bold leading-7": variant === "subtitle-1-bold",
          "text-xl leading-7": variant === "subtitle-1",

          "text-lg font-bold leading-6.25": variant === "subtitle-2-bold",
          "text-lg leading-6.25": variant === "subtitle-2",

          "text-base font-bold leading-5.5": variant === "body-1-bold",
          "text-base leading-5.5": variant === "body-1",

          "text-sm font-bold leading-5": variant === "body-2-bold",
          "text-sm leading-5": variant === "body-2",

          "text-xs font-bold leading-4": variant === "caption-1-bold",
          "text-xs leading-4 underline": variant === "caption-1-underline",
          "text-xs leading-4": variant === "caption-1",
          "text-xxs leading-4": variant === "caption-2",
          "text-0.5xxs leading-4": variant === "caption-3",
          "text-0.375xxs leading-4": variant === "caption-4",
        },
        className
      )}
      style={style}
    />
  );
}
