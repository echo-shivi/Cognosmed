import React from "react";
import "./Mission.css";

const MissionSection = () => {
  return (
    <section className="my-16 rounded-md bg-white py-12 mission-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 mission-heading">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-center md:text-left">
          At <strong>Cognosmed Laboratories</strong>, our mission is to support
          the health and well-being of consumers by providing accurate,
          reliable, and timely testing services. We strive to empower
          manufacturers, suppliers, and distributors with the data they need to
          ensure their products meet all regulatory requirements and quality
          standards.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
