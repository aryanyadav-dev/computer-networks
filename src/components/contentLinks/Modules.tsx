import React from 'react';
import { Network, Database, Code, Terminal, Cloud, Shield } from 'lucide-react';
import ModuleCard from './ModuleCard';
import './modules.css';

const moduleData = [
  {
    title: 'Network Fundamentals',
    description: 'Learn the basics of computer networking, protocols, and architecture',
    color: '#FFE4E4',
    url: 'https://example.com/module1.pdf',
    icon: <Network size={24} color="#000" />
  },
  {
    title: 'Data Communication',
    description: 'Understanding data transmission, encoding, and network models',
    color: '#E4FFE4',
    url: 'https://example.com/module2.pdf',
    icon: <Database size={24} color="#000" />
  },
  {
    title: 'Network Security',
    description: 'Explore security protocols, encryption, and network protection',
    color: '#FFE4FF',
    url: 'https://example.com/module3.pdf',
    icon: <Code size={24} color="#000" />
  },
  {
    title: 'Advanced Networking',
    description: 'Deep dive into routing, switching, and network management',
    color: '#E4FFFF',
    url: 'https://example.com/module4.pdf',
    icon: <Terminal size={24} color="#000" />
  },
  {
    title: 'Cloud Computing',
    description: 'Learn about cloud services, infrastructure, and cloud-based applications',
    color: '#FFE7B4',
    url: 'https://example.com/module5.pdf',
    icon: <Cloud size={24} color="#000" />
  },
  {
    title: 'Network Protection',
    description: 'Understand advanced network protection techniques and firewalls',
    color: '#E5E5E5',
    url: 'https://example.com/module6.pdf',
    icon: <Shield size={24} color="#000" />
  }
];

const Modules: React.FC = () => {
  return (
    <div className="modules-container">
      <h2 className="modules-heading">Course Modules</h2>
      <p className="modules-text">
        Explore comprehensive computer networking modules designed to build your expertise
      </p>

      <div className="modules-grid">
        {moduleData.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </div>
  );
};

export default Modules;
