import Image from "next/image";
import Link from "next/link";
import { whyUs } from "@/content/site";
import { healthGoals } from "@/content/plans";

export default function HomePage() {
  return (
    <>
      <section className="bg-black">
        <Link href="/choose-your-health-goal" className="block" aria-label="Explore meal plans">
          <div className="hidden grid-cols-3 md:grid">
            <img src="/images/hero/left.gif" alt="NutriFreaks meal plans" className="h-full w-full object-cover" />
            <img src="/images/hero/mid.gif" alt="" className="h-full w-full object-cover" />
            <img src="/images/hero/right.gif" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-2 md:hidden">
            <img src="/images/hero/left.gif" alt="NutriFreaks meal plans" className="h-full w-full object-cover" />
            <img src="/images/hero/right-phone.gif" alt="" className="h-full w-full object-cover" />
          </div>
        </Link>
        <HomeCarousel />
      </section>

      <section className="section-alt py-12 md:py-16">
        <div className="container-site">
          <div className="text-center">
            <h2 className="section-title">Free consultation</h2>
            <p className="mt-3 text-lg text-muted">Talk to our nutrition expert to plan your meals</p>
          </div>
          <HomeVideos />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/book-free-consultation" className="btn-gold">
              Book consultation
            </Link>
            <Link href="/choose-your-health-goal" className="btn-outline">
              Explore myself
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-20">
        <div className="container-site">
          <h2 className="section-title text-center">Why NutriFreaks?</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <article key={item.title} className="card-interactive p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-[#08080d]">
                  <span className="text-xl font-semibold">{item.title.charAt(0)}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                {"href" in item && item.href && (
                  <Link href={item.href} className="mt-3 inline-block text-sm font-semibold text-gold underline-offset-2 transition-all hover:underline hover:drop-shadow-[0_0_6px_rgba(255,205,87,0.5)]">
                    Read policy
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt py-16">
        <div className="container-site">
          <h2 className="section-title text-center">Choose a starting point</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Goal-based meals for fat loss, diabetes reversal, muscle gain and more — delivered in Madurai.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {healthGoals.slice(0, 6).map((g) => (
              <Link key={g.slug} href={g.href} className="goal-card group">
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="goal-card-image"
                  />
                </div>
                <p className="px-4 py-3 text-center font-semibold text-white transition-colors duration-500 group-hover:text-gold">{g.title}</p>
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

const homeVideos = [
  {
    src: "https://videos.files.wordpress.com/X6KBeGMk/nutrifreaks-customized-meals-film-01_45sec_mp4_hd.mp4",
    poster:
      "https://videos.files.wordpress.com/X6KBeGMk/nutrifreaks-customized-meals-film-01_45sec_mp4_hd_1080p.original.jpg",
    title: "Customized meals to your doorstep for fat loss",
  },
  {
    src: "https://videos.files.wordpress.com/sPo0YFDZ/nutrifreaks-customized-meals-film-02_45sec_mp4_hd.mp4",
    poster:
      "https://videos.files.wordpress.com/sPo0YFDZ/nutrifreaks-customized-meals-film-02_45sec_mp4_hd_1080p.original.jpg",
    title: "Customized meals to your doorstep for diabetes reversal",
  },
];

function HomeVideos() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
      {homeVideos.map((video) => (
        <div key={video.src} className="neon-frame aspect-video">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            preload="metadata"
            poster={video.poster}
            title={video.title}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}

function HomeCarousel() {
  const slides = [
    { src: "/images/plans/fat-loss-poster.jpg", alt: "Fat loss meals" },
    { src: "/images/plans/diabetes-poster.jpg", alt: "Diabetes reversal meals" },
    { src: "/images/plans/muscle-poster.jpg", alt: "Muscle gain meals" },
  ];
  const loop = [...slides, ...slides];

  return (
    <div className="overflow-hidden py-6 md:py-8">
      <div className="poster-marquee flex w-[600%] md:w-[200%]">
        {loop.map((s, i) => (
          <div
            key={`${s.src}-${i}`}
            className="w-[16.666%] shrink-0 px-2 md:px-2.5"
            aria-hidden={i >= slides.length}
          >
            <div className="neon-frame">
              <Image
                src={s.src}
                alt={i >= slides.length ? "" : s.alt}
                width={900}
                height={984}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
