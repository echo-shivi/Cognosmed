import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Service2";
import Typewriter from "./Typwriter/Typwriter";
import Training from "./Training/Training";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Water from "./Services/Water";
import Ayush from "./Services/Ayush";

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
