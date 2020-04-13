import React from "react";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Project from "./Components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Project />
    </div>
  );
}

export default App;
