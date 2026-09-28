/** @type {import('next').NextConfig} */

// =====================================================================
// SEO MIGRATION SAFETY NET
// -----------------------------------------------------------------------
// The old site (static HTML + .htaccess) already served "clean" URLs
// without the .html extension (e.g. /tools/bmi-calculator, /about).
// Those clean URLs are reproduced 1:1 by the App Router folder structure
// below, so ranking pages keep the exact same path.
//
// This redirect list is the safety net for anyone who still has the
// *.html version indexed, bookmarked, or linked from another site
// (old sitemaps, cached backlinks, social shares, etc). Every legacy
// path 301-redirects to the same clean URL the old .htaccess produced.
// =====================================================================

const legacyHtmlRedirects = [
  ['/index.html', '/'],
  ['/about.html', '/about'],
  ['/contact-us.html', '/contact-us'],
  ['/blogs/blog.html', '/blogs/blog'],
  ['/tools/tools.html', '/tools/tools'],
  ['/tools/bmi-calculator.html', '/tools/bmi-calculator'],
  ['/tools/body-fat-calculator.html', '/tools/body-fat-calculator'],
  ['/tools/calorie-calculator.html', '/tools/calorie-calculator'],
  ['/tools/calories-burned-calculator.html', '/tools/calories-burned-calculator'],
  ['/tools/macro-calculator.html', '/tools/macro-calculator'],
  ['/tools/one-rep-max-calculator.html', '/tools/one-rep-max-calculator'],
  ['/tools/protein-calculator.html', '/tools/protein-calculator'],
  ['/tools/running-pace-calculator.html', '/tools/running-pace-calculator'],
  ['/tools/tdee-calculator.html', '/tools/tdee-calculator'],
  ['/tools/water-intake-calculator.html', '/tools/water-intake-calculator'],
  ['/tools/weight-loss-calculator.html', '/tools/weight-loss-calculator'],
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return legacyHtmlRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true, // 301
    }));
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
