'use client';

export type UnitSystem = 'metric' | 'imperial';

export default function UnitToggle({
  value,
  onChange,
}: {
  value: UnitSystem;
  onChange: (v: UnitSystem) => void;
}) {
  return (
    <div className="inline-flex rounded-pill border border-[var(--border)] p-1 text-sm">
      {(['metric', 'imperial'] as UnitSystem[]).map((u) => (
        <button
          key={u}
          type="button"
          onClick={() => onChange(u)}
          className={`rounded-pill px-4 py-1.5 font-medium transition-colors ${
            value === u ? 'bg-brand text-white' : 'text-[var(--muted)]'
          }`}
        >
          {u === 'metric' ? 'KG / CM' : 'LBS / IN'}
        </button>
      ))}
    </div>
  );
}

// Conversion helpers shared by every calculator
export const kgToLb = (kg: number) => kg * 2.20462;
export const lbToKg = (lb: number) => lb / 2.20462;
export const cmToIn = (cm: number) => cm / 2.54;
export const inToCm = (inch: number) => inch * 2.54;
