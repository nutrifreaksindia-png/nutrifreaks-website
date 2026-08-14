import Image from "next/image";
import Link from "next/link";
import { whyUs } from "@/content/site";
import { healthGoals } from "@/content/plans";

export default function HomePage() {
  return (
    <>
      <section className="bg-[#f3eee6]">
        <Link href="/choose-your-health-goal" className="block" aria-label="Explore meal plans">
          <div className="hidden grid-cols-3 md:grid">
            <img src="/images/hero/left.gif" alt="NutriFreaks meal plans" className="h-full w-full object-cover" />
            <img src="/images/hero/mid.gif" alt="" className="h-full w-full object-cover" />
            <img src="/images/hero/right.gif" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-1 md:hidden">
            <img src="/images/hero/left.gif" alt="NutriFreaks meal plans" className="w-full" />
            <img src="/images/hero/right-phone.gif" alt="" className="w-full" />
          </div>
        </Link>
        <div className="container-site py-8">
          <HomeCarousel />
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-site flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <Image
            src="/images/consultant.webp"
            alt="A Nutrition Specialist in consultation through a phone call"
            width={280}
            height={280}
            className="h-40 w-40 rounded-full object-cover shadow-card md:h-56 md:w-56"
          />
          <div className="text-center md:text-left">
            <h2 className="section-title">Free Consultation</h2>
            <p className="mt-3 text-lg text-muted">Talk to our Nutrition Expert to plan your meals</p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <Link href="/book-free-consultation" className="btn-gold">
                Book Consultation
              </Link>
              <Link href="/choose-your-health-goal" className="btn-outline">
                Explore Myself
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-cream py-16 md:py-20">
        <div className="container-site">
          <h2 className="section-title text-center">Why NutriFreaks?</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
                  <span className="text-xl font-semibold">{item.title.charAt(0)}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                {"href" in item && item.href && (
                  <Link href={item.href} className="mt-3 inline-block text-sm font-semibold text-navy underline">
                    Read policy
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <h2 className="section-title text-center">Choose a starting point</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Goal-based meals for fat loss, diabetes reversal, muscle gain and more — delivered in Madurai.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {healthGoals.slice(0, 6).map((g) => (
              <Link key={g.slug} href={g.href} className="group overflow-hidden rounded-2xl bg-black shadow-card">
                <Image
                  src={g.image}
                  alt={g.title}
                  width={600}
                  height={1000}
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <p className="px-4 py-3 text-center font-semibold text-white">{g.title}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/choose-your-health-goal" className="btn-gold">
              View all meal plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeCarousel() {
  const slides = [
    { src: "/images/plans/fat-loss-poster.jpg", alt: "Fat loss meals" },
    { src: "/images/plans/diabetes-poster.jpg", alt: "Diabetes reversal meals" },
    { src: "/images/plans/muscle-poster.jpg", alt: "Muscle gain meals" },
  ];
  return (
    <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
      {slides.map((s) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={900}
          height={984}
          className="w-full rounded-2xl object-cover shadow-card"
        />
      ))}
    </div>
  );
}
