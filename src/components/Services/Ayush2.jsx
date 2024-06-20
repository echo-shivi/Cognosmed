import React, { useState } from "react";
import { FaMortarPestle } from "react-icons/fa";
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

const Ayush = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.vXyCH-OCD7w0sPeSC9HBnwHaE8&pid=Api&P=0&h=220",
      title: "Ayurvedic Formulations - Avaleha and Taila",
      description: "Includes Avaleha and Taila formulations.",
      url: "#",
    },
    {
      id: 2,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.nMOSeUlT3F5Amn4w4SEQTgHaDp&pid=Api&P=0&h=220",
      title: "Plant Origin - Herbs",
      description: "Includes herbs of plant origin.",
      url: "#",
    },
    {
      id: 3,
      image: "https://vyaparbharat.com/uploaded_files/product/151406.jpg",
      title:
        "Ayurvedic Formulations - Churna, Kwath Churna, Lavana, Vati, Gutika",
      url: "#",
    },
    {
      id: 4,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.4p3njBOyshQJExfvAlJLYwHaFj&pid=Api&P=0&h=220",
      title: "Ayurvedic Formulations - Asava, Aristha, Churana, Avaleha, Syrup",
      url: "#",
    },
    {
      id: 5,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Qjpls8uPNRSPf-FbFmKcQAHaDc&pid=Api&P=0&h=220",
      title: "Ayurvedic Formulations - Avaleha, Taila, Ghrita, Kwath",
      url: "#",
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/Z1O0b-zvZRw/maxresdefault.jpg",
      title: "Ayurvedic Formulations - Syrup, Kwath, Lepa, Asava, Arista, Arka",
      url: "#",
    },
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
        <div className="flex items-center justify-center mt-4 mb-2">
          <FaMortarPestle className="text-6xl text-gray-600" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-600 mb-8">
          Ayush and Herbal Product Testing
        </h2>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default Ayush;
