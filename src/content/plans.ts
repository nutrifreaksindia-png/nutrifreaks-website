export type Plan = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  poster?: string;
  portraitImage?: string;
  squareImage?: string;
  goalImage: string;
  sections: { heading: string; body?: string; bullets?: string[] }[];
  cta?: string;
};

export function getPlanImages(plan: Plan): { portrait: string; square: string } {
  const portrait = plan.portraitImage || plan.image || plan.goalImage;
  const square = plan.squareImage || plan.poster || plan.goalImage || plan.image;
  return { portrait, square };
}

export const healthGoals: {
  slug: string;
  title: string;
  image: string;
  href: string;
}[] = [
  { slug: "fat-loss", title: "Fat loss", image: "/images/goals/fat-loss.jpg", href: "/fat-loss-meals" },
  { slug: "diabetes", title: "Diabetes reversal", image: "/images/goals/diabetes.jpg", href: "/diabetes-reversal-meals-plan-2" },
  { slug: "muscle", title: "Muscle gain", image: "/images/goals/muscle.jpg", href: "/muscle-gain-meals-plan-2" },
  { slug: "lifestyle", title: "Healthy lifestyle", image: "/images/goals/lifestyle.jpg", href: "/healthy-lifestyle" },
  { slug: "pregnancy", title: "Pregnancy wellness", image: "/images/goals/pregnancy.jpg", href: "/pregnancy-wellness-page" },
  { slug: "kids", title: "Kids nutrition", image: "/images/goals/kids.jpg", href: "/kids-nutrition" },
  { slug: "elderly", title: "Elderly nutrition", image: "/images/goals/elderly.jpg", href: "/elderly-and-kids-nutrition" },
  { slug: "recovery", title: "Post illness / surgery recovery", image: "/images/goals/recovery.jpg", href: "/post-illness-surgery-recovery-page" },
  { slug: "vitamins", title: "Vitamins & mineral optimisation", image: "/images/goals/vitamins.jpg", href: "/vitamins-and-mineral-optimzation" },
];

