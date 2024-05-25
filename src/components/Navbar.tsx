import React from "react";
import { Link } from "react-router-dom";

import { info, singlePage } from "../constants/info";

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
    name: info.initials,
    type: 'initials',
    to: '',
    active: 'home'
  },
  {
    name: 'Portfolio',
    to: 'portfolio',
    active: 'portfolio'
  }
]

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul
        className="flex justify-center items-center gap-8 text-sm lowercase md:gap-32"
      >
        {
          links.map((link, index) => (
            <li key={index}>
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
              // scroll={el => scrollWidthOffset(el)}
              // smooth
              // onClick={() => setActive(link.active)} className={Style.link}
              >
                {
                  link.type ?
                    <h1>{link.name}</h1>
                    :
                    <p className="py-2">{link.name}</p>
                }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar;