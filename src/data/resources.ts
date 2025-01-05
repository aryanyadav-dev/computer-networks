import { Video, Server, FileText, BookOpen } from 'lucide-react';

export const resources = [
  {
    title: "Network Tools",
    icon: Server,
    links: [
      { name: "Wireshark", url: "https://www.wireshark.org/" },
      { name: "Cisco Packet Tracer", url: "https://www.netacad.com/courses/packet-tracer" },
      { name: "GNS3 Network Simulator", url: "https://www.gns3.com/" }
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
    title: "YouTube Tutorials",
    icon: Video,
    links: [
      { name: "Networking Tutorials Playlist 1", url: "https://youtube.com/playlist?list=PL-XMIxXL1qWKzlMNVyUTQny24JKmC0RP8&si=KXheo5IxEwdIL0O8" },
      { name: "Networking Tutorials Playlist 2", url: "https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&si=5Sq7_Zdnz-sky45x" },
      { name: "Networking Tutorials Playlist 3", url: "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=kDV_WDMe3Y1x2tdj" }
    ]
  },
  {
    title: "Learning Courses",
    icon: BookOpen,
    links: [
      { name: "Scaler Computer Networks Course", url: "https://www.scaler.com/topics/course/free-computer-networks-course/" },
      { name: "Basics of Computer Networking Couse", url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/basics-of-computer-networking" },
      { name: "DNS Deep Dive Course", url: "https://www.udemy.com/course/dns-deep-dive/" },
      { name: "Networking Fundamentals Course", url: "https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/" },
      { name: "Computer Networking Masterclass: Interview Success", url: "https://www.udemy.com/course/computer-networking-masterclass-interview-success/" },
      { name: "Cyber Security Masterclass - All about IT Security", url: "https://www.udemy.com/course/cyber-security-masterclass-all-about-it-security/" },
    ]
  }
] as const;

