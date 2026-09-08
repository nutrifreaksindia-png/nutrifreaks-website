import Link from "next/link";

export function HeroBanner() {
  return (
    <Link href="/choose-your-health-goal" className="block" aria-label="Explore meal plans">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <img
          src="/images/hero/left.gif"
          alt="NutriFreaks meal plans"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <img
          src="/images/hero/mid.gif"
          alt=""
          className="hidden h-full w-full object-cover md:block"
          loading="lazy"
          decoding="async"
        />
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/hero/right.gif" />
          <img
            src="/images/hero/right-phone.gif"
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </Link>
  );
}
