const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "demo", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");
const combined = `${html}\n${js}`;

[
  "workflow preview",
  "AI Agent Skill Pack",
  "AMAZON-PDP-BRIEF.md"
].forEach((token) => {
  assert(combined.includes(token), `Demo should mention ${token}.`);
});

[
  "AI analyzer",
  "automatically analyze screenshots",
  "real AI analysis"
].forEach((forbidden) => {
  assert(!combined.includes(forbidden), `Demo should not overclaim: ${forbidden}`);
});

console.log("demo no overclaim ok");
