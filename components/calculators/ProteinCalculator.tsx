'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, lbToKg } from '../UnitToggle';
import { Field, Stat, Select } from './FormBits';

const FACTORS: Record<string, number> = {
  sedentary: 1.0,
  maintain: 1.4,
  build: 1.8,
  aggressive: 2.2,
};

export default function ProteinCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [weight, setWeight] = useState(70);
  const [goal, setGoal] = useState('build');

  const result = useMemo(() => {
    const kg = unit === 'metric' ? weight : lbToKg(weight);
    if (!kg) return null;
    return Math.round(kg * FACTORS[goal]);
  }, [unit, weight, goal]);

  return (
    <div>
      <UnitToggle value={unit} onChange={setUnit} />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label={`Bodyweight (${unit === 'metric' ? 'kg' : 'lb'})`} value={weight} onChange={setWeight} />
        <Select label="Goal" value={goal} onChange={setGoal} options={[
          { value: 'sedentary', label: 'Sedentary / general health' },
          { value: 'maintain', label: 'Active, maintaining muscle' },
          { value: 'build', label: 'Building muscle' },
          { value: 'aggressive', label: 'Aggressive muscle gain / cutting' },
        ]} />
      </div>
      {result !== null && <div className="mt-8"><Stat label="Daily protein target" value={`${result} g`} highlight /></div>}
    </div>
  );
}
