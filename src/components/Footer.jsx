import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-1">ReactFood 🍽️</h2>
          <p className="text-sm text-gray-400">
            Ăn ngon – Sống khỏe – Giao nhanh
          </p>
        </div>

        <div className="flex space-x-4 text-xl">
          <a
            href="#"
            className="hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {year} ReactFood. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
