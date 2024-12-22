import React from 'react';
import StudyCard from './StudyCard';
import './study.css';

const studyData = [
  {
    title: 'Networking Basics',
    description: 'Study material covering the fundamentals of computer networking.',
    color: '#FFE4E4',
    url: 'https://example.com/networking-basics.pdf'
  },
  {
    title: 'Data Communication',
    description: 'Study material on data transmission and encoding techniques.',
    color: '#E4FFE4',
    url: 'https://example.com/data-communication.pdf'
  },
  {
    title: 'Network Security',
    description: 'Study material on security protocols and encryption in networking.',
    color: '#FFE4FF',
    url: 'https://example.com/network-security.pdf'
  },
  {
    title: 'Advanced Networking',
    description: 'Study material on advanced topics in routing, switching, and network management.',
    color: '#E4FFFF',
    url: 'https://example.com/advanced-networking.pdf'
  }
];

const StudyMaterials: React.FC = () => {
  return (
    <div className="study-container">
      <h1 className="study-heading">Study Materials</h1>
      <p className="study-text">
        Here you can find additional study resources, including links and documents for further reading and study.
      </p>

      <div className="study-grid">
        {studyData.map((study, index) => (
          <StudyCard key={index} {...study} />
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;
