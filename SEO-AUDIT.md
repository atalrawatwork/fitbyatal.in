# FitByAtal - SEO Audit & Fixes (28 Sep 2026)

## Why pages were not ranking / getting impressions
1. **Thin content on tool pages** - each was only a calculator + one sentence. Google has nothing to rank for
   "bmi calculator" except the widget. FIXED: each tool now has explanation, formula, limits, FAQ, related tools + related guides.
2. **Thin blog posts** - legacy posts were ~90-250 words; "9-10 min read" labels were false. PARTLY FIXED: 3 legacy posts
   expanded, 5 new posts added (11 total), read time is now computed. Posts are still only ~250-470 words -> extend to 1,200+.
3. **Layout-level canonical `/`** - any page without its own canonical tells Google "I'm a copy of the homepage". REMOVED.
4. **Fake hreflang** (en-IN/en-US/en-GB all -> `/`) - meaningless, removed.
5. **Invalid SearchAction schema** pointing to a search page that doesn't exist. REMOVED.
6. **Sitemap `lastModified = new Date()`** on every build -> Google learns to ignore lastmod. Now fixed dates / post dates.
7. **Service worker was cache-first for everything** -> returning visitors got stale pages & old JS after deploys. Now network-first, cache v2.
8. **Ad placeholder boxes shown to real users/Googlebot** when AdSense id missing. Now renders nothing. Ads also removed above the H1.
9. **Fake trust signals**: About page claimed "10K+ monthly readers / 100+ guides / 15+ calculators"; Newsletter said
   "You're on the list" without saving anything; contact form did nothing. All made honest/functional.
10. **No legal pages** (Privacy, Terms, Disclaimer) - needed for AdSense approval and YMYL (health) trust. ADDED + linked in footer + sitemap.
11. **Missing E-E-A-T**: no author byline, no updated dates, no medical disclaimer. ADDED (byline, updated date, disclaimer, Person author in Article schema).
12. **Weak metadata**: no OG/Twitter images on most pages, no robots meta, no Search Console verification hook. ADDED.
13. **robots.txt blocked GPTBot/ClaudeBot** - removes you from AI-assistant answers (a growing US/UK source). Unblocked (edit `app/robots.ts` to revert).
14. **Next.js 15.0.3** has known security vulnerabilities -> bumped to ^15.5.7.
15. Images had empty `alt=""` on cards -> descriptive alt added.

## Things code cannot fix (be aware)
- **`.in` domain = India geo-target.** Google treats country-code domains as a strong India signal; you cannot set a US/UK
  target for a `.in` in Search Console. For real US/UK reach, a `.com` is the long-term fix (with 301 redirects).
- **New/low-authority site**: expect 3-6 months. Rankings need backlinks, consistent publishing and useful content.
- **AdSense slot IDs** in code (e.g. "blog-in-article-1") are placeholders; real slot IDs are numeric.
- **Not compiled here** (no network): run `npm install && npm run build` before deploying.

## After deploying
1. Set env vars (`.env.local` / Vercel): NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
   NEXT_PUBLIC_CONTACT_ACTION, NEXT_PUBLIC_NEWSLETTER_ACTION, NEXT_PUBLIC_ADSENSE_CLIENT_ID.
2. Verify in Google Search Console, submit /sitemap.xml, request indexing for home, /tools/tools, /blogs/blog and new posts.
3. Copy your old `ntrack/` folder into `public/ntrack/` (still required).
4. Check Search Console > Pages for "Duplicate, Google chose different canonical" and "Crawled - currently not indexed".
5. Publish 1-2 posts a week (1,200-1,800 words), link each to a calculator, and get a few relevant backlinks.
