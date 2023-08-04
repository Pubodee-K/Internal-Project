import Link from "next/link";

import { Typography } from "@/app/front-end/components/typography";
import { cn } from "@/app/front-end/utils/cn";

import type { SubmenuLinkProps } from "./types";

export default function SubmenuLink({
  href,
  className = "",
  children = null,
  ...props
}: SubmenuLinkProps): JSX.Element {
  return (
    <Link
      {...props}
      href={href}
      className={cn(
        "group flex-1 border-b border-solid border-b-transparent bg-transparent pb-4.25 pt-4.5 hover:border-b-primary-900 hover:bg-primary-50",
        className
      )}
    >
      <Typography
        asChild
        className="inline-block w-full text-center align-middle text-black-900 group-hover:text-primary-900"
        variant="body-2"
      >
        <span>{children}</span>
      </Typography>
    </Link>
  );
}
