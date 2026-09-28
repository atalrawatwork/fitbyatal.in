import Link from 'next/link';

// Renders a small subset of markdown: ## headings, - bullet lines,
// **bold**, and [text](/relative-or-external) links. Kept dependency-free
// on purpose so the blog data can stay plain TypeScript.
export function slugify(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function renderInline(text: string, keyPrefix: string) {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const token = match[0];
    if (token.startsWith('**')) {
      parts.push(<strong key={`${keyPrefix}-${i++}`}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        parts.push(
          <Link key={`${keyPrefix}-${i++}`} href={href} className="text-brand underline">
            {label}
          </Link>
        );
      }
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function BlogBody({ paragraphs }: { paragraphs: string[] }) {
  const elements: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = (key: string) => {
    if (bulletBuffer.length === 0) return;
    elements.push(
      <ul key={key} className="my-4 list-disc space-y-2 pl-6">
        {bulletBuffer.map((b, idx) => (
          <li key={idx}>{renderInline(b.replace(/^- /, ''), `${key}-${idx}`)}</li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  paragraphs.forEach((p, idx) => {
    if (p.startsWith('- ')) {
      bulletBuffer.push(p);
      return;
    }
    flushBullets(`ul-${idx}`);

    if (p.startsWith('## ')) {
      elements.push(
        <h2 key={idx} id={slugify(p.replace(/^## /, ''))} className="mt-10 mb-3 scroll-mt-24 text-2xl font-bold">
          {p.replace(/^## /, '')}
        </h2>
      );
    } else if (p.startsWith('### ')) {
      elements.push(
        <h3 key={idx} className="mt-6 mb-2 text-xl font-semibold">
          {p.replace(/^### /, '')}
        </h3>
      );
    } else {
      elements.push(
        <p key={idx} className="my-4 leading-relaxed text-[var(--ink)]">
          {renderInline(p, `p-${idx}`)}
        </p>
      );
    }
  });
  flushBullets('ul-final');

  return <div>{elements}</div>;
}
