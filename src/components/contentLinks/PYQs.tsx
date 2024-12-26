import React from 'react';
import PYQCard from './PYQCard';
import './pyqs.css';

const pyqData = [
  {
    title: 'Networking QP Solution - 2010',
    description: 'Previous year questions on the basics of networking.',
    color: '#FFE4E4',
    url: 'https://drive.google.com/file/d/1z55TRtdhtoX9JfvYyWgjqwaYkQt0l8LR/view'
  },
  {
    title: 'Networking QP Solution - 2011',
    description: 'Past exam questions related to data communication concepts.',
    color: '#E4FFE4',
    url: 'https://drive.google.com/file/d/1kQbDSsNOLhtD3Q19pWkAVcQ6s2KEOX79/view'
  },
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
