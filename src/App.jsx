import React from "react";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import About from "./pages/About";

const App = () => {
  return (
    <div className="overflow-hidden bg-black">
      <HomePage />
      <Skills />
      <ContactMe />
      <About />
    </div>
  );
};

export default App;
