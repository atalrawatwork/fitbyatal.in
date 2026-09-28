'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/site';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-2 z-50 mx-auto max-w-container rounded-[40px] bg-white/80 dark:bg-[#1b1830]/80 backdrop-blur shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
      <nav className="container flex items-center justify-between py-2">
        <Link href="/" aria-label="FitByAtal Home" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="FitByAtal" width={45} height={45} priority />
        </Link>

        <ul className={`nav-links gap-8 text-[15px] font-medium md:flex ${open ? 'flex' : 'hidden'} absolute md:static top-full left-0 w-full md:w-auto flex-col md:flex-row bg-white dark:bg-[#1b1830] md:bg-transparent px-6 md:px-0 py-4 md:py-0 rounded-2xl md:rounded-none shadow-lg md:shadow-none`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-brand transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/tools/tools"
            className="hidden sm:inline-block rounded-pill bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
          >
            Explore Tools
          </Link>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-xl px-2"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
