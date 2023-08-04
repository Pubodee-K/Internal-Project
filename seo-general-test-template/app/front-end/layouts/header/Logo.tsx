import { LinkLogo } from "@/app/front-end/components/link-logo";
import type { LogoProps } from "./types";

export default function Logo({ href, ...props }: LogoProps): JSX.Element {
  return <LinkLogo {...props} href={href} />;
}
