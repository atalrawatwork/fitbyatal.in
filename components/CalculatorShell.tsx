import Link from 'next/link';
import { ReactNode } from 'react';
import AdSlot from './AdSlot';
import { JsonLd, faqSchema } from '@/lib/schema';
import { TOOL_CONTENT } from '@/lib/toolContent';
import { TOOLS } from '@/lib/site';
import { getPostBySlug } from '@/lib/blogs';
import { renderInline } from './BlogBody';

export default function CalculatorShell({
  slug,
  title,
  description,
  children,
}: {
  slug: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const content = TOOL_CONTENT[slug];
  const related = (content?.related ?? []).map((s) => TOOLS.find((t) => t.slug === s)).filter(Boolean) as typeof TOOLS;
  const blogs = (content?.blogs ?? []).map((s) => getPostBySlug(s)).filter(Boolean);

  return (
    <div className="container py-10">
      {content && <JsonLd data={faqSchema(content.faqs)} />}

      <p className="mb-4 text-sm text-[var(--muted)]">
        <Link href="/">Home</Link> / <Link href="/tools/tools">Tools</Link> / <span>{title}</span>
      </p>

      {/* H1 first - no ad above the fold before the main content */}
      <h1 className="text-3xl font-bold md:text-4xl">{content?.h1 ?? title}</h1>
      <p className="mt-2 max-w-2xl text-[var(--muted)]">{description}</p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">{children}</div>

          {content && (
            <article className="mt-10 max-w-3xl">
              {content.sections.map((sec) => (
                <section key={sec.heading}>
                  <h2 className="mt-8 mb-3 text-2xl font-bold">{sec.heading}</h2>
                  {sec.paragraphs.map((p, i) => (
                    <p key={i} className="my-3 leading-relaxed">{renderInline(p, `${sec.heading}-${i}`)}</p>
                  ))}
                  {sec.bullets && (
                    <ul className="my-3 list-disc space-y-2 pl-6">
                      {sec.bullets.map((b, i) => (
                        <li key={i}>{renderInline(b, `${sec.heading}-b${i}`)}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                <h2 className="text-2xl font-bold">Frequently asked questions</h2>
                <div className="mt-4 space-y-5">
                  {content.faqs.map((f) => (
                    <div key={f.q}>
                      <h3 className="font-semibold">{f.q}</h3>
                      <p className="mt-1 text-[var(--muted)]">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <p className="mt-8 text-xs text-[var(--muted)]">
                Results are estimates for general information and are not medical advice. See our{' '}
                <Link href="/disclaimer" className="underline">disclaimer</Link>. Talk to a doctor or registered dietitian
                before making major changes to your diet or training.
              </p>
            </article>
          )}
        </div>

        <aside className="space-y-6">
          <AdSlot slotId="sidebar" format="rectangle" />
          {related.length > 0 && (
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h2 className="font-semibold">Related calculators</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((t) => (
                  <li key={t.slug}><Link className="text-brand hover:underline" href={`/tools/${t.slug}`}>{t.name}</Link></li>
                ))}
              </ul>
            </div>
          )}
          {blogs.length > 0 && (
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h2 className="font-semibold">Read next</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {blogs.map((b) => (
                  <li key={b!.slug}><Link className="text-brand hover:underline" href={`/blogs/${b!.slug}`}>{b!.title}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <AdSlot slotId="in-article" format="in-article" className="mt-10" />
    </div>
  );
}
