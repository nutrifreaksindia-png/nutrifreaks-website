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

    document.addEventListener("contextmenu", blockMenu);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("contextmenu", blockMenu);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  return null;
}
