import React, { useState } from "react";
import { CiWheat } from "react-icons/ci";
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

const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      image:
        "https://cdn.wrytin.com/images/wrytup/r/1024/b464e1af-2950-4b9b-9241-b290b323a26f-jxlkr5iz.jpeg",
      title: "Bakery",
      description:
        "Includes biscuits, cakes, chips, wafers, pastries, brownies, and muffins.",
      url: "#",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/group-indian-traditional-spicy-sweet-namkeen-food_55610-3869.jpg?w=2000",
      title: "Snacks",
      description: "Includes namkeen and other savory snacks.",
      url: "#",
    },
    {
      id: 3,
      image:
        "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/07/31/886266-aata-3.jpg",
      title: "Flour",
      description: "Includes besan, maida, and pulses-based flours.",
      url: "#",
    },
    // {
    //   id: 4,
    //   image: "https://via.placeholder.com/250",
    //   title: "Atta",
    //   description: "Includes various types of wheat flour (atta).",
    //   url: "#",
    // },
    {
      id: 5,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.5_XfgVaxNSu3Qbw9fO9aqQHaFf&pid=Api&P=0&h=220",
      title: "Edible Oils",
      description: "Includes mustard oil and other edible oils.",
      url: "#",
    },
    {
      id: 6,
      image:
        "https://image.freepik.com/free-photo/spices-powder_23-2148605284.jpg",
      title: "Spices",
      description: "Includes herbs, spices, and condiments.",
      url: "#",
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/free-photo/assortment-different-jams-jars_82893-14879.jpg?size=626&ext=jpg",
      title: "Preserves",
      description:
        "Includes jams, jellies, ketchup, marmalades, pickles, pulps, purees, and snack dressings.",
      url: "#",
    },
    {
      id: 8,
      image:
        "https://img.freepik.com/premium-photo/different-cheese_983286-410.jpg?w=2000",
      title: "Cheese",
      description: "Includes various types of cheese.",
      url: "#",
    },
    {
      id: 9,
      image:
        "https://img.freepik.com/free-photo/glass-jar-full-milk_23-2148211467.jpg",
      title: "Dairy",
      description: "Includes liquid milk and dairy products.",
      url: "#",
    },
    {
      id: 10,
      image:
        "https://image.freepik.com/foto-gratis/barra-chocolate-aislado-sobre-fondo-blanco_19485-55177.jpg",
      title: "Chocolate",
      description: "Includes various types of chocolate products.",
      url: "#",
    },
    {
      id: 11,
      image:
        "https://img.freepik.com/premium-photo/cup-tea-with-plant-background_865967-3829.jpg",
      title: "Tea",
      description:
        "Includes tea leaves, black tea, green tea, Kangra tea, and herbal tea products.",
      url: "#",
    },
    {
      id: 12,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.WgFc9IEfUrTD-soZyW6emQHaHa&pid=Api&P=0&h=220",
      title: "Sauce",
      description: "all types of Sauce-ketchup",
      url: "#",
    },
    // {
    //   id: 13,
    //   image: "https://via.placeholder.com/250",
    //   title: "Service 13",
    //   description: "Description of Service 13.",
    //   url: "#",
    // },
    // {
    //   id: 14,
    //   image: "https://via.placeholder.com/250",
    //   title: "Service 14",
    //   description: "Description of Service 14.",
    //   url: "#",
    // },
    // {
    //   id: 15,
    //   image: "https://via.placeholder.com/250",
    //   title: "Service 15",
    //   description: "Description of Service 15.",
    //   url: "#",
    // },
    // {
    //   id: 16,
    //   image: "https://via.placeholder.com/250",
    //   title: "Service 16",
    //   description: "Description of Service 16.",
    //   url: "#",
    // },
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
      <div className="absolute inset-0 z-0">
        <img
          src="https://via.placeholder.com/1920x2880"
          alt=""
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Testing</h1>
        <div className="mb-2 border-b-2 border-gray-300 mx-auto w-24"></div>
        <div className="flex items-center justify-center mt-4">
          <CiWheat className="text-6xl text-gray-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">
          Food and Agriculture Product Testing
        </h2>
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
          <div className="flex items-center space-x-4">
            <div>
              <input type="checkbox" id="nutritional" />
              <label htmlFor="nutritional" className="ml-2">
                Nutritional testing
              </label>
            </div>
            <div>
              <input type="checkbox" id="quality" />
              <label htmlFor="quality" className="ml-2">
                Quality testing
              </label>
            </div>
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

export default Services;
