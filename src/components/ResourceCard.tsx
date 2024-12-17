import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResourceLink {
  name: string;
  url: string;
}

interface ResourceCardProps {
  title: string;
  icon: LucideIcon;
  links: ResourceLink[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, icon: Icon, links }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 mb-12">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-400 mr-3" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceCard;
