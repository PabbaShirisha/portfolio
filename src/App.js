// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
// import Training from "./components/Training";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experiences/>
      <Contact />
      {/* <Training /> */}
    </>
  );
}

export default App;