export const site = {
  name: "NutriFreaks",
  tagline: "Customized Meals to your Doorstep",
  slogan: "The Future Of Nutrition",
  url: "https://web.nutrifreaks.com",
  description:
    "NutriFreaks delivers personalized, dietician-designed meals to your doorstep in Madurai. Fat loss, diabetes reversal, muscle gain, pregnancy wellness, kids nutrition and more.",
  phone: "9422799333",
  phoneTel: "+919422799333",
  email: "info@nutrifreaks.com",
  adminEmail: "admin@nutrifreaks.com",
  whatsapp: "https://wa.me/+919422799333",
  address: "14C, PT Rajan 8th Street, Narimedu, Madurai 625002",
  city: "Madurai",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/#why-us", label: "Why Us?" },
  { href: "/about", label: "About" },
  { href: "/choose-your-health-goal", label: "Meal Plans" },
  { href: "/food-facts-and-myths", label: "Food: Facts and Myths" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const whyUs = [
  {
    title: "Personalized Meal Plans",
    body: "Every individual is unique, so are their dietary needs. NutriFreaks crafts personalized meal plans tailored to your body measurements and lifestyle, ensuring you receive the nutrition you need.",
  },
  {
    title: "Dietician Follow-Up",
    body: "Stay on track with regular follow-ups from our dieticians. They monitor your progress and fine-tune your plan to ensure lasting, effective results.",
  },
  {
    title: "Free Consultation",
    body: "Enjoy a complimentary consultation where we understand your health goals and lifestyle. Our experts help you select the perfect meal plan to start your wellness journey.",
  },
  {
    title: "Cancellation Options",
    body: "You can pause or end your subscription and cancel a few individual meals during your subscription. Conditions Apply. Read our cancellation and refund policy.",
    href: "/cancellation-and-refund-policy",
  },
  {
    title: "Meals to your Doorstep",
    body: "NutriFreaks delivers fresh, nutritious diet meals right to your doorstep, making it convenient and hassle-free for you to stay on track with your health goals.",
  },
  {
    title: "Flexible Packages",
    body: "Choose from our flexible weekly, monthly, or 3-month packages designed to help you achieve fat loss, muscle gain, diabetes management, and more.",
  },
  {
    title: "Diet-Friendly Options",
    body: "Whether you’re vegetarian, vegan, or have specific dietary restrictions like gluten or lactose intolerance, NutriFreaks offers a variety of diet-friendly meal options to support your wellness journey.",
  },
  {
    title: "Daily Freshness Guaranteed",
    body: "At NutriFreaks, we prioritize quality. Our meals are prepared daily with fresh ingredients and balanced nutrients, ensuring you enjoy every bite while meeting your health objectives.",
  },
] as const;

export const dietaryPreferences = [
  "Non-Veg",
  "Vegetarian",
  "Eggetarian",
  "Vegan",
  "Gluten Free",
  "Lactose Free",
  "Jain",
] as const;

export const packages = [
  { name: "Trial", detail: "1 Week · 6 or 7 Days", badge: null },
  { name: "1 Month", detail: "4 weeks", badge: "Popular · 7.5% OFF" },
  { name: "3 Months", detail: "12 Weeks", badge: "Best Value · 12.5% OFF" },
] as const;
