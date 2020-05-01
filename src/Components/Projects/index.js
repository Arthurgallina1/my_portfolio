import React from "react";
import "./styles.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Projects() {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce='true'>
            <div className='project-container' id='projects'>
                <h2>FEATURED PROJECTS</h2>
                <div className='project-grid'>
                    <div className='project-card'>
                        <div className='img-box'>
                            <img
                                src=' https://api.adorable.io/avatars/250/abott@adorable.png'
                                alt=''
                            />
                        </div>
                        <div className='description-box'>
                            <a href='/'>Rate</a>
                            <p className='text-large'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos, distinctio?
                            </p>
                            <br />
                            <span>
                                <strong>Stack:</strong> React, Redux, MongoDB{" "}
                            </span>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div className='img-box'>
                            <img
                                src=' https://api.adorable.io/avatars/250/abott@adorable.png'
                                alt=''
                            />
                        </div>
                        <div className='description-box'>
                            <a href='/'>Covid Tracker</a>
                            <p className='text-large'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos, distinctio?
                            </p>
                            <br />
                            <span>
                                <strong>Stack:</strong> React, Redux, MongoDB{" "}
                            </span>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div className='img-box'>
                            <img
                                src=' https://api.adorable.io/avatars/250/abott@adorable.png'
                                alt=''
                            />
                        </div>
                        <div className='description-box'>
                            <a href='/'>Tindev</a>
                            <p className='text-large'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos, distinctio?
                            </p>
                            <br />
                            <span>
                                Stack: React, React Native, Node.js, MongoDB.{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
}
