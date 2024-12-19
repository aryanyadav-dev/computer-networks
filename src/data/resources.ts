import { Book, Video, Server, FileText } from 'lucide-react';

export const resources = [
  {
    title: "Documentation & Standards",
    icon: Book,
    links: [
      { name: "RFC Editor - Official RFC Documents", url: "https://www.rfc-editor.org/" },
      { name: "IEEE 802 Standards", url: "https://www.ieee802.org/" },
      { name: "IETF Documentation", url: "https://www.ietf.org/standards/" }
    ]
  },
  {
    title: "Learning Platforms",
    icon: Video,
    links: [
      { name: "Cisco Networking Academy", url: "https://www.netacad.com/" },
      { name: "Computer Networks Course - Coursera", url: "https://www.coursera.org/learn/computer-networking" },
      { name: "Network + Certification Training", url: "https://www.comptia.org/certifications/network" }
    ]
  },
  {
    title: "Practice Problems",
    icon: FileText,
    links: [
      { name: "Networking Practice Problems PDF", url: "https://drive.google.com/file/d/1DICgX2ghNCpc_9OJ-C-YhpJ_tw4W_dA2/view" }
    ]
  },
  {
    title: "Network Tools",
    icon: Server,
    links: [
      { name: "Wireshark", url: "https://www.wireshark.org/" },
      { name: "Cisco Packet Tracer", url: "https://www.netacad.com/courses/packet-tracer" },
      { name: "GNS3 Network Simulator", url: "https://www.gns3.com/" }
    ]
  }
] as const;