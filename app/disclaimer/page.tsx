import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Medical & Affiliate Disclaimer',
  description: 'FitByAtal content is for general education only and is not medical advice. Read our medical and affiliate disclosures.',
  alternates: { canonical: '/disclaimer' },
};

export default function Page() {
  return (
    <div className="container py-14">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Medical & Affiliate Disclaimer', path: '/disclaimer' }])} />
      <article className="mx-auto max-w-3xl leading-relaxed">
        <h1 className="text-4xl font-bold">Medical & Affiliate Disclaimer</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Last updated: 28 September 2026</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Not medical advice</h2>
        <p className="my-3 text-[var(--muted)]">All calculators, articles and tools on FitByAtal are for general information and education only. They are not a substitute for professional medical advice, diagnosis or treatment.</p>
        <p className="my-3 text-[var(--muted)]">Always speak to a doctor or registered dietitian before starting a new diet, supplement or exercise programme, especially if you are pregnant, under 18, have a medical condition or take medication.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Accuracy of calculators</h2>
        <p className="my-3 text-[var(--muted)]">Calculators use standard estimation formulas. Real needs vary between individuals, so treat every result as a starting point and adjust based on your own progress and professional guidance.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Affiliate disclosure</h2>
        <p className="my-3 text-[var(--muted)]">Some links on this site may be affiliate links. If you buy through them we may earn a commission at no extra cost to you. This never affects our recommendations.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Advertising</h2>
        <p className="my-3 text-[var(--muted)]">We may display ads through Google AdSense. Advertisers do not influence our editorial content.</p>
      </article>
    </div>
  );
}
