'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, inToCm, lbToKg } from '../UnitToggle';
import { Field, Stat } from './FormBits';

const ACTIVITY = [
  { key: 1.2, label: 'Sedentary — little or no exercise' },
  { key: 1.375, label: 'Lightly active — 1-3 days/week' },
  { key: 1.55, label: 'Moderately active — 3-5 days/week' },
  { key: 1.725, label: 'Very active — 6-7 days/week' },
  { key: 1.9, label: 'Extremely active — physical job + training' },
];

export default function TdeeCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(28);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [activity, setActivity] = useState(1.55);

  const result = useMemo(() => {
    const kg = unit === 'metric' ? weight : lbToKg(weight);
    const cm = unit === 'metric' ? height : inToCm(height);
    if (!kg || !cm || !age) return null;
    const bmr = gender === 'male'
      ? 10 * kg + 6.25 * cm - 5 * age + 5
      : 10 * kg + 6.25 * cm - 5 * age - 161;
    const tdee = bmr * activity;
    return { bmr: Math.round(bmr), tdee: Math.round(tdee) };
  }, [unit, gender, age, weight, height, activity]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="inline-flex rounded-pill border border-[var(--border)] p-1 text-sm">
          {(['male', 'female'] as const).map((g) => (
            <button key={g} type="button" onClick={() => setGender(g)}
              className={`rounded-pill px-4 py-1.5 font-medium capitalize ${gender === g ? 'bg-brand text-white' : 'text-[var(--muted)]'}`}>
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Age" value={age} onChange={setAge} />
        <Field label={`Weight (${unit === 'metric' ? 'kg' : 'lb'})`} value={weight} onChange={setWeight} />
        <Field label={`Height (${unit === 'metric' ? 'cm' : 'in'})`} value={height} onChange={setHeight} />
      </div>

      <div className="mt-5">
        <label className="mb-1 block text-sm font-medium">Activity level</label>
        <select
          value={activity}
          onChange={(e) => setActivity(Number(e.target.value))}
          className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand"
        >
          {ACTIVITY.map((a) => (
            <option key={a.key} value={a.key}>{a.label}</option>
          ))}
        </select>
      </div>

      {result && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Stat label="BMR (calories at rest)" value={`${result.bmr} kcal`} />
          <Stat label="TDEE (maintenance calories)" value={`${result.tdee} kcal`} highlight />
        </div>
      )}
    </div>
  );
}

