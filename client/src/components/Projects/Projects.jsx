import React from "react";
import { FaReact, FaFigma, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiRedux, SiMongodb, SiAngular, SiCss3 } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Sarafan Collection",
    description:
      "Sarafan Collection is an online store for trendy dresses, built using React for the frontend and Bootstrap for responsive design.  It integrates Figma for design and uses MongoDB with Mongoose to store product data and user information.",
    image: "dressP.png",
    github: "https://github.com/MariaZhbadynska/dresses",
    tools: [
      <FaReact />,
      <FaFigma />,
      <FaBootstrap />,
      <FaDatabase />,
      <SiRedux />,
      <SiMongodb />,
    ],
  },
  {
    id: 2,
    title: "Car Projects",
    description:
      "A task management application created with Angular, Bootstrap, and Figma for the user interface design. This app is powered by Redux for state management and MongoDB with Mongoose for database management.",
    image: "carP.png",
    github: "https://github.com/MariaZhbadynska/carProject",
    tools: [
      <SiAngular />,
      <FaFigma />,
      <FaBootstrap />,
      <FaDatabase />,
      <SiRedux />,
      <SiMongodb />,
      <SiCss3 />,
    ],
  },
];

const Projects = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">My Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.id}>
            <div className="card h-100 shadow-lg border-0">
              <img
                src={project.image}
                className="card-img-top img-fluid"
                alt={project.title}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold">
                  {project.title}
                </h5>
                <p className="card-text text-center">{project.description}</p>
                <div className="d-flex justify-content-center gap-2 mb-3">
                  {project.tools.map((icon, index) => (
                    <span key={index} className="fs-4 text-primary">
                      {icon}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#0d6efd",
                    borderColor: "#0d6efd",
                    borderRadius: "30px",
                  }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
