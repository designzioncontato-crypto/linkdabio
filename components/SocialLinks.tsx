import React from 'react';
import { SOCIAL_LINKS } from '../socials';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-6 mt-4">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${link.name} profile`}
          className="text-accent hover:text-white transition-colors duration-300"
        >
          <link.icon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      ))}
    </div>
  );
};
