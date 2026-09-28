import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getPostBySlug, wordCount } from '@/lib/blogs';
import { TOOLS } from '@/lib/site';
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import AdSlot from '@/components/AdSlot';
import Newsletter from '@/components/Newsletter';
import BlogBody, { slugify } from '@/components/BlogBody';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ['Atal'],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.image] },
  };
}

const fmt = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  // Related = same category first, then anything else. Better internal linking than "first 2 posts".
  const related = [...BLOG_POSTS]
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const tools = (post.tools ?? []).map((s) => TOOLS.find((t) => t.slug === s)).filter(Boolean) as typeof TOOLS;
  const toc = post.body.filter((p) => p.startsWith('## ')).map((p) => p.replace(/^## /, ''));

  return (
    <div className="container py-12">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blogs/blog' }, { name: post.title, path: `/blogs/${post.slug}` }])} />
      <JsonLd data={articleSchema({ title: post.title, description: post.excerpt, slug: post.slug, image: post.image, datePublished: post.date, dateModified: post.updated, wordCount: wordCount(post) })} />
      <JsonLd data={faqSchema(post.faqs)} />

      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-[var(--muted)]">
          <Link href="/blogs/blog">Blog</Link> / <span className="text-brand">{post.category}</span>
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">
          By <Link href="/about" className="underline">Atal</Link> · Published {fmt(post.date)}
          {post.updated && post.updated !== post.date ? ` · Updated ${fmt(post.updated)}` : ''} · {post.readTime}
        </p>

        <Image src={post.image} alt={post.title} width={800} height={420} className="my-8 w-full rounded-2xl object-cover" priority />

        {toc.length > 2 && (
          <nav aria-label="Table of contents" className="mb-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="font-semibold">In this article</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
              {toc.map((h) => (
                <li key={h}><a href={`#${slugify(h)}`} className="text-brand hover:underline">{h}</a></li>
              ))}
            </ol>
          </nav>
        )}

        <BlogBody paragraphs={post.body} />

        {tools.length > 0 && (
          <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-6">
            <h2 className="text-lg font-bold">Try the free calculators</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {tools.map((t) => (
                <Link key={t.slug} href={`/tools/${t.slug}`} className="rounded-pill bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-xl font-bold">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            {post.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-8 text-xs text-[var(--muted)]">
          This article is for general information only and is not medical advice. Read our{' '}
          <Link href="/disclaimer" className="underline">disclaimer</Link> and speak to a qualified professional before changing your diet or training, especially if you have a medical condition.
        </p>

        <AdSlot slotId="blog-in-article-2" format="in-article" className="my-8" />

        <div className="mt-10">
          <Newsletter compact />
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-xl font-bold">Related reading</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blogs/${r.slug}`} className="rounded-xl border border-[var(--border)] p-4 hover:border-brand">
                  <span className="text-xs font-semibold text-brand">{r.category}</span>
                  <p className="mt-1 font-medium">{r.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
