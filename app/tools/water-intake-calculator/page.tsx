import type { Metadata } from 'next';
import WaterIntakeCalculator from '@/components/calculators/WaterIntakeCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Water Intake Calculator - How Much Water Should I Drink?',
  description: 'Calculate your daily water intake in litres or ounces from body weight, activity and climate.',
  alternates: { canonical: '/tools/water-intake-calculator' },
  openGraph: { title: 'Water Intake Calculator - How Much Water Should I Drink?', description: 'Calculate your daily water intake in litres or ounces from body weight, activity and climate.', url: '/tools/water-intake-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Water Intake Calculator', path: '/tools/water-intake-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Water Intake Calculator', description: 'Calculate your personalised daily water intake target in litres and cups.', slug: 'water-intake-calculator' })} />
      <CalculatorShell slug="water-intake-calculator" title="Water Intake Calculator" description="Find out how much water you should drink each day based on weight, activity and climate.">
        <WaterIntakeCalculator />
      </CalculatorShell>
    </>
  );
}
