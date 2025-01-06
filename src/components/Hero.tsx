import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center py-32">
      {/* Content */}
      <div className="relative z-10">
        <AnimatedTitle />
        
        {/* Description with inline animation */}
        <p
          className="text-xl text-blue-200 max-w-2xl mx-auto px-10 mt-5"
          style={{
            opacity: 0,
            animation: 'fadeInDescription 2s ease-in forwards 1.5s', // Animation with delay
          }}
        >
          Explore the fundamentals of computer networking, protocols, and modern network architectures.
        </p>
      </div>

      {/* Inline keyframes for animation */}
      <style>
        {`
          @keyframes fadeInDescription {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
