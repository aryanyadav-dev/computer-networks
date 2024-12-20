'use client'
import React from 'react';
import Navbar from '../components/Navbar';

const PracticalsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Practicals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Practical 1</h2>
            <p className="text-gray-600">Description of practical experiment 1...</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Practical 2</h2>
            <p className="text-gray-600">Description of practical experiment 2...</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </div>
          {/* Add more practical cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default PracticalsPage; 