import React from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import "./App.css";
import Transition from "./components/Transition";
import "./css/transitions.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Navbar from "./components/navbar";

// import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <>
        <Navbar />
      </>
      <Transition>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Transition>
    </div>
  );
}

export default App;
