import type { Metadata } from 'next';
import WeightLossCalculator from '@/components/calculators/WeightLossCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Weight Loss Calculator - How Long to Reach Your Goal Weight',
  description: 'Plan a realistic weight loss date and daily calorie target for your goal weight, in kg or lbs.',
  alternates: { canonical: '/tools/weight-loss-calculator' },
  openGraph: { title: 'Weight Loss Calculator - How Long to Reach Your Goal Weight', description: 'Plan a realistic weight loss date and daily calorie target for your goal weight, in kg or lbs.', url: '/tools/weight-loss-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Weight Loss Calculator', path: '/tools/weight-loss-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Weight Loss Calculator', description: 'Plan a sustainable weight loss timeline with the exact daily calorie deficit you need.', slug: 'weight-loss-calculator' })} />
      <CalculatorShell slug="weight-loss-calculator" title="Weight Loss Calculator" description="Plan a realistic weekly calorie deficit to reach your goal weight by your target date.">
        <WeightLossCalculator />
      </CalculatorShell>
    </>
  );
}
