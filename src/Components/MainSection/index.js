import React from "react";
import "./styles.scss";
import Pic from "../../assets/index.jpeg";

export default function MainSection() {
  return (
    <div className="container">
      <div className="main-box">
        <div className="main-box__left-side">
          <h1>Hey, I'm Arthur.</h1>
          <h2>
            Software engineer from Floarinópolis, Brasil. I create custom
            solutions to help businesses do better online.
          </h2>
          <button className="main-box__button large">My Projects</button>
        </div>
        <div className="main-box__right-side">
          <figure className="overlap-img">
            {/* <source srcset={Pic} /> */}
            <img src={Pic} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
