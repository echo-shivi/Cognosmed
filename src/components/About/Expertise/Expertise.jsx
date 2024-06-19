import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section className="my-16 rounded-md bg-gray-100 py-8 expertise-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 expertise-heading">
          Expertise & Experience
        </h2>
        <p className="text-lg leading-relaxed text-center md:text-left">
          With a team of highly skilled scientists and technicians,{" "}
          <strong>Cognosmed Laboratories</strong> combines years of experience
          with cutting-edge technology to deliver unparalleled testing services.
          Our experts specialize in various fields including{" "}
          <strong>Nutritional value</strong>,{" "}
          <strong>Quality parameters</strong> &{" "}
          <strong>Stability Testing</strong> ensuring a thorough analysis of
          your products.
        </p>
      </div>
    </section>
  );
};

export default Expertise;
