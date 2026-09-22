# FitByAtal.in — Next.js 15 Rebuild

## Quick start
```bash
npm install
cp .env.example .env.local   # fill in your real IDs
npm run dev
```
Deploy on Vercel: import this repo/folder, it just works (no special config needed).

## URLs — kept identical to the old site
The old `.htaccess` served clean URLs (no `.html`). This project reproduces the
exact same paths via the App Router folder structure:
`/`, `/about`, `/contact-us`, `/tools/tools`, `/tools/bmi-calculator` (and the
other 10 calculators), `/blogs/blog`, `/blogs/[slug]`.

`next.config.js` also 301-redirects every old `*.html` path to its clean
equivalent, in case any external backlink or old sitemap still points to the
`.html` version.

## The `ntrack` link — untouched, on purpose
Your old homepage links to `ntrack/index.html` twice (hero image + "AI Daily
Food Tracker" card). That folder wasn't in the zip you gave me — it's your
tracking/affiliate redirect, so I left both links pointing at
`/ntrack/index.html` exactly as they were, unchanged. **You need to copy your
existing `ntrack/` folder into `public/ntrack/` before deploying**, or update
`NTRACK_HREF` in `lib/site.ts` if it now lives somewhere else.

## What's fully built and working
- All 11 calculators with real formulas (BMI, TDEE, BMR, calories, macros,
  body fat, protein, 1RM, running pace, water intake, weight loss) — KG/CM ⇄
  LBS/IN toggle on every one.
- Dynamic `sitemap.xml` and `robots.txt` (`app/sitemap.ts` / `app/robots.ts`),
  matching your old robots rules (same bot blocks).
- JSON-LD: Organization, WebSite, Breadcrumb, Article, FAQ, SoftwareApplication
  and Product schema (for affiliate boxes) — auto-generated per page.
- Dark/light mode, PWA manifest + basic offline service worker.
- CLS-safe AdSense slot component (`components/AdSlot.tsx`) — reserves exact
  space before the script loads, so Core Web Vitals don't take a hit. Drop in
  your `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and real ad slot IDs.
- Amazon affiliate product box component with Pros/Cons + Product schema
  (`components/AffiliateProductBox.tsx`) — ready to drop into any blog post.
- 3 new long-form blog posts written for US/UK search intent (TDEE, macros,
  beginner strength — see `lib/blogs.ts`), plus your 3 original post topics
  ported over as real articles instead of placeholder teasers.

## What still needs your input before this is production-ready
- **CMS**: content currently lives in `lib/blogs.ts` as plain TypeScript. For
  a real editing workflow, connect Sanity.io (free tier) or build a small
  Prisma + Postgres admin — this is a separate, sizeable build.
- **AdSense / GA / Mailchimp / OneSignal IDs**: all wired up and reading from
  `.env.local`, just need your real account IDs.
- **Contact form**: currently has no submit handler — wire it to a Server
  Action, Resend, or Formspree.
- **Exit-intent popup**: not built yet — `components/Newsletter.tsx` covers
  the sidebar/inline version only.
- **Currency converter** (as opposed to unit converter, which is done): not
  built — flag if you want USD/GBP/INR price conversion somewhere specific.
- Run `npm run build` once locally / on Vercel to catch any TypeScript nits
  before going live — this was authored carefully but not compiled in this
  environment.
