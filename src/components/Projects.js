import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
function Projects() {
  return (
    <div id="projects">
      <div className="flex flex-col items-center text-center">
        <CodeIcon className="w-10 mb-3 m-5" />
        <h1 className="text-3xl text-white mb-3">Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          laudantium.
        </p>
      </div>
      <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
    </div>
  );
}
export default Projects;
