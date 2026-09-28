'use client';

export function Field({
  label,
  value,
  onChange,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand"
      />
    </div>
  );
}

export function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-6 text-center ${highlight ? 'border-brand bg-brand/5' : 'border-[var(--border)]'}`}>
      <p className="text-sm text-[var(--muted)]">{label}</p>
      <p className={`mt-1 text-3xl font-bold ${highlight ? 'text-brand' : ''}`}>{value}</p>
    </div>
  );
}

export function GenderToggle({ value, onChange }: { value: 'male' | 'female'; onChange: (v: 'male' | 'female') => void }) {
  return (
    <div className="inline-flex rounded-pill border border-[var(--border)] p-1 text-sm">
      {(['male', 'female'] as const).map((g) => (
        <button
          key={g}
          type="button"
          onClick={() => onChange(g)}
          className={`rounded-pill px-4 py-1.5 font-medium capitalize ${value === g ? 'bg-brand text-white' : 'text-[var(--muted)]'}`}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
