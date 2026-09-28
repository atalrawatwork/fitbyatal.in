'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, cmToIn, inToCm, kgToLb, lbToKg } from '../UnitToggle';

function classify(bmi: number) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#3B82F6' };
  if (bmi < 25) return { label: 'Healthy weight', color: '#22C55E' };
  if (bmi < 30) return { label: 'Overweight', color: '#F59E0B' };
  return { label: 'Obese', color: '#EF4444' };
}

export default function BmiCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const result = useMemo(() => {
    const kg = unit === 'metric' ? weight : lbToKg(weight);
    const cm = unit === 'metric' ? height : inToCm(height);
    if (!kg || !cm) return null;
    const m = cm / 100;
    const bmi = kg / (m * m);
    return { bmi: Math.round(bmi * 10) / 10, ...classify(bmi) };
  }, [weight, height, unit]);

  return (
    <div>
      <UnitToggle value={unit} onChange={setUnit} />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Weight ({unit === 'metric' ? 'kg' : 'lb'})</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Height ({unit === 'metric' ? 'cm' : 'in'})</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand"
          />
        </div>
      </div>

      {result && (
        <div className="mt-8 rounded-xl border border-[var(--border)] p-6 text-center">
          <p className="text-sm text-[var(--muted)]">Your BMI</p>
          <p className="text-4xl font-bold" style={{ color: result.color }}>{result.bmi}</p>
          <p className="mt-1 font-medium" style={{ color: result.color }}>{result.label}</p>
        </div>
      )}
    </div>
  );
}
