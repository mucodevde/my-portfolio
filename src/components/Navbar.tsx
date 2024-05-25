import React from "react";
import { Link } from "react-router-dom";

import { singlePage } from "../constants/info";

const links = [
  {
    name: 'Home',
    to: '',
    active: 'home'
  },
  {
    name: 'About Me',
    to: 'about',
    active: 'about'
  },
  {
    name: 'Portfolio',
    to: 'portfolio',
    active: 'portfolio'
  }
]

const Navbar: React.FC = () => {
  return (
    <nav className="py-2 lg:py-4 shadow-md">
      <ul
        className="flex justify-center items-center gap-8 text-md lowercase md:gap-32"
      >
        {
          links.map((link, index) => (
            <li
              key={index}
              className="my-1 py-1 hover:-translate-y-0.5"
            >
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
              >
                <p className="lg:text-lg">{link.name}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar;