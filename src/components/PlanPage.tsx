import Image from "next/image";
import Link from "next/link";
import { plans, getPlanImages } from "@/content/plans";

export function PlanPage({ slug }: { slug: string }) {
  const plan = plans[slug];
  if (!plan) return null;

  const { portrait, square } = getPlanImages(plan);

  return (
    <article className="min-h-screen bg-black text-white">
      <div className="container-site py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* DESKTOP HERO COLUMN: Portrait Image ONLY (Hidden on Mobile/Tablet < 1024px) */}
          <div className="hidden lg:sticky lg:top-28 lg:col-span-5 lg:block">
            <div className="group relative mx-auto w-full max-w-[480px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/60 p-3 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-gold/60 hover:shadow-neon">
              <div className="relative w-full overflow-hidden rounded-2xl bg-black">
                <Image
                  src={portrait}
                  alt={plan.title}
                  width={720}
                  height={1200}
                  priority
                  quality={90}
                  sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, 0px"
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* MEAL PLAN DETAILS COLUMN: Mobile Top Square Image + Content */}
          <div className="flex flex-col lg:col-span-7">
            {/* MOBILE ONLY: Square Image at the TOP of the meal plan content (Hidden on Desktop >= 1024px) */}
            <div className="mb-8 block w-full max-w-[460px] mx-auto lg:hidden">
              <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black/40 p-2 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:shadow-neon">
                <div className="relative w-full overflow-hidden rounded-xl bg-black">
                  <Image
                    src={square}
                    alt={plan.title}
                    width={900}
                    height={983}
                    priority
                    quality={90}
                    sizes="(max-width: 1023px) 100vw, 0px"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Meal Plan Title & Summary */}
            <header className="mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold md:text-sm">
                {plan.eyebrow}
              </p>
              <h1 className="mt-2.5 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl xl:text-5xl">
                {plan.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                {plan.summary}
              </p>
            </header>

            {/* Meal Plan Sections */}
            <div className="space-y-8 md:space-y-10">
              {plan.sections.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 md:p-8"
                >
                  <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {section.heading}
                  </h2>
                  {section.body && (
                    <p className="mt-3 text-[15px] leading-relaxed text-muted md:text-base">
                      {section.body}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5 text-[15px] text-muted md:text-base">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(255,205,87,0.8)]" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Call To Action */}
              <div className="pt-2 pb-4">
                <Link
                  href="/book-free-consultation"
                  className="btn-gold w-full text-center sm:w-auto"
                >
                  {plan.cta || "Book your free consultation"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
