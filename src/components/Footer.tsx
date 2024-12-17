import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="border-t border-blue-900/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Comp C . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
