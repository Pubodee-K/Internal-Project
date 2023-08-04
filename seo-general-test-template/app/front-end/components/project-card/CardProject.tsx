"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
// import { ButtonPurchase } from "@/front-end/components/button-purchase";
import { Separator } from "@/app/front-end/components/separator";
import { Typography } from "@/app/front-end/components/typography";

import imgPlaceholder from "@/app/front-end/images/placeholders/card-project-placeholder.png";

import { cn } from "@/app/front-end/utils/cn";

import type { CardProjectProps } from "./types";

const CardProject = forwardRef<HTMLDivElement, CardProjectProps>(
  (
    {
      projectTitle,
      description = "-",
      className = "",
      imgAltText = "Project Logo",
      imgSrc = imgPlaceholder,
      projectDetailsUrl = "/",
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        className={cn(
          "relative inline-flex w-full max-w-42.5 flex-col rounded bg-white-900 px-1.75 pb-1.75 pt-2.5 shadow-card-project lg:max-w-55 lg:px-2.25 lg:py-3",
          className 
        )}
        ref={ref}
      >
        {/* Project's image */}
        <div className="relative h-40.75 overflow-hidden border border-solid border-primary-300 bg-white-50 object-cover lg:h-44">
          <Image alt={imgAltText} fill src={imgSrc} />
        </div>

        {/* Project's title (link) */}
        <div className="mt-2.5 h-19 lg:h-23">
          <Typography
            asChild
            className="line-clamp-2 block text-left hover:text-primary-900 lg:text-sm lg:leading-5"
            variant="caption-1-bold"
          >
            <Link href={projectDetailsUrl}>{projectTitle}</Link>
          </Typography>

          {/* Project's briefly description */}
          <div className="mt-1 flex items-start lg:mt-2">
            <Typography variant="caption-1">{description}</Typography>
          </div>
        </div>

        

        {/* Separator line */}
        <Separator className="mb-2.5 mt-4 border-none bg-primary-300 lg:my-3" />

        {/* button */}
        <div className="flex h-8 items-center justify-between">
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

CardProject.displayName = "CardProject";

export default CardProject;
