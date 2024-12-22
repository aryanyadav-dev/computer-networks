import React from 'react';
import { Download } from 'lucide-react';

interface PPTCardProps {
  title: string;
  description: string;
  color: string;
  url: string;
}

const PPTCard: React.FC<PPTCardProps> = ({ title, description, color, url }) => {
  return (
    <div className="ppt-card" style={{ backgroundColor: color }}>
      <div className="ppt-card-content">
        <h3 className="ppt-card-title">{title}</h3>
        <p className="ppt-card-description">{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="ppt-card-download">
        <Download size={20} />
      </a>
    </div>
  );
};

export default PPTCard;
