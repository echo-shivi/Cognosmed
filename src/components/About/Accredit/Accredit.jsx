import React from "react";
import "./Accredit.css";

const Accredit = () => {
  return (
    <section className="my-16 rounded-lg bg-white py-8 accredit-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 accredit-heading">
          Accreditation & Certification
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <img
            className="h-32 w-32 md:h-40 md:w-40 mx-auto md:mr-6"
            src="https://5.imimg.com/data5/SELLER/Default/2021/8/ZF/QT/DQ/4174076/nabl-accreditation-consultancy-service-500x500.png"
            alt="NABL Logo"
          />
          <div className="mt-4 md:mt-0">
            <p className="text-lg leading-relaxed">
              <strong>Cognosmed Laboratory</strong> is accredited by{" "}
              <strong>NABL</strong>, adhering to international standards such as{" "}
              <strong>ISO/IEC 17025</strong>. Our commitment to quality and
              compliance ensures that our testing results are recognized and
              trusted globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accredit;
