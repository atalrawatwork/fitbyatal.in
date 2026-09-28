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
      // Only pure scrapers / SEO-tool crawlers stay blocked.
      // GPTBot / ClaudeBot were unblocked: AI assistants (ChatGPT, Claude, Perplexity) are a real
      // source of US/UK referral traffic and citations. Re-add them here if you disagree.
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'AhrefsBot', disallow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
