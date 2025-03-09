import React from "react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tech Solutions",
    duration: "Jan 2023 - Present",
    description: "Developed interactive UI components using React, Tailwind CSS, and Material-UI.",
    technologies: ["React", "Tailwind", "Material-UI"],
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Code Innovators",
    duration: "Jul 2022 - Dec 2022",
    description: "Designed and optimized REST APIs with Node.js, Express, and MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "XYZ Software",
    duration: "Mar 2022 - Jun 2022",
    description: "Worked on bug fixes, testing, and developing small features in a team setting.",
    technologies: ["JavaScript", "Git", "Agile"],
  },
];

function Experience() {
  return (
    <div name = "Experience" className="max-w-screen-xl mx-auto px-4 md:px-20 mt-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl dark:text-white font-bold text-gray-800 relative inline-block">
          Experience
          <span className="bg-blue-500 h-1 w-16 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
        </h2>
        <p className="mt-3 dark:text-white text-lg text-gray-600">My professional work experience</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="flex items-start gap-6">
            {/* Timeline Indicator */}
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full mt-1.5"></div>
              {index !== experiences.length - 1 && (
                <div className="w-1 bg-blue-500 h-full absolute left-1.5 top-6"></div>
              )}
            </div>

            {/* Experience Card */}
            <div className="bg-white shadow-md  dark:bg-[#0b0f1a] dark:text-white p-6 rounded-lg w-full transition-transform transform hover:scale-105">
              <h3 className="text-xl dark:text-white font-semibold text-gray-800">{exp.role}</h3>
              <p className="text-gray-600 dark:text-white font-medium">{exp.company}</p>
              <span className="text-sm dark:text-white text-gray-500">{exp.duration}</span>
              <p className="mt-3 dark:text-white text-gray-700">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 dark:bg-[#061231] dark:text-white bg-gray-200 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
