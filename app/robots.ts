import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/', '/dashboard/', '/account/', '/user/', '/users/', '/api/', '/config/', '/includes/', '/backend/'],
      },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'AhrefsBot', disallow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
