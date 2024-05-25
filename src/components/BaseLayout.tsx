import React from "react";

import Navbar from "./Navbar";
import MultiPageRoutes from "./MultiPageRoutes";

const BaseLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <Navbar />
      </div>
      <div>
        <MultiPageRoutes />
      </div>
      <footer className="mt-6 flex flex-col items-center py-6 w-full text-xs opacity-50">
        <p>template created with &hearts; by <a href="https://github.com/muhammadderic" className="underline">muhammadderic</a></p>
        <p>&copy; 2024</p>
      </footer>
    </div>
  )
}

export default BaseLayout;