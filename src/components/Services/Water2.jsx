import React, { useState } from "react";
import { FaHandHoldingWater } from "react-icons/fa";
import Modal from "react-modal";

// Modal styling
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 50,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "500px",
    zIndex: 100,
  },
};

const Water = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      image:
        "https://image.freepik.com/free-photo/portrait-man-home-drinking-glass-water_23-2148923946.jpg",
      title: "Drinking Water",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "#",
    },
    {
      id: 2,
      image: "https://wallpaperaccess.com/full/5406976.jpg",
      title: "Raw Water",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "#",
    },
    // Add more services as needed
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  return (
    <div className="relative w-full text-center py-8 px-4 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://via.placeholder.com/1920x2880"
          alt=""
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Testing</h1>
        <div className="mb-2 border-b-2 border-gray-300 mx-auto w-24"></div>
        <div className="flex items-center justify-center mt-4">
          <FaHandHoldingWater className="text-6xl text-gray-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">
          Water Testing
        </h2>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden border-2 border-gradient-olive-brown p-4 transform transition-transform hover:scale-105 shadow-md relative z-10"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover transition-transform transform hover:translate-y-[-10px]"
              />
              <h3 className="text-gray-900 mt-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              <button
                onClick={() => openModal(service)}
                className="inline-block bg-blue-500 text-white hover:bg-blue-600 font-semibold mt-2 py-2 px-4 rounded-lg transition-colors hover:text-white"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Book Now"
        style={customStyles}
      >
        <h2 className="text-2xl font-bold mb-4">Book Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-left">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-left">Phone no.</label>
            <input
              type="tel"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-left">Item</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={selectedService?.title || ""}
              readOnly
            />
          </div>
          <div>
            <label className="block text-left">Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-left">Message</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows="4"
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded-lg transition-colors hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Water;
