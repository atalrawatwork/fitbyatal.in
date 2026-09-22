import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blogs';
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import AdSlot from '@/components/AdSlot';
import Newsletter from '@/components/Newsletter';
import BlogBody from '@/components/BlogBody';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="container py-12">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blogs/blog' }, { name: post.title, path: `/blogs/${post.slug}` }])} />
      <JsonLd data={articleSchema({ title: post.title, description: post.excerpt, slug: post.slug, image: post.image, datePublished: post.date })} />
      <JsonLd data={faqSchema(post.faqs)} />

      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-[var(--muted)]">
          <Link href="/blogs/blog">Blog</Link> / <span className="text-brand">{post.category}</span>
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
        <div className="mt-3 flex gap-2 text-sm text-[var(--muted)]">
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <Image src={post.image} alt={post.title} width={800} height={420} className="my-8 w-full rounded-2xl object-cover" priority />

        <AdSlot slotId="blog-in-article-1" format="in-article" className="my-8" />

        <BlogBody paragraphs={post.body} />

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-xl font-bold">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            {post.faqs.map((f) => (
              <div key={f.q}>
                <p className="font-medium">{f.q}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <AdSlot slotId="blog-in-article-2" format="in-article" className="my-8" />

        <div className="mt-10">
          <Newsletter compact />
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold">Related reading</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blogs/${r.slug}`} className="rounded-xl border border-[var(--border)] p-4 hover:border-brand">
                  <span className="text-xs font-semibold text-brand">{r.category}</span>
                  <p className="mt-1 font-medium">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
