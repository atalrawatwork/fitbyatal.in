import { SITE_NAME, SITE_URL } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: 'hello@fitbyatal.in',
  };
}

// NOTE: the old SearchAction pointed at /blogs/blog?q=... which is not a real
// search page. Invalid/fake SearchAction markup is a structured-data error, so it is removed.
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title.slice(0, 110),
    description: opts.description,
    image: [`${SITE_URL}${opts.image}`],
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    inLanguage: 'en',
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    author: { '@type': 'Person', name: 'Atal', url: `${SITE_URL}/about` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blogs/${opts.slug}` },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function softwareAppSchema(opts: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: opts.name,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any (web browser)',
    description: opts.description,
    url: `${SITE_URL}/tools/${opts.slug}`,
    inLanguage: 'en',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
