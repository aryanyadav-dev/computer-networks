import React from 'react';
import { Download } from 'lucide-react';

interface PracticalCardProps {
  title: string;
  description: string;
  color: string;
  url: string;
}

const PracticalCard: React.FC<PracticalCardProps> = ({ title, description, color, url }) => {
  return (
    <div className="practical-card" style={{ backgroundColor: color }}>
      <div className="practical-card-content">
        <h3 className="practical-card-title">{title}</h3>
        <p className="practical-card-description">{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="practical-card-download">
        <Download size={20} />
      </a>
    </div>
  );
};

export default PracticalCard;
