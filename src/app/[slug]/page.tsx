import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PlanPage } from "@/components/PlanPage";
import { SimpleForm } from "@/components/SimpleForm";
import { plans, healthGoals, mealPlanCards } from "@/content/plans";
import { policies } from "@/content/policies";
import { site, dietaryPreferences, packages } from "@/content/site";
import { getPost, getPosts, getPostsByLang } from "@/lib/posts";
import { BodyFatForm } from "@/components/BodyFatForm";

type Props = { params: Promise<{ slug: string }> };

const staticSlugs = [
  "about",
  "contact",
  "gallery",
  "blog",
  "choose-your-health-goal",
  "meal-plans",
  "book-free-consultation",
  "food-facts-and-myths",
  "english-blogs",
  "tamil-blogs",
  "subscribe",
  "login",
  "body-fat-calculator",
  "all-meal-plans",
  "our-policies",
  ...Object.keys(plans),
  ...Object.keys(policies),
];

export function generateStaticParams() {
  const postSlugs = getPosts().map((p) => ({ slug: p.slug }));
  return [...staticSlugs.map((slug) => ({ slug })), ...postSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (post) return { title: post.title, description: post.excerpt };
  if (plans[slug]) return { title: plans[slug].title, description: plans[slug].summary };
  if (policies[slug]) return { title: policies[slug].title, description: policies[slug].intro };
  const titles: Record<string, string> = {
    about: "About",
    contact: "Contact",
    gallery: "Gallery",
    blog: "Blog",
    "choose-your-health-goal": "Choose your health goal",
    "meal-plans": "Meal plans",
    "book-free-consultation": "Book free consultation",
    "food-facts-and-myths": "Food: facts and myths",
    "english-blogs": "English blogs",
    "tamil-blogs": "Tamil blogs",
    subscribe: "Subscribe",
    login: "Login",
    "body-fat-calculator": "Body fat calculator",
    "all-meal-plans": "All meal plans",
    "our-policies": "Our policies",
  };
  return { title: titles[slug] ?? slug };
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (post) return <BlogPost post={post} />;
  if (plans[slug]) return <PlanPage slug={slug} />;
  if (policies[slug]) return <PolicyPage slug={slug} />;

  switch (slug) {
    case "about":
      return <AboutPage />;
    case "contact":
      return <ContactPage />;
    case "gallery":
      return <GalleryPage />;
    case "blog":
      return <BlogIndex lang="all" />;
    case "english-blogs":
      return <BlogIndex lang="en" />;
    case "tamil-blogs":
      return <BlogIndex lang="ta" />;
    case "food-facts-and-myths":
      return <FoodFactsPage />;
    case "choose-your-health-goal":
      return <GoalsPage />;
    case "meal-plans":
      return <MealPlansPage />;
    case "all-meal-plans":
      return <AllMealPlansPage />;
    case "book-free-consultation":
      return <ConsultationPage />;
    case "subscribe":
      return <SubscribePage />;
    case "login":
      return <LoginPage />;
    case "body-fat-calculator":
      return <CalculatorPage />;
    case "our-policies":
      return <OurPoliciesPage />;
    default:
      notFound();
  }
}

function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="page-banner">
      <div className="container-site">
        <h1 className="font-display text-3xl font-semibold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-white/70">{subtitle}</p>}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageBanner title="About us" subtitle="Precision-nutrition meals, delivered with care." />
      <div className="container-site-narrow space-y-8 py-12 text-lg leading-relaxed text-muted">
        <p>
          NutriFreaks is a precision-nutrition meal service dedicated to helping individuals achieve sustainable health
          outcomes through scientifically designed food. Our approach combines dietician expertise, high-quality
          ingredients, and personalised meal planning to support a variety of goals.
        </p>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">What we offer</h2>
          <p className="mt-3">
            We provide customised, goal-based meals for fat loss, diabetes reversal and management, muscle gain, healthy
            lifestyle, pregnancy wellness, kids’ nutrition, elderly care, post-illness recovery, and more. We also
            cater to dietary preferences and restrictions, including vegetarian, vegan, lactose-free, gluten-free, and
            allergy-sensitive requirements.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">How our meals are designed</h2>
          <p className="mt-3">
            Every NutriFreaks meal is thoughtfully crafted with precision. Ingredients are measured before cooking,
            macronutrients are balanced, and calorie control is maintained to ensure each meal aligns with your
            nutritional needs. Our dieticians continually track progress, recommend adjustments, and provide guidance
            throughout your wellness journey.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Our delivery & service model</h2>
          <p className="mt-3">
            From our curated menus to doorstep delivery, NutriFreaks focuses on making healthy eating simple and
            reliable. We also operate specialised models such as homemaker-powered kitchens and hospital meal services
            to reach diverse clients with consistent quality.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-ink">Our mission</h2>
          <p className="mt-3">
            NutriFreaks exists to make nutrition simple, accessible, and sustainable. We believe that long-term health
            starts with the right daily habits, and our goal is to empower individuals with meals that are wholesome,
            delicious, and scientifically structured. Whether you aim to transform, manage a condition, or maintain
            wellness, NutriFreaks is your trusted partner—one meal at a time.
          </p>
        </section>
      </div>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageBanner title="Contact us" subtitle={`We currently provide our meals service in ${site.city}.`} />
      <div className="container-site grid gap-12 py-12 lg:grid-cols-2">
        <div>
          <p className="text-lg text-muted">
            Contact number:{" "}
            <a className="font-semibold text-gold transition-all hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.5)]" href={`tel:${site.phoneTel}`}>
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-lg text-muted">
            Email us:{" "}
            <a className="font-semibold text-gold transition-all hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.5)]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-6 text-muted">{site.address}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">Make an enquiry</h2>
          <div className="mt-6">
            <SimpleForm
              endpoint="/v1/contact"
              successMessage="Thanks for writing in."
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone number", type: "tel", required: true },
                { name: "pincode", label: "Pin code", required: true },
                { name: "message", label: "Message", textarea: true, required: true },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function ConsultationPage() {
  return (
    <>
      <PageBanner
        title="Book your free consultation"
        subtitle="One of our qualified nutrition experts will call your number for a free consultation"
      />
      <div className="container-site grid items-start gap-12 py-12 lg:grid-cols-2">
        <SimpleForm
          endpoint="/v1/consultation"
          submitLabel="Send"
          successMessage="Consultation request received."
          fields={[
            { name: "firstName", label: "First name", required: true },
            { name: "lastName", label: "Last name", required: true },
            { name: "mobile", label: "Mobile number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", required: true },
          ]}
        />
        <Image
          src="/images/consultant.webp"
          alt="Nutrition specialist"
          width={640}
          height={640}
          quality={90}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="w-full rounded-2xl border border-white/10 bg-black object-cover transition-all duration-300 hover:scale-[1.01] hover:border-gold/70 hover:shadow-neon"
        />
      </div>
    </>
  );
}

