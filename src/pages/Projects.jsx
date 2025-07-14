import React from 'react';
import carmpus from '../assets/carmpus.png';
import { FaGlobe } from 'react-icons/fa';
import pan from '../assets/pan.png';
import castellum from '../assets/castellum.png';
import kc from '../assets/kc.png';
import up from '../assets/up.png';
import { Element } from 'react-scroll';
const Projects = () => {
  return (
    <Element name="projects" className="bg-white py-10 px-5 md:px-20 lg:px-24">
      <div className="">
        <div className="text-center w-[90%] lg:w-[60%] mx-auto mb-10">
          <h1 className="text-lg font-bold mb-4 bg-black text-white">My Projects</h1>
          <h2 className="text-4xl font-bold mb-4">Check out my latest work</h2>
          <p className="text-gray-600 mb-8">
            I've worked on a variety of projects, either on contract, or in my leisure. From simple
            websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {/* Project 1 */}
          <div className="border rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('scale-110')}>
            <img src={carmpus} alt="Carmpus project screenshot" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Carmpus</h3>
              <p className="text-gray-600 text-xs mb-4">
                Carmpus is a platform designed for students to learn and share knowledge, offering access to courses taught by top tutors globally.
                It aims to empower education, particularly for underserved communities
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">Next.js</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">TypeScript</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">Evergreen</span>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href="https://carmpus.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline text-sm font-semibold flex items-center bg-black px-3 py-1 rounded"
                >
                  <FaGlobe className="mr-2" /> Website
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('scale-110')}>
            <img src={pan} alt="Pan Africa project screenshot" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Pan Africa Towers</h3>
              <p className="text-gray-600 mb-4 text-xs">
                Pan African Towers Limited is Nigeria's largest indigenous telecom tower infrastructure provider,
                Offering mobile broadband and wireless service across Africa
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">React</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">TypeScript</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">Tailwind</span>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href="https://panafricantowers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline text-sm font-semibold flex items-center bg-black px-3 py-1 rounded"
                >
                  <FaGlobe className="mr-2" /> Website
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('scale-110')}>
            <img src={castellum} alt="Castellum project screenshot" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Castellum</h3>
              <p className="text-gray-600 mb-4 text-xs">
                Castellum is a cybersecurity awareness platform that provides training and resources to
                help individuals and organizations protect themselves against cyber threats.
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">React</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">Redux</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">Tailwind</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">JavaScript</span>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href="https://www.mycastellum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline text-sm font-semibold flex items-center bg-black px-3 py-1 rounded"
                >
                  <FaGlobe className="mr-2" /> Website
                </a>
              </div>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('scale-110')}>
            <img src={kc} alt="KCMB project screenshot" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">KCFMB</h3>
              <p className="text-gray-600 mb-4 text-sm">
                KCFMB is a micro finance application that performs all banking transactions
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">React</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">TypeScript</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">Redux</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">React Query</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">SASS</span>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href="https://ibank.kcmfb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline text-sm font-semibold flex items-center bg-black px-3 py-1 rounded"
                >
                  <FaGlobe className="mr-2" /> Website
                </a>
              </div>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle('scale-110')}>
            <img src={up} alt="Pan Africa project screenshot" className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Unified Payment</h3>
              <p className="text-gray-600 mb-4 text-xs">
                Focused on providing payment solutions for businesses and individuals in Africa, it aims to simplify transactions, fuel commerce, drive growth, and support individual success through innovative payment systems
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">React</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">JavaScript</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">CSS</span>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href="https://up-ng.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline text-sm font-semibold flex items-center bg-black px-3 py-1 rounded"
                >
                  <FaGlobe className="mr-2" /> Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
  .scale-110 {
    transform: scale(1.1) !important;
    z-index: 10;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`}</style>
      </div>
    </Element>

  );
};

export default Projects;
