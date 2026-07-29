const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");

[
  "Amazon PDP AI Image Brief Generator",
  "ready-to-generate Amazon secondary image and A+ content briefs",
  "cross-agent",
  "AI Agent",
  "AMAZON-PDP-BRIEF.md",
  "Codex",
  "Claude Code",
  "skills/amazon-pdp-visual-optimizer",
  ".agents/skills",
  ".claude/skills",
  "CTR",
  "CVR",
  "AARRR",
  "Secondary image sequence strategy",
  "Prompt Pack",
  "AI image generation prompts",
  "Detail Proof prompt templates",
  "A+ Detail Proof Prompt Pack",
  "Premium taste guardrails",
  "premium-ecommerce-taste-guardrails.md",
  "The default focus is Amazon secondary gallery images and A+ content"
].forEach((token) => {
  assert(readme.includes(token), `README should mention ${token}.`);
});

assert(readme.includes("The demo is a workflow preview"), "README should frame the demo as a workflow preview.");

console.log("readme positioning ok");
