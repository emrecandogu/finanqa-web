import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.finanqa.com';

  // Statik sayfalar
  const staticRoutes = [
    '/',
    '/about-us',
    '/contact-us',
    '/mobile',
    '/anqa',
    '/sss',
    '/privacy-policy',
    '/terms-of-service',
    '/academy',
    '/academy/articles',
    '/academy/quizzes',
    '/academy/dictionary',
    '/academy/videos',
    '/academy/games',
    '/academy/games/finquiz',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));

  return [
    ...staticUrls,
    // Dinamik rotalar (örn. makaleler) buraya eklenecek
  ];
} 