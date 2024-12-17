import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TopicCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  topics: string[];
}

const TopicCard: React.FC<TopicCardProps> = ({ title, icon: Icon, description, topics }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 hover:bg-black/50 transition-all duration-300 border border-blue-500/20">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="space-y-2">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicCard;