import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How FitByAtal collects, uses and protects your information, including cookies, analytics and advertising.',
  alternates: { canonical: '/privacy-policy' },
};

export default function Page() {
  return (
    <div className="container py-14">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])} />
      <article className="mx-auto max-w-3xl leading-relaxed">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Last updated: 28 September 2026</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Information we collect</h2>
        <p className="my-3 text-[var(--muted)]">The calculators run in your browser. The numbers you enter (height, weight, age and so on) are not sent to our servers or stored by us.</p>
        <p className="my-3 text-[var(--muted)]">If you contact us or subscribe to emails, we receive the details you submit, such as your name and email address.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Cookies, analytics and advertising</h2>
        <p className="my-3 text-[var(--muted)]">We may use Google Analytics to understand how visitors use the site, and Google AdSense to show ads. These services use cookies and similar technologies to measure traffic and serve ads, including personalised ads where permitted.</p>
        <p className="my-3 text-[var(--muted)]">Google&apos;s use of advertising cookies lets it and its partners serve ads based on your visits to this and other sites. You can opt out of personalised advertising at Google Ads Settings, and manage cookies in your browser.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">How we use information</h2>
        <p className="my-3 text-[var(--muted)]">We use information to operate and improve the site, respond to messages, send newsletters you asked for, and measure performance. We do not sell your personal information.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Your rights</h2>
        <p className="my-3 text-[var(--muted)]">You can ask us to access, correct or delete personal information we hold, or to unsubscribe from emails at any time, by emailing hello@fitbyatal.in. Depending on where you live (for example the UK/EU under GDPR or California under CCPA) you may have additional rights.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Third-party links</h2>
        <p className="my-3 text-[var(--muted)]">The site may link to other websites, including affiliate links (marked as sponsored). We are not responsible for their privacy practices.</p>
        <h2 className="mt-8 mb-2 text-2xl font-bold">Contact</h2>
        <p className="my-3 text-[var(--muted)]">Questions about this policy? Email hello@fitbyatal.in.</p>
      </article>
    </div>
  );
}
