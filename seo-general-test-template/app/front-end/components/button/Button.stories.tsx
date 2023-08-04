import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  argTypes: {
    children: {
      control: false,
    },
  },
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    disabled: false,
    size: "medium",
    variant: "primary",
  },
};

export const MediumSizeWithIcon: Story = {
  args: {
    children: (
      <>
        <i className="ri-user-fill text-base leading-none" />
        <span>Login / Register</span>
      </>
    ),
    disabled: false,
    size: "medium",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const CircleSmallSizeWithIcon: Story = {
  args: {
    children: (
      <>
        <i className="ri-add-fill text-sm leading-none" />
        <span className="sr-only">Plus icon</span>
      </>
    ),
    disabled: false,
    size: "circle-small",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const SecondaryCircleMediumSizeWithIcon: Story = {
  args: {
    children: (
      <>
        <i className="ri-arrow-left-s-line text-xl leading-none" />
        <span className="sr-only">Plus icon</span>
      </>
    ),
    disabled: false,
    size: "circle-medium",
    variant: "secondary",
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const PrimaryCircleLargeSizeWithIcon: Story = {
  args: {
    children: (
      <>
        <i className="ri-add-fill text-2.75xl leading-none" />
        <span className="sr-only">Plus icon</span>
      </>
    ),
    disabled: false,
    size: "circle-large",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};
