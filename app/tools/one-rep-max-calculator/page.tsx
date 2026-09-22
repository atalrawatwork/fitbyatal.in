import type { Metadata } from 'next';
import OneRepMaxCalculator from '@/components/calculators/OneRepMaxCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '1RM Calculator',
  description: 'Estimate your true one-rep max and training percentages from any recent set of reps.',
  alternates: { canonical: '/tools/one-rep-max-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'One Rep Max Calculator', path: '/tools/one-rep-max-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'One Rep Max Calculator', description: 'Estimate your true one-rep max and training percentages from any recent set of reps.', slug: 'one-rep-max-calculator' })} />
      <CalculatorShell title="One Rep Max Calculator" description="Estimate your one-rep max for any lift from a recent set, using the Epley formula.">
        <OneRepMaxCalculator />
      </CalculatorShell>
    </>
  );
}
