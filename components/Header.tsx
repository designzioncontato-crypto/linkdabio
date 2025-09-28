import React from 'react';
import { SocialLinks } from './SocialLinks';

interface HeaderProps {
  profileImageUrl: string;
  title: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = ({ profileImageUrl, title, description }) => {
  return (
    <header className="flex flex-col items-center text-center space-y-4 pt-8 pb-4">
      <img
        src={profileImageUrl}
        alt="Profile"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-accent shadow-lg"
      />
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {title}
      </h1>
      <p className="max-w-xl text-md sm:text-lg text-gray-400">
        {description}
      </p>
      <SocialLinks />
    </header>
  );
};