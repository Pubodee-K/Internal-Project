import { Typography } from "@/app/front-end/components/typography";

import Dialog from "./Dialog";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  argTypes: {
    children: {
      control: false,
    },
  },
  component: Dialog,
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
  title: "Components/Dialog",
};

export default meta;

type Story = StoryObj<typeof Dialog>;

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
