import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about FitByAtal, our mission, and how our free fitness calculators and health guides help people achieve a healthier lifestyle.',
  alternates: { canonical: '/about' },
};

const stats = [
  { value: '10K+', label: 'Monthly Readers' },
  { value: '15+', label: 'Free Calculators' },
  { value: '100+', label: 'Guides & Articles' },
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
            <h2 className="text-3xl font-bold text-brand">{s.value}</h2>
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

      <div className="mt-16 rounded-2xl bg-brand px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-bold">Start Your Fitness Journey Today</h2>
        <Link href="/tools/tools" className="mt-5 inline-block rounded-pill bg-white px-6 py-3 font-semibold text-brand">
          Explore Tools
        </Link>
      </div>
    </div>
  );
}
