import React from 'react';
import { Header } from './components/Header';
import { BookCard } from './components/BookCard';
import { FeaturedCard } from './components/FeaturedCard';
import { BOOKS, FEATURED_CONTENT } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header
          profileImageUrl="https://i.imgur.com/vKV4Swp.png"
          title="Eduardo Varenes"
          description="Um cristão entusiasta do universo Marvel,
          construindo seus próprios mundos como escritor."
        />

        {FEATURED_CONTENT.enabled && (
          <div className="mt-8">
             <FeaturedCard content={FEATURED_CONTENT} />
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {BOOKS.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
      <footer className="text-center py-6 text-accent text-sm">
        <p>&copy; {new Date().getFullYear()} Eduardo Varenes. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
