import { Book, FeaturedContent } from './types';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    coverUrl: "https://picsum.photos/seed/dune/300/450",
    linkUrl: "https://www.example.com",
  },
  {
    id: 2,
    title: "Foundation",
    author: "Isaac Asimov",
    coverUrl: "https://picsum.photos/seed/foundation/300/450",
    linkUrl: "https://www.example.com",
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverUrl: "https://picsum.photos/seed/hailmary/300/450",
    linkUrl: "https://www.example.com",
  },
  {
    id: 4,
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    coverUrl: "https://picsum.photos/seed/threebody/300/450",
    linkUrl: "https://www.example.com",
  },
  {
    id: 5,
    title: "Hyperion",
    author: "Dan Simmons",
    coverUrl: "https://picsum.photos/seed/hyperion/300/450",
    linkUrl: "https://www.example.com",
  },
  {
    id: 6,
    title: "Brave New World",
    author: "Aldous Huxley",
    coverUrl: "https://picsum.photos/seed/bravenew/300/450",
    linkUrl: "https://www.example.com",
  },
];

export const FEATURED_CONTENT: FeaturedContent = {
  enabled: true,
  imageUrl: "https://picsum.photos/seed/featured/800/1200",
  title: "Featured Book of the Month",
  subtitle: "An in-depth look at a modern classic. Click to read the review.",
  linkUrl: "https://www.example.com/featured-review",
};
