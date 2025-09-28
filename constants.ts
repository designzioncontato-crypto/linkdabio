import { Book, FeaturedContent } from './types';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Em Breve...",
    author: "Eduardo Varenes",
    coverUrl: "https://i.imgur.com/y6gQmze.png",
    linkUrl: "https://www.example.com",
  },
  {
    id: 2,
    title: "Em breve...",
    author: "Eduado Varenes",
    coverUrl: "https://i.imgur.com/vJO3mmo.png",
    linkUrl: "https://www.example.com",
  },
];

export const FEATURED_CONTENT: FeaturedContent = {
  enabled: false,
  imageUrl: "https://picsum.photos/seed/featured/800/1200",
  title: "Featured Book of the Month",
  subtitle: "An in-depth look at a modern classic. Click to read the review.",
  linkUrl: "https://www.example.com/featured-review",
};
