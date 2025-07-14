import React from "react";
import { FaBriefcase, FaEdit, FaHammer, FaLinkedin, FaPen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiBriefcase, FiCode, FiGithub, FiHome, FiLinkedin } from "react-icons/fi";
import { Link, Element } from "react-scroll";
import { Tooltip as ReactTooltip } from "react-tooltip";



const Navbar = () => {
    return (
        <>
        
        <div className="fixed bottom-8 left-0 right-0 w-[70%] sm:w-[25%] mx-auto bg-white text-black flex  justify-center items-center  py-2 rounded-full shadow-lg space-x-2">
              <Link
                to="about"
                smooth={true}
                className="relative group"
                data-tooltip-id="tooltip"
                data-tooltip-content="Home"
              >
                <FiHome className="text-3xl  transition duration-300 transform group-hover:scale-110 group-hover:bg-gray-100 group-hover:rounded-full p-2" />
              </Link>
              <Link
                to="experience"
                smooth={true}
                className="relative group"
                data-tooltip-id="tooltip"
                data-tooltip-content="Experience"
              >
                <FiBriefcase className="text-3xl  transition duration-300 transform group-hover:scale-110 group-hover:bg-gray-100 group-hover:rounded-full p-2" />
              </Link>
              <Link
                to="skills"
                smooth={true}
                className="relative group"
                data-tooltip-id="tooltip"
                data-tooltip-content="Skills"
              >
                <FaHammer className="text-3xl  transition duration-300 transform group-hover:scale-110 group-hover:bg-gray-100 group-hover:rounded-full p-2" />
              </Link>
              <Link
                to="projects"
                smooth={true}
                className="relative group"
                data-tooltip-id="tooltip"
                data-tooltip-content="Projects"
              >
                <FiCode className="text-3xl  transition duration-300 transform group-hover:scale-110 group-hover:bg-gray-100 group-hover:rounded-full p-2" />
              </Link>
              <Link
                to="github"
                smooth={true}
                className="relative group"
                data-tooltip-id="tooltip"
                data-tooltip-content="GitHub"
              >
                <FaGithub className="text-3xl  transition duration-300 transform group-hover:scale-110 group-hover:bg-gray-100 group-hover:rounded-full p-2" />
              </Link>
              <Link
                to="linkedin"
                smooth={true}
                className="relative group"
                data-tooltip-id="tooltip"
                data-tooltip-content="LinkedIn"
              >
                <FaLinkedin className="text-3xl  transition duration-300 transform group-hover:scale-110 group-hover:bg-gray-100 group-hover:rounded-full p-2" />
              </Link>
              <Link
                to="article"
                smooth={true}
                className="relative group"
                data-tooltip-id="tooltip"
                data-tooltip-content="Articles"
              >
                <FaEdit className="text-3xl  transition duration-300 transform group-hover:scale-110 group-hover:bg-gray-100 group-hover:rounded-full p-2" />
              </Link>
              <ReactTooltip id="tooltip" />
            </div>
        </>
    )
}
export default Navbar;