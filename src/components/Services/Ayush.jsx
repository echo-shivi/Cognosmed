import React from "react";
import { FaMortarPestle } from "react-icons/fa";

const Ayush = () => {
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
      // description: "Includes various Ayurvedic formulations like Churna, Kwath Churna, Lavana, Vati, and Gutika.",
      url: "#",
    },
    {
      id: 4,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.4p3njBOyshQJExfvAlJLYwHaFj&pid=Api&P=0&h=220",
      title: "Ayurvedic Formulations - Asava, Aristha, Churana, Avaleha, Syrup",
      //description: "Includes Ayurvedic formulations such as Asava, Aristha, Churana, Avaleha, and Syrup.",
      url: "#",
    },
    {
      id: 5,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Qjpls8uPNRSPf-FbFmKcQAHaDc&pid=Api&P=0&h=220",
      title: "Ayurvedic Formulations - Avaleha, Taila, Ghrita, Kwath",
      //description:"Includes Ayurvedic formulations like Avaleha, Taila, Ghrita, and Kwath.",
      url: "#",
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/Z1O0b-zvZRw/maxresdefault.jpg",
      title: "Ayurvedic Formulations - Syrup, Kwath, Lepa, Asava, Arista, Arka",
      //description: "Includes Ayurvedic formulations such as Syrup, Kwath, Lepa, Asava, Arista, and Arka.",
      url: "#",
    },
    // {
    //   id: 7,
    //   image: "https://example.com/your-image-url.jpg", // Replace with the actual image URL
    //   title: "Ayurvedic Formulations - Syrup, Kwath, Lepa, Asava, Arista, Arka",
    //   // description: "Includes Ayurvedic formulations such as Syrup, Kwath, Lepa, Asava, Arista, and Arka.",
    //   url: "#", // Replace with the actual URL if applicable
    // },
  ];

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
              <a
                href={service.url}
                className="inline-block bg-blue-500 text-white hover:bg-blue-600 font-semibold mt-2 py-2 px-4 rounded-lg transition-colors hover:text-white"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ayush;
