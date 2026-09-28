export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fitbyatal.in';
export const SITE_NAME = 'FitByAtal';
export const SITE_DESCRIPTION =
  'Free fitness calculators for BMI, calories, protein, TDEE, macros, body fat and more — plus practical, no-fluff fitness and nutrition guides.';

// The AI Daily Food Tracker link below is an existing tracking/redirect
// link ("ntrack") from the old site. Per instructions it is left EXACTLY
// as it was and is not part of the Next.js rebuild — it should keep
// pointing wherever it currently points on the live server.
export const NTRACK_HREF = '/ntrack/index.html';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/tools/tools', label: 'Tools' },
  { href: '/blogs/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
];

export type Tool = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  category: 'Body' | 'Nutrition' | 'Performance' | 'Hydration';
};

export const TOOLS: Tool[] = [
  { slug: 'bmi-calculator', name: 'BMI Calculator', shortName: 'BMI', description: 'Check your Body Mass Index and what it means for your health.', image: '/images/bmi.png', category: 'Body' },
  { slug: 'body-fat-calculator', name: 'Body Fat Calculator', shortName: 'Body Fat', description: 'Estimate body fat percentage using the US Navy method.', image: '/images/bodyfat.png', category: 'Body' },
  { slug: 'calorie-calculator', name: 'Calorie Calculator', shortName: 'Calories', description: 'Find your daily calorie needs for maintaining, losing or gaining weight.', image: '/images/calories.png', category: 'Nutrition' },
  { slug: 'calories-burned-calculator', name: 'Calories Burned Calculator', shortName: 'Cal Burned', description: 'Estimate calories burned during common workouts and activities.', image: '/images/calories.png', category: 'Performance' },
  { slug: 'macro-calculator', name: 'Macro Calculator', shortName: 'Macros', description: 'Get a personalised protein, carb and fat split for your goal.', image: '/images/macro.png', category: 'Nutrition' },
  { slug: 'one-rep-max-calculator', name: 'One Rep Max Calculator', shortName: '1RM', description: 'Estimate your one-rep max for any lift from a recent set.', image: '/images/one-rep.png', category: 'Performance' },
  { slug: 'protein-calculator', name: 'Protein Calculator', shortName: 'Protein', description: 'Work out how much protein you need per day to build or preserve muscle.', image: '/images/protein.png', category: 'Nutrition' },
  { slug: 'running-pace-calculator', name: 'Running Pace Calculator', shortName: 'Pace', description: 'Convert distance and time into pace, and predict race finish times.', image: '/images/one-rep.png', category: 'Performance' },
  { slug: 'tdee-calculator', name: 'TDEE Calculator', shortName: 'TDEE', description: 'Calculate your Total Daily Energy Expenditure based on activity level.', image: '/images/tdee.png', category: 'Nutrition' },
  { slug: 'water-intake-calculator', name: 'Water Intake Calculator', shortName: 'Water', description: 'Find out how much water you should drink each day.', image: '/images/water.png', category: 'Hydration' },
  { slug: 'weight-loss-calculator', name: 'Weight Loss Calculator', shortName: 'Weight Loss', description: 'Plan a realistic weekly calorie target to reach your goal weight.', image: '/images/lean.png', category: 'Body' },
];
