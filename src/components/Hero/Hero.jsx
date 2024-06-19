import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    imageUrl:
      "https://cores.emory.edu/dar/_includes/images/sections/services/diagnostic_lab.png",
    caption: "Caption for Slide 1",
  },
  {
    id: 2,
    imageUrl:
      "https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/sites/18/2019/02/RESEARCH-LAB.jpg",
    caption: "Caption for Slide 2",
  },
  {
    id: 3,
    imageUrl: "https://www.undb.edu.br/hubfs/shutterstock_652787824.jpg",
    caption: "Caption for Slide 3",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  const startSlideShow = () => {
    stopSlideShow();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    startSlideShow();
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    startSlideShow();
  };

  return (
    <div className="relative mt-2 w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
            {slide.caption}
          </div>
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={goToPreviousSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
