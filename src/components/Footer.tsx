"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import { submitToApi } from "@/lib/api";

const policyLinks = [
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/delivery-policy", label: "Delivery Policy" },
  { href: "/cancellation-and-refund-policy", label: "Cancellation & Refund Policy" },
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
    <footer className="bg-[#111] text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Image src="/images/logo-white.png" alt="NutriFreaks" width={180} height={80} className="h-12 w-auto" />
          <h4 className="mt-6 font-display text-xl font-semibold">Join The club</h4>
          <p className="mt-2 text-sm text-white/70">Get updates on special events and our new posts!</p>
          {done ? (
            <p className="mt-4 text-gold">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={onSubscribe} className="mt-4 flex flex-col gap-3">
              <input
                name="name"
                required
                placeholder="Name"
                className="h-11 rounded-md border border-white/20 bg-white/5 px-3 text-sm text-white placeholder:text-white/50"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="h-11 rounded-md border border-white/20 bg-white/5 px-3 text-sm text-white placeholder:text-white/50"
              />
              {error && <p className="text-sm text-red-300">{error}</p>}
              <button type="submit" className="btn-gold !py-3 text-sm disabled:opacity-60" disabled={pending}>
                {pending ? "SENDING..." : "SUBSCRIBE"}
              </button>
            </form>
          )}
        </div>

        <div>
          <h4 className="font-display text-xl font-semibold">Visit Us</h4>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-gold">
                +91 {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
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
                <Link href={l.href} className="text-white/80 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/package-material-policy" className="text-white/80 hover:text-gold">
                Packaging Material Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} NutriFreaks. Customized Meals to your Doorstep.
      </div>
    </footer>
  );
}
