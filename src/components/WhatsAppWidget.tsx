"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="bg-[#075e54] px-4 py-3 text-white">
            <p className="text-sm font-semibold">Nila</p>
            <p className="text-xs text-white/80">Client Support Specialist</p>
          </div>
          <div className="flex gap-3 p-4">
            <Image src="/images/nila.webp" alt="Nila" width={56} height={72} className="h-16 w-12 rounded-md object-cover" />
            <p className="text-sm text-ink">Hey! Would you like to know more our meal plans?</p>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#25d366] py-3 text-center text-sm font-semibold text-white"
          >
            Start chat
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M19.11 17.18c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.67 4.14 1.64.71 2.28.77 3.1.65.47-.07 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.04 4C9.95 4 5 8.95 5 15.04c0 1.95.51 3.85 1.48 5.53L5 28l7.6-1.99A11.02 11.02 0 0 0 16.04 26.1C22.13 26.1 27.08 21.15 27.08 15.06 27.08 8.95 22.13 4 16.04 4z" />
        </svg>
      </button>
    </div>
  );
}
