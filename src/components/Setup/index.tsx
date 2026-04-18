import { getTranslations } from "next-intl/server";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { SetupGallery } from "./SetupGallery";
// import { TechAndTools } from "./TechAndTools";

export async function Setup() {
  const t = await getTranslations("Setup");

  return (
    <section className="w-full relative bg-transparent py-30">
      <MaxWidthWrapper>
        <h1 className="text-4xl text-neutral-200 mb-8 font-array text-center md:text-left">
          {t("pageTitle")}
        </h1>

        {/* <p className="text-neutral-400 text-center md:text-left">
          From canvas to terminal, these are the tools I rely on every day. A
          small, curated stack that helps me move from idea to shipped product
          with clarity and craft.
        </p> */}

        <SetupGallery />

        {/* <TechAndTools /> */}
      </MaxWidthWrapper>
    </section>
  );
}
