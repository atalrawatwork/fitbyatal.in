'use client';

import { useMemo, useState } from 'react';
import { Field, Stat } from './FormBits';

export default function OneRepMaxCalculator() {
  const [weight, setWeight] = useState(60);
  const [reps, setReps] = useState(8);

  const result = useMemo(() => {
    if (!weight || !reps) return null;
    // Epley formula
    const oneRm = reps === 1 ? weight : weight * (1 + reps / 30);
    return {
      oneRm: Math.round(oneRm),
      p90: Math.round(oneRm * 0.9),
      p75: Math.round(oneRm * 0.75),
      p60: Math.round(oneRm * 0.6),
    };
  }, [weight, reps]);

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Weight lifted (kg or lb)" value={weight} onChange={setWeight} />
        <Field label="Reps completed" value={reps} onChange={setReps} />
      </div>

      {result && (
        <>
          <div className="mt-8">
            <Stat label="Estimated 1-Rep Max" value={`${result.oneRm}`} highlight />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Stat label="90% (strength)" value={`${result.p90}`} />
            <Stat label="75% (hypertrophy)" value={`${result.p75}`} />
            <Stat label="60% (endurance)" value={`${result.p60}`} />
          </div>
        </>
      )}
      <p className="mt-6 text-xs text-[var(--muted)]">Uses the Epley formula — most accurate for sets of 10 reps or fewer.</p>
    </div>
  );
}
