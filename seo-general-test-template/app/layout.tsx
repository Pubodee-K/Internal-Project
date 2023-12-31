// 3rd party css import
import "remixicon/fonts/remixicon.css";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import * as Header from "@/app/front-end/layouts/header";
import { ButtonNextLink } from "@/app/front-end/components/button";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trienpont International - We create software solutions for business',
  description: 'Trienpont International - Internal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        {children}</body>
    </html>
  )
}
