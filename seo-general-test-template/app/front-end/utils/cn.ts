import clsx from "clsx";
import { customTailwindMerge } from "../config/tailwind-merge";

import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(...inputs));
}
