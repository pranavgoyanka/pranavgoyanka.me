import { AllProjecs } from "../data/AllProjects";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-3xl font-bold text-center mt-4 section-title">Projects</h1>
      <ul className="ml-4 mt-2">
        {AllProjecs.map((project) => (
          <li className="mb-2 list-disc text-justify">
            {project.url.length > 0 ? (
              <a href={project.url} className="underline font-semibold">
                {project.title}
              </a>
            ) : (
              <span className="font-semibold">{project.title}</span>
            )}

            <span className="font-thin ">
              {" "}
              {project.tags.length > 0 ? " • " + project.tags : ""}
            </span>
            <br />
            <span className="font-light"> {project.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
