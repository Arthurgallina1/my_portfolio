import React, { useEffect, useState, useRef } from "react";
import logo from "../../logo.svg";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./index.scss";
import { CSSTransition } from "react-transition-group";
import { Link, Events, scrollSpy } from "react-scroll";

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

    useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {});
        Events.scrollEvent.register("end", (to, element) => {});

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
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
            <img src={logo} alt='' height={57} />
            <CSSTransition
                in={!isSmallScreen || visible}
                timeout={550}
                classNames='NavAnimation'
                unmountOnExit
            >
                <ul className='Nav'>
                    <li className='nav__item'>
                        <Link
                            className='test6'
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link
                            className='test6'
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link
                            className='test6'
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </CSSTransition>
            <button>
                {visible ? (
                    <IoMdClose
                        color={"#fff"}
                        size={36}
                        className='Burguer'
                        onClick={toggleNav}
                    />
                ) : (
                    <FiMenu
                        color={"#fff"}
                        size={36}
                        className='Burguer'
                        onClick={toggleNav}
                    />
                )}
            </button>
        </header>
    );
}
