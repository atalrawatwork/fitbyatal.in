import type { Metadata } from 'next';
import RunningPaceCalculator from '@/components/calculators/RunningPaceCalculator';
import CalculatorShell from '@/components/CalculatorShell';
import { JsonLd, breadcrumbSchema, softwareAppSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Running Pace Calculator - min/km, min/mile & Race Times',
  description: 'Calculate running pace, time or distance and predict finish times for 5K, 10K, half marathon and marathon.',
  alternates: { canonical: '/tools/running-pace-calculator' },
  openGraph: { title: 'Running Pace Calculator - min/km, min/mile & Race Times', description: 'Calculate running pace, time or distance and predict finish times for 5K, 10K, half marathon and marathon.', url: '/tools/running-pace-calculator', type: 'website' },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Tools', path: '/tools/tools' }, { name: 'Running Pace Calculator', path: '/tools/running-pace-calculator' }])} />
      <JsonLd data={softwareAppSchema({ name: 'Running Pace Calculator', description: 'Work out your running pace and predict race finish times at your current fitness level.', slug: 'running-pace-calculator' })} />
      <CalculatorShell slug="running-pace-calculator" title="Running Pace Calculator" description="Convert distance and time into pace, and predict your 5K, 10K and half marathon times.">
        <RunningPaceCalculator />
      </CalculatorShell>
    </>
  );
}
