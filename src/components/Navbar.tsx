'use client';

import React, { useState } from 'react';
import { Linkedin, Link as LinkIcon } from 'lucide-react';

const developerLinks = [
  {
    name: "Aryan Yadav",
    role: "Frontend, Backend & DevOps Developer",
    portfolio: "https://aryanyadav-portfolio.vercel.app/",
    linkedin: "https://www.linkedin.com/in/-aryanyadav/",
  },
  {
    name: "Chinmay Sawant",
    role: "UI UX Designer",
    portfolio: "https://aquamarine-liger-0c035b.netlify.app/",
    linkedin: "https://www.linkedin.com/in/chinmay-sawant-8b3282266/",
  },
  {
    name: "Anushka Yadav",
    role: "Frontend Developer",
    portfolio: "https://anushka-portofolio.vercel.app/",
    linkedin: "https://www.linkedin.com/in/anushka-m-yadav/",
  },
  {
    name: "Unnat Malik",
    role: "Backend Developer",
    portfolio: "https://unnat-malik.vercel.app/",
    linkedin: "https://www.linkedin.com/in/unnat-malik/",
  },
  {
    name: "Loukik Salvi",
    role: "Mentor",
    portfolio: "https://loukik-salvi.vercel.app/",
    linkedin: "https://www.linkedin.com/in/loukik-salvi-589510164/",
  },
];

const contentLinks = [
  {
    name: "Modules",
    description: "Detailed course modules",
    link: "/modules",
  },
  {
    name: "PPTs",
    description: "Lecture presentations",
    link: "/ppts",
  },
  {
    name: "PYQs",
    description: "Previous Year Questions",
    link: "/pyqs",
  },
  {
    name: "Practicals",
    description: "Lab and practical materials",
    link: "/practicals",
  },
  {
    name: "Study Materials",
    description: "Additional study resources",
    link: "/study-materials",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [devDropdownOpen, setDevDropdownOpen] = useState(false); // Developers dropdown toggle

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top-Left Logos and Separator */}
      <div className="fixed top-4 left-4 flex items-center z-0">
        <img
          src="https://tsdcmumbai.in/images/logo/tcet_logo.png"
          alt="TCET Logo"
          className="h-16 w-16 md:h-24 md:w-24 object-contain rounded-lg"
          style={{ backgroundColor: 'transparent' }}
        />
        <div className="h-16 md:h-24 border-l-2 border-white ml-4"></div>
        <img
          src="https://pradnyaavtare14.github.io/tcet-website/comp.png"
          alt="Comp Logo"
          className="h-16 w-16 md:h-24 md:w-24 object-contain ml-4 rounded-lg"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md rounded-full px-8 py-3 inline-flex items-center justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center justify-center">
          {/* Desktop Content Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-blue-400 transition-colors flex items-center text-base uppercase font-medium">
              CONTENT
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
              {contentLinks.map((content, index) => (
                <React.Fragment key={index}>
                  <div className="py-3">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <a
                          href={content.link}
                          className="text-white hover:text-blue-400 transition-colors font-semibold text-base"
                        >
                          {content.name}
                        </a>
                      </div>
                      <span className="text-blue-300 text-sm">
                        {content.description}
                      </span>
                    </div>
                  </div>
                  {index < contentLinks.length - 1 && (
                    <div className="border-t border-white/20"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

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
          <div className="md:hidden fixed top-16 left-1/2 -translate-x-1/2 w-15/17 max-w-sm bg-black/90 backdrop-blur-md rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="p-4">
              {/* Content Section */}
              <div className="pb-4">
                <h2 className="text-white text-lg font-semibold">Content</h2>
                {contentLinks.map((content, index) => (
                  <a
                    key={index}
                    href={content.link}
                    className="block text-white hover:text-blue-400 py-2 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {content.name}
                  </a>
                ))}
              </div>

              {/* Developer Section */}
              <div className="border-t border-white/20 pt-4">
                <button
                  onClick={() => setDevDropdownOpen(!devDropdownOpen)}
                  className="flex justify-between items-center text-white text-lg font-semibold w-full"
                >
                  Developers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${
                      devDropdownOpen ? "rotate-180" : ""
                    }`}
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
                {devDropdownOpen && (
                  <div className="pt-2">
                    {developerLinks.map((dev, index) => (
                      <div key={index} className="py-2">
                        <div className="flex justify-between">
                          <span className="text-white text-sm font-medium">
                            {dev.name}
                          </span>
                          <div className="flex space-x-2">
                            <a
                              href={dev.portfolio}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300"
                              title="Portfolio"
                            >
                              <LinkIcon size={16} />
                            </a>
                            <a
                              href={dev.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300"
                              title="LinkedIn"
                            >
                              <Linkedin size={16} />
                            </a>
                          </div>
                        </div>
                        <span className="text-blue-300 text-xs uppercase">
                          {dev.role}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
