export interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  linkUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface FeaturedContent {
  enabled: boolean;
  imageUrl: string;
  title: string;
  subtitle: string;
  linkUrl: string;
}
