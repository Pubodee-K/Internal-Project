import Link from "next/link";

import type { ComponentPropsWithoutRef } from "react";
import type { LinkLogoProps } from "@/app/front-end/components/link-logo";



export interface LogoProps extends LinkLogoProps {}
export interface MenuProps extends ComponentPropsWithoutRef<"div"> {}
export interface MenuToggleProps extends ComponentPropsWithoutRef<"div"> {}
export interface MenuWrapperProps extends ComponentPropsWithoutRef<"div"> {}
export interface RootProps extends ComponentPropsWithoutRef<"header"> {}
export interface SearchFieldProps extends ComponentPropsWithoutRef<"div"> {}
export interface SubmenuProps extends ComponentPropsWithoutRef<"div"> {}

export interface SubmenuLinkProps
  extends ComponentPropsWithoutRef<typeof Link> {}

export interface SubmenuWrapperProps extends ComponentPropsWithoutRef<"div"> {}
