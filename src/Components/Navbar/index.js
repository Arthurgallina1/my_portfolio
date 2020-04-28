import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./index.scss";
import { CSSTransition } from "react-transition-group";

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);
    const toggleNav = () => {
        setVisible(!visible);
    };

    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };
    return (
        <header className='Header'>
            <img src={logo} alt='' height={50} />
            <CSSTransition
                in={!isSmallScreen || visible} //(!isSmallScreen || visible)
                timeout={450}
                classNames='NavAnimation'
                unmountOnExit
            >
                <ul className='Nav'>
                    <li className='nav__item'>About</li>
                    <li className='nav__item'>Projects</li>
                    <li className='nav__item'>Contact</li>
                </ul>
            </CSSTransition>
            <button onClick={toggleNav}>
                {visible ? (
                    <IoMdClose color={"#fff"} size={36} className='Burguer' />
                ) : (
                    <FiMenu color={"#fff"} size={36} className='Burguer' />
                )}
            </button>
        </header>
    );
}
