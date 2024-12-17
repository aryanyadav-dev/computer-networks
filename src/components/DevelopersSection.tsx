import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface Developer {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const developers: Developer[] = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300",
    github: "#",
    linkedin: "#",
    email: "#"
  },
  {
    name: "Sarah Johnson",
    role: "Network Architect",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300",
    github: "#",
    linkedin: "#",
    email: "#"
  },
  {
    name: "Michael Rodriguez",
    role: "Security Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300",
    github: "#",
    linkedin: "#",
    email: "#"
  }
];

const DevelopersSection: React.FC = () => {
  return (
    <section id="developers" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 text-center">
              <img 
                src={dev.image} 
                alt={dev.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{dev.name}</h3>
              <p className="text-blue-400 mb-4">{dev.role}</p>
              <div className="flex justify-center space-x-4">
                {dev.github && (
                  <a href={dev.github} className="text-gray-300 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {dev.linkedin && (
                  <a href={dev.linkedin} className="text-gray-300 hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {dev.email && (
                  <a href={dev.email} className="text-gray-300 hover:text-white">
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;