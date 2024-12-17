import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-16 border border-blue-500/20">
      <h2 className="text-2xl font-bold text-white mb-4">
        Additional Resources
      </h2>
      <p className="text-gray-300 mb-6">
        Enhance your learning with these carefully curated resources:
      </p>
      <ul className="space-y-4 text-gray-300">
        <li className="flex items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
          RFC Documents and Standards
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
          Network Simulation Tools
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
          Video Tutorials and Lectures
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
          Practice Problems and Solutions
        </li>
      </ul>
    </div>
  );
};

export default Resources;