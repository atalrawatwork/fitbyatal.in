'use client';

import { useState } from 'react';

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const action = process.env.NEXT_PUBLIC_NEWSLETTER_ACTION;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to your Mailchimp / ConvertKit form action URL via
    // NEXT_PUBLIC_NEWSLETTER_ACTION — this just confirms locally for now.
    setStatus('sent');
  }

  // Not configured -> render nothing. The old version showed "You're on the list" without saving the
  // email anywhere, which is deceptive to users and a trust problem.
  if (!action) return null;

  return (
    <div className={`rounded-2xl bg-brand/5 border border-brand/20 p-6 ${compact ? '' : 'text-center'}`}>
      <h3 className="text-lg font-semibold">Get new tools & guides in your inbox</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">
        One email a week, no spam — practical fitness content only.
      </p>
      {status === 'sent' ? (
        <p className="mt-4 text-sm font-medium text-brand">You&apos;re on the list — thanks!</p>
      ) : (
        <form
          action={action || undefined}
          onSubmit={action ? undefined : handleSubmit}
          method="post"
          className="mt-4 flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            name="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 rounded-pill border border-black/10 dark:border-white/10 bg-transparent px-4 py-2 text-sm outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="rounded-pill bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
