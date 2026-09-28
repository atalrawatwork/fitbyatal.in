import { MetadataRoute } from 'next';
import { SITE_URL, TOOLS } from '@/lib/site';
import { BLOG_POSTS } from '@/lib/blogs';

// Fixed dates: `new Date()` on every build tells Google every page "changed today",
// which makes it ignore lastmod for the whole site. Only bump these when the page really changes.
const SITE_UPDATED = new Date('2026-09-28');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '', priority: 1, freq: 'weekly' },
    { path: '/tools/tools', priority: 0.9, freq: 'weekly' },
    { path: '/blogs/blog', priority: 0.9, freq: 'weekly' },
    { path: '/about', priority: 0.4, freq: 'yearly' },
    { path: '/contact-us', priority: 0.3, freq: 'yearly' },
    { path: '/privacy-policy', priority: 0.2, freq: 'yearly' },
    { path: '/terms', priority: 0.2, freq: 'yearly' },
    { path: '/disclaimer', priority: 0.2, freq: 'yearly' },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: SITE_UPDATED,
    changeFrequency: r.freq as 'weekly' | 'yearly',
    priority: r.priority,
  }));

  const toolRoutes: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...toolRoutes, ...blogRoutes];
}
