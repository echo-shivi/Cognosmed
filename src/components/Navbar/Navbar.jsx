import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Nabar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-azure text-black shadow-lg">
      <div className="container mx-auto flex items-center h-24 justify-between px-4 py-1 md:px-0">
        <NavLink to="/" className="flex items-center justify-center">
          <img className="h-24 py-1" src={Logo} alt="Logo" />
        </NavLink>
        <div className="hidden md:flex items-center">
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  <span>About</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/research"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  <span>Research</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/testing"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  <span>Testing</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/training"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  <span>Training</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/blog"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  <span>Blog</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <NavLink
            to="/contact"
            className="border border-black rounded-full font-bold px-8 py-2 hover:bg-gray-300 hover:text-white hover:border-gray-600"
            activeClassName="nav-link-active"
          >
            Contact us
          </NavLink>
          <NavLink
            to="/external-link"
            className="flex ml-4 items-center justify-center"
          >
            <img
              className="h-24 py-1"
              src="https://5.imimg.com/data5/SELLER/Default/2021/8/ZF/QT/DQ/4174076/nabl-accreditation-consultancy-service-500x500.png"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="h-8 w-8" />
            ) : (
              <FaBars className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-200 text-black shadow-lg">
          <nav className="font-semibold text-base lg:text-lg">
            <ul className="flex flex-col items-center">
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={toggleMenu}
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={toggleMenu}
                >
                  <span>About</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/research"
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={toggleMenu}
                >
                  <span>Research</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/services"
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={toggleMenu}
                >
                  <span>Services</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/training"
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={toggleMenu}
                >
                  <span>Training</span>
                </NavLink>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-600">
                <NavLink
                  to="/blog"
                  className="nav-link"
                  activeClassName="nav-link-active"
                  onClick={toggleMenu}
                >
                  <span>Blog</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <NavLink
            to="/external-link"
            className="flex ml-4 items-center justify-center"
          >
            <img
              className="h-24 py-1"
              src="https://5.imimg.com/data5/SELLER/Default/2021/8/ZF/QT/DQ/4174076/nabl-accreditation-consultancy-service-500x500.png"
              alt="Logo"
            />
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
