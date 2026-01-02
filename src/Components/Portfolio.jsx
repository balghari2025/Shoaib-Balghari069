import React from "react";

import python from "../assets/python.png";
import nodejs from "../assets/nodejs.png";
import server from "../assets/server.png";
import react from "../assets/react.png";
import cplus from "../assets/cplus.png";
import img from "../assets/ecommerce.png";
import bg from "../assets/bg_changer.png";
import counter from "../assets/counter.png";
import faceRecognition from "../assets/face_recognition.png";
import game from "../assets/game.png";
import cc from "../assets/cc.png";

function Portfolio() {
  const projects = [
    {
      id: 1,
      img: game,
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
      img: faceRecognition,
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
      img: cc,
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
  <div
    name="Portfolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
  >
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold dark:text-white text-gray-800 relative inline-block">
        Portfolio
        <span className="bg-green-500 h-1 w-16 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
      </h2>
      <p className="mt-3 text-lg dark:text-white text-gray-600">
        Showcasing my recent projects
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-[#0b0f1a] dark:text-white shadow-md rounded-xl overflow-hidden
          flex flex-col h-full transition-transform hover:scale-[1.02]"
        >
          {/* Image */}
          <div className="flex justify-center mt-4">
            <img
              src={project.img}
              alt={project.name}
              className="w-64 h-40 object-cover rounded-md"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {project.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full
                  bg-gray-200 text-gray-700
                  dark:bg-[#061231] dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-500 text-white py-2 rounded-lg
                hover:bg-green-600 transition"
              >
                Visit Project
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-500 text-white py-2 rounded-lg
                hover:bg-gray-600 transition"
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