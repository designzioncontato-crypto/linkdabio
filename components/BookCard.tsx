import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <a
      href={book.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Learn more about ${book.title} by ${book.author}`}
      className="group relative block w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black/50 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50"
    >
      <img
        src={book.coverUrl}
        alt={`Cover of ${book.title}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-3 sm:p-4">
        <h3 className="text-white text-sm sm:text-base font-bold leading-tight drop-shadow-md">{book.title}</h3>
        <p className="text-gray-300 text-xs sm:text-sm drop-shadow-md">{book.author}</p>
      </div>
    </a>
  );
};