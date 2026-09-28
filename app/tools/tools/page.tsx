import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TOOLS } from '@/lib/site';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'All Fitness Calculators & Tools',
  description: 'Browse every free fitness calculator on FitByAtal — BMI, TDEE, macros, body fat, protein, calories burned and more.',
  alternates: { canonical: '/tools/tools' },
  openGraph: { title: 'All Fitness Calculators & Tools | FitByAtal', description: 'Free BMI, TDEE, calorie, macro, protein, body fat and more calculators.', url: '/tools/tools', type: 'website' },
};

export default function ToolsPage() {
  return (
    <div className="container py-14">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }])} />

      <h1 className="text-4xl font-bold">All Fitness Tools</h1>
      <p className="mt-3 max-w-xl text-[var(--muted)]">
        Free, accurate calculators for every part of your fitness journey. No signup, no ads blocking the results.
      </p>


      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-brand"
          >
            <Image src={tool.image} alt={`${tool.name} icon`} width={40} height={40} />
            <h2 className="mt-3 font-semibold">{tool.name}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{tool.description}</p>
            <span className="mt-3 block text-sm font-medium text-brand">Use Now →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
