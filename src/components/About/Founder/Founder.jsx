import React from "react";
import "./Founder.css";

const FounderSection = () => {
  return (
    <section className="my-16 rounded-md bg-gray-100 py-12 founder-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 founder-heading">
          Our Founder
        </h2>
        <p className="text-lg leading-relaxed text-center md:text-left">
          <strong>Dr. Ajay Kumar</strong>, the visionary behind our startup,
          brings a wealth of expertise and experience to the table. With a Ph.D.
          in Traditional Medicine and an M.Sc. in Biomedical Sciences, Dr. Kumar
          is well-versed in the scientific principles that underpin product
          formulation, development, and testing. His entrepreneurial spirit and
          scientific acumen enable him to drive innovation and ensure the
          highest standards of quality in our services.
        </p>
      </div>
    </section>
  );
};

export default FounderSection;
