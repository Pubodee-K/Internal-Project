import { ButtonNextLink } from "@/app/front-end/components/button";
import { Typography } from "@/app/front-end/components/typography";

import { cn } from "@/app/front-end/utils/cn";

import type { HeadingBarProps } from "./types";

export default function HeadingBar({
  title,

  className = "",
  highlightText = undefined,
  linkText = undefined,
  linkUrl = undefined,
  ...props
}: HeadingBarProps): JSX.Element {
  const hasLink = linkText && linkUrl;

  return (
    <div
      {...props}
      className={cn("flex items-center justify-between", className)}
    >
      <Typography
        asChild
        className="lg:text-2xl lg:leading-8"
        variant="body-2-bold"
      >
        <h5>
          {title}
          {highlightText && (
            <>
              {" "}
              <em className="not-italic text-primary-900">{highlightText}</em>
            </>
          )}
        </h5>
      </Typography>
      {hasLink && (
        <ButtonNextLink href={linkUrl} size="small" variant="secondary">
          {linkText}
        </ButtonNextLink>
      )}
    </div>
  );
}
