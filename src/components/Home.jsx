import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services3";
import Typewriter from "./Typwriter/Typwriter";
import Training from "./Training/Training";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Water from "./Services/Water2";
import Ayush from "./Services/Ayush2";

const Home = () => {
  return (
    <div>
      <Typewriter />
      <Hero />
      <Services />
      <Water />
      <Ayush />
      {/* <Training /> */}
      <div className="mt-10 rounded-md">
        <main className="flex-grow">
          {/* Other content */}
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Home;
