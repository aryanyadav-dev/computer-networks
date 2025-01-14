import React from 'react';
import './AnimatedTitle.css';

const AnimatedTitle: React.FC = () => {
  return (
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span className="text-white text-5xl md:text-6xl font-bold">Computer</span>
        </div>
      </div>
      <div className="text-bottom">
        <div>
          <span className="text-blue-400 text-5xl md:text-6xl font-bold">Networks</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTitle;
