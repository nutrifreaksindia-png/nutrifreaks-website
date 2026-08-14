import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "data");
const dataFile = path.join(dataDir, "leads.json");

async function ensureStore() {
  await mkdir(dataDir, { recursive: true });
  try {
    await readFile(dataFile, "utf8");
  } catch {
    await writeFile(dataFile, "[]\n", "utf8");
  }
}

export async function addLead(lead) {
  await ensureStore();
  const raw = await readFile(dataFile, "utf8");
  const list = JSON.parse(raw || "[]");
  list.push(lead);
  await writeFile(dataFile, `${JSON.stringify(list, null, 2)}\n`, "utf8");
  return lead;
}

export async function listLeads() {
  await ensureStore();
  const raw = await readFile(dataFile, "utf8");
  return JSON.parse(raw || "[]");
}
