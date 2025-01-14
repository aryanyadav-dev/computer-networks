import React from 'react';
import PracticalCard from './PracticalCard';
import './practicals.css';

const practicalData = [
  {
    title: 'Practical 1: Networking Lab',
    description: 'Hands-on lab exercises for networking protocols and configurations.',
    color: '#FFE4E4', 
  },
  {
    title: 'Practical 2: Various networking devices in Packet Tracer',
    description: 'Understanding various networking devices used to create a network in CISCO packet tracer.',
    color: '#E4FFE4',
    url: 'https://drive.google.com/file/d/1X6lYSlajG8lDyV1rZgGJi_kOTbXgNOqT/view'
  },
  {
    title: 'Practical 3: CRC and Hamming Code',
    description: 'Implement hamming code and CRC techniques for error detection and error correction.',
    color: '#FFE4FF',
    url: 'https://drive.google.com/file/d/1Fw-XiTuy0OjnBRrX1EJKKfpPukyxEp0t/view'
  },
  {
    title: 'Practical 4: Basic Networking Operations and Troubleshooting',
    description: 'Usage of basic networking commands in Linux (ifconfig, tracert, nslookup, netstat, ARP, IP, dig, route)',
    color: '#E4FFFF',
    url: 'https://drive.google.com/file/d/1jCqan-4amyQgMkmQuu4xldsqXauFXldy/view'
  },
  {
    title: 'Practical 5: IP addressing, Subnet and Subnet Mask',
    description: 'Set up and configure IP addressing, subnetting, masking a network using CISCO packet tracer.',
    color: '#FFE4E4',
    url: 'https://drive.google.com/file/d/1z321Iz4EzmuQEkCEl3TfO-A7c04xkni4/view'
  },
  {
    title: 'Practical 6',
    description: 'Lab exercises focused on cloud networking and infrastructure.',
    color: '#E4FFE4',
    url: ''
  },
  {
    title: 'Practical 7: Implementing Dynamic routing',
    description: 'Build a simple network topology and configure it for dynamic routing protocol using packet tracer.',
    color: '#FFE7B4',
    url: 'https://drive.google.com/file/d/181dyNr9CPcKBzWP1pTsz5qFpya9--qGi/view'
  },
  {
    title: 'Practical 8: Socket Programming using TCP and Remote Login',
    description: 'Implement socket programming using TCP and UDP.',
    color: '#E5E5E5',
    url: 'https://drive.google.com/file/d/1516CkfcNIssu_Gvf7KNEguobYP3_nHzO/view'
  },
  {
    title: 'Practical 9',
    description: 'Set up and configure a wireless network, including access points, SSID, and security configurations.',
    color: '#D4E4FF',
    url: ''
  },
  {
    title: 'Practical 10: Simulating CSMA/CD for a Local Area Network',
    description: 'To learn about how CSMA/CD is used in a LAN.',
    color: '#FFD4E4',
    url: 'https://drive.google.com/file/d/1-HJCS9iLfx8Ta4fyxdqPUlocHbQXb8hi/view'
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
