import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./WhyChooseUsSection.css"; // Import CSS file for animation styles

const WhyChooseUsSection = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timeoutIds = [];

    // Simulate staggered appearance with increasing delay for each item
    [1, 2, 3, 4, 5, 6].forEach((item, index) => {
      timeoutIds.push(
        setTimeout(() => {
          setVisibleItems((prevVisibleItems) => [...prevVisibleItems, item]);
        }, 500 * (index + 1)) // 500ms delay multiplied by index to stagger items
      );
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <section
      className={`py-10 rounded-md bg-gray-100 why-choose-us-section ${
        hovered ? "hovered" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="container mx-auto px-4 text-center">
        {" "}
        {/* Centering text */}
        <h2 className="text-3xl font-bold mb-8 why-choose-us-heading relative">
          Why Choose Us ?
          <span className="why-choose-us-line absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-gray-300 transition-all duration-300 w-0"></span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {visibleItems.includes(1) && (
            <li className="flex items-center space-x-2 animate-fade-in">
              <FaCheck className="text-green-500" />
              <span className="text-lg font-medium">Customized Solutions</span>
            </li>
          )}
          {visibleItems.includes(2) && (
            <li className="flex items-center space-x-2 animate-fade-in">
              <FaCheck className="text-green-500" />
              <span className="text-lg font-medium">
                Timely and Confidential Reporting
              </span>
            </li>
          )}
          {visibleItems.includes(3) && (
            <li className="flex items-center space-x-2 animate-fade-in">
              <FaCheck className="text-green-500" />
              <span className="text-lg font-medium">Affordable Prices</span>
            </li>
          )}
          {visibleItems.includes(4) && (
            <li className="flex items-center space-x-2 animate-fade-in">
              <FaCheck className="text-green-500" />
              <span className="text-lg font-medium">
                Sample Pick-up Facility
              </span>
            </li>
          )}
          {visibleItems.includes(5) && (
            <li className="flex items-center space-x-2 animate-fade-in">
              <FaCheck className="text-green-500" />
              <span className="text-lg font-medium">
                100% Accuracy and Reliable Results
              </span>
            </li>
          )}
          {visibleItems.includes(6) && (
            <li className="flex items-center space-x-2 animate-fade-in">
              <FaCheck className="text-green-500" />
              <span className="text-lg font-medium">
                Technical Support for Tested Data
              </span>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
