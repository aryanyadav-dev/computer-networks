'use client'
import React from 'react';
import Navbar from '../components/Navbar';

const StudyMaterialsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Study Materials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Notes</h2>
            <p className="text-gray-600">Comprehensive study notes...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Reference Books</h2>
            <p className="text-gray-600">Recommended reading materials...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Additional Resources</h2>
            <p className="text-gray-600">Extra learning materials...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialsPage; 