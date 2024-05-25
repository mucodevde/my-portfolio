import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

const MultiPageRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default MultiPageRoutes;