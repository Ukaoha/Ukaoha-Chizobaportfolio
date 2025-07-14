import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link, Element } from "react-scroll";

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Ethnos",
      role: "Frontend Engineer",
      duration: "October 2024 - Present",
      shortDuration: "Oct 2024 - Present",
      details: [
        "Developed user-centric features to enhance functionality and user engagement.",
        "Optimized application performance, resulting in improved load times and responsiveness.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions aligned with business goals."
      ],
      img: "./ethnoslogo.png",
      links: 'https://ethnoscyber.com/'
    },
    {
      id: 2,
      company: "TM30 Global Ltd",
      role: "Frontend Developer",
      duration: "Feb 2023 - Oct 2024",
      shortDuration: "Feb 2023 - Oct 2024",
      details: [
        "Led the Frontend Development team of a Content Management System (CMS) with a cross-functional team of 4, increasing content management efficiency and scalability by 90%.",
        "Developed and maintained a ReactJS-based micro-finance bank application handling financial transactions, including bill payments for electricity, betting, and TV subscriptions, boosting organizational profit by 50%.",
        "Built and maintained an agency banking solution, enhancing efficiency, security, and responsiveness across devices."
      ],
      img: "./tm30.png",
      links: 'https://www.tm30.net/'
    },
    {
      id: 3,
      company: "Wildfire Bs Limited",
      role: "Frontend Engineer (Remote)",
      duration: "January 2023 - February 2024",
      shortDuration: "Jan 2023 - Feb 2024",
      details: [
        "Built scalable web applications to meet client requirements and improve user experience.",
        "Collaborated on innovative projects, contributing to the design and implementation of client-focused solutions."
      ],
      img: "./wildfireng.jfif",
      links: 'https://wildfire.ng/products/'
    },
    {
      id: 4,
      company: "Tidelab",
      role: "Frontend Developer",
      duration: "January 2022 - December 2022",
      shortDuration: "Jan 2022 - Dec 2022",
      details: [
        "Learned industry best practices, version control, and collaboration in a team environment under mentor supervision.",
        "Collaborated with developers to evaluate and improve existing designs, enhancing UI/UX.",
        "Assisted in developing reusable components and UI features using ReactJS.",
        "Participated in code reviews and gained experience with Agile development practices.",
        "Contributed to requirements gathering, UI design, and copywriting for various projects."
      ],
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
      shortDuration: "Apr 2022 - Dec 2023",
      img: "./altschool.png",
      links: 'https://altschoolafrica.com/'
    },
    {
      id: 2,
      school: "Nnamdi Azikiwe University",
      degree: "BSc Political Science",
      duration: "2018 - 2023",
      shortDuration: "2018 - 2023",
      img: "./unizik.png",
      links: 'https://unizik.edu.ng/'
    },
    {
      id: 3,
      school: "Udemy",
      degree: "The Complete JavaScript Course from Zero to Expert by Jonas Schmedtmann",
      duration: "6th Aug 2022",
      shortDuration: "Aug 2022",
      img: "./udemy.png",
      links: 'https://www.udemy.com/'
    },
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const ExperienceItem = ({ item, isEducation = false }) => (
    <div className="py-3 sm:py-4 cursor-pointer group transition-all duration-300 border-b border-gray-100 last:border-b-0">
      <div
        className="flex items-start gap-3 sm:gap-4"
        onClick={() => toggleExpand(item.id)}
      >
        {/* Mobile: Arrow on the left, Desktop: hidden */}
        <div className="flex-shrink-0 sm:hidden">
          <span
            className={`transform ${expanded === item.id ? "rotate-180" : "rotate-90"
              } transition-all duration-300 text-gray-600`}
          >
            <FiChevronDown className="w-4 h-4" />
          </span>
        </div>

        {/* Company/School Logo */}
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden p-1 flex-shrink-0">
          <a href={item?.links} target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <img
              src={item?.img}
              alt={isEducation ? item.school : item.company}
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold flex items-center">
                <span className="truncate pr-2">
                  {isEducation ? item.school : item.company}
                </span>
                {/* Desktop: Arrow on the right */}
                <span
                  className={`ml-auto transform ${expanded === item.id ? "rotate-180" : "rotate-90"
                    } hidden sm:block group-hover:opacity-100 opacity-0 transition-all duration-300 flex-shrink-0`}
                >
                  <FiChevronDown className="text-gray-600 w-5 h-5" />
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {isEducation ? item.degree : item.role}
              </p>
            </div>

            {/* Duration */}
            <div className="flex-shrink-0 sm:ml-4">
              <p className="text-gray-500 text-xs sm:text-sm font-medium">
                {/* Show short duration on mobile, full duration on desktop */}
                <span className="sm:hidden">{item?.shortDuration}</span>
                <span className="hidden sm:inline">{item?.duration}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      <div
        className={`mt-3 sm:mt-4 text-gray-600 overflow-hidden transition-all duration-500 ${expanded === item.id ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {item?.details && (
          <div className="ml-8 sm:ml-16 pr-2">
            {Array.isArray(item.details) ? (
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                {item.details.map((detail, index) => (
                  <li key={index} className="text-sm sm:text-base leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm sm:text-base leading-relaxed">{item.details}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-white">

      <div className="w-[90%] md:w-[60%] mx-auto px-4 pt-4">
        {/* Work Experience Section */}
        <Element name="experience" className="mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
            Work Experience
          </h1>
          <div className="space-y-2 sm:space-y-0">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} item={exp} />
            ))}
          </div>
        </Element>

        {/* Education Section */}
        <Element name="education">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
            Education
          </h1>
          <div className="space-y-2 sm:space-y-0">
            {education.map((edu) => (
              <ExperienceItem key={edu.id} item={edu} isEducation={true} />
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
};

export default WorkExperience;