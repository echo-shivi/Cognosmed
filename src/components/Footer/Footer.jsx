import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-0 bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h6 className="text-xl font-semibold mb-4">Our Company</h6>
            <ul className="text-base">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Quality Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="mb-8 md:mb-0">
            <h6 className="text-xl font-semibold mb-4">Our Services</h6>
            <ul className="text-base">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Food & Agricultural Product Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Water Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Ayurvedic & Herbal Product Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  Projects, Research and Training
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="mb-8 md:mb-0">
            <h6 className="text-xl font-semibold mb-4">Contact Details</h6>
            <address className="text-base">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-300" />
                <span>
                  2nd Floor, Vihar Vidyapith, Sadaquta Ashram, Kurji, Patna -
                  800010
                </span>
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2 text-gray-300" />
                <a
                  href="tel:+918594800888"
                  className="text-gray-300 hover:text-gray-400"
                >
                  +91-8594800888
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-300" />
                <a
                  href="mailto:cognosmedlabs@gmail.com"
                  className="text-gray-300 hover:text-gray-400"
                >
                  cognosmedlabs@gmail.com
                </a>
              </div>
            </address>
          </div>

          {/* Google Maps Embed */}
          <div>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57564.84455595164!2d85.12471039999998!3d25.6114688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39ed59d3e0f2a179%3A0x9b85f3862eb72984!2sJ4M7%2BX69%20Bihar%20Vidyapeeth%2C%20Sadaquat%20Ashram%2C%20Kurji%2C%20Patna%2C%20Bihar%20800010!3m2!1d25.634932!2d85.11312699999999!5e0!3m2!1sen!2sin!4v1718371290993!5m2!1sen!2sin"
              width="300"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="mt-2 w-full md:w-3/4"
            ></iframe>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h6 className="text-xl font-semibold mb-4">Social Media</h6>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-red-500 hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-300 text-base mt-4">
            © 2024 Cognosmed® Cognosmed Laboratories Private Limited
          </p>
          <p className="text-gray-300 text-base mt-2">
            Made with <FaCode className="ml-1 inline-block align-middle" /> by
            Shivi for more info mail : shivisinghcop@gamil.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
