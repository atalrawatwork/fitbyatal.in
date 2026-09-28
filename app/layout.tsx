import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegisterSW from '@/components/RegisterSW';
import { JsonLd, organizationSchema, websiteSchema } from '@/lib/schema';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const DEFAULT_TITLE = `${SITE_NAME} - Free Fitness Calculators & Health Tools`;
const OG_IMAGE = { url: '/images/hero.png', width: 1200, height: 630, alt: `${SITE_NAME} free fitness calculators` };

// NOTE: no site-wide `canonical` and no fake hreflang here. A layout-level canonical of '/'
// is inherited by any page that forgets its own, telling Google "this page is a copy of the
// homepage". Every page now declares its own canonical. One English page serves IN/US/UK
// readers, so hreflang variants pointing to the same URL were meaningless and are removed.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Atal', url: `${SITE_URL}/about` }],
  manifest: '/manifest.json',
  icons: { icon: '/images/favicon.png', apple: '/images/favicon.png' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', title: DEFAULT_TITLE, description: SITE_DESCRIPTION, images: [OG_IMAGE.url] },
};

export const viewport = { themeColor: '#6D3EF5' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <RegisterSW />
      </body>
    </html>
  );
}
