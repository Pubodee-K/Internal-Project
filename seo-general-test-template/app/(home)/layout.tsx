import { Container } from "@/app/front-end/components/container";
import { HeadingBar } from "@/app/front-end/components/heading-bar";


import type { ReactNode } from "react";

export default function Layout({
  specialCookingKits,
}: {
  specialCookingKits: ReactNode;
}) {
  return (
    <main className="bg-cream-500">

      {/* Section: Special Cooking Kits */}
      <section className="mt-6 pb-7 lg:mt-8 lg:pb-36">
        <Container>
          <HeadingBar
            highlightText={'testing'}
            title={'All Projects'}
          />
          {specialCookingKits}
        </Container>
      </section>
    </main>
  );
}
