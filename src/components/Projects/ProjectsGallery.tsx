import data from "@/data/projects.json";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGallery() {
  return (
    <div className="bg-transparent w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {data.projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
