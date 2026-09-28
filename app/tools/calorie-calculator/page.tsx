import type { Metadata } from 'next';
import CalorieCalculator from '@/components/calculators/CalorieCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Calorie Calculator - How Many Calories Should I Eat a Day?',
  description: 'Free calorie calculator using the Mifflin-St Jeor equation. Get your daily calories to lose weight, maintain or gain muscle.',
  alternates: { canonical: '/tools/calorie-calculator' },
  openGraph: { title: 'Calorie Calculator - How Many Calories Should I Eat a Day?', description: 'Free calorie calculator using the Mifflin-St Jeor equation. Get your daily calories to lose weight, maintain or gain muscle.', url: '/tools/calorie-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Calorie Calculator', path: '/tools/calorie-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Calorie Calculator', description: 'Calculate your maintenance, cutting and bulking calorie targets based on age, weight, height and activity.', slug: 'calorie-calculator' })} />
      <CalculatorShell slug="calorie-calculator" title="Calorie Calculator" description="Find your daily calorie needs to maintain, lose or gain weight, based on your activity level.">
        <CalorieCalculator />
      </CalculatorShell>
    </>
  );
}
