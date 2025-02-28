"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md" : "bg-opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold">Shiv Dixit</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
            <a href="#experience" className="hover:text-blue-400 transition duration-300">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
            <a href="#certifications" className="hover:text-blue-400 transition duration-300">Certifications</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#experience" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#certifications" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Certifications</a>
              <a href="#contact" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}