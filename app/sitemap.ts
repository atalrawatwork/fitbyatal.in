import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { TOOLS } from '@/lib/site';
import { BLOG_POSTS } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/contact-us', '/tools/tools', '/blogs/blog'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const toolRoutes = TOOLS.map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...toolRoutes, ...blogRoutes];
}
