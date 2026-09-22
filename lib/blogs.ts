export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string; // ISO
  readTime: string;
  region: 'IN' | 'US' | 'UK' | 'Global';
  faqs: { q: string; a: string }[];
  body: string[]; // paragraphs, rendered as-is (markdown-lite: **bold**, ## headings, - bullets)
};

export const BLOG_POSTS: BlogPost[] = [
  // ---- legacy topics ported over from the old homepage teasers ----
  {
    slug: 'high-protein-foods-for-muscle-building',
    title: 'High Protein Foods for Muscle Building',
    category: 'Nutrition',
    excerpt:
      'The everyday foods that actually move the needle on muscle growth — no powders required.',
    image: '/images/blog1.png',
    date: '2025-05-20',
    readTime: '5 min read',
    region: 'Global',
    faqs: [
      { q: 'How much protein do I need to build muscle?', a: 'Most people building muscle do well around 1.6–2.2g of protein per kg of bodyweight per day, spread across 3–4 meals.' },
      { q: 'Can I build muscle without protein powder?', a: 'Yes. Whole foods like eggs, chicken, Greek yogurt, paneer and lentils can cover your protein target on their own.' },
    ],
    body: [
      'Muscle isn\'t built in the gym — it\'s built at the dinner table. You can train perfectly and still stall out if your plate doesn\'t back it up.',
      '## The foods worth building meals around',
      '- **Eggs** — cheap, complete protein, and the yolk carries most of the micronutrients most people skip.',
      '- **Chicken breast & thigh** — thigh has a bit more fat but is harder to overcook, which matters more than people admit.',
      '- **Greek yogurt & paneer** — an easy way to add 15–20g of protein to a meal that otherwise has none.',
      '- **Lentils (dal) & chickpeas** — for anyone eating mostly plant-based, these plus rice cover the amino acid profile you need.',
      '- **Fish** — salmon and mackerel add omega-3s on top of the protein, which most diets are short on anyway.',
      '## A simple way to hit your number',
      'Rather than tracking every gram, aim for a palm-sized protein source at each meal. For most adults that lands close to the 1.6–2.2g/kg range without a food scale in sight.',
    ],
  },
  {
    slug: 'beginner-workout-plan-at-home',
    title: 'Beginner Workout Plan at Home',
    category: 'Workout',
    excerpt:
      'A no-equipment, three-day routine for your first month of training — built to stick, not just to sweat.',
    image: '/images/blog2.png',
    date: '2025-05-18',
    readTime: '6 min read',
    region: 'Global',
    faqs: [
      { q: 'Do I need equipment to start?', a: 'No. Bodyweight training is enough to build real strength for the first 8–12 weeks.' },
      { q: 'How many days a week should a beginner train?', a: '3 days a week with rest in between is enough to see steady progress without burning out.' },
    ],
    body: [
      'The best beginner plan is the one you actually finish. This is a 3-day, bodyweight-only routine built around that idea.',
      '## The routine',
      '- **Day 1 — Lower body:** bodyweight squats, glute bridges, walking lunges, calf raises.',
      '- **Day 2 — Upper body:** push-ups (knee variation is fine), doorframe rows, pike push-ups, plank.',
      '- **Day 3 — Full body:** squat to press (with any bag or bottle), reverse lunges, bird-dogs, side plank.',
      'Do 3 sets of 10–15 reps per move, resting 60–90 seconds between sets.',
      '## Why this works for beginners',
      'Consistency beats intensity for the first month. This plan is short enough (25–30 minutes) that skipping it feels harder than doing it.',
    ],
  },
  {
    slug: 'how-much-water-should-you-drink-daily',
    title: 'How Much Water Should You Drink Daily?',
    category: 'Health',
    excerpt:
      'The honest answer is "it depends" — here\'s how to find your actual number.',
    image: '/images/blog3.png',
    date: '2025-05-15',
    readTime: '4 min read',
    region: 'Global',
    faqs: [
      { q: 'Is 8 glasses a day accurate for everyone?', a: 'It\'s a reasonable default, but bodyweight, climate and activity level change your actual need — our water intake calculator gives a personalised number.' },
      { q: 'Does tea or coffee count towards water intake?', a: 'Yes, in moderation — they still contribute fluid even though caffeine has a mild diuretic effect.' },
    ],
    body: [
      '"Drink 8 glasses a day" is easy to remember and wrong for most people — it was never based on individual bodyweight or climate.',
      '## A better starting point',
      'A commonly used baseline is around 30–35ml per kg of bodyweight per day, adjusted upward for hot climates, high activity, or pregnancy/breastfeeding.',
      'Use the water intake calculator on this site to get a number based on your own weight and activity level instead of a generic rule.',
    ],
  },

  // ---- new long-form posts targeted at US/UK high-CPC search intent ----
  {
    slug: 'tdee-calculator-guide-cutting-vs-bulking-2026',
    title: 'TDEE Calculator Guide: How to Actually Use Your Number to Cut or Bulk (2026)',
    category: 'Nutrition',
    excerpt:
      'Knowing your TDEE is step one. Most people get the next step wrong — here\'s how to turn that number into a real plan.',
    image: '/images/tdee.png',
    date: '2026-01-14',
    readTime: '9 min read',
    region: 'US',
    faqs: [
      { q: 'What is a good calorie deficit for fat loss?', a: 'A deficit of 15–20% below TDEE is sustainable for most people and preserves more muscle than an aggressive cut.' },
      { q: 'How often should I recalculate my TDEE?', a: 'Recalculate every 4–6 weeks, or sooner if your bodyweight changes by more than 2–3kg (4–6lb).' },
      { q: 'Is TDEE the same as maintenance calories?', a: 'Yes — TDEE (Total Daily Energy Expenditure) is your maintenance calorie level before any surplus or deficit is applied.' },
    ],
    body: [
      'If you\'ve searched for a TDEE calculator, you probably already know the acronym: Total Daily Energy Expenditure, the number of calories your body burns in a day including activity. What most calculators don\'t tell you is what to actually do with that number.',
      '## Step 1: Get an honest number, not a flattering one',
      'The biggest reason TDEE-based plans fail isn\'t the math — it\'s the activity level input. Almost everyone selects "moderately active" out of hope rather than habit. If your job is mostly sitting and your workouts are 3–4 sessions a week, "lightly active" is usually closer to the truth.',
      'Run your numbers on our [TDEE calculator](/tools/tdee-calculator) with your real activity level, not your aspirational one.',
      '## Step 2: Set the deficit or surplus based on your goal',
      '- **Fat loss:** 15–20% below TDEE. This is roughly 500–750 fewer calories per day for most adults, and it\'s aggressive enough to see weekly progress without wrecking your energy or your workouts.',
      '- **Lean bulk:** 5–10% above TDEE. Anything more than that mostly adds fat, not muscle, past the first few months of training.',
      '- **Recomposition (build muscle, lose fat at the same time):** stay close to TDEE, within about 5% either way, and let training and protein intake do the heavy lifting.',
      '## Step 3: Recalculate as your weight changes',
      'TDEE isn\'t fixed — it moves with your bodyweight. As you lose weight, your maintenance calories drop too, which is why fat loss often stalls around week 6–8 even when nothing else has changed. Recalculate every month and adjust your target down (or up, for a bulk) by roughly 100 calories at a time.',
      '## A note on tracking apps vs. formulas',
      'TDEE calculators (including ours) use population-average formulas like Mifflin-St Jeor. They get you within about 10% of your real number, which is a good starting point — not a guarantee. Treat the first two weeks as a calibration period: track your actual weight trend and adjust the number to match reality rather than the formula.',
    ],
  },
  {
    slug: 'macro-split-for-fat-loss-us-uk-guide',
    title: 'The Best Macro Split for Fat Loss: A No-Nonsense Guide for the US & UK',
    category: 'Nutrition',
    excerpt:
      'Forget the fad ratios. Here\'s how protein, carbs and fat should actually be split when the goal is losing fat — not muscle.',
    image: '/images/macro.png',
    date: '2026-01-20',
    readTime: '8 min read',
    region: 'US',
    faqs: [
      { q: 'What macro split is best for fat loss?', a: 'A common effective split is roughly 40% protein, 30% carbs, 30% fat, with protein set first based on bodyweight rather than percentage.' },
      { q: 'Should I do keto for fat loss?', a: 'Keto can work, but it isn\'t inherently better for fat loss than a moderate-carb approach — the deficit is what drives results, not the macro ratio itself.' },
      { q: 'Do I need to hit my macros exactly every day?', a: 'No. Being within 5–10g of each target most days matters far more than hitting an exact number every single day.' },
    ],
    body: [
      'Search "best macros for fat loss" and you\'ll find a different ratio on every site. The truth is simpler than the debate suggests: protein should be set first, and carbs vs. fat is mostly a matter of personal preference and adherence.',
      '## Set protein first, always',
      'Protein is the one macro that directly protects muscle in a calorie deficit. Aim for 1.6–2.2g per kg of bodyweight (roughly 0.7–1g per lb) regardless of which diet style you follow.',
      '## Then split the rest based on how you eat',
      '- **If you train hard and want energy for workouts:** lean higher carb — around 40% carbs, 25–30% fat.',
      '- **If you\'re less active or prefer fewer, larger meals:** lean higher fat — around 40% fat, 20–25% carbs.',
      'Neither is objectively better for fat loss. The one you can actually stick to for 12 weeks wins.',
      '## Use a calculator, then adjust by feel',
      'Start with our [macro calculator](/tools/macro-calculator) to get baseline numbers from your TDEE and goal. Then give it two weeks — if energy or gym performance drops noticeably, shift 5–10% from fat to carbs (or vice versa) and reassess.',
      '## The part most guides skip: fibre and food quality',
      'Two people can hit identical macros and feel completely different depending on food choices. Prioritise whole food sources — vegetables, whole grains, lean proteins — for at least 80% of your intake, and leave the rest for whatever keeps you sane.',
    ],
  },
  {
    slug: 'strength-training-for-beginners-uk-us-2026',
    title: 'Strength Training for Beginners: A Realistic First 8 Weeks (US/UK 2026 Guide)',
    category: 'Workout',
    excerpt:
      'Most beginner programmes are either too complicated or too soft. Here\'s a straightforward 8-week plan built around lifts you\'ll actually keep doing.',
    image: '/images/one-rep.png',
    date: '2026-02-02',
    readTime: '10 min read',
    region: 'UK',
    faqs: [
      { q: 'How many days a week should a beginner lift weights?', a: 'Three full-body sessions a week is the sweet spot — enough stimulus to progress, enough recovery to avoid burnout.' },
      { q: 'Should beginners do full body or split routines?', a: 'Full body, 2–3 times a week, builds strength faster for beginners than a split routine and is easier to stay consistent with.' },
      { q: 'How do I know if I\'m lifting the right weight?', a: 'If you can comfortably do more than 2–3 extra reps beyond your target on the last set, the weight is too light. Use our one-rep max calculator to estimate a sensible starting point.' },
    ],
    body: [
      'Most "beginner" strength programmes are written for people who are already comfortable in a gym. This one assumes you\'re not, and it\'s built around four lifts you can learn properly in the first two weeks.',
      '## The four lifts',
      '- **Goblet squat** — teaches squat mechanics without loading the spine the way a barbell back squat does.',
      '- **Romanian deadlift (dumbbell or barbell)** — builds the hamstrings and lower back safely with a lighter learning curve than a conventional deadlift.',
      '- **Bench press or push-up progression** — whichever you have access to; both build the same pushing strength.',
      '- **Seated or standing row** — balances out all the pushing with pulling strength, which most beginner plans neglect.',
      '## The 8-week structure',
      'Train 3 times a week, full body, with a rest day between sessions. Weeks 1–2 focus purely on form at a light, controlled weight. From week 3, add weight in small increments — 2.5kg (5lb) for upper body lifts, 5kg (10lb) for lower body lifts — whenever you complete all sets with good form.',
      '## Estimating your starting weight',
      'If you\'ve never lifted before, start lighter than you think you need to. Once you have a comfortable working weight after week 2, run it through our [one-rep max calculator](/tools/one-rep-max-calculator) to get a rough sense of your current strength level and track progress objectively from there.',
      '## What actually derails beginners',
      'It\'s rarely the programme — it\'s trying to add three new habits (diet, cardio, lifting) in the same week. Get consistent with the lifting first. Everything else is easier to layer on once training feels automatic rather than effortful.',
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
