import React from "react";
import Slider from "infinite-react-carousel";
import { MdCode } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GoTools } from "react-icons/go";
import "./index.scss";

export default function Carousel() {
    // const [isSmallScreen, setIsSmallScreen] = useState(false);
    const settings = {
        autoplay: true,
        dots: true,
    };

    // useEffect(() => {
    //     const mediaQuery = window.matchMedia("(max-width: 768px)");
    //     mediaQuery.addListener(handleMediaQueryChange);
    //     handleMediaQueryChange(mediaQuery);

    //     return () => {
    //         mediaQuery.removeListener(handleMediaQueryChange);
    //     };
    // }, []);

    // const handleMediaQueryChange = (mediaQuery) => {
    //     if (mediaQuery.matches) {
    //         // setIsSmallScreen(true);
    //     } else {
    //         // setIsSmallScreen(true);
    //     }
    // };

    return (
        <Slider {...settings}>
            <div className='front-col'>
                <MdCode size={44} color={"#7510f7"} />
                <h2>Front-end</h2>
                <p>I enjoy building elegant applications.</p>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>CSS/SASS</li>
                </ul>
            </div>
            <div className='front-col'>
                <FiDatabase size={44} color={"#7510f7"} />
                <h2>Back-end</h2>
                <p>A robust backend is essential.</p>

                <ul>
                    <li>Node.js</li>
                    <li>PHP</li>
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
                    <li>AWS</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </Slider>
    );
}
