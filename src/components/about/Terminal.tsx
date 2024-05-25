import React from "react";
import { Circle } from 'lucide-react';

interface TerminalProps {
  text: React.ReactElement
}

const Terminal: React.FC<TerminalProps> = ({ text: Text }) => {
  return (
    <section className="w-11/12 max-w-lg rounded-lg mb-16">
      <div className="bg-gray-500 p-2 rounded-t-lg text-base flex items-center">
        <div className="my-auto ml-2">
          <Circle fill="#FF8080" strokeWidth="0" />
        </div>
        <div className="my-auto ml-2">
          <Circle fill="#ECEE81" strokeWidth="0" />
        </div>
        <div className="my-auto ml-2">
          <Circle fill="#B0D9B1" strokeWidth="0" />
        </div>
      </div>
      <div className="py-4 md:py-8 px-8 md:px-12 rounded-b-lg bg-gray-800 text-base md:text-xl font-mono text-white">
        {Text}
      </div>
    </section>
  )
}

export default Terminal;