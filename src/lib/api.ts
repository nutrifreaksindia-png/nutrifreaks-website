export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3211";

export async function submitToApi(path: string, payload: Record<string, string>) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean };
  if (!res.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
  return data;
}
