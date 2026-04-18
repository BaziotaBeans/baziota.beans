import { getTranslations } from "next-intl/server";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ProjectsGallery } from "./ProjectsGallery";
import { TagBuildingThing } from "./TagBuildingThing";

export async function Projects() {
  const t = await getTranslations("Projects");

  return (
    <section className="w-full relative z-50 bg-transparent py-30">
      <MaxWidthWrapper className="flex flex-col">
        <h1 className="text-4xl text-neutral-200 mb-8 font-array text-center md:text-left">
          {t("title")}
        </h1>

        <p className="md:max-w-md max-w-full leading-relaxed text-gray-400 font-medium text-center md:text-left">
          {t("description")}
        </p>

        <div className="w-full h-px bg-gray-800 my-8 border-dashed border-neutral-600" />

        <TagBuildingThing label={t("tagBuilding")} />

        <ProjectsGallery />
      </MaxWidthWrapper>
    </section>
  );
}
