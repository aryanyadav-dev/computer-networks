import React from 'react';
import PPTCard from './PPTCard';
import './ppts.css';

const pptData = [
  {
    title: 'Networking Basics',
    description: 'PowerPoint presentation on the fundamentals of networking.',
    color: '#FFE4E4',
    url: 'https://example.com/networking-basics.pptx'
  },
  {
    title: 'Data Communication',
    description: 'Learn about data transmission and encoding techniques.',
    color: '#E4FFE4',
    url: 'https://example.com/data-communication.pptx'
  },
  {
    title: 'Network Security',
    description: 'Explore security protocols and encryption in networking.',
    color: '#FFE4FF',
    url: 'https://example.com/network-security.pptx'
  },
  {
    title: 'Advanced Networking',
    description: 'A deep dive into routing, switching, and network management.',
    color: '#E4FFFF',
    url: 'https://example.com/advanced-networking.pptx'
  },
  {
    title: 'Cloud Computing Basics',
    description: 'Introduction to cloud computing and its services.',
    color: '#E4E4FF',
    url: 'https://example.com/cloud-computing-basics.pptx'
  },
  {
    title: 'IoT Fundamentals',
    description: 'Learn the basics of the Internet of Things (IoT) and its applications.',
    color: '#FFE4E4',
    url: 'https://example.com/iot-fundamentals.pptx'
  }
];

const PPTs: React.FC = () => {
  return (
    <div className="ppts-container">
      <h1 className="ppts-heading">Lecture Presentations</h1>
      <p className="ppts-text">
        Here you can find the available PowerPoint presentations for your courses.
      </p>

      <div className="ppts-grid">
        {pptData.map((ppt, index) => (
          <PPTCard key={index} {...ppt} />
        ))}
      </div>
    </div>
  );
};

export default PPTs;
