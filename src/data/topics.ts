import { Network, Code2, Server, Globe2, BookOpen, Cpu } from 'lucide-react';

export const topics = [
  {
    title: "Introduction to Computer Networks",
    icon: Network,
    description: "Overview of computer networks, including types, topologies, and key networking devices. Introduction to communication systems, switching techniques, and the OSI Reference Model.",
    topics: ["Network Components", "Network Classification", "Network Topologies", "Networking Devices", "Communication Systems", "OSI Model"]
  },
  {
    title: "Introduction to TCP/IP Addressing",
    icon: Code2,
    description: "Exploration of TCP/IP Protocol Suite, addressing schemes (physical, logical, port), and introduction to IPv4 addressing including classful, classless, and NAT concepts.",
    topics: ["TCP/IP Protocol Suite", "Address Types", "IPV4 Addressing", "NAT", "Interface & Services"]
  },
  {
    title: "Data Link Layer",
    icon: Server,
    description: "Study of data link layer functions, error detection and correction, protocols, and multiple access methods. Coverage of Ethernet and related protocols.",
    topics: ["Error Detection & Correction", "Data Link Protocols", "MAC & LLC Sublayers", "Multiple Access Protocols", "Ethernet Protocols"]
  },
  {
    title: "Network Layer",
    icon: Cpu,
    description: "Analysis of network layer design, routing algorithms, congestion control, and quality of service mechanisms like Leaky Bucket and Token Bucket algorithms.",
    topics: ["Network Layer Design", "Routing Algorithms", "Congestion Control", "QoS Algorithms"]
  },
  {
    title: "Transport Layer",
    icon: Globe2,
    description: "Examination of transport layer services, multiplexing, connection-oriented and connectionless protocols, and congestion control principles.",
    topics: ["Transport Services", "Multiplexing", "Transport Protocols", "Connection Management", "Congestion Control"]
  },
  {
    title: "Application Layer",
    icon: BookOpen,
    description: "Overview of application layer protocols and services, including web protocols, email, DNS, and peer-to-peer applications. Introduction to socket programming.",
    topics: ["Web Protocols", "FTP", "Email Protocols", "DNS", "P2P Applications", "Socket Programming"]
  },
] as const;

