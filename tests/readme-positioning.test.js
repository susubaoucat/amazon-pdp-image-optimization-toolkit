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
assert(readme.includes("high aesthetic floor"), "README should lead with the aesthetic-floor positioning.");
assert(readme.includes("It does not generate images itself."), "README should say the toolkit does not generate images.");
assert(readme.includes("Local workflow preview"), "README should label the demo as a local workflow preview.");
assert(readme.includes("examples/cordless-vacuum-brief.sample.json"), "README should link the JSON example.");
assert(readme.includes("examples/before-after/cordless-vacuum-secondary-before.png"), "README should reserve the before image filename.");
assert(readme.includes("examples/before-after/cordless-vacuum-secondary-after.png"), "README should reserve the after image filename.");
assert(readme.includes("image content is not read"), "README should say the demo does not read screenshot content.");

console.log("readme positioning ok");
