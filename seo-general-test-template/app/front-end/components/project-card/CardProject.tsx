"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

// import { ButtonAddToWishlist } from "@/front-end/components/button-add-to-wishlist";
// import { ButtonPurchase } from "@/front-end/components/button-purchase";
// import { Ribbon } from "@/front-end/components/ribbon";
// import { Separator } from "@/front-end/components/separator";
import { Typography } from "@/front-end/components/typography";

// import imgPlaceholder from "@/front-end/images/placeholders/card-product-placeholder.png";

import { cn } from "@/front-end/utils/cn";

import type { CardProjectProps } from "./types";

const CardProduct = forwardRef<HTMLDivElement, CardProjectProps>(
  (
    {
      price,
      productTitle,
      weight,

      // addQuantityAltText = "Add quantity",
      // addToWishlistAltText = "Add to favorite button",
      className = "",
      discountPrice = "",
      // disabled = false,
      expiredDate = "",
      imgAltText = "Product cover",
      imgSrc = "imgPlaceholder",
      // isAddedToWishlist = false,
      isShowRibbon = false,
      // onClickAddQuantity = () => {},
      // onClickAddToWishlist = () => {},
      // onClickRemoveQuantity = () => {},
      productDetailsUrl = "/",
      // purchaseText = "Buy Now",
      // quantity = 0,
      // removeQuantityAltText = "Remove quantity",
      ribbonText = "New",
      // ribbonVariant = "primary",
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        className={cn(
          "relative inline-flex w-full max-w-42.5 flex-col rounded bg-white-900 px-1.75 pb-1.75 pt-2.5 shadow-card-product lg:max-w-55 lg:px-2.25 lg:py-3",
          className
        )}
        ref={ref}
      >
        {/* Product's image */}
        <div className="relative h-40.75 overflow-hidden border border-solid border-primary-300 bg-primary-50 object-cover lg:h-44">
          <Image alt={imgAltText} width={256} height={256} src={imgSrc} />
        </div>

        {/* Product's title (link) */}
        <div className="mt-2.5 h-19 lg:h-23">
          <Typography
            asChild
            className="line-clamp-2 block text-left hover:text-primary-900 lg:text-sm lg:leading-5"
            variant="caption-1-bold"
          >
            <Link href={productDetailsUrl}>{productTitle}</Link>
          </Typography>

          {/* Expired date & weight */}
          <div className="mt-1 flex flex-col items-start justify-start gap-1 lg:mt-2 lg:gap-2">
            {expiredDate && (
              <Typography variant="body-2">{expiredDate}</Typography>
            )}
            <Typography variant="caption-1">{weight}</Typography>
          </div>
        </div>

        {/* Discount price and purchase button */}
        <div className="flex h-8 items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <Typography
              className="font-bold uppercase lg:text-xs"
              variant="caption-2"
            >
              {price}
            </Typography>
            {discountPrice && (
              <Typography
                className="line-through lg:text-xxs"
                variant="caption-3"
              >
                {discountPrice}
              </Typography>
            )}
          </div>

          <div className="flex flex-1 items-center justify-end">
            {/* <ButtonPurchase
              addQuantityAltText={addQuantityAltText}
              disabled={disabled}
              onClickAddQuantity={onClickAddQuantity}
              onClickRemoveQuantity={onClickRemoveQuantity}
              purchaseText={purchaseText}
              quantity={quantity}
              removeQuantityAltText={removeQuantityAltText}
            /> */}
          </div>
        </div>
      </div>
    );
  }
);

CardProduct.displayName = "CardProduct";

export default CardProduct;
