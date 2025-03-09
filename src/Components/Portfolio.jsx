import React from "react";
import python from "../Pic/python.png";
import nodejs from "../Pic/nodejs.png";
import server from "../Pic/server.png";
import react from "../Pic/react.png";
import cplus from "../Pic/cplus.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      img: python,
      name: "Python Project",
      description: "A robust Python-based application using Django and React.",
      link: "https://temp-contverter.netlify.app/",
      tech: ["Python", "Django", "React"],
    },
    {
      id: 2,
      img: nodejs,
      name: "NodeJS Project",
      description: "A scalable Node.js project with Express and React integration.",
      link: "https://charac-counter.netlify.app/",
      tech: ["NodeJS", "Express", "React"],
    },
    {
      id: 3,
      img: server,
      name: "Server Project",
      description: "An efficient backend server setup for web applications.",
      link: "https://rand-img.netlify.app/",
      tech: ["NodeJS", "Express", "React"],
    },
    {
      id: 4,
      img: react,
      name: "React Project",
      description: "A modern React app using Material-UI and React Router.",
      link: "https://back-changer.netlify.app/",
      tech: ["React", "React Router", "Material-UI"],
    },
    {
      id: 5,
      img: cplus,
      name: "C++ Project",
      description: "A high-performance C++ project with SDL and OpenGL.",
      link: "https://icon-trace.netlify.app/",
      tech: ["C++", "SDL", "OpenGL"],
    },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl  container mx-auto px-4 md:px-20 mt-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold dark:text-white text-gray-800 relative inline-block">
          PortFolio
          <span className="bg-green-500 h-1 w-16 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
        </h2>
        <p className="mt-3 text-lg dark:text-white text-gray-600">Showcasing my recent projects</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg dark:bg-[#0b0f1a] dark:text-white overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="items-center ">
            <img src={project.img} alt={project.name} className="w-20 h-20 ml-6" />
            </div>
            <div className="p-5">
              <h3 className="text-xl dark:text-white font-semibold text-gray-800">{project.name}</h3>
              <p className="text-gray-600 dark:text-white mt-2">{project.description}</p>
              <div className="mt-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="mr-2 px-3 py-1 dark:bg-[#061231] dark:text-white bg-gray-200 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
