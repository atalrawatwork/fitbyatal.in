'use client';

import { useMemo, useState } from 'react';
import { Field, Stat, Select } from './FormBits';

function fmt(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
}

export default function RunningPaceCalculator() {
  const [unit, setUnit] = useState('km');
  const [distance, setDistance] = useState(5);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(25);
  const [secs, setSecs] = useState(0);

  const result = useMemo(() => {
    const totalSeconds = hours * 3600 + mins * 60 + secs;
    if (!distance || !totalSeconds) return null;
    const paceSecondsPerUnit = totalSeconds / distance;
    const speed = distance / (totalSeconds / 3600);
    return {
      pace: fmt(paceSecondsPerUnit),
      speed: Math.round(speed * 10) / 10,
      predicted5k: fmt(paceSecondsPerUnit * 5),
      predicted10k: fmt(paceSecondsPerUnit * 10),
      predictedHalf: fmt(paceSecondsPerUnit * 21.0975),
    };
  }, [distance, hours, mins, secs]);

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Select label="Distance unit" value={unit} onChange={setUnit} options={[
          { value: 'km', label: 'Kilometres' },
          { value: 'mi', label: 'Miles' },
        ]} />
        <Field label={`Distance (${unit})`} value={distance} onChange={setDistance} step={0.1} />
      </div>

      <div className="mt-5">
        <label className="mb-1 block text-sm font-medium">Finish time</label>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Hours" value={hours} onChange={setHours} />
          <Field label="Minutes" value={mins} onChange={setMins} />
          <Field label="Seconds" value={secs} onChange={setSecs} />
        </div>
      </div>

      {result && (
        <>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Stat label={`Pace (per ${unit})`} value={result.pace} highlight />
            <Stat label={`Speed (${unit}/h)`} value={`${result.speed}`} />
          </div>
          <p className="mt-6 text-sm font-medium">Predicted race times at this pace</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <Stat label="5K" value={result.predicted5k} />
            <Stat label="10K" value={result.predicted10k} />
            <Stat label="Half Marathon" value={result.predictedHalf} />
          </div>
        </>
      )}
    </div>
  );
}
