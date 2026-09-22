import type { Metadata } from 'next';
import WaterIntakeCalculator from '@/components/calculators/WaterIntakeCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Daily Water Intake Calculator',
  description: 'Calculate your personalised daily water intake target in litres and cups.',
  alternates: { canonical: '/tools/water-intake-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Water Intake Calculator', path: '/tools/water-intake-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Water Intake Calculator', description: 'Calculate your personalised daily water intake target in litres and cups.', slug: 'water-intake-calculator' })} />
      <CalculatorShell title="Water Intake Calculator" description="Find out how much water you should drink each day based on weight, activity and climate.">
        <WaterIntakeCalculator />
      </CalculatorShell>
    </>
  );
}
