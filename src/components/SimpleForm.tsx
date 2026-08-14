"use client";

import { FormEvent, useState } from "react";

type Props = {
  fields: { name: string; label: string; type?: string; required?: boolean; textarea?: boolean }[];
  submitLabel?: string;
  successMessage: string;
};

export function SimpleForm({ fields, submitLabel = "Send", successMessage }: Props) {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
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
      <button type="submit" className="btn-gold w-full md:w-auto">
        {submitLabel}
      </button>
    </form>
  );
}
