import Link from "next/link";
import type { ComponentPropsWithRef, ComponentPropsWithoutRef } from "react";

export type ButtonSize =
  | "small"
  | "medium"
  | "large"
  | "circle-small"
  | "circle-medium"
  | "circle-large";

export type ButtonVariant = "primary" | "secondary";

export interface BaseButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export interface ButtonProps
  extends BaseButtonProps,
    ComponentPropsWithRef<"button"> {}

export interface ButtonLinkProps
  extends BaseButtonProps,
    ComponentPropsWithoutRef<"a"> {}

export interface ButtonNextLinkProps
  extends BaseButtonProps,
    ComponentPropsWithoutRef<typeof Link> {}
