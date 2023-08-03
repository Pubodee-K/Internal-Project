import type { CSSProperties, ReactNode } from "react";

export type TypographyVariant =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "heading-5"
  | "subtitle-1-bold"
  | "subtitle-1"
  | "subtitle-2-bold"
  | "subtitle-2"
  | "body-1-bold"
  | "body-1"
  | "body-2-bold"
  | "body-2"
  | "caption-1-bold"
  | "caption-1-underline"
  | "caption-1"
  | "caption-2"
  | "caption-3"
  | "caption-4";

export interface TypographyProps {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
  variant?: TypographyVariant;
  style?: CSSProperties;
}
