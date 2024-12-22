import React from 'react';
import { Download } from 'lucide-react'; 

interface StudyCardProps {
  title: string;
  description: string;
  color: string;
  url: string;
}

const StudyCard: React.FC<StudyCardProps> = ({ title, description, color, url }) => {
  return (
    <div className="study-card" style={{ backgroundColor: color }}>
      <div className="study-card-content">
        <h3 className="study-card-title">{title}</h3>
        <p className="study-card-description">{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="study-card-download">
        <Download size={20} color="white" /> {/* Use the Download icon */}
      </a>
    </div>
  );
};

export default StudyCard;
