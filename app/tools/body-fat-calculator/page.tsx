import type { Metadata } from 'next';
import BodyFatCalculator from '@/components/calculators/BodyFatCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Body Fat Percentage Calculator',
  description: 'Estimate body fat % from waist, neck and height measurements using the trusted US Navy method.',
  alternates: { canonical: '/tools/body-fat-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Body Fat Calculator', path: '/tools/body-fat-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Body Fat Calculator', description: 'Estimate body fat % from waist, neck and height measurements using the trusted US Navy method.', slug: 'body-fat-calculator' })} />
      <CalculatorShell title="Body Fat Calculator" description="Estimate your body fat percentage using the US Navy circumference method.">
        <BodyFatCalculator />
      </CalculatorShell>
    </>
  );
}
