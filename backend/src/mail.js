import { execFile } from "node:child_process";

function formatBody(subject, payload) {
  const notifyTo = process.env.NOTIFY_EMAIL || "info@nutrifreaks.com";
  const lines = Object.entries(payload)
    .filter(([key]) => key !== "password")
    .map(([key, value]) => `${key}: ${value}`);
  return [`To: ${notifyTo}`, `Subject: ${subject}`, "Content-Type: text/plain; charset=utf-8", "", ...lines, ""].join(
    "\n",
  );
}

export function notify(subject, payload) {
  return new Promise((resolve) => {
    const child = execFile("sendmail", ["-t"], (error) => {
      if (error) {
        console.error("sendmail failed", error.message);
      }
      resolve();
    });
    child.stdin?.write(formatBody(subject, payload));
    child.stdin?.end();
  });
}
