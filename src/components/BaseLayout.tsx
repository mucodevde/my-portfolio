import React from "react";

import Navbar from "./Navbar";
import MultiPageRoutes from "./MultiPageRoutes";

const BaseLayout: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="flex-grow">
          <MultiPageRoutes />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default BaseLayout;