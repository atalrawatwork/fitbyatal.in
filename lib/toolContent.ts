export type ToolContent = {
  h1: string; // keyword-focused H1
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  related: string[]; // tool slugs
  blogs: string[]; // blog slugs
};

export const TOOL_CONTENT: Record<string, ToolContent> = {
  'bmi-calculator': {
    h1: 'BMI Calculator (kg/cm or lbs/inches)',
    sections: [
      {
        heading: 'What is BMI?',
        paragraphs: [
          `Body Mass Index (BMI) is a simple ratio of your weight to your height. It is calculated as weight in kilograms divided by height in metres squared. A person who is 70 kg and 1.70 m tall has a BMI of 70 / (1.70 × 1.70) = 24.2. Doctors and public-health bodies use it as a quick screening tool because it needs no equipment and works at population level.`,
        ],
      },
      {
        heading: 'BMI categories',
        paragraphs: [`The standard World Health Organization adult ranges are:`],
        bullets: [
          `**Under 18.5** – underweight`,
          `**18.5 to 24.9** – healthy weight`,
          `**25 to 29.9** – overweight`,
          `**30 and above** – obesity`,
        ],
      },
      {
        heading: 'BMI for Indians and South Asians',
        paragraphs: [
          `South Asians tend to carry more body fat and more abdominal fat at the same BMI, so risk of type 2 diabetes and heart disease rises earlier. Many Indian guidelines therefore treat a BMI of 23 or higher as overweight and 25 or higher as obese. If you are of South Asian descent, read your result with these tighter cut-offs in mind.`,
        ],
      },
      {
        heading: 'Limits of BMI',
        paragraphs: [
          `BMI cannot tell muscle from fat. A muscular athlete can land in the "overweight" band with low body fat, while someone with little muscle can have a "normal" BMI and still carry too much fat. Use it alongside waist size and a [body fat estimate](/tools/body-fat-calculator) rather than on its own. It is also not designed for children, pregnant women or people over 65 without a doctor's input.`,
        ],
      },
    ],
    faqs: [
      { q: 'What is a healthy BMI?', a: 'For most adults a BMI between 18.5 and 24.9 is considered healthy under WHO guidelines. For South Asian adults, many guidelines use 18.5 to 22.9.' },
      { q: 'Is BMI accurate for athletes?', a: 'Not always. BMI does not separate muscle from fat, so muscular people can be labelled overweight. Body fat percentage and waist measurement give a better picture.' },
      { q: 'How do I calculate BMI in pounds and inches?', a: 'Multiply your weight in pounds by 703, then divide by your height in inches squared. Or switch the calculator above to imperial units.' },
    ],
    related: ['body-fat-calculator', 'calorie-calculator', 'weight-loss-calculator'],
    blogs: ['bmi-vs-body-fat-percentage-which-matters-more'],
  },

  'body-fat-calculator': {
    h1: 'Body Fat Percentage Calculator (US Navy Method)',
    sections: [
      {
        heading: 'How this body fat calculator works',
        paragraphs: [
          `This calculator uses the US Navy circumference method. You enter height, neck and waist (plus hip for women) and the formula estimates body fat from the logarithms of those measurements. It needs only a tape measure, which makes it far more accessible than skinfold callipers or a DEXA scan.`,
          `Accuracy is typically within about 3 to 4 percentage points of a DEXA scan for most people, which is good enough to track direction over time.`,
        ],
      },
      {
        heading: 'How to measure correctly',
        paragraphs: [`Small measuring errors change the result a lot, so be consistent:`],
        bullets: [
          `**Neck:** just below the larynx, tape sloping slightly down to the front.`,
          `**Waist (men):** at the navel, relaxed, after a normal exhale.`,
          `**Waist (women):** at the narrowest point of the torso; **hip:** at the widest point of the buttocks.`,
          `Measure in the morning, before eating, and take each measurement twice.`,
        ],
      },
      {
        heading: 'Typical body fat ranges',
        paragraphs: [
          `Rough ranges from the American Council on Exercise: essential fat 2–5% (men) and 10–13% (women); athletes 6–13% and 14–20%; fitness 14–17% and 21–24%; average 18–24% and 25–31%. Higher than that is in the obese range. These are guides, not verdicts.`,
        ],
      },
    ],
    faqs: [
      { q: 'How accurate is the Navy body fat formula?', a: 'It is an estimate. For most people it lands within roughly 3 to 4 percentage points of DEXA. It is best used to track change over weeks, not for a precise single number.' },
      { q: 'What is a good body fat percentage for men and women?', a: 'Roughly 14–24% for men and 21–31% for women falls in the fitness-to-average range. Women naturally carry more essential fat than men.' },
      { q: 'How often should I measure body fat?', a: 'Every 2 to 4 weeks is plenty. Daily changes are mostly noise from water and food.' },
    ],
    related: ['bmi-calculator', 'weight-loss-calculator', 'protein-calculator'],
    blogs: ['bmi-vs-body-fat-percentage-which-matters-more'],
  },

  'calorie-calculator': {
    h1: 'Calorie Calculator: How Many Calories Should I Eat a Day?',
    sections: [
      {
        heading: 'How your daily calories are calculated',
        paragraphs: [
          `The calculator first estimates your Basal Metabolic Rate (BMR) with the Mifflin-St Jeor equation, which research shows is the most reliable of the common formulas. It then multiplies BMR by an activity factor from 1.2 (desk job, no exercise) up to 1.9 (very hard daily training) to get maintenance calories.`,
          `From maintenance it applies your goal: about 20% fewer calories to lose fat, about 10% more to gain muscle, or maintenance to stay put.`,
        ],
      },
      {
        heading: 'Choose the honest activity level',
        paragraphs: [
          `Most people overestimate activity. If you sit most of the day and train 3 to 4 times a week, "lightly active" is usually closer to the truth than "very active". Start there, follow the target for two to three weeks and check the scale trend.`,
        ],
      },
      {
        heading: 'Do not go too low',
        paragraphs: [
          `Eating far below your maintenance level costs muscle, energy and sleep. As a rule of thumb do not go under about 1,200 kcal (women) or 1,500 kcal (men) without medical supervision. For the next step after this number, use the [macro calculator](/tools/macro-calculator) to split it into protein, carbs and fat.`,
        ],
      },
    ],
    faqs: [
      { q: 'How many calories should I eat to lose weight?', a: 'A deficit of 15–20% below maintenance is a sustainable starting point, which usually means losing around 0.25–0.75 kg (0.5–1.5 lb) per week.' },
      { q: 'Is the calorie calculator accurate?', a: 'It is a good estimate, typically within about 10% of your real needs. Treat the first two weeks as calibration and adjust based on your weight trend.' },
      { q: 'Are calories the same as kcal?', a: 'Yes. In nutrition, "calorie" almost always means kilocalorie (kcal), the number printed on food labels.' },
    ],
    related: ['tdee-calculator', 'macro-calculator', 'weight-loss-calculator'],
    blogs: ['how-many-calories-should-i-eat-per-day', 'tdee-calculator-guide-cutting-vs-bulking-2026'],
  },

  'calories-burned-calculator': {
    h1: 'Calories Burned Calculator for Workouts',
    sections: [
      {
        heading: 'How calories burned are estimated',
        paragraphs: [
          `Every activity has a MET value (Metabolic Equivalent of Task) – how much harder it is than resting. Calories burned per minute equal MET × 3.5 × body weight in kg ÷ 200. Brisk walking is around 3.5 METs, jogging at 8 km/h around 8, and cycling at a moderate pace around 7 to 8.`,
        ],
      },
      {
        heading: 'Why your watch may disagree',
        paragraphs: [
          `MET values are averages. Your fitness level, terrain, efficiency and heart rate all change the real number. Fitness trackers are usually off by 15–30%, so use any estimate as a comparison between workouts, not as permission to eat back every calorie.`,
        ],
      },
      {
        heading: 'Do not rely on exercise alone for fat loss',
        paragraphs: [
          `A 30-minute run burns roughly 300 kcal for a 70 kg person – about one snack. Most fat loss comes from your food intake; exercise protects muscle, improves health and makes the deficit easier to hold. Set your intake with the [calorie calculator](/tools/calorie-calculator).`,
        ],
      },
    ],
    faqs: [
      { q: 'How many calories does walking 10,000 steps burn?', a: 'Roughly 300–500 kcal for most adults, depending on body weight and pace. Heavier people burn more.' },
      { q: 'What burns the most calories per hour?', a: 'High-intensity activities such as running, rowing, skipping rope and swimming laps typically burn the most, often 600–900 kcal per hour for a 70 kg person.' },
      { q: 'Does weight change calories burned?', a: 'Yes. The formula scales with body weight, so a heavier person burns more calories doing the same activity for the same time.' },
    ],
    related: ['calorie-calculator', 'running-pace-calculator', 'weight-loss-calculator'],
    blogs: ['how-to-calculate-running-pace-5k-10k-half-marathon'],
  },

  'macro-calculator': {
    h1: 'Macro Calculator: Protein, Carbs & Fat Targets',
    sections: [
      {
        heading: 'What are macros?',
        paragraphs: [
          `Macronutrients are the three nutrients that supply calories: protein (4 kcal per gram), carbohydrate (4 kcal per gram) and fat (9 kcal per gram). Calories decide whether you gain or lose weight; macros decide what that weight is made of and how you feel and perform on the way.`,
        ],
      },
      {
        heading: 'How to use your macro numbers',
        paragraphs: [],
        bullets: [
          `**Set protein first** – roughly 1.6–2.2 g per kg of bodyweight protects muscle in a deficit and builds it in a surplus.`,
          `**Keep fat above about 20–25% of calories** for hormone health and vitamin absorption.`,
          `**Fill the rest with carbohydrate**, which fuels training. Active people usually feel better on more carbs.`,
        ],
      },
      {
        heading: 'Consistency beats precision',
        paragraphs: [
          `Being within 5–10 g of each target on most days is enough. Read our guide on the [best macro split for fat loss](/blogs/macro-split-for-fat-loss-us-uk-guide) for how to adjust after the first two weeks.`,
        ],
      },
    ],
    faqs: [
      { q: 'What is the best macro split for fat loss?', a: 'A common starting point is about 30–40% protein, 30–40% carbs and 25–30% fat, with protein set by bodyweight first.' },
      { q: 'Do I need to count macros to lose weight?', a: 'No. Calories drive weight change. Macros are a helpful refinement, especially for keeping muscle while you diet.' },
      { q: 'How many grams of protein per day do I need?', a: 'Most active adults do well on 1.6–2.2 g per kg of bodyweight (0.7–1 g per lb).' },
    ],
    related: ['calorie-calculator', 'protein-calculator', 'tdee-calculator'],
    blogs: ['macro-split-for-fat-loss-us-uk-guide'],
  },

  'one-rep-max-calculator': {
    h1: 'One Rep Max (1RM) Calculator',
    sections: [
      {
        heading: 'How the 1RM calculator works',
        paragraphs: [
          `Your one-rep max is the heaviest weight you can lift for a single clean repetition. Testing it directly is tiring and risky, so this calculator estimates it from a lighter set using the Epley formula: 1RM = weight × (1 + reps ÷ 30). Lift 80 kg for 8 reps and your estimated 1RM is 80 × (1 + 8/30) ≈ 101 kg.`,
        ],
      },
      {
        heading: 'Getting the most accurate estimate',
        paragraphs: [],
        bullets: [
          `Use a set of **10 reps or fewer** – the further above 10, the less accurate any formula gets.`,
          `Take the set close to failure with good form, not a warm-up set.`,
          `Use the same lift and equipment each time so results are comparable.`,
        ],
      },
      {
        heading: 'Using percentages of your 1RM',
        paragraphs: [
          `Strength programmes usually prescribe work as a percentage of 1RM: about 85–95% for heavy singles to triples, 70–80% for sets of 5–8 (the hypertrophy sweet spot) and 60% or less for technique and endurance work. Beginners can follow the plan in our [strength training for beginners guide](/blogs/strength-training-for-beginners-uk-us-2026).`,
        ],
      },
    ],
    faqs: [
      { q: 'What is the most accurate 1RM formula?', a: 'Epley and Brzycki give very similar results for sets under 10 reps. No formula is perfect; they estimate, they do not measure.' },
      { q: 'Is it safe to test a true 1RM?', a: 'It carries a higher injury risk, especially for beginners and without a spotter. An estimate from a 3–8 rep set is safer and nearly as useful.' },
      { q: 'How often should I recalculate my 1RM?', a: 'Every 4 to 8 weeks, or whenever you hit a new rep record on a lift.' },
    ],
    related: ['protein-calculator', 'calorie-calculator', 'body-fat-calculator'],
    blogs: ['strength-training-for-beginners-uk-us-2026', 'one-rep-max-formulas-explained-epley-brzycki'],
  },

  'protein-calculator': {
    h1: 'Protein Calculator: How Much Protein Per Day?',
    sections: [
      {
        heading: 'How much protein do you need?',
        paragraphs: [
          `The official minimum (RDA) is 0.8 g per kg of bodyweight, which is enough to avoid deficiency in a sedentary adult. For muscle building and fat loss, research – including a large 2018 meta-analysis – shows benefits levelling off around 1.6 g per kg, with 2.2 g per kg as a sensible upper target. That is 0.7–1 g per pound.`,
        ],
      },
      {
        heading: 'Protein for different goals',
        paragraphs: [],
        bullets: [
          `**General health:** 0.8–1.2 g/kg`,
          `**Muscle gain:** 1.6–2.2 g/kg`,
          `**Fat loss (keep muscle):** 1.8–2.4 g/kg, higher when the deficit is bigger`,
          `**Older adults (65+):** about 1.2–1.6 g/kg to slow muscle loss`,
        ],
      },
      {
        heading: 'Hitting your number with real food',
        paragraphs: [
          `Spread protein over 3–4 meals with 20–40 g each. Eggs, chicken, fish, Greek yogurt, paneer, tofu, dal and chickpeas all work – see our list of [high-protein foods for muscle building](/blogs/high-protein-foods-for-muscle-building) and the [vegetarian Indian options](/blogs/high-protein-vegetarian-indian-foods).`,
        ],
      },
    ],
    faqs: [
      { q: 'Is too much protein bad for your kidneys?', a: 'In healthy people, intakes up to about 2.2 g/kg are not shown to harm the kidneys. People with existing kidney disease should follow their doctor’s advice.' },
      { q: 'Can I get enough protein as a vegetarian?', a: 'Yes. Dairy, eggs, paneer, lentils, beans, tofu and soy all contribute. You may need slightly larger portions to reach the same total.' },
      { q: 'Should I count protein by lean body mass?', a: 'You can, but bodyweight-based targets are simpler and work well for most people.' },
    ],
    related: ['macro-calculator', 'calorie-calculator', 'one-rep-max-calculator'],
    blogs: ['high-protein-foods-for-muscle-building', 'high-protein-vegetarian-indian-foods'],
  },

  'running-pace-calculator': {
    h1: 'Running Pace Calculator (min/km and min/mile)',
    sections: [
      {
        heading: 'How to calculate running pace',
        paragraphs: [
          `Pace is your time divided by your distance. Run 5 km in 27 minutes and your pace is 27 ÷ 5 = 5:24 per km (about 8:41 per mile). Enter any two of distance, time and pace and the calculator works out the third, and also predicts finish times for common race distances.`,
        ],
      },
      {
        heading: 'Race distances at a glance',
        paragraphs: [],
        bullets: [
          `**5K:** 5 km / 3.11 miles`,
          `**10K:** 10 km / 6.21 miles`,
          `**Half marathon:** 21.0975 km / 13.11 miles`,
          `**Marathon:** 42.195 km / 26.22 miles`,
        ],
      },
      {
        heading: 'Pacing tips',
        paragraphs: [
          `Most easy runs should feel conversational, roughly 60–90 seconds per km slower than 5K race pace. For races, aim for even or slightly negative splits – starting too fast is the most common reason for slowing badly in the final third. More in our guide on [running pace for 5K, 10K and half marathon](/blogs/how-to-calculate-running-pace-5k-10k-half-marathon).`,
        ],
      },
    ],
    faqs: [
      { q: 'What is a good 5K time?', a: 'For beginners, 30–35 minutes is a solid first goal. Recreational runners often run 22–28 minutes. Age, experience and terrain matter a lot.' },
      { q: 'How do I convert min/km to min/mile?', a: 'Multiply the pace per km by 1.609. For example 5:00 per km is about 8:03 per mile.' },
      { q: 'Are race predictions accurate?', a: 'They assume similar fitness and training for the longer distance. Treat them as a reasonable target, not a guarantee.' },
    ],
    related: ['calories-burned-calculator', 'water-intake-calculator', 'calorie-calculator'],
    blogs: ['how-to-calculate-running-pace-5k-10k-half-marathon'],
  },

  'tdee-calculator': {
    h1: 'TDEE Calculator: Total Daily Energy Expenditure',
    sections: [
      {
        heading: 'What is TDEE?',
        paragraphs: [
          `Total Daily Energy Expenditure (TDEE) is the number of calories you burn in a day, including everything from breathing to workouts. It is made of four parts: BMR (about 60–70%), the thermic effect of food (about 10%), everyday movement (NEAT) and deliberate exercise.`,
          `Eat at your TDEE and your weight stays stable. Eat below it to lose weight, above it to gain.`,
        ],
      },
      {
        heading: 'How this TDEE calculator works',
        paragraphs: [
          `It calculates BMR with the Mifflin-St Jeor equation and multiplies by an activity factor (1.2 sedentary, 1.375 lightly active, 1.55 moderately active, 1.725 very active, 1.9 extremely active).`,
        ],
      },
      {
        heading: 'What to do with your TDEE',
        paragraphs: [],
        bullets: [
          `**Lose fat:** eat 15–20% below TDEE.`,
          `**Build muscle:** eat 5–10% above TDEE.`,
          `**Maintain or recomp:** stay within about 5% of TDEE.`,
        ],
      },
      {
        heading: 'Recalculate as you change',
        paragraphs: [
          `TDEE drops as you lose weight. Recalculate every 4 to 6 weeks. The full walkthrough is in our [TDEE guide to cutting and bulking](/blogs/tdee-calculator-guide-cutting-vs-bulking-2026).`,
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between BMR and TDEE?', a: 'BMR is the calories you burn at complete rest. TDEE adds movement, exercise and digestion, so it is always higher than BMR.' },
      { q: 'How accurate is a TDEE calculator?', a: 'Usually within about 10%. Track your weight for two weeks and adjust up or down based on the trend.' },
      { q: 'Is TDEE the same as maintenance calories?', a: 'Yes. Maintenance calories and TDEE mean the same thing.' },
    ],
    related: ['calorie-calculator', 'macro-calculator', 'weight-loss-calculator'],
    blogs: ['tdee-calculator-guide-cutting-vs-bulking-2026', 'how-many-calories-should-i-eat-per-day'],
  },

  'water-intake-calculator': {
    h1: 'Water Intake Calculator: How Much Water Should I Drink?',
    sections: [
      {
        heading: 'How much water do you need?',
        paragraphs: [
          `A common starting point is 30–35 ml per kg of bodyweight per day, so a 70 kg adult needs about 2.1–2.5 litres. Heat, humidity, altitude, exercise, pregnancy and breastfeeding all raise the number. For reference, US health authorities suggest about 2.7 L (women) and 3.7 L (men) of total water from all drinks and food, while European guidance is about 2.0 L and 2.5 L.`,
        ],
      },
      {
        heading: 'Signs you are drinking enough',
        paragraphs: [],
        bullets: [
          `Pale yellow urine through the day`,
          `Rarely thirsty, no headaches or dry mouth`,
          `Steady energy during workouts`,
        ],
      },
      {
        heading: 'Do tea, coffee and food count?',
        paragraphs: [
          `Yes. Tea, coffee, milk, soups and water-rich foods like fruit and dal all contribute; roughly 20% of intake comes from food. In hot Indian summers or long workouts, add extra water and some electrolytes. Read more in [how much water you should drink daily](/blogs/how-much-water-should-you-drink-daily).`,
        ],
      },
    ],
    faqs: [
      { q: 'Is 3 litres of water a day too much?', a: 'For a large or very active person in a hot climate it can be right. For most sedentary adults 2–2.5 litres is enough. Drinking to thirst and urine colour is a good check.' },
      { q: 'Can you drink too much water?', a: 'Rarely, but extreme amounts in a short time can dilute blood sodium (hyponatraemia). Spread intake through the day.' },
      { q: 'Does water help weight loss?', a: 'It helps indirectly: replacing sugary drinks lowers calories and drinking water before meals can slightly reduce appetite.' },
    ],
    related: ['calories-burned-calculator', 'running-pace-calculator', 'bmi-calculator'],
    blogs: ['how-much-water-should-you-drink-daily'],
  },

  'weight-loss-calculator': {
    h1: 'Weight Loss Calculator: How Long to Reach Your Goal Weight',
    sections: [
      {
        heading: 'How the weight loss calculator works',
        paragraphs: [
          `About 7,700 kcal equals one kilogram of body fat (roughly 3,500 kcal per pound). If you eat 500 kcal below maintenance each day you build a 3,500 kcal weekly deficit and lose around 0.45 kg (1 lb) per week. The calculator divides the weight you want to lose by a realistic weekly rate to estimate a date and daily calorie target.`,
        ],
      },
      {
        heading: 'A realistic pace',
        paragraphs: [
          `Aim for 0.25–1% of bodyweight per week. Faster losses cost muscle and are hard to sustain. Real progress is never a straight line – water retention hides fat loss for days, so judge by a two to three week trend.`,
        ],
      },
      {
        heading: 'Why weight loss slows down',
        paragraphs: [
          `As you get lighter your maintenance calories fall, and the same deficit produces slower results. Recalculate every 4–6 weeks using the [TDEE calculator](/tools/tdee-calculator), keep protein high and lift weights. Full plan: [TDEE guide to cutting and bulking](/blogs/tdee-calculator-guide-cutting-vs-bulking-2026).`,
        ],
      },
    ],
    faqs: [
      { q: 'How long does it take to lose 10 kg?', a: 'At a steady 0.5 kg per week it takes about 20 weeks. Starting weight and how strict you are will change this.' },
      { q: 'Is losing 1 kg a week safe?', a: 'Only for people with a lot of weight to lose. For most, 0.25–0.75 kg per week is safer and preserves muscle.' },
      { q: 'Why did my weight stop dropping?', a: 'Common reasons are lower maintenance calories after weight loss, water retention, or tracking drift. Recalculate your target and check portions.' },
    ],
    related: ['tdee-calculator', 'calorie-calculator', 'bmi-calculator'],
    blogs: ['tdee-calculator-guide-cutting-vs-bulking-2026', 'how-many-calories-should-i-eat-per-day'],
  },
};
