import React from 'react';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  content?: string;
  links?: FooterLink[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, content, links }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {content && <p className="text-gray-400">{content}</p>}
      {links && (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterSection;