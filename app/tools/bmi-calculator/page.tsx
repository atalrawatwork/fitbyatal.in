import type { Metadata } from 'next';
import BmiCalculator from '@/components/calculators/BmiCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Free BMI Calculator (kg/cm & lbs/inches) - Check Your BMI',
  description: 'Free BMI calculator for adults. Enter height and weight in kg/cm or lbs/inches to get your BMI, category and what it means, including Asian BMI cut-offs.',
  alternates: { canonical: '/tools/bmi-calculator' },
  openGraph: { title: 'Free BMI Calculator (kg/cm & lbs/inches) - Check Your BMI', description: 'Free BMI calculator for adults. Enter height and weight in kg/cm or lbs/inches to get your BMI, category and what it means, including Asian BMI cut-offs.', url: '/tools/bmi-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'BMI Calculator', path: '/tools/bmi-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'BMI Calculator', description: 'Find your Body Mass Index in seconds. Enter your height and weight to see your BMI and category.', slug: 'bmi-calculator' })} />
      <CalculatorShell slug="bmi-calculator" title="BMI Calculator" description="Calculate your Body Mass Index instantly and see what your BMI means for your health.">
        <BmiCalculator />
      </CalculatorShell>
    </>
  );
}
