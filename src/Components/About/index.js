import React, { useState, useEffect } from "react";
import "./styles.scss";
import Carousel from "../Carousel";
import AboutInfo from "../AboutInfo";

import AboutPic from "../../assets/undraw_feeling_proud_qne1.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function About() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuerySmall = window.matchMedia("(max-width: 768px)");
        if (mediaQuerySmall.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }, []);

    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
            <div id='about' className='about-container'>
                <div className='about-box'>
                    <h1>ABOUT ME</h1>
                    <img src={AboutPic} alt='' width={250} />
                    <p>
                        <strong>Full Stack developer</strong> with 1+ year of
                        industry experience building applications.
                        <br />
                        BS in <strong>Computer Engineering</strong> from
                        Universidade Tecnológica Federal do Paraná (2019) and
                        International scholarship student at the State
                        University of New York at New Paltz (2015-16).
                        <br />I speak native portuguese, fluent{" "}
                        <strong>english</strong> and intermediate french.
                        <br />
                        <br />
                        Main interests <strong>enfolds</strong>: <br />• Web
                        Development
                        <br /> • Machine Learning
                        <br />• Chat Bots
                        <br />• Web Scraping
                        <br />• Agile Project Management
                    </p>
                </div>
                <div className='section-skills'>
                    {isSmallScreen ? <Carousel /> : <AboutInfo />}
                </div>
            </div>
        </ScrollAnimation>
    );
}
