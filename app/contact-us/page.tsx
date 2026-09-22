import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with FitByAtal. Contact us for questions, suggestions, partnerships or feedback about our free fitness tools and health guides.',
  alternates: { canonical: '/contact-us' },
};

export default function ContactPage() {
  return (
    <div className="container py-14">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact-us' }])} />

      <h1 className="text-4xl font-bold">Get In Touch</h1>
      <p className="mt-3 max-w-xl text-[var(--muted)]">
        Questions, suggestions, partnership ideas or feedback — we read every message.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input required className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input type="email" required className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea rows={5} required className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2 outline-none focus:border-brand" />
          </div>
          <button type="submit" className="rounded-pill bg-brand px-6 py-2.5 font-semibold text-white hover:bg-brand-dark">
            Send Message
          </button>
          <p className="text-xs text-[var(--muted)]">
            This form needs a submit handler wired up (a Server Action, or a form endpoint like Formspree) before it will send anywhere.
          </p>
        </form>

        <div className="space-y-4 text-sm text-[var(--muted)]">
          <p><strong className="text-[var(--ink)]">Email:</strong> hello@fitbyatal.in</p>
          <p><strong className="text-[var(--ink)]">Response time:</strong> Usually within 2 business days.</p>
        </div>
      </div>
    </div>
  );
}
