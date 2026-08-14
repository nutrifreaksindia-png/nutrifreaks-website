"use client";

import { FormEvent, useState } from "react";
import { submitToApi } from "@/lib/api";

type Props = {
  endpoint: string;
  fields: { name: string; label: string; type?: string; required?: boolean; textarea?: boolean }[];
  submitLabel?: string;
  successMessage: string;
};

export function SimpleForm({ endpoint, fields, submitLabel = "Send", successMessage }: Props) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setPending(true);
    const form = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    for (const field of fields) {
      payload[field.name] = String(form.get(field.name) ?? "");
    }
    try {
      await submitToApi(endpoint, payload);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setPending(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl bg-cream p-8 text-center">
        <p className="font-display text-2xl text-ink">{successMessage}</p>
        <p className="mt-2 text-muted">Our team will get in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">{f.label}</span>
          {f.textarea ? (
            <textarea
              name={f.name}
              required={f.required}
              rows={5}
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-ink shadow-sm outline-none focus:border-navy"
            />
          ) : (
            <input
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              className="h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-ink shadow-sm outline-none focus:border-navy"
            />
          )}
        </label>
      ))}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="btn-gold w-full md:w-auto disabled:opacity-60" disabled={pending}>
        {pending ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
