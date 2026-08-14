"use client";

import { FormEvent, useState } from "react";

function usNavyBodyFat(opts: {
  sex: "male" | "female";
  height: number;
  neck: number;
  waist: number;
  hip: number;
}) {
  const { sex, height, neck, waist, hip } = opts;
  if (sex === "male") {
    return 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
  }
  return 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
}

export function BodyFatForm() {
  const [result, setResult] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const sex = data.get("sex") === "female" ? "female" : "male";
    const height = Number(data.get("height"));
    const neck = Number(data.get("neck"));
    const waist = Number(data.get("waist"));
    const hip = Number(data.get("hip") || 0);
    const pct = usNavyBodyFat({ sex, height, neck, waist, hip });
    if (!Number.isFinite(pct) || pct <= 0 || pct > 70) {
      setResult("Please double-check the measurements and try again.");
      return;
    }
    setResult(`Estimated body fat: ${pct.toFixed(1)}%`);
  };

  return (
    <div className="container-site max-w-lg py-12">
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block text-sm font-medium">
          Sex
          <select name="sex" className="mt-1 h-11 w-full rounded-lg border border-black/10 px-3">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        {[
          ["height", "Height (cm)"],
          ["neck", "Neck (cm)"],
          ["waist", "Waist (cm)"],
          ["hip", "Hip (cm) — required for female"],
        ].map(([name, label]) => (
          <label key={name} className="block text-sm font-medium">
            {label}
            <input
              name={name}
              type="number"
              step="0.1"
              required={name !== "hip"}
              className="mt-1 h-11 w-full rounded-lg border border-black/10 px-3"
            />
          </label>
        ))}
        <button type="submit" className="btn-gold">
          Calculate
        </button>
      </form>
      {result && <p className="mt-6 rounded-xl bg-cream p-4 font-semibold text-ink">{result}</p>}
    </div>
  );
}
