import { FacebookIcon, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-10">
      <div className="w-full mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Filters/Links */}
        <div>
          <h4 className="text-2xl font-medium mb-5">Filters</h4>
          <ul className="flex flex-col gap-3">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h4 className="text-2xl font-medium mb-5">About Us</h4>
          <ul className="flex flex-col gap-3">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h4 className="text-2xl font-medium mb-5">Follow Us</h4>
          <div className="flex gap-6 ">
            <FacebookIcon
              className="bg-blue-500 rounded-full px-2 py-2"
              size={45}
            />
            <Twitter className="bg-blue-500 rounded-full px-2 py-2" size={45} />
            <Instagram
              className="bg-blue-500 rounded-full px-2 py-2"
              size={45}
            />
          </div>
        </div>
      </div>
      <div className="text-left px-4 text-sm text-gray-400 py-4 ">
        &copy; 2024 American
      </div>
    </footer>
  );
};

export default Footer;
