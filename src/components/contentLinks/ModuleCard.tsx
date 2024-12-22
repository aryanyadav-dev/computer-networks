import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  color: string;
  url: string;
  icon: React.ReactNode;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, color, url, icon }) => {
  return (
    <motion.div
      className="module-card"
      style={{ backgroundColor: color }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="module-card-content">
        <div className="module-card-icon">{icon}</div>
        <h3 className="module-card-title">{title}</h3>
        <p className="module-card-description">{description}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="module-card-download">
        <Download size={20} />
      </a>
    </motion.div>
  );
};

export default ModuleCard;