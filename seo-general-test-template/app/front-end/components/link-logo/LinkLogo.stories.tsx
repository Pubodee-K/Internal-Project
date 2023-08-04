import LinkLogo from "./LinkLogo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkLogo> = {
  argTypes: {
    as: {
      control: false,
    },
    legacyBehavior: {
      control: false,
    },
    locale: {
      control: false,
    },
    onClick: {
      control: false,
    },
    onMouseEnter: {
      control: false,
    },
    onTouchStart: {
      control: false,
    },
    passHref: {
      control: false,
    },
    prefetch: {
      control: false,
    },
    replace: {
      control: false,
    },
    scroll: {
      control: false,
    },
    shallow: {
      control: false,
    },
  },
  component: LinkLogo,
  tags: ["autodocs"],
  title: "Components/LinkLogo",
};

export default meta;

type Story = StoryObj<typeof LinkLogo>;

export const Default: Story = {
  args: {
    href: "/",
  },
};
