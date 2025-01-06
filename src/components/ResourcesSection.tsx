import React from 'react';
import ResourceCard from './ResourceCard';
import { resources } from '../data/resources';

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 bg-black/40 backdrop-blur-sm rounded-2xl">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;