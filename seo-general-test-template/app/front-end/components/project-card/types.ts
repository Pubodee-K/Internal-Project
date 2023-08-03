import type { ComponentPropsWithRef } from "react";
import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";

// import type { ButtonAddToWishlistProps } from "@/front-end/components/button-add-to-wishlist";
// import type { ButtonPurchaseProps } from "@/front-end/components/button-purchase";
// import type { RibbonProps } from "@/front-end/components/ribbon";

export interface BaseCardProductProps {
  price: string;
  productTitle: string;
  weight: string;

  // addToWishlistAltText?: ButtonAddToWishlistProps["altText"];
  discountPrice?: string;
  expiredDate?: string;
  imgAltText?: string;
  imgSrc?: ImageProps["src"];
  // isAddedToWishlist?: ButtonAddToWishlistProps["pressed"];
  isShowRibbon?: boolean;
  // onClickAddToWishlist?: ButtonAddToWishlistProps["onPressedChange"];
  productDetailsUrl?: LinkProps["href"];
  ribbonText?: string;
  // ribbonVariant?: RibbonProps["variant"];
}

export interface CardProjectProps
  extends ComponentPropsWithRef<"div">,
    // PickedButtonPurchaseProps,
    BaseCardProductProps {}
