"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import { submitToApi } from "@/lib/api";

const policyLinks = [
  { href: "/terms-and-conditions", label: "Terms and conditions" },
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/delivery-policy", label: "Delivery policy" },
  { href: "/cancellation-and-refund-policy", label: "Cancellation & refund policy" },
];

export function Footer() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setPending(true);
    const form = new FormData(e.currentTarget);
    try {
      await submitToApi("/v1/subscribe", {
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
      });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setPending(false);
    }
  };

  return (
    <footer className="border-t border-white/[0.06] bg-black text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-white.png"
            alt="NutriFreaks"
            width={800}
            height={185}
            quality={90}
            sizes="180px"
            className="h-12 w-auto"
          />
          <h4 className="mt-6 font-display text-xl font-semibold">Join the club</h4>
          <p className="mt-2 text-sm text-white/70">Get updates on special events and our new posts!</p>
          {done ? (
            <p className="mt-4 text-gold">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={onSubscribe} className="mt-4 flex flex-col gap-3">
              <input
                name="name"
                required
                placeholder="Name"
                className="input-field h-11 !bg-white/5 text-sm text-white placeholder:text-white/40 hover:!border-gold/30 focus:!border-gold/50"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="input-field h-11 !bg-white/5 text-sm text-white placeholder:text-white/40 hover:!border-gold/30 focus:!border-gold/50"
              />
              {error && <p className="text-sm text-red-300">{error}</p>}
              <button type="submit" className="btn-gold !py-3 text-sm disabled:opacity-60" disabled={pending}>
                {pending ? "Sending..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>

        <div>
          <h4 className="font-display text-xl font-semibold">Visit us</h4>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="transition-all duration-200 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.7)]">
                +91 {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-all duration-200 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.7)]">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl font-semibold">Policies</h4>
          <ul className="mt-4 space-y-3">
            {policyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 transition-all duration-200 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.7)]">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/package-material-policy" className="text-white/80 transition-all duration-200 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,205,87,0.7)]">
                Packaging material policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} NutriFreaks. Customized meals to your doorstep.
      </div>
    </footer>
  );
}
