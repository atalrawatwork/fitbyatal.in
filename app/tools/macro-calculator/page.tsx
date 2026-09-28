import type { Metadata } from 'next';
import MacroCalculator from '@/components/calculators/MacroCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Macro Calculator - Protein, Carb & Fat Targets',
  description: 'Free macro calculator. Get daily protein, carbohydrate and fat grams for fat loss, maintenance or muscle gain based on your calories.',
  alternates: { canonical: '/tools/macro-calculator' },
  openGraph: { title: 'Macro Calculator - Protein, Carb & Fat Targets', description: 'Free macro calculator. Get daily protein, carbohydrate and fat grams for fat loss, maintenance or muscle gain based on your calories.', url: '/tools/macro-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Macro Calculator', path: '/tools/macro-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Macro Calculator', description: 'Turn your calorie target into a protein, carbs and fat split for fat loss, maintenance or muscle gain.', slug: 'macro-calculator' })} />
      <CalculatorShell slug="macro-calculator" title="Macro Calculator" description="Get a personalised protein, carb and fat split based on your daily calorie target.">
        <MacroCalculator />
      </CalculatorShell>
    </>
  );
}
