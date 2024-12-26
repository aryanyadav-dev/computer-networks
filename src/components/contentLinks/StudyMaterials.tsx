import React from 'react';
import StudyCard from './StudyCard';
import './study.css';

const studyData = [
  {
    title: 'Computer Network Notes',
    description: 'Comprehensive study material covering the fundamental concepts of computer networking, including types of networks, protocols, and network topologies.',
    color: '#FFE4E4',
    url: 'https://drive.google.com/file/d/1UGSApef7HMLtIM0NlpEy0ead8S9Jv6I_/view'
  },
  {
    title: 'Physical Layer',
    description: 'Study material focused on the physical layer of networking, including transmission media, signal encoding, and physical devices used in network communication.',
    color: '#E4FFE4',
    url: 'https://drive.google.com/file/d/191rdI71rrnDVHM1L_0iQZtlMg7TrGBKn/view'
  },
  {
    title: 'Medium Sub - Access Layer',
    description: 'Study material covering the MAC (Medium Access Control) layer, including its role in managing access to shared network media and protocols like Ethernet and Wi-Fi.',
    color: '#FFE4FF',
    url: 'https://drive.google.com/file/d/1ELPPacNUt1H4W-Vnq7tjVKszueeo4l2g/view'
  },
  {
    title: 'Network Hardware Components',
    description: 'Detailed study material on the various hardware components used in networking, such as routers, switches, hubs, and network interface cards (NICs).',
    color: '#E4FFFF',
    url: 'https://drive.google.com/file/d/1i00yhj4qtmL9xlP4fQbYTg8UeslWl1df/view'
  },
  {
    title: 'Wireless LANS and WANS',
    description: 'Comprehensive notes on wireless local area networks (WLANs) and wide area networks (WANS), covering technologies like Wi-Fi, LTE, and 5G.',
    color: '#FFE7B4',
    url: 'https://drive.google.com/file/d/1JSUx52Y5hcfT2Ls5VK13TrxXsSmSatVt/view'
  },
  {
    title: 'DHCP Notes',
    description: 'Detailed explanation of the Dynamic Host Configuration Protocol (DHCP), its operation, and how it assigns IP addresses dynamically in a network.',
    color: '#E5E5E5',
    url: 'https://drive.google.com/file/d/1tVKahOzSZBjyuM7-nuzAKCqQZRsQdqLG/view'
  },
  {
    title: 'DNS Notes',
    description: 'Study material on the Domain Name System (DNS), explaining how domain names are resolved to IP addresses and the structure of DNS servers.',
    color: '#D4E4FF',
    url: 'https://drive.google.com/file/d/1wW3PjBi1ES2UHSP2HDnjcRAyQyIH1MRv/view'
  },
  {
    title: 'FTP Notes',
    description: 'Study material on the File Transfer Protocol (FTP), including its operation, commands, and use cases for transferring files over a network.',
    color: '#FFD4E4',
    url: 'https://drive.google.com/file/d/1urnohSSXV_KnkrqGhQ3GBxRVmHWQKh8t/view'
  },
  {
    title: 'HTTP Notes',
    description: 'Study material on the Hypertext Transfer Protocol (HTTP), including its role in web communication, request-response model, and HTTP methods.',
    color: '#FFF4D4',
    url: 'https://drive.google.com/file/d/15d4w-LiGAx_fzcLb4XSLioatq6ULZYi7/view'
  },
  {
    title: 'OSI Data Link Layer Notes',
    description: 'Learn about the Data Link Layer in the OSI model, focusing on its role in error detection, flow control, and MAC addressing.',
    color: '#FFE4D4',
    url: 'https://drive.google.com/file/d/1y4CdwWQ-re30Zk-uBB__aDN7dNi-ZGYp/view'
  },
  {
    title: 'SMTP Notes',
    description: 'Study material on the Simple Mail Transfer Protocol (SMTP), explaining how email messages are transferred between mail servers.',
    color: '#E4FFD4',
    url: 'https://drive.google.com/file/d/11_bG6T_sqPG2zuHNFgjnvLLdy9-0jWhF/view'
  },
  {
    title: 'Telnet Notes',
    description: 'An introduction to Telnet, a protocol used for remote login and command execution on remote devices over a network.',
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
