import React from 'react';
import StudyCard from './StudyCard';
import './study.css';

const studyData = [
  {
    title: 'Computer Network Notes',
    description: 'Study material covering the fundamentals of computer networking.',
    color: '#FFE4E4',
    url: 'https://drive.google.com/file/d/1UGSApef7HMLtIM0NlpEy0ead8S9Jv6I_/view'
  },
  {
    title: 'Physical Layer',
    description: 'Study material and information related to physical layer in networking.',
    color: '#E4FFE4',
    url: 'https://drive.google.com/file/d/191rdI71rrnDVHM1L_0iQZtlMg7TrGBKn/view'
  },
  {
    title: 'Medium Sub - Access Layer',
    description: 'Study material and information related to MAC layer in networking.', 
    color: '#FFE4FF',
    url: 'https://drive.google.com/file/d/1ELPPacNUt1H4W-Vnq7tjVKszueeo4l2g/view'
  },
  {
    title: 'Network Hardware Components',
    description: 'Study material on Network Hardware Components',
    color: '#E4FFFF',
    url: 'https://drive.google.com/file/d/1i00yhj4qtmL9xlP4fQbYTg8UeslWl1df/view'
  },
  {
    title: 'Wireless LANS and WANS',
    description: 'Comprehensive notes on error detection, correction, and protocols in the Data Link Layer.',
    color: '#FFE7B4',
    url: 'https://drive.google.com/file/d/1JSUx52Y5hcfT2Ls5VK13TrxXsSmSatVt/view'
  },
  {
    title: 'DHCP Notes',
    description: 'Detailed explanation of transport layer protocols like TCP, UDP, and congestion control.',
    color: '#E5E5E5',
    url: 'https://drive.google.com/file/d/1tVKahOzSZBjyuM7-nuzAKCqQZRsQdqLG/view'
  },
  {
    title: 'DNS Notes',
    description: 'Study material covering HTTP, FTP, SMTP, DNS, and other application layer protocols.',
    color: '#D4E4FF',
    url: 'https://docs.google.com/document/d/1IA7xY8ZFdj6VaOk0KN_o4wctF8nmyS2M/view'
  },
  {
    title: 'FTP Notes',
    description: 'Study material on routing algorithms like Dijkstra, Bellman-Ford, and network layer protocols.',
    color: '#FFD4E4',
    url: 'https://drive.google.com/file/d/1urnohSSXV_KnkrqGhQ3GBxRVmHWQKh8t/view'
  },
  {
    title: 'HTTP Notes',
    description: 'Notes on the OSI and TCP/IP models, with a comparison of their layers and functionalities.',
    color: '#FFF4D4',
    url: 'https://drive.google.com/file/d/15d4w-LiGAx_fzcLb4XSLioatq6ULZYi7/view'
  },
  {
    title: 'OSI Data Link Layer Notes',
    description: 'Learn about IPv4 and IPv6 addressing, subnetting, and addressing schemes.',
    color: '#FFE4D4',
    url: 'https://drive.google.com/file/d/1y4CdwWQ-re30Zk-uBB__aDN7dNi-ZGYp/view'
  },
  {
    title: 'SMTP Notes',
    description: 'Study material on circuit switching, packet switching, and virtual circuit switching.',
    color: '#E4FFD4',
    url: 'https://drive.google.com/file/d/11_bG6T_sqPG2zuHNFgjnvLLdy9-0jWhF/view'
  },
  {
    title: 'Telnet Notes',
    description: 'An introduction to network security, including firewalls, encryption, and secure protocols.',
    color: '#D4FFE4',
    url: 'https://drive.google.com/file/d/193P8KfRf8mHbOisCZTF5wCK6znl322RQ/view'
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
