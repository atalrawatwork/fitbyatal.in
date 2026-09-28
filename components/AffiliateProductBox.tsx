import Image from 'next/image';
import { JsonLd } from '@/lib/schema';

type Props = {
  name: string;
  image: string;
  price?: string;
  rating?: number; // out of 5
  pros: string[];
  cons: string[];
  affiliateUrl: string;
};

export default function AffiliateProductBox({ name, image, price, rating, pros, cons, affiliateUrl }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    ...(rating && {
      aggregateRating: { '@type': 'AggregateRating', ratingValue: rating, reviewCount: 1 },
    }),
    ...(price && { offers: { '@type': 'Offer', price, priceCurrency: 'USD', url: affiliateUrl } }),
  };

  return (
    <div className="my-8 grid gap-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:grid-cols-[160px_1fr]">
      <JsonLd data={schema} />
      <Image src={image} alt={name} width={160} height={160} className="mx-auto rounded-xl object-contain" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        {price && <p className="mt-1 text-lg font-bold text-brand">{price}</p>}
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-green-600">Pros</p>
            <ul className="mt-1 list-disc pl-4 text-sm text-[var(--muted)]">
              {pros.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-red-500">Cons</p>
            <ul className="mt-1 list-disc pl-4 text-sm text-[var(--muted)]">
              {cons.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="mt-4 inline-block rounded-pill bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Check price →
        </a>
      </div>
    </div>
  );
}
