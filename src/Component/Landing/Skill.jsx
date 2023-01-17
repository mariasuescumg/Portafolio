import React from "react";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import javascript from "../../assets/image/javascript.png";
import react from "../../assets/image/react.png";
import figma from "../../assets/image/figma.png";
import git from "../../assets/image/git.png";
import github from "../../assets/image/github.png";
import sass from "../../assets/image/sass.png";
import visual from "../../assets/image/visualstudio.png";
import responsive from "../../assets/image/responsive.png";
import wpss from "../../assets/image/worpress.png";
import canva from "../../assets/image/canva.png";
import trello from "../../assets/image/trello.png";
import bst from "../../assets/image/bootstrap.png";

export const Skill = () => {
  return (
    <>
      <div className="skills">
        <h1>SKILLS & TOOLS</h1>

        <p>
          The skills, tools and technologies I use to bring your products to
          life:
        </p>

        <div className="skills-img">
          <div >
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={react} alt="react" />
            <img src={figma} alt="figma" />
            <img src={git} alt="git" />
            <img src={github} alt="github" />
            <div>
              <img src={sass} alt="sass" />
              <img src={visual} alt="visual" />
              <img src={responsive} alt="responsive" />
              <img src={wpss} alt="worpress" />
              <img src={canva} alt="canva" />
              <img src={trello} alt="trello" />
              <img src={bst} alt="bst" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