export const plans: Record<string, Plan> = {
  "fat-loss-meals": {
    slug: "fat-loss-meals",
    title: "Low-carb meal plans by NutriFreaks",
    eyebrow: "Fat loss",
    summary:
      "Our Low-Carb Meal Plans are created for sustainable fat loss, steady energy, and clean eating. We prepare every meal fresh using balanced portions of protein, healthy fats, and fiber-rich vegetables, while keeping carbohydrates controlled.",
    image: "/images/plans/fat-loss.webp",
    poster: "/images/plans/fat-loss-poster.jpg",
    portraitImage: "/images/plans/fat-loss.webp",
    squareImage: "/images/plans/fat-loss-poster.jpg",
    goalImage: "/images/goals/fat-loss.jpg",
    sections: [
      {
        heading: "Fat loss meals",
        body: "Our Fat Loss Meal plan focuses on reducing overall calories while keeping meals filling, nutritious, and satisfying. We balance lean proteins, fiber-rich vegetables, and controlled carbohydrates to help your body burn fat effectively without feeling deprived.",
      },
      {
        heading: "How it works",
        bullets: [
          "Smart calorie control supports gradual and sustainable fat loss.",
          "Higher protein boosts metabolism and reduces cravings.",
          "Balanced meals maintain steady energy and prevent hunger spikes.",
          "Our dietician-guided portions ensure you eat enough without overeating.",
          "Ideal for individuals wanting visible fat-loss results with clean, everyday meals.",
        ],
      },
      {
        heading: "Keto (ketogenic) meals",
        body: "Our Keto plan is a high-fat, very-low-carb approach that shifts your body into ketosis — a metabolic state where fat becomes the primary source of fuel. We prepare macro-balanced Keto meals that make it easy to stay in ketosis without calculating or restricting too much.",
      },
      {
        heading: "How Keto works",
        bullets: [
          "Carbohydrates are kept extremely low to activate ketosis quickly.",
          "Our meals use clean, healthy fats that boost satisfaction and focus.",
          "Your body burns fat more efficiently throughout the day.",
          "Carefully controlled portions help you stay in ketosis effortlessly.",
        ],
      },
      {
        heading: "Paleo meals",
        body: "Our Paleo plan focuses on whole, natural foods. We remove processed ingredients, sugars, refined carbs, and artificial additives, giving your body clean fuel that supports fat loss, gut health, and improved daily energy.",
      },
      {
        heading: "Why choose us for low-carb, keto & paleo?",
        bullets: [
          "Fresh, daily-prepared meals delivered hot to your doorstep.",
          "Dietician-designed plans tailored to your goals and preferences.",
          "Vegetarian, vegan, non-veg, lactose-free & gluten-free options.",
          "Balanced portioning for consistent and sustainable fat loss.",
          "No cooking, no measuring — we take care of everything for you.",
        ],
      },
    ],
  },
  "diabetes-reversal-meals-plan-2": {
    slug: "diabetes-reversal-meals-plan-2",
    title: "Diabetes reversal meals plan",
    eyebrow: "Blood sugar support",
    summary:
      "Our Diabetes Reversal Meals are designed to support healthier, more stable blood sugar levels. Each meal is prepared with low-glycemic ingredients and balanced nutrition to help you experience smoother energy, better control and easier daily consistency.",
    image: "/images/plans/diabetes.webp",
    poster: "/images/plans/diabetes-poster.jpg",
    portraitImage: "/images/plans/diabetes.webp",
    squareImage: "/images/plans/diabetes-poster.jpg",
    goalImage: "/images/goals/diabetes.jpg",
    sections: [
      {
        heading: "What it is",
        body: "This is a structured meal plan that focuses on controlled carbohydrates, steady protein and fibre-rich ingredients. It is suitable for individuals looking to improve blood sugar naturally, maintain stable energy and follow an eating pattern that reduces fluctuations throughout the day.",
      },
      {
        heading: "How it works",
        bullets: [
          "Uses low-glycemic ingredients that support smoother glucose response.",
          "Balanced meals help reduce sudden spikes and dips in blood sugar.",
          "Fibre, healthy fats and steady protein improve overall metabolic balance.",
          "Daily consistency leads to improved insulin efficiency and better long-term control.",
        ],
      },
      {
        heading: "How we support you",
        body: "We begin with a personalised consultation to understand your lifestyle, medical background and current blood sugar range. Meals are then adjusted to suit your requirements. We also guide you with meal timing and daily consistency.",
      },
      {
        heading: "Why choose our plan",
        body: "All meals are prepared fresh with carefully chosen ingredients that support blood sugar control. You receive portion-balanced dishes that promote smoother energy, easier digestion and steady progress. Options are available for vegetarian, vegan, lactose-free and gluten-free preferences.",
      },
    ],
  },
  "muscle-gain-meals-plan-2": {
    slug: "muscle-gain-meals-plan-2",
    title: "Muscle gain meals plan",
    eyebrow: "Strength & recovery",
    summary:
      "Our Muscle Gain Meals are created to help you build lean muscle, improve recovery and support better performance. These meals balance protein, energy-rich carbs and the right fats to help you progress consistently with your training.",
    image: "/images/plans/muscle.webp",
    poster: "/images/plans/muscle-poster.jpg",
    portraitImage: "/images/plans/muscle.webp",
    squareImage: "/images/plans/muscle-poster.jpg",
    goalImage: "/images/goals/muscle.jpg",
    sections: [
      {
        heading: "What it is",
        body: "This plan provides structured, high-protein meals designed to support muscle repair and growth. We prepare calorie-appropriate meals that match your training intensity and goals, whether you aim for lean mass or strength gain.",
        bullets: [
          "Meals with consistent, high-quality protein sources.",
          "Energy-balanced dishes to match workout demands.",
          "Clean, performance-focused ingredients.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "Protein-focused meals help stimulate muscle repair after training.",
          "Carbohydrates are timed and portioned to improve performance and recovery.",
          "Healthy fats support hormones related to strength and muscle growth.",
          "Daily consistency enables steady and measurable progress.",
        ],
      },
      {
        heading: "How we support you",
        body: "We begin with a consultation to understand your training load, body composition and goals. Based on that, we plan your calories, protein intake and meal timing around your workouts.",
        bullets: [
          "Meals aligned with your workout schedule.",
          "Calorie and macro adjustments as needed.",
          "Options for pre and post-workout meals.",
        ],
      },
    ],
  },
  "healthy-lifestyle": {
    slug: "healthy-lifestyle",
    title: "Healthy lifestyle meals plan",
    eyebrow: "Everyday wellness",
    summary:
      "A healthy life begins with calm, consistent choices. Our Healthy Lifestyle Meals are designed for individuals who wish to nourish their bodies with thoughtful, balanced food — meals that promote clarity, comfort and long-term wellbeing.",
    image: "/images/goals/lifestyle.jpg",
    poster: "/images/plans/lifestyle.jpg",
    portraitImage: "/images/goals/lifestyle.jpg",
    squareImage: "/images/plans/lifestyle.jpg",
    goalImage: "/images/goals/lifestyle.jpg",
    sections: [
      {
        heading: "What this plan represents",
        body: "This plan is shaped around the idea of gentle nourishment — food that supports you without overwhelming you. Each meal combines clean proteins, steady carbohydrates and vibrant vegetables to create a sense of balance and comfort.",
      },
      {
        heading: "How it works",
        bullets: [
          "Balanced meals that maintain steady energy from morning to evening.",
          "Thoughtfully portioned ingredients that support metabolism and clarity.",
          "Consistent meal patterns that promote better mood and smoother digestion.",
        ],
      },
      {
        heading: "How we support you",
        body: "We begin by understanding your routine, your preferences and how you want to feel each day. Vegetarian, vegan, lactose-free and gluten-free adaptations are provided with equal attention and care.",
      },
      {
        heading: "Why this works",
        body: "Healthy living is not built on extremes — it is shaped by repeated, gentle decisions. Over time, your body responds with better focus, lighter movement and a renewed sense of wellbeing.",
      },
    ],
  },
  "pregnancy-wellness-page": {
    slug: "pregnancy-wellness-page",
    title: "Pregnancy wellness meals plan",
    eyebrow: "For you and your baby",
    summary:
      "This is a gentle, reliable meal service made to nourish you and your baby. We prepare comforting, nutrient-focused meals so you can enjoy more energy, easier digestion and less mealtime stress.",
    image: "/images/plans/pregnancy.webp",
    portraitImage: "/images/plans/pregnancy.webp",
    squareImage: "/images/goals/pregnancy.jpg",
    goalImage: "/images/goals/pregnancy.jpg",
    sections: [
      {
        heading: "What this plan offers",
        body: "Meals are designed to supply trimester-specific nutrition — more protein, iron and calcium when needed, plus omega-3s and vitamins for baby’s growth. We focus on gentle flavours and easy-to-digest preparations.",
      },
      {
        heading: "How it works",
        bullets: [
          "We start with a personal consultation to understand your trimester, cravings and comfort needs.",
          "Meals are trimester-adapted and portioned to support steady energy and healthy weight gain.",
          "Recipes are created to be gentle on digestion and suitable for common pregnancy sensitivities.",
          "Flexible options available — vegetarian, non-veg, lactose-free and gluten-free — all delivered fresh to your door.",
        ],
      },
      {
        heading: "How we support you",
        body: "We guide you through the journey with friendly, practical care. Our team adjusts meals as you move through trimesters, answers simple nutrition questions, and ensures safe, consistent nutrition so you can focus on feeling your best.",
      },
    ],
  },
  "kids-nutrition": {
    slug: "kids-nutrition",
    title: "Kids nutrition meals",
    eyebrow: "Growing with care",
    summary:
      "Growing children need more than just food — they need the right balance of nourishment to support learning, immunity, and steady physical development. Our Kids Nutrition Meals are designed to make healthy eating simple, enjoyable, and dependable for everyday growth.",
    image: "/images/goals/kids.jpg",
    poster: "/images/plans/kids.jpg",
    portraitImage: "/images/goals/kids.jpg",
    squareImage: "/images/plans/kids.jpg",
    goalImage: "/images/goals/kids.jpg",
    sections: [
      {
        heading: "How these meals support kids",
        body: "We focus on balanced energy, gentle flavours, and nutrient-rich ingredients that help children stay active, attentive, and resilient. Meals are planned to avoid heaviness while still delivering the nutrition needed for growth and immunity.",
      },
      {
        heading: "Adapted for real families",
        body: "Portions and flavours are adapted for age, appetite, and preferences, including options for picky eaters and children with dietary sensitivities. The goal is to build healthy habits without pressure or force.",
      },
    ],
  },
  "elderly-and-kids-nutrition": {
    slug: "elderly-and-kids-nutrition",
    title: "Elderly & kids nutrition meals",
    eyebrow: "Nutrition is care",
    summary:
      "Our Elderly & Kids Meals are designed to offer comfort, safety, and nourishment for the two groups that need it the most. We prepare meals that support steady growth for children and gentle, easy-to-digest nutrition for elders.",
    image: "/images/goals/elderly.jpg",
    portraitImage: "/images/goals/elderly.jpg",
    squareImage: "/images/gallery/elderly-old.png",
    goalImage: "/images/goals/elderly.jpg",
    sections: [
      {
        heading: "Kids nutrition meals",
        body: "Children need meals that fuel growth, concentration and immune strength. We create colourful, mild-flavoured meals that make healthy eating easy and enjoyable for growing kids.",
        bullets: [
          "Balanced energy for learning, play and steady growth.",
          "Kid-friendly flavours that avoid heaviness or strong spices.",
          "Immunity-supporting ingredients from fruits, vegetables and whole foods.",
          "Options for picky eaters or children with dietary restrictions.",
        ],
      },
      {
        heading: "Elderly nutrition meals",
        body: "Elders need meals that are gentle, nourishing and easy to digest. Our elderly-focused meals support strength, comfort and wellbeing while addressing common concerns such as weaker digestion, reduced appetite and nutrient deficiencies.",
        bullets: [
          "Soft-textured meals that are comfortable to chew and digest.",
          "Protein-rich dishes to support strength and mobility.",
          "Heart-friendly and low-spice options for sensitive digestion.",
          "Meals suitable for diabetes, BP, cholesterol or low appetite.",
        ],
      },
      {
        heading: "How we personalise these meals",
        body: "Every child and elder has unique needs. We adjust portion sizes, flavours, textures and ingredients to ensure comfort, safety and enjoyment. Our team also keeps track of allergies, dislikes and medical guidelines.",
      },
    ],
  },
  "vitamins-and-mineral-optimzation": {
    slug: "vitamins-and-mineral-optimzation",
    title: "Vitamins & minerals optimisation",
    eyebrow: "Food-first nutrition",
    summary:
      "Our Vitamins & Minerals Optimisation meals are designed to support everyday health by addressing common nutritional gaps through food-first nutrition. Each meal focuses on naturally nutrient-rich ingredients that help improve energy levels, immunity, bone health, and overall metabolic balance.",
    image: "/images/goals/vitamins.jpg",
    portraitImage: "/images/goals/vitamins.jpg",
    squareImage: "/images/goals/vitamins.jpg",
    goalImage: "/images/goals/vitamins.jpg",
    sections: [
      {
        heading: "Who this is for",
        body: "This plan is ideal for individuals experiencing fatigue, frequent illness, or lifestyle-related deficiencies, as well as those looking to strengthen their nutritional foundation. With clean preparation and balanced portions, we support consistent nutrient absorption.",
      },
      {
        heading: "How meals are designed",
        body: "Thoughtfully designed meals that help optimise essential vitamins and minerals, supporting energy, immunity, and overall wellbeing through food-first nutrition. We personalise meals by adjusting portion size, texture and timing.",
      },
    ],
  },
  "customized-meals-plan": {
    slug: "customized-meals-plan",
    title: "Customized meal plan",
    eyebrow: "Nutrition that fits you",
    summary:
      "Nutrition that fits you — not the other way around. Our Customized Diet Meals are tailored to your body, goals and lifestyle. We combine clinical insight with practical cooking to deliver meals that are effective, enjoyable and easy to follow.",
    image: "/images/plans/custom.webp",
    portraitImage: "/images/plans/custom.webp",
    squareImage: "/images/gallery/custom-old.png",
    goalImage: "/images/gallery/custom-old.png",
    sections: [
      {
        heading: "What this is",
        body: "A personalised meal service where each plan is crafted after a detailed assessment — including your health history, activity level, food preferences and medical considerations. Meals are balanced, portioned and adjusted to help you reach goals like fat loss, muscle gain, blood-sugar control or general wellbeing.",
      },
      {
        heading: "How it works",
        bullets: [
          "We begin with a consultation to capture your goals, preferences and any medical details.",
          "Our nutrition team sets personalised calories, macros and meal timing to match your lifestyle.",
          "We prepare meals with the exact portioning and ingredients needed for consistent progress.",
          "Regular check-ins allow us to tweak the plan — ensuring it stays effective as you progress.",
        ],
      },
      {
        heading: "How we personalise",
        body: "Through measured inputs and human insight. We use your measurements, activity patterns and taste profile, then translate those into daily menus that suit your rhythm. If you are managing conditions (diabetes, hypertension), we incorporate clinical needs; if you have preferences (vegetarian, vegan, allergies), we design around them.",
      },
      {
        heading: "Why choose our customised plan",
        body: "Because one-size-fits-all rarely works. With tailored meals you get faster results, fewer plateaus and a sustainable routine. Our plans blend clinical accuracy with flavours you enjoy — making adherence simple and outcomes measurable.",
      },
    ],
  },
  "customized-diet-meals": {
    slug: "customized-diet-meals",
    title: "Customized diets",
    eyebrow: "Your diet, your way",
    summary:
      "At NutriFreaks, we know that one size doesn’t fit all. That’s why we offer fully customizable meal plans tailored to your unique dietary needs and preferences.",
    image: "/images/gallery/custom-1.jpg",
    portraitImage: "/images/gallery/custom-1.jpg",
    squareImage: "/images/gallery/custom-old.png",
    goalImage: "/images/gallery/custom-old.png",
    sections: [
      {
        heading: "Why choose a customized diet plan?",
        bullets: [
          "Personalization based on your health goals, dietary needs, and preferences",
          "Flexible meals that fit into your daily schedule",
          "A variety of options including allergy-friendly, intolerances, and more",
          "Expert guidance to ensure optimal nutrition",
        ],
      },
      {
        heading: "From goals to restrictions",
        body: "From weight management to athletic performance, from specific dietary restrictions like vegan, vegetarian, gluten-free, lactose-intolerant, or food allergies – we’ll work with you to design a meal plan that checks all your boxes.",
      },
    ],
  },
  "post-illness-surgery-recovery-page": {
    slug: "post-illness-surgery-recovery-page",
    title: "Post illness & post surgery recovery meals",
    eyebrow: "Gentle recovery nutrition",
    summary:
      "Recovery meals are designed to support healing with easy-to-digest, nutrient-dense food. We personalise texture, portion size and timing so meals support recovery rather than causing discomfort.",
    image: "/images/goals/recovery.jpg",
    portraitImage: "/images/goals/recovery.jpg",
    squareImage: "/images/goals/recovery.jpg",
    goalImage: "/images/goals/recovery.jpg",
    sections: [
      {
        heading: "What this plan offers",
        body: "Soft, balanced meals that help restore strength after illness or surgery. Protein, vitamins and minerals are prioritised while spices and heaviness are kept gentle.",
      },
      {
        heading: "How we personalise",
        body: "Recovery needs vary based on condition, age and medical guidance. We adjust portion size, texture and timing to ensure food supports healing at a pace your body is comfortable with.",
      },
    ],
  },
};

export const mealPlanCards = [
  { title: "Meal plan for fat loss", href: "/fat-loss-meals", image: "/images/gallery/fat-loss-old.jpg" },
  { title: "Meal plan for diabetes reversal", href: "/diabetes-reversal-meals-plan-2", image: "/images/gallery/diabetes-old.jpg" },
  { title: "Meal plan for weight gain or body building", href: "/muscle-gain-meals-plan-2", image: "/images/gallery/weight-gain-old.jpg" },
  { title: "Meal plan for healthy lifestyle", href: "/healthy-lifestyle", image: "/images/gallery/lifestyle-old.jpg" },
  { title: "Customized diet plan", href: "/customized-meals-plan", image: "/images/gallery/custom-old.png" },
  { title: "Meal plan for elderly and kids nutrition", href: "/elderly-and-kids-nutrition", image: "/images/gallery/elderly-old.png" },
  { title: "Meal plan for pregnancy wellness", href: "/pregnancy-wellness-page", image: "/images/gallery/pregnancy-old.jpg" },
];
