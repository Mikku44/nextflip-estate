export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  images: string[];
  content: string; // Markdown string
}

export const MOCK_BLOG: BlogPost = {
  slug: "luxury-condo-living-bangkok",
  title: "The Future of Luxury Condo Living in Bangkok",
  date: "December 24, 2025",
  author: "NextFlip Estate",
  images: [
    '/images/condo24.jpg',
    '/images/condo25.jpg',
    '/images/condo26.jpg',
  ],
  content: `
## Why Sukhumvit remains the top choice
Living in the heart of Bangkok offers more than just a home; it's a lifestyle choice. 

### Key Features:
* **Smart Home Integration:** Control your entire unit via smartphone.
* **Infinity Pools:** Overlooking the city skyline.
* **Sustainable Design:** Green spaces integrated into the architecture.

> "True luxury is not just about the price, but the experience of space and light."

Whether you are looking for an investment or a dream home, the current market trends show a significant shift towards wellness-focused amenities.
  `
};