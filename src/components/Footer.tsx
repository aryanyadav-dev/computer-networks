import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-md text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              We'd Love Your Feedback!
            </h2>
            <p className="text-gray-400 mb-8">
              Help us improve by taking a quick survey. Your input shapes our future updates.
            </p>
            
            <a
              href="https://forms.gle/ePGPwg4AmpWcrzVN8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-sm w-45"
            >
              Feedback Form
              <Send className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-blue-900/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Comp C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


