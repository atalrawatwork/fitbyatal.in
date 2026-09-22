'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, lbToKg } from '../UnitToggle';
import { Field, Stat, Select } from './FormBits';

const ACTIVITY_ADD: Record<string, number> = { low: 0, moderate: 350, high: 700 };
const CLIMATE_ADD: Record<string, number> = { temperate: 0, hot: 500 };

export default function WaterIntakeCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState('moderate');
  const [climate, setClimate] = useState('temperate');

  const result = useMemo(() => {
    const kg = unit === 'metric' ? weight : lbToKg(weight);
    if (!kg) return null;
    const baseMl = kg * 33; // ~33ml per kg baseline
    const totalMl = baseMl + ACTIVITY_ADD[activity] + CLIMATE_ADD[climate];
    return { liters: Math.round((totalMl / 1000) * 10) / 10, cups: Math.round(totalMl / 240) };
  }, [unit, weight, activity, climate]);

  return (
    <div>
      <UnitToggle value={unit} onChange={setUnit} />
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <Field label={`Weight (${unit === 'metric' ? 'kg' : 'lb'})`} value={weight} onChange={setWeight} />
        <Select label="Activity level" value={activity} onChange={setActivity} options={[
          { value: 'low', label: 'Low' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'high', label: 'High' },
        ]} />
        <Select label="Climate" value={climate} onChange={setClimate} options={[
          { value: 'temperate', label: 'Temperate' },
          { value: 'hot', label: 'Hot / humid' },
        ]} />
      </div>

      {result && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Stat label="Daily water target" value={`${result.liters} L`} highlight />
          <Stat label="Roughly" value={`${result.cups} cups`} />
        </div>
      )}
    </div>
  );
}
