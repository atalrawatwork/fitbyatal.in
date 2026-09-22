import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blogs';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import Newsletter from '@/components/Newsletter';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Fitness & Nutrition Blog',
  description: 'Practical, no-fluff fitness, nutrition and training guides — for India, the US and the UK.',
  alternates: { canonical: '/blogs/blog' },
};

export default function BlogListPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="container py-14">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blogs/blog' }])} />

      <h1 className="text-4xl font-bold">The FitByAtal Blog</h1>
      <p className="mt-3 max-w-xl text-[var(--muted)]">
        Straightforward guides on training, nutrition and recovery — written to actually answer the question, not pad word count.
      </p>

      <AdSlot slotId="blog-top" format="horizontal" className="my-8" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:border-brand">
            <Image src={post.image} alt="" width={400} height={220} className="h-44 w-full object-cover" />
            <div className="p-5">
              <span className="text-xs font-semibold text-brand">{post.category}</span>
              <h2 className="mt-2 font-semibold leading-snug">{post.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">{post.excerpt}</p>
              <div className="mt-3 flex gap-2 text-xs text-[var(--muted)]">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <Newsletter />
      </div>
    </div>
  );
}
