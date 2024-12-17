import React from 'react';
import './AnimatedTitle.css';

const AnimatedTitle: React.FC = () => {
  return (
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span className="text-white text-6xl md:text-7xl font-bold">Computer</span>
        </div>
      </div>
      <div className="text-bottom">
        <div>
          <span className="text-blue-400 text-6xl md:text-7xl font-bold">Networks</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTitle;