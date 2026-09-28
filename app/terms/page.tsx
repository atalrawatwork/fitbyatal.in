import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions for using the FitByAtal website, calculators and articles.',
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return (
    <div className="container py-14">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms of Use', path: '/terms' }])} />
      <article className="mx-auto max-w-3xl leading-relaxed">
        <h1 className="text-4xl font-bold">Terms of Use</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Last updated: 28 September 2026</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Acceptance of terms</h2>
        <p className="my-3 text-[var(--muted)]">By using FitByAtal you agree to these terms. If you do not agree, please do not use the site.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Use of the site</h2>
        <p className="my-3 text-[var(--muted)]">The calculators and articles are provided free for personal, non-commercial use. You may not copy, scrape or republish our content at scale without permission.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">No guarantees</h2>
        <p className="my-3 text-[var(--muted)]">Results are estimates based on general formulas and may not suit your individual circumstances. The site is provided as is, without warranties of any kind.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Limitation of liability</h2>
        <p className="my-3 text-[var(--muted)]">To the fullest extent permitted by law, FitByAtal is not liable for any loss or damage arising from use of the site or reliance on its content.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Changes</h2>
        <p className="my-3 text-[var(--muted)]">We may update these terms from time to time. Continued use means you accept the updated terms.</p>
      </article>
    </div>
  );
}
