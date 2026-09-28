'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, lbToKg } from '../UnitToggle';
import { Field, Stat } from './FormBits';

const KCAL_PER_KG_FAT = 7700;

export default function WeightLossCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [current, setCurrent] = useState(80);
  const [goal, setGoal] = useState(72);
  const [weeks, setWeeks] = useState(12);

  const result = useMemo(() => {
    const curKg = unit === 'metric' ? current : lbToKg(current);
    const goalKg = unit === 'metric' ? goal : lbToKg(goal);
    if (!curKg || !goalKg || !weeks || curKg <= goalKg) return null;
    const totalKg = curKg - goalKg;
    const totalKcal = totalKg * KCAL_PER_KG_FAT;
    const dailyDeficit = Math.round(totalKcal / (weeks * 7));
    const weeklyLossKg = Math.round((totalKg / weeks) * 100) / 100;
    return { dailyDeficit, weeklyLossKg, totalKg: Math.round(totalKg * 10) / 10 };
  }, [unit, current, goal, weeks]);

  return (
    <div>
      <UnitToggle value={unit} onChange={setUnit} />
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <Field label={`Current weight (${unit === 'metric' ? 'kg' : 'lb'})`} value={current} onChange={setCurrent} />
        <Field label={`Goal weight (${unit === 'metric' ? 'kg' : 'lb'})`} value={goal} onChange={setGoal} />
        <Field label="Timeframe (weeks)" value={weeks} onChange={setWeeks} />
      </div>

      {result ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Required daily deficit" value={`${result.dailyDeficit} kcal`} highlight />
          <Stat label="Weekly weight loss" value={`${result.weeklyLossKg} kg`} />
          <Stat label="Total to lose" value={`${result.totalKg} kg`} />
        </div>
      ) : (
        <p className="mt-6 text-sm text-[var(--muted)]">Goal weight must be lower than your current weight.</p>
      )}
      <p className="mt-6 text-xs text-[var(--muted)]">
        Combine this deficit with your <a href="/tools/tdee-calculator" className="text-brand underline">TDEE</a> to get an actual daily calorie target. Aim for a deficit no larger than 1,000 kcal/day for sustainable, muscle-preserving fat loss.
      </p>
    </div>
  );
}
