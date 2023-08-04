import type { Meta, StoryObj } from "@storybook/react";
import CardProject from "./CardProject";

const meta: Meta<typeof CardProject> = {
  argTypes: {
  },
  component: CardProject,
  tags: ["autodocs"],
  title: "Components/CardProject",
};

export default meta;

type Story = StoryObj<typeof CardProject>;

export const Default: Story = {
  args: {
    imgAltText: "Project Logo",
    projectDetailsUrl: "/",
    projectTitle: "Trienpont Project",
    description: "Project's description",
    projectId: 0,
  },
  argTypes: {
    imgSrc: {
      control: false,
    },
  },
};

export const WithImageUrl: Story = {
  args: {
    ...Default.args,
    imgSrc: `https://icon.horse/icon/www.trienpont.com`,
  },
};
