

import React from "react";
import { Link, Element } from "react-scroll";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import WorkExperience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <div className="font-sans">
      {/* Sections */}
      <div>
        <About />
      </div>
      <div>
        <WorkExperience />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>

      <div>
        <Articles />
      </div>





      <Navbar />



    </div>
  );
};

export default App;
