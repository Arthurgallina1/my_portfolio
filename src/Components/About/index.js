import React from "react";
import "./styles.scss";
import Carousel from "../Carousel";
import { MdCode } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GoTools } from "react-icons/go";
import AboutPic from "../../assets/undraw_feeling_proud_qne1.svg";

export default function About() {
    return (
        <div className='about-container'>
            <div className='about-box'>
                <h1>ABOUT ME</h1>
                <img src={AboutPic} alt='' width={250} />
                <p>
                    Full Stack developer with 1+ year of industry experience
                    building applications. BS in Computer Engineering from
                    Universidade Tecnológica Federal do Paraná (2019).
                    International scholarship student at the State University of
                    New York at New Paltz (2015-16). Native portuguese, fluent
                    english and intermediate french.
                </p>
            </div>
            <div className='section-skills'>
                <Carousel />
            </div>
        </div>
    );
}
