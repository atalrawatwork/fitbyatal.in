import type { Metadata } from 'next';
import MacroCalculator from '@/components/calculators/MacroCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Macro Split Calculator',
  description: 'Turn your calorie target into a protein, carbs and fat split for fat loss, maintenance or muscle gain.',
  alternates: { canonical: '/tools/macro-calculator' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Macro Calculator', path: '/tools/macro-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Macro Calculator', description: 'Turn your calorie target into a protein, carbs and fat split for fat loss, maintenance or muscle gain.', slug: 'macro-calculator' })} />
      <CalculatorShell title="Macro Calculator" description="Get a personalised protein, carb and fat split based on your daily calorie target.">
        <MacroCalculator />
      </CalculatorShell>
    </>
  );
}
