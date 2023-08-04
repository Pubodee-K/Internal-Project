import { LinkLogo } from "@/app/front-end/components/link-logo";

import * as Header from "./index";

import type { Meta, StoryObj } from "@storybook/react";
import ButtonNextLink from "@/app/front-end/components/button/ButtonNextLink";

const meta: Meta<typeof Header.Root> = {
  component: Header.Root,
  parameters: {
    layout: "fullscreen",
  },
  title: "Layouts/Header",
};

export default meta;

type Story = StoryObj<typeof Header.Root>;

function ExampleHeader() {
  return (
    <Header.Root>
      <Header.Menu>
        <LinkLogo href="/" />
      </Header.Menu>
      <Header.Submenu>
        <div className="h-9.5 w-full rounded-full bg-black-400" />
      </Header.Submenu>
    </Header.Root>
  );
}

function ExampleFullHeader() {
  return(
    <Header.Root>
          <Header.Menu>
            <Header.Logo href={`/`} />
            <Header.SearchField className="hidden lg:ml-22.5 lg:mr-8 lg:block lg:max-w-[460px] lg:flex-1" />
            <Header.MenuWrapper>
              <ButtonNextLink
                className="hidden lg:mx-3.5 lg:inline-flex lg:shrink-0 lg:px-2"
                href={`/`} // TODO: change this when implement login/register page
              >
                <i className="ri-add-fill text-base leading-none" />
                {/* TODO: after login, display the username  */}
                <span>{'Add Project'}</span>
              </ButtonNextLink>
            </Header.MenuWrapper>
          </Header.Menu>
    </Header.Root>
  )
}

export const Default: Story = {
  render() {
    return <ExampleHeader />;
  },
};

export const FullDefault: Story = {
  render() {
    return <ExampleFullHeader />;
  },
};
