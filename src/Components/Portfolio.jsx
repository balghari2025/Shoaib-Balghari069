import React from "react";
import python from "../Pic/python.png";
import nodejs from "../Pic/nodejs.png";
import server from "../Pic/server.png";
import react from "../Pic/react.png";
import cplus from "../Pic/cplus.png";
import img from "../Pic/ecommerce.png";
import bg from "../Pic/Bg_changer.png";
import counter from "../Pic/counter.png";
import FaceRecongnition from "../Pic/FaceRecongnition.png";
import Game from "../Pic/Game.png";
import CC from "../Pic/CC.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      img: Game,
      name: "Typing Game",
      description: "A typing game desktop application using Python, pygame, and tkinter.",
      link: "https://github.com/balghari2025/TypingGame.git",
      tech: ["Python", "pygame", "tkinter"],
    },
    {
      id: 2,
      img: counter ,
      name: "Character Counter",
      description: "A simple character counter web application using HTML, CSS, and JavaScript.",
      link: "https://charac-counter.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      img: FaceRecongnition,
      name: "Face Recognition ",
      description: "A face recognition desktop application using Python, OpenCV, and tkinter.",
      link: "https://github.com/balghari2025/Face-Recognition.git/",
      tech: ["Python", "OpenCV", "tkinter"],
    },
    {
      id: 4,
      img: bg,
      name: "Background Changer Project",
      description: "A modern React app using Material-UI and React Router.",
      link: "https://back-changer.netlify.app/",
      tech: ["React", "React Router"],
    },
    {
      id: 5,
      img: CC,
      name: "SkyDanger Coming Soon",
      description: "A high-performance C++ project with SDL and OpenGL.",
      link: "https://icon-trace.netlify.app/",
      tech: ["C++", "SDL", "OpenGL"],
    },
    {
      id: 6,
      img: img,
      name: "E-Commerce Project",
      description: "A high-performance E-Commerce project with React and Material-UI.",
      link: "https://alshifa-store.netlify.app/",
      tech: ["React", "React Router"],
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
            <img src={project.img} alt={project.name} className="w-60 h-40 ml-4 rounded-md mt-1" />
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
              <div className="flex justify-between">
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-500 text-white px-2 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Visit Project
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gray-500 text-white px-2 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Source Code
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
