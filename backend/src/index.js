import express from "express";
import cors from "cors";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { addLead, listLeads } from "./store.js";
import { notify } from "./mail.js";

try {
  const envPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", ".env");
  const envFile = readFileSync(envPath, "utf8");
  for (const line of envFile.split("\n")) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && process.env[match[1]] === undefined) {
      process.env[match[1]] = match[2];
    }
  }
} catch {
  // optional local .env
}

const app = express();
const port = Number(process.env.PORT || 3211);
const adminKey = process.env.ADMIN_KEY || "";
const allowedOrigins = (process.env.CORS_ORIGINS || "https://web.nutrifreaks.com,http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const hits = new Map();

function rateLimit(req, res, next) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const windowMs = 60_000;
  const max = 12;
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (recent.length > max) {
    return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
  }
  next();
}

function str(value, max = 500) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function requireFields(body, fields) {
  const missing = fields.filter((field) => !str(body[field]));
  if (missing.length) {
    const error = new Error(`Missing: ${missing.join(", ")}`);
    error.status = 400;
    throw error;
  }
}

app.set("trust proxy", true);
app.use(express.json({ limit: "32kb" }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
  }),
);

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "nutrifreaks-api" });
});

app.get("/v1/health", (_req, res) => {
  res.json({ ok: true, service: "nutrifreaks-api" });
});

app.post("/v1/consultation", rateLimit, async (req, res, next) => {
  try {
    requireFields(req.body, ["firstName", "lastName", "mobile", "email"]);
    const email = str(req.body.email, 120).toLowerCase();
    if (!isEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email." });
    }
    const lead = {
      id: crypto.randomUUID(),
      type: "consultation",
      createdAt: new Date().toISOString(),
      firstName: str(req.body.firstName, 80),
      lastName: str(req.body.lastName, 80),
      mobile: str(req.body.mobile, 30),
      email,
    };
    await addLead(lead);
    await notify("NutriFreaks: new free consultation request", lead);
    res.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post("/v1/contact", rateLimit, async (req, res, next) => {
  try {
    requireFields(req.body, ["name", "email", "phone", "pincode", "message"]);
    const email = str(req.body.email, 120).toLowerCase();
    if (!isEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email." });
    }
    const lead = {
      id: crypto.randomUUID(),
      type: "contact",
      createdAt: new Date().toISOString(),
      name: str(req.body.name, 80),
      email,
      phone: str(req.body.phone, 30),
      pincode: str(req.body.pincode, 12),
      message: str(req.body.message, 2000),
    };
    await addLead(lead);
    await notify("NutriFreaks: new contact enquiry", lead);
    res.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post("/v1/subscribe", rateLimit, async (req, res, next) => {
  try {
    requireFields(req.body, ["email"]);
    const email = str(req.body.email, 120).toLowerCase();
    if (!isEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email." });
    }
    const lead = {
      id: crypto.randomUUID(),
      type: "subscribe",
      createdAt: new Date().toISOString(),
      name: str(req.body.name, 80),
      email,
    };
    await addLead(lead);
    await notify("NutriFreaks: new newsletter subscriber", lead);
    res.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.post("/v1/login", rateLimit, (req, res) => {
  const email = str(req.body.email, 120).toLowerCase();
  if (!isEmail(email) || !str(req.body.password)) {
    return res.status(400).json({ error: "Email and password are required." });
  }
  res.status(501).json({
    error: "Member login is not enabled on this site yet. Please book a free consultation.",
  });
});

app.get("/v1/leads", async (req, res) => {
  const key = req.get("x-admin-key") || "";
  if (!adminKey || key !== adminKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.json({ leads: await listLeads() });
});

app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Server error" });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`NutriFreaks API listening on 127.0.0.1:${port}`);
});
