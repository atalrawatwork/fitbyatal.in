'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, lbToKg } from '../UnitToggle';
import { Field, Stat, Select } from './FormBits';

const ACTIVITIES: Record<string, number> = {
  walking: 3.5,
  running: 9.8,
  cycling: 7.5,
  swimming: 6.0,
  weightTraining: 5.0,
  yoga: 2.5,
  hiit: 8.0,
  dancing: 4.8,
};

const LABELS: Record<string, string> = {
  walking: 'Walking (moderate pace)',
  running: 'Running (8 km/h)',
  cycling: 'Cycling (moderate)',
  swimming: 'Swimming (laps)',
  weightTraining: 'Weight training',
  yoga: 'Yoga',
  hiit: 'HIIT',
  dancing: 'Dancing',
};

export default function CaloriesBurnedCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState('running');
  const [minutes, setMinutes] = useState(30);

  const result = useMemo(() => {
    const kg = unit === 'metric' ? weight : lbToKg(weight);
    if (!kg || !minutes) return null;
    // Calories = MET * 3.5 * weight(kg) / 200 per minute
    const met = ACTIVITIES[activity];
    const calories = (met * 3.5 * kg / 200) * minutes;
    return Math.round(calories);
  }, [unit, weight, activity, minutes]);

  return (
    <div>
      <UnitToggle value={unit} onChange={setUnit} />

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <Field label={`Weight (${unit === 'metric' ? 'kg' : 'lb'})`} value={weight} onChange={setWeight} />
        <Select label="Activity" value={activity} onChange={setActivity}
          options={Object.keys(ACTIVITIES).map((k) => ({ value: k, label: LABELS[k] }))} />
        <Field label="Duration (minutes)" value={minutes} onChange={setMinutes} />
      </div>

      {result !== null && <div className="mt-8"><Stat label="Calories burned" value={`${result} kcal`} highlight /></div>}
    </div>
  );
}
