import React from 'react';
import { Download } from 'lucide-react'; 

interface PYQCardProps {
  title: string;
  description: string;
  color: string;
  url: string;
}

const PYQCard: React.FC<PYQCardProps> = ({ title, description, color, url }) => {
  return (
    <div className="pyq-card" style={{ backgroundColor: color }}>
      <div className="pyq-card-content">
        <h3 className="pyq-card-title">{title}</h3>
        <p className="pyq-card-description">{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="pyq-card-download">
        <Download size={20} color="white" /> 
      </a>
    </div>
  );
};

export default PYQCard;
