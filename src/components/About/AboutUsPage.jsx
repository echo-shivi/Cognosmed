import React from "react";
import { useSpring, animated } from "react-spring";
import Header from "../Navbar/Navbar";
import FounderSection from "./Founder/Founder";
import MissionSection from "./Mission/Mission";
import ExpertiseSection from "./Expertise/Expertise";
import AccreditationSection from "./Accredit/Accredit";
import WhyChooseUsSection from "./WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";

const AboutUsPage = () => {
  const slideInFromLeft = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 170, friction: 26 },
  });

  const slideInFromRight = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 170, friction: 26 },
  });

  return (
  
      <div className="container mt-4 mx-auto py-8 px-4">
        <animated.div style={slideInFromLeft}>
          <FounderSection />
        </animated.div>
        <animated.div style={slideInFromRight}>
          <MissionSection />
        </animated.div>
        <animated.div style={slideInFromLeft}>
          <ExpertiseSection />
        </animated.div>
        <animated.div style={slideInFromRight}>
          <AccreditationSection />
        </animated.div>
        <animated.div style={slideInFromLeft}>
          <WhyChooseUsSection />
        </animated.div>
      </div>
     
  
  );
};

export default AboutUsPage;
