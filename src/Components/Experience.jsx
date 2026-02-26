import React from "react";
const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Digital Empowerment Network",
    duration: "2024",
    description:
      "Completed a hands-on internship focused on modern frontend development. Built responsive user interfaces, improved UI/UX, and worked on real-world web projects using React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Git"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Personal E-Commerce Project",
    duration: "2025",
    description:
      "Developed a fully functional e-commerce web application with authentication, product management, cart system, and order handling. Implemented responsive design and secure backend APIs.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Ongoing",
    description:
      "Building modern web applications and portfolio projects, focusing on clean UI design, performance optimization, and scalable backend systems.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "REST APIs"],
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
