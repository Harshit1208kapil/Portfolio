import React from "react";
import projects from "../../data/project.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="mt-20 mx-6 sm:mx-16 lg:mx-32 text-white" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase">Projects</h2>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4 w-full">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
