import type { Metadata } from 'next';
import ProteinCalculator from '@/components/calculators/ProteinCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Protein Intake Calculator',
  description: 'Calculate your daily protein target based on bodyweight and your training goal.',
  alternates: { canonical: '/tools/protein-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Protein Calculator', path: '/tools/protein-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Protein Calculator', description: 'Calculate your daily protein target based on bodyweight and your training goal.', slug: 'protein-calculator' })} />
      <CalculatorShell title="Protein Calculator" description="Work out how much protein you need per day to build or preserve muscle.">
        <ProteinCalculator />
      </CalculatorShell>
    </>
  );
}
