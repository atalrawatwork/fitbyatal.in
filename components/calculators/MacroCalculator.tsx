'use client';

import { useMemo, useState } from 'react';
import { Field, Stat, Select } from './FormBits';

const SPLITS: Record<string, { protein: number; carbs: number; fat: number }> = {
  balanced: { protein: 30, carbs: 40, fat: 30 },
  fatloss: { protein: 40, carbs: 30, fat: 30 },
  lowcarb: { protein: 35, carbs: 20, fat: 45 },
  muscle: { protein: 30, carbs: 45, fat: 25 },
};

export default function MacroCalculator() {
  const [calories, setCalories] = useState(2200);
  const [split, setSplit] = useState('balanced');

  const result = useMemo(() => {
    if (!calories) return null;
    const s = SPLITS[split];
    return {
      protein: Math.round((calories * (s.protein / 100)) / 4),
      carbs: Math.round((calories * (s.carbs / 100)) / 4),
      fat: Math.round((calories * (s.fat / 100)) / 9),
      s,
    };
  }, [calories, split]);

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Daily calorie target" value={calories} onChange={setCalories} />
        <Select label="Split style" value={split} onChange={setSplit} options={[
          { value: 'balanced', label: 'Balanced (30/40/30)' },
          { value: 'fatloss', label: 'Fat loss focus (40/30/30)' },
          { value: 'lowcarb', label: 'Lower carb (35/20/45)' },
          { value: 'muscle', label: 'Muscle gain (30/45/25)' },
        ]} />
      </div>

      {result && (
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label={`Protein (${result.s.protein}%)`} value={`${result.protein} g`} highlight />
          <Stat label={`Carbs (${result.s.carbs}%)`} value={`${result.carbs} g`} />
          <Stat label={`Fat (${result.s.fat}%)`} value={`${result.fat} g`} />
        </div>
      )}
      <p className="mt-6 text-xs text-[var(--muted)]">
        Don&apos;t know your calorie target yet? Get one from the <a href="/tools/tdee-calculator" className="text-brand underline">TDEE calculator</a> first.
      </p>
    </div>
  );
}
