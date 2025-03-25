import React from "react";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Projects from "./components/Projects/index";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App