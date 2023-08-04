import Image from "next/image";
import Link from "next/link";

import logo from "@/app/front-end/images/logos/logo.svg";

import { cn } from "@/app/front-end/utils/cn";

import type { LinkLogoProps } from "./types";

export default function LinkLogo({
  href,

  className = "",
  ...props
}: LinkLogoProps): JSX.Element {
  return (
    <Link
      {...props}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center bg-white-900 rounded-full",
        className
      )}
      href={href}
    >
      <Image
        alt="trienpont"
        className="h-10.5 w-10.5 lg:h-19.5 lg:w-19.5"
        priority
        src={logo}
      />
      <span className="sr-only">trienpont</span>
    </Link>
  );
}
