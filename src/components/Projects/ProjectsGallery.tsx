import { getTranslations } from "next-intl/server";
import { ProjectCard } from "./ProjectCard";

type ProjectFromMessages = {
  year: number;
  name: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

export async function ProjectsGallery() {
  const t = await getTranslations("Projects");
  const projects = t.raw("projects") as ProjectFromMessages[];
  const liveSite = t("liveSite");

  return (
    <div className="bg-transparent w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} liveSite={liveSite} />
      ))}
    </div>
  );
}
