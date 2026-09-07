import Image from "next/image";
import Link from "next/link";
import { plans } from "@/content/plans";

export function PlanPage({ slug }: { slug: string }) {
  const plan = plans[slug];
  if (!plan) return null;

  return (
    <article>
      <div className="bg-black py-10 text-white md:py-14">
        <div className="container-site">
          <p className="text-sm tracking-[0.12em] text-gold">{plan.eyebrow}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold md:text-5xl">{plan.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/75">{plan.summary}</p>
        </div>
      </div>

      <div className="container-site grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-10">
          {plan.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-ink">{section.heading}</h2>
              {section.body && <p className="mt-3 leading-relaxed text-muted">{section.body}</p>}
              {section.bullets && (
                <ul className="mt-4 space-y-2 text-muted">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <Link href="/book-free-consultation" className="btn-gold">
            Book your free consultation
          </Link>
        </div>
        <aside className="space-y-4">
          <Image
            src={plan.goalImage}
            alt={plan.title}
            width={720}
            height={1200}
            className="w-full rounded-2xl border border-white/10 bg-black object-cover transition-all duration-300 hover:scale-[1.01] hover:border-gold/70 hover:shadow-neon"
          />
          {plan.poster && plan.poster !== plan.goalImage && (
            <Image
              src={plan.poster}
              alt=""
              width={720}
              height={800}
              className="w-full rounded-2xl border border-white/10 bg-black object-cover transition-all duration-300 hover:scale-[1.01] hover:border-gold/70 hover:shadow-neon"
            />
          )}
        </aside>
      </div>
    </article>
  );
}
