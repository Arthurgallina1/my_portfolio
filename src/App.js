import React from "react";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Project from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Copyright from "./Components/Copyright";
import "./App.css";

function App() {
    return (
        <div className='App'>
            <Header />
            <MainSection />
            <Project />
            <About />
            <Footer />
            <Copyright />
        </div>
    );
}

export default App;
