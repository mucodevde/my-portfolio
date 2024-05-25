import React from "react";

import PortfolioBlock from "./PortfolioBlock";
import { info } from "../../constants/info";

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-8"
    >
      <div className="container mx-auto flex flex-wrap justify-center">
        {info.portfolio.map((project, index) => (
          <div
            className="w-full md:w-1/2 p-4"
            key={index}
          >
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;