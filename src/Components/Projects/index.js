import React from "react";
import "./styles.scss";

export default function Projects() {
    return (
        <div className='project-container'>
            <h2>FEATURED PROJECTS</h2>

            <div className='project-grid'>
                <div className='project-card'>
                    <div className='img-box'></div>
                    <div className='description-box'>
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, distinctio?
                        </p>
                        <span>Stack: bla bla bla </span>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='img-box'></div>
                    <div className='description-box'>
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, distinctio?
                        </p>
                        <span>Stack: bla bla bla </span>
                    </div>
                </div>
                <div className='project-card'>
                    <div className='img-box'></div>
                    <div className='description-box'>
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, distinctio?
                        </p>
                        <span>Stack: bla bla bla </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
