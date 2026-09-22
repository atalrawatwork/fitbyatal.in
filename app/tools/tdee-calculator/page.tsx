import type { Metadata } from 'next';
import TdeeCalculator from '@/components/calculators/TdeeCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'TDEE Calculator (BMR + Activity)',
  description: 'Find your TDEE — the calories you burn per day including activity — using the Mifflin-St Jeor formula.',
  alternates: { canonical: '/tools/tdee-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'TDEE Calculator', path: '/tools/tdee-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'TDEE Calculator', description: 'Find your TDEE — the calories you burn per day including activity — using the Mifflin-St Jeor formula.', slug: 'tdee-calculator' })} />
      <CalculatorShell title="TDEE Calculator" description="Calculate your Total Daily Energy Expenditure based on your BMR and activity level.">
        <TdeeCalculator />
      </CalculatorShell>
    </>
  );
}
