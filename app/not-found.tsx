import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-[var(--muted)]">That page does not exist or has moved.</p>
      <div className="mt-6 flex justify-center gap-4">
        <Link href="/tools/tools" className="rounded-pill bg-brand px-6 py-3 font-semibold text-white">Browse tools</Link>
        <Link href="/blogs/blog" className="rounded-pill border border-brand px-6 py-3 font-semibold text-brand">Read the blog</Link>
      </div>
    </div>
  );
}
