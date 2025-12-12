import MaxWidthWrapper from "../MaxWidthWrapper";
import { ProjectsGallery } from "./ProjectsGallery";
import { TagBuildingThing } from "./TagBuildingThing";

export function Projects() {
  return (
    <section className="w-full relative z-50 bg-transparent py-30">
      <MaxWidthWrapper className="flex flex-col">
        <h1 className="text-4xl text-neutral-200 mb-8 font-array text-center md:text-left">
          PROJECTS
        </h1>

        <p className="md:max-w-md max-w-full leading-relaxed text-gray-400 font-medium text-center md:text-left">
          I'm a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </p>

        <div className="w-full h-px bg-gray-800 my-8 border-dashed border-neutral-600" />

        <TagBuildingThing />

        <ProjectsGallery />
      </MaxWidthWrapper>
    </section>
  );
}
