import type { TypographyVariant } from "./types";

export function getDefaultHTMLTag(variant: TypographyVariant): string {
  switch (variant) {
    case "heading-1":
      return "h1";
    case "heading-2":
      return "h2";
    case "heading-3":
      return "h3";
    case "heading-4":
      return "h4";
    case "heading-5":
      return "h5";
    case "subtitle-1-bold":
    case "subtitle-1":
    case "subtitle-2-bold":
    case "subtitle-2":
      return "h6";
    case "body-1-bold":
    case "body-1":
    case "body-2-bold":
    case "body-2":
      return "p";
    case "caption-1-bold":
    case "caption-1-underline":
    case "caption-1":
    case "caption-2":
    case "caption-3":
    case "caption-4":
      return "small";
    default:
      throw new Error(`unknown typography variant: ${variant}`);
  }
}
