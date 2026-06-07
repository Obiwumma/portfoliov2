import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Explicitly disallow crawling of API routes if you have them
      disallow: '/api/', 
    },
    sitemap: 'https://pascal-obiwumma.vercel.app/sitemap.xml',
  };
}