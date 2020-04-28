import React from "react";
import "./styles.scss";
import Carousel from "../Carousel";
import { MdCode } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GoTools } from "react-icons/go";
import AboutPic from "../../assets/undraw_feeling_proud_qne1.svg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>ABOUT ME</h1>
        <img src={AboutPic} alt="" width={250} />
        <p>
          Full Stack developer with 1+ year of industry experience building
          applications. BS in Computer Engineering from Universidade Tecnológica
          Federal do Paraná (2019). International scholarship student at the
          State University of New York at New Paltz (2015-16). Native
          portuguese, fluent english and intermediate french.
        </p>
      </div>
      <div className="section-skills">
        <div className="front-col">
          <MdCode size={44} color={"#7510f7"} />
          <h2>Front-end</h2>
          <p>I enjoy building elegant applications.</p>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>CSS/SASS</li>
          </ul>
        </div>
        <div className="front-col">
          <FiDatabase size={44} color={"#7510f7"} />
          <h2>Back-end</h2>
          <p>A robust backend is essential.</p>

          <ul>
            <li>Node.js</li>
            <li>PHP</li>
            <li>Postgres</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="front-col">
          <GoTools size={44} color={"#7510f7"} />
          <h2>Tools</h2>
          <p>Tools that help get the job done.</p>
          <ul>
            <li>Git</li>
            <li>AWS</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
