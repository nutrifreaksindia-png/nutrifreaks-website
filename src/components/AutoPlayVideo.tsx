"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
};

export function AutoPlayVideo({ src, poster, title }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !ready) return;

    const keepPlaying = () => {
      void video.play();
    };

    video.addEventListener("pause", keepPlaying);
    void video.play();

    return () => video.removeEventListener("pause", keepPlaying);
  }, [ready]);

  return (
    <div ref={wrapRef} className="h-full w-full bg-black">
      {ready ? (
        <video
          ref={videoRef}
          className="pointer-events-none h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
          preload="none"
          title={title}
        />
      ) : null}
    </div>
  );
}
