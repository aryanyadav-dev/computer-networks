'use client'

import React, { useState } from 'react';
import { LinkIcon, Linkedin } from 'lucide-react';

const developerLinks = [
  {
    name: "Anushka Yadav",
    role: "Frontend Developer",
    portfolio: "https://anushka-portofolio.vercel.app/",
    linkedin: "https://www.linkedin.com/in/anushka-m-yadav/"
  },
  {
    name: "Aryan Yadav",
    role: "Backend & DevOps Developer",
    portfolio: "https://aryanyadav-portfolio.vercel.app/",
    linkedin: "https://www.linkedin.com/in/-aryanyadav/"
  },
  {
    name: "Chinmay Sawant",
    role: "Database Developer",
    portfolio: "",
    linkedin: "https://www.linkedin.com/in/chinmay-sawant-8b3282266/"
  },
  {
    name: "Unnat Malik",
    role: "Backend Developer",
    portfolio: "https://unnat-malik.vercel.app/",
    linkedin: "https://www.linkedin.com/in/unnat-malik/"
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top-Left Logos and Separator */}
      <div className="fixed top-4 left-4 flex items-center z-0">
        {/* First Logo */}
        <img
          src="https://tsdcmumbai.in/images/logo/tcet_logo.png"
          alt="TCET Logo"
          className="h-24 w-24 object-contain rounded-lg"
          style={{ backgroundColor: 'transparent' }}
        />
        {/* White Dash Separator */}
        <div className="h-24 border-l-2 border-white ml-4"></div>
        {/* Second Logo */}
        <img
          src="https://pradnyaavtare14.github.io/tcet-website/comp.png"
          alt="Second Logo"
          className="h-24 w-24 object-contain ml-4 rounded-lg"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md rounded-full px-8 py-3 inline-flex items-center justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center justify-center">
          <a
            href="#content"
            className="text-white hover:text-blue-400 transition-colors text-base uppercase font-medium"
          >
            CONTENT
          </a>

          {/* Desktop Developers Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-blue-400 transition-colors flex items-center text-base uppercase font-medium">
              DEVELOPERS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute top-full mt-2 w-72 bg-black/90 backdrop-blur-md rounded-lg shadow-lg p-5 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              {developerLinks.map((dev, index) => (
                <React.Fragment key={index}>
                  <div className="py-3">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold text-base">
                          {dev.name}
                        </span>
                        <div className="flex space-x-3">
                          <a
                            href={dev.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                            title="Portfolio"
                          >
                            <LinkIcon size={20} />
                          </a>
                          <a
                            href={dev.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300"
                            title="LinkedIn"
                          >
                            <Linkedin size={20} />
                          </a>
                        </div>
                      </div>
                      <span className="text-blue-300 text-sm uppercase">
                        {dev.role}
                      </span>
                    </div>
                  </div>
                  {index < developerLinks.length - 1 && (
                    <div className="border-t border-white/20"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md rounded-lg">
            <a
              href="#content"
              className="block text-white hover:text-blue-400 py-3 px-4 uppercase text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              CONTENT
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;