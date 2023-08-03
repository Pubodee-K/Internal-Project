import { Typography } from "@/front-end/components/typography";

import Container from "./Container";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  argTypes: {
    children: {
      control: false,
    },
  },
  component: Container,
  decorators: [
    (Story) => (
      <div className="py-10">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Components/Container",
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="h-10 border border-solid border-violet-700 bg-violet-300 p-2 text-center">
        <Typography>Container</Typography>
      </div>
    ),
    isFullWidth: false,
    noPadding: false,
  },
};
