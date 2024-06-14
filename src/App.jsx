import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Typewriter from "./components/Typwriter/Typwriter";
import Training from "./components/Training/Training";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Typewriter />
      <Hero />
      <Services />
      <Training />
      <div className="mt-10 rounded-md">
        <main className="flex-grow">
          {/* Other content */}
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
