import React from 'react';
import { Network, Database, Code, Terminal, Cloud, Shield } from 'lucide-react';
import ModuleCard from './ModuleCard';
import './modules.css';

const moduleData = [
  {
    title: 'Introduction to Computer Networks',
    description: 'Definition of a computer network, components, classification, types, and devices such as hubs, switches, routers, and firewalls.',
    color: '#FFE4E4',
    url: 'https://drive.google.com/file/d/1oWpaMJu3nCc1TD_1kKEfrUG-CdXTl2Tl/view',
    icon: <Network size={24} color="#000" />
  },
  {
    title: 'Introduction to TCP/IP Addressing',
    description: 'Learn the TCP/IP Protocol Suite, addressing types, IPv4 addressing, NAT, and translation tables.',
    color: '#E4FFE4',
    url: 'https://example.com/module2.pdf',
    icon: <Database size={24} color="#000" />
  },
  {
    title: 'Data Link Layer',
    description: 'Explore the Data Link Layer, including error detection, correction methods, MAC and LLC sublayers, and Ethernet protocols.',
    color: '#FFE4FF',
    url: 'https://drive.google.com/file/d/1HPok66f5Ge4qucGFUIur5KrU8l6o95kq/view',
    icon: <Code size={24} color="#000" />
  },
  {
    title: 'Network Layer',
    description: 'Understand the Network Layer, including routing algorithms, congestion control, and quality of service.',
    color: '#E4FFFF',
    url: 'https://drive.google.com/file/d/1s3tAx8IzqzMy4VmCV9MhrNzqiw5mxbXN/view',
    icon: <Terminal size={24} color="#000" />
  },
  {
    title: 'Transport Layer',
    description: 'Study transport layer services, protocols like Go-Back-N and Selective Repeat, and congestion control principles.',
    color: '#FFE7B4',
    url: 'https://drive.google.com/file/d/1nRjFXBmOeyvT25Hussz6nYpp934aHhuT/view',
    icon: <Cloud size={24} color="#000" />
  },
  {
    title: 'Application Layer',
    description: 'Learn about application protocols, web applications, and socket programming with UDP and TCP.',
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
