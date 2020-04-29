import React from "react";
import { MdCode } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GoTools } from "react-icons/go";

export default function AboutInfo() {
    return (
        <>
            <div className='front-col'>
                <MdCode size={44} color={"#7510f7"} />
                <h2>Front-end</h2>
                <p>I enjoy building elegant applications.</p>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React Native</li>
                    <li>CSS/SASS</li>
                </ul>
            </div>
            <div className='front-col'>
                <FiDatabase size={44} color={"#7510f7"} />
                <h2>Back-end</h2>
                <p>A robust backend is essential.</p>

                <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Postgres</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className='front-col'>
                <GoTools size={44} color={"#7510f7"} />
                <h2>Tools</h2>
                <p>Tools that help get the job done.</p>
                <ul>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </>
    );
}
