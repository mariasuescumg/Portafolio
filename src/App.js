import React from "react";
import { Header } from "./Component/Layaout/Header";
import { Redes } from "./Component/Landing/Redes";
import { Home } from "./Component/Landing/Home";
import { About } from "./Component/Landing/About";
import { Skill } from "./Component/Landing/Skill";
import { Portfolio } from "./Component/Landing/Portfolio";
import { Contact } from "./Component/Landing/Contact";
import "./sass/index.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="d-flex">
        <div>
          <Redes />
        </div>
        <div>
          <Home />
          <About />
          <Skill />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
