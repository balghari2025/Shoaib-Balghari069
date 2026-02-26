import React, { useEffect, useRef } from "react";
import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";
import gsap from "gsap";

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const middleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(
      rightRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
    );
    gsap.fromTo(
      middleRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
    );
  }, []);

  return (
    <div name="About">
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl dark:text-white font-bold mb-4 text-gray-800 relative inline-block">
              <span className="bg-green-500 h-1 w-16 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 ">
            <div
  ref={leftRef}
  className="bg-white dark:bg-[#0b0f1a] dark:text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
>
  <div className="flex items-center mb-6">
    <div className="bg-green-100 p-3 rounded-full mr-4 dark:bg-[#061231] dark:text-white">
      <FaCode className="text-green-600 text-2xl" />
    </div>
    <h3 className="text-2xl font-semibold dark:text-white text-gray-800">
      Technical Expertise
    </h3>
  </div>

  <p className="text-gray-600 leading-relaxed dark:text-gray-300 mb-6">
    I build modern, scalable web applications using industry-standard
    technologies. My primary focus is full-stack development with clean UI,
    secure backend systems, and optimized performance.
  </p>

  <div className="flex flex-wrap gap-3 mb-6">
    {[
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
    ].map((skill) => (
      <span
        key={skill}
        className="bg-green-100 text-green-700 px-4 py-2 dark:bg-[#061231] dark:text-green-400 rounded-full text-sm font-medium transition hover:scale-105"
      >
        {skill}
      </span>
    ))}
  </div>

  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
    I focus on writing clean, maintainable code and delivering user-friendly
    interfaces that provide real business value.
  </p>
</div>
            <div className="space-y-8">
              {/* Education */}
              <div
                ref={rightRef}
                className="bg-white p-8  dark:bg-[#0b0f1a] dark:text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full dark:bg-[#061231] dark:text-white mr-4">
                    <FaGraduationCap className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl dark:text-white font-semibold text-gray-800">
                    Education
                  </h3>
                </div>
                <div className="pl-4 border-l-4 border-blue-200">
                  <p className="text-lg text-gray-700 mb-2 dark:text-white">
                    FSC (Computer Science)
                  </p>
                  <p className="text-lg text-gray-700 dark:text-white ">
                    Pursuing BSCS at University of Baltistan, Skardu
                  </p>
                </div>
              </div>
              <div
                ref={middleRef}
                className="bg-white  dark:bg-[#0b0f1a] dark:text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100  dark:bg-[#061231] dark:text-white p-3 rounded-full mr-4">
                    <FaLightbulb className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold dark:text-white text-gray-800">
                    My Motivation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-white leading-relaxed">
                  I thrive on transforming complex challenges into elegant
                  solutions. My drive comes from:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 dark:text-white text-gray-600">
                  <li>Continuous learning & professional growth</li>
                  <li>Creating impactful digital experiences</li>
                  <li>Optimizing processes through automation</li>
                  <li>Mentoring junior developers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
