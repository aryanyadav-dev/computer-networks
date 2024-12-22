import React from 'react';
import PracticalCard from './PracticalCard';
import './practicals.css';

const practicalData = [
  {
    title: 'Networking Lab',
    description: 'Hands-on lab exercises for networking protocols and configurations.',
    color: '#FFE4E4',
    url: 'https://example.com/networking-lab.pptx'
  },
  {
    title: 'Data Communication Lab',
    description: 'Lab exercises on data transmission and encoding techniques.',
    color: '#E4FFE4',
    url: 'https://example.com/data-communication-lab.pptx'
  },
  {
    title: 'Network Security Lab',
    description: 'Practical exercises on network security protocols and encryption.',
    color: '#FFE4FF',
    url: 'https://example.com/network-security-lab.pptx'
  },
  {
    title: 'Advanced Networking Lab',
    description: 'Advanced lab exercises on routing, switching, and network management.',
    color: '#E4FFFF',
    url: 'https://example.com/advanced-networking-lab.pptx'
  },
  {
    title: 'Wireless Networking Lab',
    description: 'Explore wireless networks and related configurations.',
    color: '#FFE4E4',
    url: 'https://example.com/wireless-networking-lab.pptx'
  },
  {
    title: 'Cloud Networking Lab',
    description: 'Lab exercises focused on cloud networking and infrastructure.',
    color: '#E4FFE4',
    url: 'https://example.com/cloud-networking-lab.pptx'
  }
];

const Practicals: React.FC = () => {
  return (
    <div className="practicals-container">
      <h1 className="practicals-heading">Practicals</h1>
      <p className="practicals-text">
        Welcome to the Practicals page. Here you will find lab and practical materials, including resources and guidelines for your practical sessions.
      </p>

      <div className="practicals-grid">
        {practicalData.map((practical, index) => (
          <PracticalCard key={index} {...practical} />
        ))}
      </div>
    </div>
  );
};

export default Practicals;
