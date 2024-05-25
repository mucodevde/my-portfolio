import React from "react";

import IconLink from "./IconLink";

interface PortfolioBlockProps {
  title: string,
  live: string,
  source: string,
  image: string,
}

const PortfolioBlock: React.FC<PortfolioBlockProps> = ({ title, live, source, image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} alt="mockup" className="w-full h-auto" />
      <h1 className="text-xl mt-4 text-center">{title}</h1>
      <div className="portfolio flex flex-col items-center gap-2 py-8 text-xl">
        <div className="py-2 px-4 border-2 border-black rounded-full cursor-pointer">
          <IconLink
            link={live}
            title="Live Demo"
            icon="demo"
          />
        </div>
        <div className="py-2 px-4 border-2 border-black rounded-full cursor-pointer">
          <IconLink
            link={source}
            title="Source Code"
            icon="code"
          />
        </div>
      </div>
    </div>
  )
}

export default PortfolioBlock;