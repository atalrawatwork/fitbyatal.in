import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { BLOG_POSTS } from '@/lib/blogs';
import { TOOLS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about FitByAtal, our mission, and how our free fitness calculators and health guides help people achieve a healthier lifestyle.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About FitByAtal', description: 'Who we are and how our free fitness calculators and guides are made.', url: '/about', type: 'website' },
};

// Real numbers only. The old page claimed "10K+ monthly readers", "15+ calculators" and "100+ guides",
// none of which matched the site - false claims hurt trust (E-E-A-T) and can violate AdSense policy.
const stats = [
  { value: String(TOOLS.length), label: 'Free Calculators' },
  { value: String(BLOG_POSTS.length), label: 'In-depth Guides' },
  { value: '0', label: 'Signups Needed' },
  { value: '100%', label: 'Free, Always' },
];

const values = [
  { title: 'Healthy Lifestyle', text: 'Practical, sustainable advice over fads and quick fixes.' },
  { title: 'Free Calculators', text: 'Every tool on this site is free to use, with no signup required.' },
  { title: 'Helpful Guides', text: 'Clear, no-fluff articles written to actually answer your question.' },
];

export default function AboutPage() {
  return (
    <div className="container py-14">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold">Why FitByAtal Exists</h1>
          <p className="mt-4 text-[var(--muted)]">
            FitByAtal started as a simple idea: fitness tracking shouldn&apos;t require an app, a login, or a
            subscription. Just fast, accurate calculators and straightforward guides — free, for anyone who
            wants to understand their own numbers.
          </p>
        </div>
        <Image src="/images/about-hero.png" alt="About FitByAtal" width={520} height={420} className="w-full rounded-2xl" />
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center">
            <p className="text-3xl font-bold text-brand">{s.value}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-[var(--border)] p-6">
            <h3 className="font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{v.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold">How we make our calculators and guides</h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          FitByAtal is written and maintained by Atal. Every calculator uses a published, widely accepted method: the Mifflin-St Jeor equation for BMR and calories,
          the US Navy circumference method for body fat, the Epley formula for one rep max and MET values for calories burned. Each tool page explains the formula
          it uses, its limits, and links to the guides that go deeper.
        </p>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          Our content is general education, not medical advice. Please read our <Link href="/disclaimer" className="text-brand underline">disclaimer</Link> and
          talk to a doctor or registered dietitian for personal health decisions. Spotted a mistake? Email <strong>hello@fitbyatal.in</strong> and we will fix it and update the article date.
        </p>
      </section>

      <div className="mt-16 rounded-2xl bg-brand px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Start Your Fitness Journey Today</h2>
        <Link href="/tools/tools" className="mt-5 inline-block rounded-pill bg-white px-6 py-3 font-semibold text-brand">
          Explore Tools
        </Link>
      </div>
    </div>
  );
}
