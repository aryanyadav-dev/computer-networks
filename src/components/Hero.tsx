import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center py-32">
      {/* Content */}
      <div className="relative z-10">
        <AnimatedTitle />
        <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4 mt-12 opacity-0 animate-[fadeIn_1s_ease-in_forwards_2.5s]">
          Explore the fundamentals of computer networking, protocols, and modern network architectures
        </p>
      </div>
    </div>
  );
};

export default Hero;
