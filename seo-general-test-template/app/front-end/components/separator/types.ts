import type { Root as RadixSeparator } from "@radix-ui/react-separator";
import type { ComponentPropsWithoutRef } from "react";

export type SeparatorOrientation = "horizontal" | "vertical";

export type SeparatorVariant = "solid" | "dotted";

export interface SeparatorProps
  extends ComponentPropsWithoutRef<typeof RadixSeparator> {
  className?: string;
  orientation?: SeparatorOrientation;
  variant?: SeparatorVariant;
}
