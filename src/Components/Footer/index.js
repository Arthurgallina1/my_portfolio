import React from "react";
import "./styles.scss";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='msg-box'>
                <h3>Let's Work Together</h3>
                <h4>Have a project you'd like to discuss?</h4>
                <button className='footer-main-box__button large'>
                    Get in touch
                </button>
            </div>
            <div className='contact-box'>
                <ul>
                    <li>
                        <a href='/'>
                            <FaInstagram size={24} color={"#7510f7"} />
                            <span>e-mail</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <FaLinkedin size={24} color={"#7510f7"} />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <FaTwitter size={24} color={"#7510f7"} />
                            <span>agallina10</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

/* <div className="footer-main-box">
        <div className="footer-main-box__left-side">
          <h1>Let's work together</h1>
          <h2>
            Have an <strong>idea</strong> you'd like to discuss?
          </h2>
          <button className="footer-main-box__button large">
            Get in touch
          </button>
        </div>
        <div className="footer-main-box__right-side">
          <ul>
            <li> */

/* <FaTwitter size={36} color={"#7510f7"} /> */

//         <span>@arthurgallina</span>
//       </li>
//       <li>
//         {" "}
//         <span>@arthurgallina</span>
//       </li>
//       <li>
//         <span>@arthurgallina</span>
//       </li>
//     </ul>
//     <div className="info"></div>
//     <div className="info"></div>
//     <div className="info"></div>
//   </div>
// </div>
// <div className="footer-last-box"></div>
