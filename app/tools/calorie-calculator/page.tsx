import type { Metadata } from 'next';
import CalorieCalculator from '@/components/calculators/CalorieCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Daily Calorie Calculator',
  description: 'Calculate your maintenance, cutting and bulking calorie targets based on age, weight, height and activity.',
  alternates: { canonical: '/tools/calorie-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Calorie Calculator', path: '/tools/calorie-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Calorie Calculator', description: 'Calculate your maintenance, cutting and bulking calorie targets based on age, weight, height and activity.', slug: 'calorie-calculator' })} />
      <CalculatorShell title="Calorie Calculator" description="Find your daily calorie needs to maintain, lose or gain weight, based on your activity level.">
        <CalorieCalculator />
      </CalculatorShell>
    </>
  );
}
