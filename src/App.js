import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contactme from "./pages/contactme";
import Portfolio from "./pages/portfolio";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
