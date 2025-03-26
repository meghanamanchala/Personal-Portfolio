import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-4 text-center">
      <div className="relative w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-[shine_2s_linear_infinite] mb-5"></div>
      <p className="text-sm">
        © {new Date().getFullYear()} Meghana 🦋 | Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
