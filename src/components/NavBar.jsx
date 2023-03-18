import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Portfolio from "./Portfolio";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      path: "/",
      component: Home,
    },
    {
      id: 2,
      link: "about",
      path: "/about",
      component: About,
    },
    {
      id: 3,
      link: "portfolio",
      path: "/portfolio",
      component: Portfolio,
    },
    {
      id: 4,
      link: "experience",
      path: "/experience",
      component: Experience,
    },
    {
      id: 5,
      link: "contact",
      path: "/contact",
      component: Contact,
    },
  ];


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <NavLink exact to="/" className="cursor-pointer">
        <img src={Logo} alt='phot' style={{ width: '170px' }} />
      </NavLink>


      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <NavLink exact to={path} activeClassName="active">
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <NavLink
                onClick={() => setNav(!nav)}
                exact
                to={path}
                activeClassName="active"
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;