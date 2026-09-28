import type { Metadata } from 'next';
import CaloriesBurnedCalculator from '@/components/calculators/CaloriesBurnedCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Calories Burned Calculator - Walking, Running, Gym & More',
  description: 'Estimate calories burned for walking, running, cycling, swimming and gym workouts using MET values and your body weight.',
  alternates: { canonical: '/tools/calories-burned-calculator' },
  openGraph: { title: 'Calories Burned Calculator - Walking, Running, Gym & More', description: 'Estimate calories burned for walking, running, cycling, swimming and gym workouts using MET values and your body weight.', url: '/tools/calories-burned-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Calories Burned Calculator', path: '/tools/calories-burned-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Calories Burned Calculator', description: 'See how many calories you burn during common workouts using accurate MET-based calculations.', slug: 'calories-burned-calculator' })} />
      <CalculatorShell slug="calories-burned-calculator" title="Calories Burned Calculator" description="Estimate calories burned during walking, running, cycling, swimming, weights and more.">
        <CaloriesBurnedCalculator />
      </CalculatorShell>
    </>
  );
}
