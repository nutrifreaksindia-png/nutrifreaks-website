"use client";

import { useEffect } from "react";

function isProtectedMedia(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("img, video, picture, canvas, svg"));
}

export function MediaGuard() {
  useEffect(() => {
    const blockMenu = (event: MouseEvent) => {
      if (isProtectedMedia(event.target)) event.preventDefault();
    };
    const blockDrag = (event: DragEvent) => {
      if (isProtectedMedia(event.target)) event.preventDefault();
    };

    const lockVideos = () => {
      document.querySelectorAll("video").forEach((video) => {
        video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");
        video.setAttribute("disablePictureInPicture", "");
      });
    };

    document.addEventListener("contextmenu", blockMenu);
    document.addEventListener("dragstart", blockDrag);
    lockVideos();

    const observer = new MutationObserver(lockVideos);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("contextmenu", blockMenu);
      document.removeEventListener("dragstart", blockDrag);
      observer.disconnect();
    };
  }, []);

  return null;
}
