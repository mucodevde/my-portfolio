import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";

const MultiPageRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default MultiPageRoutes;