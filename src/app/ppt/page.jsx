'use client'
import React from 'react';
import Navbar from '../components/Navbar';

const PPTPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Presentations</h1>
        {/* Add your PPT content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">PPT 1</h2>
            <p className="text-gray-600">Description of PPT 1...</p>
          </div>
          {/* Add more PPT cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default PPTPage; 