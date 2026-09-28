import type { Metadata } from 'next';
import BodyFatCalculator from '@/components/calculators/BodyFatCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Body Fat Percentage Calculator - US Navy Method',
  description: 'Estimate your body fat percentage with the US Navy tape-measure method. Free, no signup, works in cm or inches for men and women.',
  alternates: { canonical: '/tools/body-fat-calculator' },
  openGraph: { title: 'Body Fat Percentage Calculator - US Navy Method', description: 'Estimate your body fat percentage with the US Navy tape-measure method. Free, no signup, works in cm or inches for men and women.', url: '/tools/body-fat-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Body Fat Calculator', path: '/tools/body-fat-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Body Fat Calculator', description: 'Estimate body fat % from waist, neck and height measurements using the trusted US Navy method.', slug: 'body-fat-calculator' })} />
      <CalculatorShell slug="body-fat-calculator" title="Body Fat Calculator" description="Estimate your body fat percentage using the US Navy circumference method.">
        <BodyFatCalculator />
      </CalculatorShell>
    </>
  );
}
