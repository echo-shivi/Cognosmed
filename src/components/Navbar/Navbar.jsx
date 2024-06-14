import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white bg-opacity-5 text-white shadow-lg">
      <div className="container mx-auto flex items-center h-24 justify-between px-4 md:px-0">
        <a href="#" className="flex items-center justify-center">
          <img
            className="h-24 py-1"
            src="https://cognosmed.com/wp-content/uploads/2022/06/cognosmed-logo1-07.svg"
            alt="Logo"
          />
          {/* <span className="ml-4 uppercase font-black">
            clara
            <br />
            thella
          </span> */}
        </a>
        <div className="hidden md:flex items-center">
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active hover:text-gray-300">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#">
                  <span>Research</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#">
                  <span>Services</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#">
                  <span>Training</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
          <button className="border border-white rounded-full font-bold px-8 py-2 hover:bg-gray-300 hover:text-amber-600 hover:border-amber-600">
            Contact us
          </button>
          <a href="#" className="flex ml-4 items-center justify-center">
            <img
              className="h-24 py-1"
              src="https://5.imimg.com/data5/SELLER/Default/2021/8/ZF/QT/DQ/4174076/nabl-accreditation-consultancy-service-500x500.png"
              alt="Logo"
            />
          </a>
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
        <div className="md:hidden bg-white bg-opacity-5 text-white shadow-lg">
          <nav className="font-semibold text-base lg:text-lg">
            <ul className="flex flex-col items-center">
              <li className="p-5 xl:p-8 active hover:text-gray-300">
                <a href="#" onClick={toggleMenu}>
                  <span>Home</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#" onClick={toggleMenu}>
                  <span>About</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#" onClick={toggleMenu}>
                  <span>Research</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#" onClick={toggleMenu}>
                  <span>Services</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#" onClick={toggleMenu}>
                  <span>Training</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-gray-300">
                <a href="#" onClick={toggleMenu}>
                  <span>Blog</span>
                </a>
              </li>
            </ul>
            {/* <button
              className="border border-white ml-24 rounded-full font-bold px-8 py-2 mb-4 hover:bg-gray-300 hover:text-black"
              onClick={toggleMenu}
            >
              Contact me
            </button> */}
          </nav>

          <a href="#" className="flex ml-4 items-center justify-center">
            <img
              className="h-24 py-1"
              src="https://5.imimg.com/data5/SELLER/Default/2021/8/ZF/QT/DQ/4174076/nabl-accreditation-consultancy-service-500x500.png"
              alt="Logo"
            />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
