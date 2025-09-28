import React from 'react';
import { FeaturedContent } from '../types';

interface FeaturedCardProps {
  content: FeaturedContent;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ content }) => {
  return (
    <a
      href={content.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${content.title}: ${content.subtitle}`}
      className="group relative block w-full h-[60vh] max-h-[450px] mb-12 rounded-lg overflow-hidden shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${content.imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight drop-shadow-lg">
          {content.title}
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-gray-200 drop-shadow-lg">
          {content.subtitle}
        </p>
      </div>
    </a>
  );
};
