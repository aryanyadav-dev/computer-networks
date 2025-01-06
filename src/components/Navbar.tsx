import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Link as LinkIcon, Menu, X } from 'lucide-react';
import tcetLogo from '/tcet_logo.png';
import compLogo from '/comp.png';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'content' | 'developers'>('content');

  return (
    <>
      {/* Desktop Navbar */}
      <div className="relative w-full overflow-hidden">
        {/* Logos */}
        <div className="fixed top-4 left-4 flex items-center z-40">
          <Link
            to="https://comp-networks.vercel.app/"
            className="transition-transform hover:scale-105"
          >
            <img
              src={tcetLogo}
              alt="TCET Logo"
              className="h-13 w-13 md:h-20 md:w-20 object-contain rounded-lg"
              style={{ backgroundColor: 'transparent' }}
            />
          </Link>

          <div className="h-13 md:h-20 border-l-2 border-white ml-4"></div>

          <Link
            to="https://comp-networks.vercel.app/"
            className="transition-transform hover:scale-105"
          >
            <img
              src={compLogo}
              alt="Computer Engineering Department Logo"
              className="h-13 w-13 md:h-20 md:w-20 object-contain ml-4 rounded-lg"
              style={{ backgroundColor: 'transparent' }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 z-40 bg-black/30 backdrop-blur-md rounded-full px-10 py-6 items-center justify-center">
          <div className="flex space-x-12 items-center justify-center">
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
                          <Link
                            to={content.link}
                            className="text-white hover:text-blue-400 transition-colors font-semibold text-base"
                          >
                            {content.name}
                          </Link>
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 right-4 z-50 bg-black/30 backdrop-blur-md p-2 rounded-full"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:hidden bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 p-2"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Sidebar Content */}
        <div className="h-full pt-16 pb-8 px-6 overflow-y-auto">
          {/* Section Tabs */}
          <div className="flex mb-8 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveSection('content')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'content'
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Content
            </button>
            <button
              onClick={() => setActiveSection('developers')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'developers'
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Developers
            </button>
          </div>

          {/* Content Section */}
          {activeSection === 'content' && (
            <div className="space-y-6">
              {contentLinks.map((content, index) => (
                <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                  <Link
                    to={content.link}
                    onClick={() => setIsSidebarOpen(false)}
                    className="block"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {content.name}
                    </h3>
                    <p className="text-blue-300 text-sm">{content.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Developers Section */}
          {activeSection === 'developers' && (
            <div className="space-y-6">
              {developerLinks.map((dev, index) => (
                <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {dev.name}
                    </h3>
                    <p className="text-blue-300 text-sm mb-3">{dev.role}</p>
                    <div className="flex space-x-4">
                      <a
                        href={dev.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <LinkIcon size={16} className="mr-2" />
                        <span className="text-sm">Portfolio</span>
                      </a>
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <Linkedin size={16} className="mr-2" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;