import React from "react";
import "./styles.scss";

export default function Projects() {
    return (
        <div className='project-container'>
            <h2>FEATURED PROJECTS</h2>
            <div className='project-grid'>
                <div className='project-card'>
                    <div className='img-box'>
                        <img
                            src=' https://api.adorable.io/avatars/250/abott@adorable.png
'
                            alt=''
                        />
                    </div>
                    <div className='description-box'>
                        <a href='/'>Rate</a>
                        <p className='text-large'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, distinctio?
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
                            src=' https://api.adorable.io/avatars/250/abott@adorable.png
'
                            alt=''
                        />
                    </div>
                    <div className='description-box'>
                        <a href='/'>Rate</a>
                        <p className='text-large'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, distinctio?
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
                            src=' https://api.adorable.io/avatars/250/abott@adorable.png
'
                            alt=''
                        />
                    </div>
                    <div className='description-box'>
                        <a href='/'>Rate</a>
                        <p className='text-large'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, distinctio?
                        </p>
                        <br />
                        <span>Stack: bla bla bla </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
