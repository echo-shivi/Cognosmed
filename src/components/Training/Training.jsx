// TrainingSection.jsx

import React from "react";

const TrainingSection = () => {
  const trainings = [
    {
      duration: "7 days",
      imageSrc:
        "https://tse3.mm.bing.net/th?id=OIP.hVusL33PlKV2iItt4VzaUAAAAA&pid=Api&P=0&h=220",
    },
    {
      duration: "15 days",
      imageSrc:
        "https://tse2.mm.bing.net/th?id=OIP.xMD_is13pZ_t--r4PEoEHAHaE8&pid=Api&P=0&h=220",
    },
    {
      duration: "30 days",
      imageSrc:
        "https://tse2.mm.bing.net/th?id=OIP.R5NrIe4b3e9MMLaAHCRwCQHaE7&pid=Api&P=0&h=220",
    },
    {
      duration: "3 months",
      imageSrc:
        "https://tse1.mm.bing.net/th?id=OIP.-d0AFiBIKflCjawCAw5vPwHaE7&pid=Api&P=0&h=220",
    },
    {
      duration: "6 months",
      imageSrc:
        "https://tse3.mm.bing.net/th?id=OIP._nqtu5zxztDoP_nG4iPlRgHaE7&pid=Api&P=0&h=220",
    },
    {
      duration: "6 months PPO",
      imageSrc:
        "https://img.freepik.com/free-photo/chemist-ppe-suit-using-micropipette-filling-test-tubes-modern-equipped-laboratory-team-scientists-examining-virus-evolution-using-high-tech-vaccine-development-against-covid19_482257-13595.jpg",
    },
  ];

  const durationText = (duration) => {
    switch (duration) {
      case "7 days":
        return "7 Days";
      case "15 days":
        return "15 Days";
      case "30 days":
        return "30 Days";
      case "3 months":
        return "3 Months";
      case "6 months":
        return "6 Months";
      case "6 months PPO":
        return "6 Months PPO";
      default:
        return "";
    }
  };

  return (
    <div className="bg-slate-50 mt-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Industrial Training for Students Only
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((training, index) => (
            <div key={index} className="overflow-hidden shadow-lg rounded-lg">
              <img
                className="w-full h-48 object-cover"
                src={training.imageSrc}
                alt={`Training ${index + 1}`}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {durationText(training.duration)}
                </h3>
                <div className="flex justify-center mt-4">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;
