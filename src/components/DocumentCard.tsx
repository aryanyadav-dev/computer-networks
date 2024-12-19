import React from 'react';
import { FileIcon, DownloadIcon, EyeIcon } from 'lucide-react';

interface DocumentCardProps {
  title: string;
  description: string;
  date: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
  previewUrl: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  description,
  date,
  fileSize,
  fileType,
  downloadUrl,
  previewUrl,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 hover:bg-white/10 transition-all">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <FileIcon className="h-6 w-6 text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-300 mb-2">{description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>{date}</span>
            <span>•</span>
            <span>{fileSize}</span>
            <span>•</span>
            <span>{fileType}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
            title="Preview"
          >
            <EyeIcon className="h-5 w-5" />
          </a>
          <a
            href={downloadUrl}
            download
            className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
            title="Download"
          >
            <DownloadIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};