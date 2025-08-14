import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import brandLogo from "../assets/brand-logo.png"; // adjust path if needed

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-50 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <a href="#home">
          <div className="flex items-center">
            <img
              src={brandLogo}
              alt="Mitali Almirah Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          </a>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-amber-900 hover:text-amber-800 font-medium"
            >
              About Us
            </a>
            <a
              href="#products"
              className="text-amber-900 hover:text-amber-800 font-medium"
            >
              Our Products
            </a>
            <a
              href="#contact"
              className="text-amber-900 hover:text-amber-800 font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-amber-900 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-amber-50 shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <a
              href="#products"
              className="text-amber-900 hover:text-amber-800 font-medium"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-amber-900 hover:text-amber-800 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-amber-900 hover:text-amber-800 font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
