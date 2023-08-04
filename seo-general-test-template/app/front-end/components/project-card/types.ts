import type { ComponentPropsWithRef } from "react";
import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";


export interface BaseCardProjectProps {
  projectTitle: string;
  description: string;
  projectId: number;
  imgAltText?: string;
  imgSrc?: ImageProps["src"];
  projectDetailsUrl?: LinkProps["href"];
}

export interface CardProjectProps
  extends ComponentPropsWithRef<"div">,
    // PickedButtonPurchaseProps,
    BaseCardProjectProps {}
