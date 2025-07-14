import React from "react";
import { Element } from "react-scroll";

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Typescript",
    "Node.js",
    "React",
    "React query",
    'Redux',
    "Next.js",
    "GraphQL",
    "MaterialUI",
    "Tailwind CSS",
    "ChakraUI",
    "Shadcn",
    "Firebase",
    "Git",
    "MySQL",
    "MongoDB",
    "Shopify",
    "Wordpress",
    "PHP",
    "Restful API"
  ];

  return (


    <Element name="skills" className="bg-white  w-[90%] md:w-[60%] mx-auto px-4 pt-4 pb-10">
      <div className="flex flex-col py-8">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-start gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-black text-white text-sm rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Element>


  );
};

export default Skills;