function GoalsPage() {
  return (
    <>
      <PageBanner title="Choose your health goal" subtitle="To view the meal plans suitable for you" />
      <div className="container-site py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {healthGoals.map((g) => (
            <Link key={g.slug} href={g.href} className="goal-card group">
              <div className="relative aspect-[9/16] w-full">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="goal-card-image"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="panel-interactive mt-14 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">Not matching your requirements?</h2>
          <Link href="/book-free-consultation" className="btn-gold mt-6">
            Customize yourself
          </Link>
        </div>
      </div>
    </>
  );
}

function MealPlansPage() {
  return (
    <>
      <PageBanner
        title="What’s your health goal?"
        subtitle="Let us know your health goal so that we can provide you with the exact diet meals to your doorstep."
      />
      <div className="container-site grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {mealPlanCards.map((c) => (
          <Link key={c.href} href={c.href} className="card-interactive group overflow-hidden">
            <Image
              src={c.image}
              alt={c.title}
              width={600}
              height={900}
              quality={90}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <h2 className="p-4 font-display text-lg font-semibold text-ink transition-colors group-hover:text-gold">{c.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

function AllMealPlansPage() {
  return (
    <>
      <PageBanner title="All meal plans" subtitle="Low-carb meals with flexible packages." />
      <div className="container-site py-12">
        <h2 className="font-display text-3xl font-semibold">Low-carb meals</h2>
        <p className="mt-3 text-muted">Minimal carbohydrates, focused on proteins, healthy fats, and fiber-rich veggies</p>
        <ul className="mt-6 grid gap-2 text-muted md:grid-cols-2">
          {[
            "Less than 550 calories per meal",
            "Less than 25% calories from carbs",
            "Rich in protein, fiber & healthy fats",
            "Guaranteed results",
            "Expert follow-up",
            "Homely taste",
          ].map((i) => (
            <li key={i}>• {i}</li>
          ))}
        </ul>
        <h3 className="mt-10 font-display text-xl font-semibold">Dietary preferences</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {dietaryPreferences.map((d) => (
            <span key={d} className="rounded-full border border-white/10 bg-black px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-gold/70 hover:text-gold hover:shadow-neon">
              {d}
            </span>
          ))}
        </div>
        <h3 className="mt-10 font-display text-xl font-semibold">Packages</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="card-interactive p-6">
              {p.badge && <p className="text-sm font-semibold text-navy">{p.badge}</p>}
              <h4 className="mt-1 font-display text-2xl">{p.name}</h4>
              <p className="text-muted">{p.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Packages can be opted including or excluding Sundays. On Sundays, cheat day meals are provided.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/choose-your-health-goal" className="btn-gold">
            Get menus
          </Link>
          <Link href="/book-free-consultation" className="btn-outline">
            Get quote
          </Link>
        </div>
      </div>
    </>
  );
}

function GalleryPage() {
  const images = [
    "/images/banner.webp",
    "/images/og-image.webp",
    "/images/gallery/custom-1.jpg",
    "/images/gallery/custom-2.jpg",
    "/images/plans/fat-loss-poster.jpg",
    "/images/plans/diabetes-poster.jpg",
    "/images/plans/muscle-poster.jpg",
    "/images/gallery/fat-loss-old.jpg",
    "/images/gallery/diabetes-old.jpg",
    "/images/gallery/weight-gain-old.jpg",
    "/images/gallery/lifestyle-old.jpg",
    "/images/gallery/custom-old.png",
    "/images/gallery/elderly-old.png",
    "/images/gallery/pregnancy-old.jpg",
    ...healthGoals.map((g) => g.image),
  ];
  return (
    <>
      <PageBanner title="Gallery" subtitle="Meals, menus and moments from NutriFreaks." />
      <div className="container-site columns-1 gap-4 py-12 sm:columns-2 lg:columns-3">
        {images.map((src) => (
          <Image
            key={src}
            src={src}
            alt="NutriFreaks gallery"
            width={800}
            height={1000}
            quality={90}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="gallery-item"
          />
        ))}
      </div>
    </>
  );
}

function FoodFactsPage() {
  return (
    <>
      <PageBanner title="Food: facts and myths" />
      <div className="container-site grid gap-10 py-12 lg:grid-cols-2">
        <div className="panel-interactive p-8">
          <h2 className="font-display text-2xl font-semibold">Welcome to our blogs!</h2>
          <p className="mt-4 text-muted">
            Dive deep into the world of health, nutrition, and food science with our expertly curated blogs. Available
            in both English and Tamil, these blogs are packed with valuable insights to guide your dietary choices.
          </p>
          <p className="mt-4 text-muted">Subscribe now – It’s free! Let’s debunk myths and discover the facts, together.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/english-blogs" className="btn-gold">
              English blogs
            </Link>
            <Link href="/subscribe" className="btn-outline">
              Subscribe – it’s free
            </Link>
          </div>
        </div>
        <div className="panel-interactive border-gold/20 bg-black p-8 text-white">
          <h2 className="font-display text-2xl font-semibold">உணவு: உண்மைகளும், புனைவுகளும்</h2>
          <p className="mt-4 text-white/75">
            எங்கள் நிபுணத்துவம் வாய்ந்த பதிவுகளின் வழி உடல்நலம், ஊட்டச்சத்து மற்றும் உணவு அறிவியல் உலகில் மூழ்குவதற்கு
            உங்களை அழைக்கிறோம்.
          </p>
          <p className="mt-4 text-white/75">இலவசமாக சந்தாதாரர் ஆகுங்கள்! கட்டுக்கதைகளை உடைத்து, உண்மைகளைக் கண்டறிவோம்.</p>
          <Link href="/tamil-blogs" className="btn-gold mt-6">
            தமிழ் வலைப்பதிவுகள்
          </Link>
        </div>
      </div>
    </>
  );
}

function BlogIndex({ lang }: { lang: "all" | "en" | "ta" }) {
  const list = lang === "all" ? getPosts() : getPostsByLang(lang);
  const title = lang === "en" ? "English blogs" : lang === "ta" ? "Tamil blogs" : "Blog";
  return (
    <>
      <PageBanner title={title} subtitle="Nutrition ABC and food science, in English and Tamil." />
      <div className="container-site grid gap-6 py-12 md:grid-cols-2">
        {list.map((p) => (
          <Link key={p.slug} href={`/${encodeURIComponent(p.slug)}`} className="link-card">
            <p className="text-xs tracking-wide text-muted">{p.categories.join(" · ")}</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-ink">{p.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted">{p.excerpt}</p>
            <p className="mt-4 text-xs text-muted">{p.date}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

function BlogPost({ post }: { post: ReturnType<typeof getPosts>[number] }) {
  return (
    <article>
      <PageBanner title={post.title} subtitle={post.categories.join(" · ")} />
      <div className="container-site-narrow py-12">
        <p className="text-sm text-muted">{post.date} · NutriFreaks</p>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
          {post.paragraphs.map((para) =>
            para.startsWith("- ") ? (
              <p key={para} className="pl-4 text-muted">
                {para}
              </p>
            ) : (
              <p key={para}>{para}</p>
            ),
          )}
        </div>
        <Link href="/blog" className="mt-10 inline-block font-semibold text-gold transition-all hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.5)]">
          ← Back to blogs
        </Link>
      </div>
    </article>
  );
}

function PolicyPage({ slug }: { slug: string }) {
  const policy = policies[slug];
  return (
    <>
      <PageBanner title={policy.title} />
      <div className="container-site-narrow space-y-8 py-12">
        <p className="text-lg leading-relaxed text-muted">{policy.intro}</p>
        {policy.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl font-semibold text-ink">{s.heading}</h2>
            {s.body && <p className="mt-3 leading-relaxed text-muted">{s.body}</p>}
            {s.bullets && (
              <ul className="mt-3 space-y-2 text-muted">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <p className="text-muted">
          Phone: {site.phone} · Email: {site.email}
        </p>
      </div>
    </>
  );
}

function SubscribePage() {
  return (
    <>
      <PageBanner title="Subscribe" subtitle="Enter your email below to receive updates." />
      <div className="container-site-narrow py-12">
        <SimpleForm
          endpoint="/v1/subscribe"
          submitLabel="Subscribe"
          successMessage="Thanks for subscribing to NutriFreaks!"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
          ]}
        />
      </div>
    </>
  );
}

function LoginPage() {
  return (
    <>
      <PageBanner title="Login" subtitle="Member accounts from the WordPress site are not on this stack yet." />
      <div className="container-site-narrow py-12">
        <SimpleForm
          endpoint="/v1/login"
          submitLabel="Login"
          successMessage="Logged in."
          fields={[
            { name: "email", label: "Email", type: "email", required: true },
            { name: "password", label: "Password", type: "password", required: true },
          ]}
        />
        <p className="mt-4 text-sm text-muted">
          Need meals instead?{" "}
          <Link href="/book-free-consultation" className="font-semibold text-gold transition-all hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.5)]">
            Book a free consultation
          </Link>
          .
        </p>
      </div>
    </>
  );
}

function CalculatorPage() {
  return (
    <>
      <PageBanner title="Body fat calculator" subtitle="A tape-based estimate to start the conversation with our dieticians." />
      <BodyFatForm />
    </>
  );
}

function OurPoliciesPage() {
  return (
    <>
      <PageBanner title="Our policies" />
      <div className="container-site grid gap-4 py-12 md:grid-cols-2">
        {Object.entries(policies).map(([slug, p]) => (
          <Link key={slug} href={`/${slug}`} className="link-card">
            <h2 className="font-display text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted">{p.intro}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
