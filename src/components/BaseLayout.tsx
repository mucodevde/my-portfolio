import React from "react";

import Navbar from "./Navbar";

const BaseLayout: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default BaseLayout;