import React from 'react';
import PPTCard from './PPTCard';
import './ppts.css';

const pptData = [
  {
    title: 'Intro to Computer Networks PPT-1',
    description: 'An introduction to computer networks, focusing on the basic principles, types of networks, and key terminologies.',
    color: '#FFE4E4',
    url: 'https://drive.google.com/file/d/16dK-8Uw4SslRKmopeUEX8PWjV5c5euQT/view'
  },
  {
    title: 'Intro to Computer Networks PPT-2',
    description: 'A deeper dive into data transmission, encoding techniques, and the basics of communication between devices in a network.',
    color: '#E4FFE4',
    url: 'https://drive.google.com/file/d/1it8aW3N7-3PzoPn347A9l5g-dTXZUofy/view'
  },
  {
    title: 'IP Addressing PPT',
    description: 'A comprehensive guide to IP addressing, including subnetting, classful addressing, and private/public IP addresses.',
    color: '#FFE4FF',
    url: 'https://drive.google.com/file/d/11k8srP_qpnI7uxVdfqfEVlaAI-UTQlMj/view'
  },
  {
    title: 'TCP Congestion Control PPT',
    description: 'Explains the mechanisms of TCP congestion control, including slow start, congestion avoidance, and fast retransmit.',
    color: '#B2FFE4',
    url: 'https://drive.google.com/file/d/1Ny_zAkfAbcD7VY9BjyD2c36UI1r0R4ho/view'
  },
  {
    title: 'Congestion Control PPT',
    description: 'In-depth analysis of network congestion control strategies, such as flow control, congestion window, and traffic management techniques.',
    color: '#B2FFE4',
    url: 'https://drive.google.com/file/d/1QGOMMHG9cVWTcGYrPWg3pXQSMuTVPOVL/view'
  },
  {
    title: 'Physical Layer, Link Layer, Switching PPT',
    description: 'Overview of the physical and data link layers, focusing on transmission media, signal encoding, and switching techniques.',
    color: '#E4FFFF',
    url: 'https://drive.google.com/file/d/1Z2TZJ_dlyxmLyjkrjbnx2iIx1E2U2dUU/view'
  },
  {
    title: 'Data Link Layer PPT',
    description: 'Detailed insights into the data link layer, including protocols like Ethernet, and concepts like VLANs and error detection.',
    color: '#B2E4FF',
    url: 'https://drive.google.com/file/d/1m8TJ0TEFs-DJ8REAcPyiGD28e2LMpdgV/view'
  },
  {
    title: 'Data Link Layer PPT-2',
    description: 'Explores data link layer protocols, including MAC addressing, and their role in ensuring reliable data transfer.',
    color: '#E4E4FF',
    url: 'https://drive.google.com/file/d/1Vpo_hj3a1tMLO_3hijj4DDRd63yUMsrj/view'
  },
  {
    title: 'Data Link Layer PPT-3',
    description: 'Examines ARP, RARP, and flow control mechanisms in the data link layer, essential for efficient communication.',
    color: '#FFE4CC',
    url: 'https://drive.google.com/file/d/1F0U3bQK6N3nZsbWYzkmBqMq9RCnsMxWG/view'
  },
  {
    title: 'Data Link Layer PPT-4',
    description: 'Focuses on error detection and correction techniques, such as checksums and cyclic redundancy checks (CRC), used in the data link layer.',
    color: '#CCFFE4',
    url: 'https://drive.google.com/file/d/11ZANWJEsvWhOWgTRxRWxIQIJkUM7Tdwz/view'
  },
  {
    title: 'Physical Layer PPT',
    description: 'Covers the physical layer, including transmission media types, signal encoding methods, and their impact on network performance.',
    color: '#B2FFE4',
    url: 'https://drive.google.com/file/d/1qV0jR5VT6uToCWNpykJwJtEVLnhwgxiu/view'
  },
  {
    title: 'Network Layer PPT',
    description: 'Explains the network layer’s role in routing and forwarding packets, and the importance of IP addressing and routing protocols.',
    color: '#E4CCFF',
    url: 'https://drive.google.com/file/d/11ODuoJ6OBWrR1IyUePOOCetipnks4Swr/view'
  },
  {
    title: 'Network Layer PPT-1',
    description: 'Discusses shortest path routing algorithms such as Dijkstra and Bellman-Ford, and their applications in real-world networks.',
    color: '#FFFFCC',
    url: 'https://drive.google.com/file/d/1bOX8CDLvEBSMC5k8GGcARPJ8_gf8NR4T/view'
  },
  {
    title: 'Network Layer PPT-2',
    description: 'Provides an overview of the OSI model with a focus on the network layer’s responsibilities, including routing and packet forwarding.',
    color: '#CCFFFF',
    url: 'https://drive.google.com/file/d/14OxG2eyv5RyCcmWQy71QqyG9dyc-5-pS/view'
  },
  {
    title: 'Network Layer PPT-3',
    description: 'Introduces wireless communication standards and protocols, such as Wi-Fi, LTE, and 5G, and their impact on the network layer.',
    color: '#FFE4B2',
    url: 'https://drive.google.com/file/d/1ZdAGIbQGW4QVZJA2lbB0XtczJhoiD2eH/view'
  },
  {
    title: 'Network Layer IP PPT',
    description: 'Explores the IP protocol suite, focusing on IPv4 and IPv6 addressing, and their role in packet routing and network communication.',
    color: '#E4FFB2',
    url: 'https://drive.google.com/file/d/1cnTxvrS7HZopo0NUD_4m6_suHy1psm98/view'
  },
  {
    title: 'Network Layer Routing PPT',
    description: 'Comprehensive overview of static and dynamic routing protocols, including RIP, OSPF, and BGP, and their use in large-scale networks.',
    color: '#E4FFB2',
    url: 'https://drive.google.com/file/d/1lvhERF1gk3b4JicVbmDKyJZ6ZW42DX6X/view'
  },
  {
    title: 'Module 6: Application Layer PPT',
    description: 'An overview of the application layer, covering protocols like HTTP, FTP, SMTP, and their role in supporting end-user applications.',
    color: '#FFE4E4',
    url: 'https://drive.google.com/file/d/1DgGpmRdh6eWYd6cSC2G24aLFnMIBxZQc/view'
  },
  {
    title: 'Subnetting a Network PPT',
    description: 'A hands-on guide to subnetting, explaining how to efficiently divide IP address spaces and design scalable network topologies.',
    color: '#FFB2E4',
    url: 'https://drive.google.com/file/d/1bWj1S4SETe1gGxo4e8ie00DxGMUqUk34/view'
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
