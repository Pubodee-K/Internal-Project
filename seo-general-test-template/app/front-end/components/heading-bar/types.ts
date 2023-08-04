import type { LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export interface HeadingBarProps extends ComponentPropsWithoutRef<"div"> {
  title: string;

  highlightText?: string;
  linkText?: string;
  linkUrl?: LinkProps["href"];
}
