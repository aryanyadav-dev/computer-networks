'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Your Logo</span>
              </Link>
            </div>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
              About
            </Link>
            <div className="relative group">
              <button className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
                Contents
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                <Link href="/modules" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Modules
                </Link>
                <Link href="/ppt" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  PPT
                </Link>
                <Link href="/pyq" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  PYQ
                </Link>
                <Link href="/study-materials" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Study Materials
                </Link>
                <Link href="/practicals" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Practicals
                </Link>
              </div>
            </div>
            <Link href="/contact" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">
            About
          </Link>
          <Link href="/modules" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Modules
          </Link>
          <Link href="/ppt" className="block py-2 px-4 text-sm hover:bg-gray-200">
            PPT
          </Link>
          <Link href="/pyq" className="block py-2 px-4 text-sm hover:bg-gray-200">
            PYQ
          </Link>
          <Link href="/study-materials" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Study Materials
          </Link>
          <Link href="/practicals" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Practicals
          </Link>
          <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 