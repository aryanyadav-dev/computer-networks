import React from 'react';
import PYQCard from './PYQCard';
import './pyqs.css';

const pyqData = [
  {
    title: 'Networking QP Solution - 2010',
    description: 'Previous year questions on the basics of networking.',
    color: '#FFE4E4',
    url: 'https://example.com/data-communication-2020.pdf'
  },
  {
    title: 'Networking QP Solution - 2011',
    description: 'Past exam questions related to data communication concepts.',
    color: '#E4FFE4',
    url: 'https://example.com/data-communication-2021.pdf'
  },
  {
    title: 'Network Security - 2020',
    description: 'Previous year questions on network security and encryption.',
    color: '#FFE4FF',
    url: 'https://example.com/network-security-2020.pdf'
  },
  {
    title: 'Advanced Networking - 2019',
    description: 'Questions from previous exams on advanced networking topics.',
    color: '#E4FFFF',
    url: 'https://example.com/advanced-networking-2019.pdf'
  },
  {
    title: 'Wireless Networking - 2018',
    description: 'Past exam questions on wireless networking protocols and setups.',
    color: '#FFE4E4',
    url: 'https://example.com/wireless-networking-2018.pdf'
  },
  {
    title: 'Cloud Networking - 2017',
    description: 'Questions related to cloud networking concepts and infrastructure.',
    color: '#E4FFE4',
    url: 'https://example.com/cloud-networking-2017.pdf'
  }
];

const PYQs: React.FC = () => {
  return (
    <div className="pyqs-container">
      <h1 className="pyqs-heading">Previous Year Questions</h1>
      <p className="pyqs-text">
        Here you can find a collection of past exam questions for your study purposes.
      </p>

      <div className="pyqs-grid">
        {pyqData.map((pyq, index) => (
          <PYQCard key={index} {...pyq} />
        ))}
      </div>
    </div>
  );
};

export default PYQs;
