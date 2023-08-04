import HeadingBar from "./HeadingBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeadingBar> = {
  component: HeadingBar,
  tags: ["autodocs"],
  title: "Components/HeadingBar",
};

export default meta;

type Story = StoryObj<typeof HeadingBar>;

export const Default: Story = {
  args: {
    title: "Recently Viewed",
  },
};

export const WithLink: Story = {
  args: {
    title: "New Arrival",
    linkText: "View All",
    linkUrl: "/",
  },
};

export const WithHighlight: Story = {
  args: {
    title: "Special Cooking Kits",
    highlightText: "( #One Click Homemade Cooking Kit )",
  },
};
