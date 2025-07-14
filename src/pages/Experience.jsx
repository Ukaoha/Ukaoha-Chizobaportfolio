
import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Link, Element } from "react-scroll";

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Ethnos",
      role: "Frontend Engineer",
      duration: "October 2024 - Present",
      details:
        "Developed user-centric features, optimized performance, and collaborated with cross-functional teams to deliver high-quality software solutions.",
      img: "./ethnoslogo.png",
      links: 'https://ethnoscyber.com/'
    },
    {
      id: 2,
      company: "tm30",
      role: "Frontend Engineer",
      duration: "Feb 2023 - October 2024",
      details:
        "Led frontend development, improved design systems, and ensured seamless API integration for enhanced user experiences.",
      img: "./tm30.png",
      links: 'https://www.tm30.net/'

    },
    {
      id: 3,
      company: "Wildfire Bs Limited",
      role: "Frontend Engineer(Remote)",
      duration: "Janaury 2023 - Febauary 2024",
      details:
        "Built scalable web applications and collaborated on innovative projects that addressed client needs effectively.",
        img: "./wildfireng.jfif",
        links: 'https://wildfire.ng/products/'


    },
    {
      id: 4,
      company: "Tiidelab Intiative",
      role: "Student Intern",
      duration: "Janaury 2022 - Dec 2022",
      details:
        "Built scalable web applications and collaborated on innovative projects that addressed client needs effectively.",
        img: "./logo-dark.webp",
        links: 'https://www.tiidelab.org/'

    },
    
    
  ];


  const education = [
    {
      id: 1,
      school: "Altschool Africa",
      degree: "Diploma in Software Engineering",
      duration: "April 2022 - Dec 2023",
      img: "./altschool.png",
      links: 'https://ethnoscyber.com/'
    },
    {
      id: 2,
      school: "Nnamdi Azikiwe University",
      degree: "Bsc Political Science",
      duration: "2018  - 2023",
      img: "./unizik.png",
      links: 'https://www.tm30.net/'

    },
    {
      id: 3,
      school:'Udemy',
      degree: "The Complete JavaScipt Course from zere to expert by Jonas Schmedtmann",
      duration: "6th Aug 2022",
        img: "./udemy.png",
        links: 'https://wildfire.ng/products/'


    },

    
  ];
  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <Element
      name="experience"
      className="min-h-screen bg-white w-[90%] md:w-[60%] mx-auto px-4 pt-4"
    >
      <h1 className="text-xl font-bold mb-4">Work Experience</h1>
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className=" py-1 cursor-pointer group transition-all duration-300"
        >
          <div
            className="flex justify-between items-center"
            onClick={() => toggleExpand(exp.id)}
          >
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-gray-100 mr-4 flex items-center justify-center overflow-hidden p-1">
              <a href={exp?.links} target="_blank" rel="noopener noreferrer">
              <img
                  src={exp?.img}
                  alt={exp.company}
                />
                </a>
              </div>

              <div>
                <h2 className="text-xl font-semibold flex items-center">
                  {exp.company}
                  <span
                    className={` ml-2 transform ${expanded === exp.id ? "rotate-180" : "rotate-90"
                      } group-hover:opacity-100 opacity-0 transition-all duration-300`}

                  >
                    {/* ▼ */}
                    <FiChevronUp className="text-gray-600" />

                  </span>



                </h2>
                <p className="text-gray-600">{exp.role}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{exp.duration}</p>
          </div>
          <div
            className={`mt-4 text-gray-600 overflow-hidden transition-all duration-500 ${expanded === exp.id ? "max-h-screen" : "max-h-0"
              }`}
          >
            {exp.details}
          </div>
        </div>
      ))}


      <section className="mt-10">
      <h1 className="text-xl font-bold mb-2">Education</h1>
      {education.map((exp) => (
        <div
          key={exp.id}
          className=" py-1 cursor-pointer group transition-all duration-300"
        >
          <div
            className="flex justify-between items-center"
            onClick={() => toggleExpand(exp.id)}
          >
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-gray-100 mr-4 flex items-center justify-center overflow-hidden p-1">
              <a href={exp?.links} target="_blank" rel="noopener noreferrer">
              <img
                  src={exp?.img}
                  alt={exp.company}
                />
                </a>
              </div>

              <div>
                <h2 className="text-xl font-semibold flex items-center">
                  {exp.school}
                  <span
                    className={` ml-2 transform ${expanded === exp.id ? "rotate-180" : "rotate-90"
                      } group-hover:opacity-100 opacity-0 transition-all duration-300`}

                  >
                    {/* ▼ */}
                    <FiChevronUp className="text-gray-600" />

                  </span>



                </h2>
                <p className="text-gray-600">{exp.degree}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{exp?.duration}</p>
          </div>
          <div
            className={`mt-4 text-gray-600 overflow-hidden transition-all duration-500 ${expanded === exp.id ? "max-h-screen" : "max-h-0"
              }`}
          >
            {exp?.details}
          </div>
        </div>
      ))}


      </section>
    </Element>
  );
};

export default WorkExperience;
