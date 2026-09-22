import Link from 'next/link';
import { ReactNode } from 'react';
import AdSlot from './AdSlot';

export default function CalculatorShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="container py-10">
      <p className="mb-4 text-sm text-[var(--muted)]">
        <Link href="/">Home</Link> / <Link href="/tools/tools">Tools</Link> / <span>{title}</span>
      </p>

      <AdSlot slotId="top-banner" format="horizontal" className="mb-8" />

      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 max-w-2xl text-[var(--muted)]">{description}</p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">{children}</div>
        <aside className="space-y-6">
          <AdSlot slotId="sidebar" format="rectangle" />
        </aside>
      </div>

      <AdSlot slotId="in-article" format="in-article" className="mt-10" />
    </div>
  );
}
