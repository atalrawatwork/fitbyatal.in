'use client';

import { useMemo, useState } from 'react';
import UnitToggle, { UnitSystem, inToCm, lbToKg } from '../UnitToggle';
import { Field, Stat, GenderToggle, Select } from './FormBits';

const ACTIVITY: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  extreme: 1.9,
};

export default function CalorieCalculator() {
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(28);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState('maintain');

  const result = useMemo(() => {
    const kg = unit === 'metric' ? weight : lbToKg(weight);
    const cm = unit === 'metric' ? height : inToCm(height);
    if (!kg || !cm || !age) return null;
    const bmr = gender === 'male' ? 10 * kg + 6.25 * cm - 5 * age + 5 : 10 * kg + 6.25 * cm - 5 * age - 161;
    const maintenance = bmr * ACTIVITY[activity];
    const target = goal === 'lose' ? maintenance * 0.8 : goal === 'gain' ? maintenance * 1.1 : maintenance;
    return { maintenance: Math.round(maintenance), target: Math.round(target) };
  }, [unit, gender, age, weight, height, activity, goal]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
        <UnitToggle value={unit} onChange={setUnit} />
        <GenderToggle value={gender} onChange={setGender} />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Age" value={age} onChange={setAge} />
        <Field label={`Weight (${unit === 'metric' ? 'kg' : 'lb'})`} value={weight} onChange={setWeight} />
        <Field label={`Height (${unit === 'metric' ? 'cm' : 'in'})`} value={height} onChange={setHeight} />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Select label="Activity level" value={activity} onChange={setActivity} options={[
          { value: 'sedentary', label: 'Sedentary' },
          { value: 'light', label: 'Lightly active' },
          { value: 'moderate', label: 'Moderately active' },
          { value: 'active', label: 'Very active' },
          { value: 'extreme', label: 'Extremely active' },
        ]} />
        <Select label="Goal" value={goal} onChange={setGoal} options={[
          { value: 'lose', label: 'Lose weight (-20%)' },
          { value: 'maintain', label: 'Maintain weight' },
          { value: 'gain', label: 'Gain weight (+10%)' },
        ]} />
      </div>

      {result && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Stat label="Maintenance calories" value={`${result.maintenance} kcal`} />
          <Stat label="Your daily target" value={`${result.target} kcal`} highlight />
        </div>
      )}
    </div>
  );
}
