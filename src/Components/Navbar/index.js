import React from "react";
import logo from "../../logo.svg";

export default function Navbar() {
    return (
        <nav>
            <div className='nav__logo'>
                <img src={logo} alt='' height={50} />
            </div>

            <ul className='nav__list'>
                <li className='nav__item'>About</li>
                <li className='nav__item'>Project</li>
                <li className='nav__item'>Contact</li>
            </ul>
        </nav>
    );
}
