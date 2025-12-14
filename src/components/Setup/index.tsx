import MaxWidthWrapper from "../MaxWidthWrapper";
import { SetupGallery } from "./SetupGallery";
import { TechAndTools } from "./TechAndTools";

export function Setup() {
  return (
    <section className="w-full relative bg-transparent py-30">
      <MaxWidthWrapper>
        <h1 className="text-4xl text-neutral-200 mb-8 font-array text-center md:text-left">
          How I Build — Setup, Tech & Tools
        </h1>

        <p className="text-neutral-400 text-center md:text-left">
          From canvas to terminal, these are the tools I rely on every day. A
          small, curated stack that helps me move from idea to shipped product
          with clarity and craft.
        </p>

        <SetupGallery />

        <TechAndTools />
      </MaxWidthWrapper>
    </section>
  );
}
