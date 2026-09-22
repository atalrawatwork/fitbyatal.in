import type { Metadata } from 'next';
import WeightLossCalculator from '@/components/calculators/WeightLossCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Weight Loss Planner',
  description: 'Plan a sustainable weight loss timeline with the exact daily calorie deficit you need.',
  alternates: { canonical: '/tools/weight-loss-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Weight Loss Calculator', path: '/tools/weight-loss-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Weight Loss Calculator', description: 'Plan a sustainable weight loss timeline with the exact daily calorie deficit you need.', slug: 'weight-loss-calculator' })} />
      <CalculatorShell title="Weight Loss Calculator" description="Plan a realistic weekly calorie deficit to reach your goal weight by your target date.">
        <WeightLossCalculator />
      </CalculatorShell>
    </>
  );
}
