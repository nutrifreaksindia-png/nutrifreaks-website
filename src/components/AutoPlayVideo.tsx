"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
};

const cropStyle = {
  position: "absolute" as const,
  left: 0,
  top: "-3%",
  width: "100%",
  height: "106%",
  objectFit: "cover" as const,
};

export function AutoPlayVideo({ src, poster, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !mounted) return;

    const keepPlaying = () => {
      void video.play();
    };

    video.addEventListener("pause", keepPlaying);
    void video.play();

    return () => video.removeEventListener("pause", keepPlaying);
  }, [mounted]);

  return (
    <div className="relative h-full min-h-[180px] w-full overflow-hidden bg-black">
      {mounted ? (
        <video
          ref={videoRef}
          className="pointer-events-none"
          style={cropStyle}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          title={title}
        />
      ) : (
        <img src={poster} alt="" className="pointer-events-none" style={cropStyle} />
      )}
    </div>
  );
}
