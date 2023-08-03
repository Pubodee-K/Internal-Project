import { extendTailwindMerge } from "tailwind-merge";

export const customTailwindMerge = extendTailwindMerge({
  classGroups: {
    animate: [
      {
        animate: [
          "slideDownAndFade",
          "slideLeftAndFade",
          "slideRightAndFade",
          "slideUpAndFade",
        ],
      },
    ],
    "backdrop-blur": [{ "backdrop-blur": ["2.5"] }],
    "font-size": [
      {
        text: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "0.375xxs",
          "0.5xxs",
          "xxs",
          "2.75xl",
        ],
      },
    ],
    "max-w": [{ "max-w": ["42.5", "55", "68.5"] }],
    shadow: [
      {
        shadow: [
          "card-project",
          "shadow-dropdown-language-switcher",
          "footer",
          "hover-primary-button",
        ],
      },
    ],
    tracking: [{ tracking: ["default"] }],
  },
});
