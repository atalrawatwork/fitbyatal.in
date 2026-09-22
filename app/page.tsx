import Link from 'next/link';
import Image from 'next/image';
import { TOOLS, NTRACK_HREF } from '@/lib/site';
import { BLOG_POSTS } from '@/lib/blogs';
import Newsletter from '@/components/Newsletter';
import AdSlot from '@/components/AdSlot';

export default function HomePage() {
  const latestPosts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);

  return (
    <>
      <section className="container grid items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Simple Fitness Tools <br />
            For A <span className="text-brand">Healthier You</span>
          </h1>
          <p className="mt-4 max-w-md text-[var(--muted)]">
            Free calculators and guides to help you track, analyze and improve your fitness.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/tools/tools" className="rounded-pill bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
              Explore Tools
            </Link>
            <Link href="/blogs/blog" className="rounded-pill border border-brand px-6 py-3 font-semibold text-brand">
              Read Blog
            </Link>
          </div>
        </div>
        {/* NOTE: this hero image link kept exactly as the original ntrack link, unchanged */}
        <a href={NTRACK_HREF}>
          <Image src="/images/hero.png" alt="Fitness" width={560} height={480} priority className="w-full" />
        </a>
      </section>

      <section className="container py-10">
        <h2 className="mb-8 text-2xl font-bold">Popular Tools</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {/* Original "AI Daily Food Tracker" ntrack card, link unchanged */}
          <a href={NTRACK_HREF} className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center transition hover:border-brand">
            <Image src="/images/logo.png" alt="" width={40} height={40} className="mx-auto" />
            <h3 className="mt-3 text-sm font-semibold">AI Daily Food Tracker</h3>
            <span className="mt-1 block text-xs text-brand">Use Now →</span>
          </a>
          {[
            { slug: 'calorie-calculator', name: 'Calories Calculator', img: '/images/calories.png' },
            { slug: 'protein-calculator', name: 'Protein Calculator', img: '/images/protein.png' },
            { slug: 'bmi-calculator', name: 'BMI Calculator', img: '/images/bmi.png' },
            { slug: 'tdee-calculator', name: 'TDEE Calculator', img: '/images/tdee.png' },
            { slug: 'water-intake-calculator', name: 'Water Intake Calculator', img: '/images/water.png' },
          ].map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center transition hover:border-brand"
            >
              <Image src={t.img} alt="" width={40} height={40} className="mx-auto" />
              <h3 className="mt-3 text-sm font-semibold">{t.name}</h3>
              <span className="mt-1 block text-xs text-brand">Use Now →</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tools/tools" className="font-semibold text-brand">
            View All Tools →
          </Link>
        </div>
      </section>

      <AdSlot slotId="home-mid" format="horizontal" className="container my-4" />

      <section className="container py-10">
        <h2 className="mb-8 text-2xl font-bold">Latest Blogs</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:border-brand">
              <Image src={post.image} alt="" width={400} height={220} className="h-44 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs font-semibold text-brand">{post.category}</span>
                <h3 className="mt-2 font-semibold">{post.title}</h3>
                <div className="mt-3 flex gap-2 text-xs text-[var(--muted)]">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blogs/blog" className="font-semibold text-brand">
            View All Articles →
          </Link>
        </div>
      </section>

      <section className="container pb-16">
        <Newsletter />
      </section>
    </>
  );
}
