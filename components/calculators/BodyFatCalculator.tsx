'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, inToCm } from '../UnitToggle';
import { Field, Stat, GenderToggle } from './FormBits';

// US Navy method — needs waist & neck (and hip for women), plus height, all in cm.
function navyBodyFat(gender: 'male' | 'female', waist: number, neck: number, height: number, hip: number) {
  if (gender === 'male') {
    return 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  }
  return 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
}

function category(bf: number, gender: 'male' | 'female') {
  const ranges = gender === 'male'
    ? [[0, 6, 'Essential fat'], [6, 14, 'Athletic'], [14, 18, 'Fitness'], [18, 25, 'Average'], [25, 100, 'Above average']]
    : [[0, 14, 'Essential fat'], [14, 21, 'Athletic'], [21, 25, 'Fitness'], [25, 32, 'Average'], [32, 100, 'Above average']];
  const found = ranges.find(([min, max]) => bf >= (min as number) && bf < (max as number));
  return (found?.[2] as string) || '—';
}

export default function BodyFatCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState(170);
  const [waist, setWaist] = useState(85);
  const [neck, setNeck] = useState(38);
  const [hip, setHip] = useState(95);

  const result = useMemo(() => {
    const h = unit === 'metric' ? height : inToCm(height);
    const w = unit === 'metric' ? waist : inToCm(waist);
    const n = unit === 'metric' ? neck : inToCm(neck);
    const hp = unit === 'metric' ? hip : inToCm(hip);
    if (!h || !w || !n || (gender === 'female' && !hp)) return null;
    const bf = navyBodyFat(gender, w, n, h, hp);
    if (!isFinite(bf) || bf <= 0) return null;
    return { bf: Math.round(bf * 10) / 10, cat: category(bf, gender) };
  }, [unit, gender, height, waist, neck, hip]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
        <UnitToggle value={unit} onChange={setUnit} />
        <GenderToggle value={gender} onChange={setGender} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={`Height (${unit === 'metric' ? 'cm' : 'in'})`} value={height} onChange={setHeight} />
        <Field label={`Waist (${unit === 'metric' ? 'cm' : 'in'})`} value={waist} onChange={setWaist} />
        <Field label={`Neck (${unit === 'metric' ? 'cm' : 'in'})`} value={neck} onChange={setNeck} />
        {gender === 'female' && (
          <Field label={`Hip (${unit === 'metric' ? 'cm' : 'in'})`} value={hip} onChange={setHip} />
        )}
      </div>

      {result && (
        <div className="mt-8">
          <Stat label="Estimated body fat" value={`${result.bf}%`} highlight />
          <p className="mt-3 text-center text-sm text-[var(--muted)]">Category: <strong className="text-[var(--ink)]">{result.cat}</strong></p>
        </div>
      )}
      <p className="mt-6 text-xs text-[var(--muted)]">
        Uses the US Navy circumference method. It&apos;s an estimate — for precise readings, use calipers or a DEXA scan.
      </p>
    </div>
  );
}
