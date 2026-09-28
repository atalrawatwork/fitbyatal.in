import type { Metadata } from 'next';
import ProteinCalculator from '@/components/calculators/ProteinCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Protein Calculator - How Much Protein Per Day?',
  description: 'Find out how many grams of protein you need per day to build muscle, lose fat or stay healthy, in kg or lbs.',
  alternates: { canonical: '/tools/protein-calculator' },
  openGraph: { title: 'Protein Calculator - How Much Protein Per Day?', description: 'Find out how many grams of protein you need per day to build muscle, lose fat or stay healthy, in kg or lbs.', url: '/tools/protein-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Protein Calculator', path: '/tools/protein-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Protein Calculator', description: 'Calculate your daily protein target based on bodyweight and your training goal.', slug: 'protein-calculator' })} />
      <CalculatorShell slug="protein-calculator" title="Protein Calculator" description="Work out how much protein you need per day to build or preserve muscle.">
        <ProteinCalculator />
      </CalculatorShell>
    </>
  );
}
