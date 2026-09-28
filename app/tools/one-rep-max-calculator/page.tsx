import type { Metadata } from 'next';
import OneRepMaxCalculator from '@/components/calculators/OneRepMaxCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'One Rep Max (1RM) Calculator - Squat, Bench, Deadlift',
  description: 'Estimate your one rep max for any lift from a lighter set using the Epley formula, plus training percentages of your 1RM.',
  alternates: { canonical: '/tools/one-rep-max-calculator' },
  openGraph: { title: 'One Rep Max (1RM) Calculator - Squat, Bench, Deadlift', description: 'Estimate your one rep max for any lift from a lighter set using the Epley formula, plus training percentages of your 1RM.', url: '/tools/one-rep-max-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'One Rep Max Calculator', path: '/tools/one-rep-max-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'One Rep Max Calculator', description: 'Estimate your true one-rep max and training percentages from any recent set of reps.', slug: 'one-rep-max-calculator' })} />
      <CalculatorShell slug="one-rep-max-calculator" title="One Rep Max Calculator" description="Estimate your one-rep max for any lift from a recent set, using the Epley formula.">
        <OneRepMaxCalculator />
      </CalculatorShell>
    </>
  );
}
