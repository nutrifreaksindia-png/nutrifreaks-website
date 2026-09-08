"use client";

import Image from "next/image";

const slides = [
  { src: "/images/plans/fat-loss-poster.jpg", alt: "Fat loss meals" },
  { src: "/images/plans/diabetes-poster.jpg", alt: "Diabetes reversal meals" },
  { src: "/images/plans/muscle-poster.jpg", alt: "Muscle gain meals" },
];

export function PosterCarousel() {
  const loop = [...slides, ...slides];

  return (
    <div className="poster-marquee py-4 md:py-8">
      <div className="poster-marquee-track">
        {loop.map((s, i) => (
          <article
            key={`${s.src}-${i}`}
            className="poster-marquee-item"
            aria-hidden={i >= slides.length}
          >
            <div className="glass-card">
              <div className="poster-photo">
                <Image
                  src={s.src}
                  alt={i >= slides.length ? "" : s.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 33vw, 42vw"
                  draggable={false}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
