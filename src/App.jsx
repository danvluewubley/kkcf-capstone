import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./styles/index.css";

const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <Router>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
