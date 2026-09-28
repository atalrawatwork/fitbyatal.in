import Link from 'next/link';
import Image from 'next/image';
import { TOOLS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="FitByAtal" width={36} height={36} />
            <span className="text-lg font-bold">FitByAtal</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-[var(--muted)]">
            Simple tools and useful guides for a better and healthier you.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tools/tools">Tools</Link></li>
            <li><Link href="/blogs/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact-us">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Tools</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            {TOOLS.slice(0, 8).map((t) => (
              <li key={t.slug}><Link href={`/tools/${t.slug}`}>{t.name}</Link></li>
            ))}
            <li><Link href="/tools/tools" className="text-brand font-medium">All Tools</Link></li>
          </ul>
        </div>

        <div className="text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} FitByAtal.in</p>
          <p>All rights reserved.</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
