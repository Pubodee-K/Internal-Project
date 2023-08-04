/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import customTagExample from "@/app/front-end/images/examples/custom-tag-example.png";

import Typography from "./Typography";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  argTypes: {
    asChild: {
      control: false,
    },
    style: {
      control: false,
    },
  },
  component: Typography,
  title: "Base/Typography",
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Summary: Story = {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <Typography variant="heading-1">Heading 1 (68px/92px)</Typography>
        <Typography variant="heading-2">Heading 2 (40px/52px)</Typography>
        <Typography variant="heading-3">Heading 3 (32px/40px)</Typography>
        <Typography variant="heading-4">Heading 4 (28px/36px)</Typography>
        <Typography variant="heading-5">Heading 5 (24px/32px)</Typography>

        <Typography variant="subtitle-1-bold">
          Subtitle 1 (Stronger) (20px/28px)
        </Typography>
        <Typography variant="subtitle-1">Subtitle 1 (20px/28px)</Typography>

        <Typography variant="subtitle-2-bold">
          Subtitle 2 (Stronger) (18px/25px)
        </Typography>
        <Typography variant="subtitle-2">Subtitle 2 (18px/25px)</Typography>

        <Typography variant="body-1-bold">
          Body 1 (Stronger) (16px/22px)
        </Typography>
        <Typography variant="body-1">Body 1 (16px/22px)</Typography>

        <Typography variant="body-2-bold">
          Body 2 (Stronger) (14px/20px)
        </Typography>
        <Typography variant="body-2">Body 2 (14px/20px)</Typography>

        <Typography variant="caption-1-bold">
          Caption 1 (Stronger) (12px/16px)
        </Typography>
        <Typography variant="caption-1">Caption 1 (12px/16px)</Typography>
        <Typography variant="caption-1-underline">
          Caption 1 (Highlight) (12px/16px)
        </Typography>

        <Typography variant="caption-2">Caption 1 (10px/16px)</Typography>
        <Typography variant="caption-3">Caption 3 (8px/16px)</Typography>
        <Typography variant="caption-4">Caption 4 (6px/16px)</Typography>

        <p className="mt-8">
          Typography Design Link:{" "}
          <a
            className="block font-bold text-blue-500 underline"
            href=""
            target="_blank"
          >
            https://app.zeplin.io/project/648fcdadeb160525a67566ed/styleguide/textstyles?seid=648fd60d816813258fa29ceb
          </a>
        </p>
      </div>
    );
  },
};

export const CustomHtmlTag: Story = {
  render() {
    return (
      <article className="flex flex-col gap-4">
        <p>
          Typography is a{" "}
          <a
            className="font-bold uppercase text-blue-500 underline"
            href="https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/"
            target="_blank"
          >
            polomorphic
          </a>{" "}
          component.
        </p>

        <p>
          In our case, for the sake of convenience, we have opted to use the{" "}
          <a
            className="font-bold text-blue-500 underline"
            href="https://www.radix-ui.com/docs/primitives/utilities/slot"
            target="_blank"
          >
            Slot
          </a>{" "}
          component from{" "}
          <a
            className="font-bold text-blue-500 underline"
            href="https://www.radix-ui.com/"
            target="_blank"
          >
            Radix UI
          </a>
          . This component provides a similar experience to the{" "}
          <a
            className="font-bold text-blue-500 underline"
            href="https://nextjs.org/docs/app/building-your-application/upgrading/codemods#new-link"
            target="_blank"
          >
            Link
          </a>{" "}
          component (legacyBehavior) in Next.js, giving you a familiar and
          seamless feel.
        </p>

        <p>
          Each typography variant has its default HTML tag. For example,{" "}
          <code>caption-1</code> renders as a <code>&lt;small&gt;</code> tag by
          default. If you wish to customize the rendered tag, you can achieve
          this by utilizing the <code>asChild</code> prop and specifying your
          desired HTML tag as its children, as demonstrated in the image below.
        </p>

        {/* <Image alt="Custom tag example" width={600} src={customTagExample} /> */}

        <p>
          Use your development tool to inspect the typography within the red
          border box
        </p>

        <div className="border border-solid border-red-500 p-2">
          <Typography asChild variant="caption-1">
            <span>Caption 1</span>
          </Typography>
        </div>
      </article>
    );
  },
};

export const Default: Story = {
  args: {
    asChild: false,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, adipisci aspernatur nemo natus odio et repudiandae omnis sit accusamus! Ut, harum consequuntur. Quisquam saepe officiis aperiam dignissimos quasi. Dignissimos, optio.",
    className: "",
    variant: "body-1",
    style: {},
  },
};
