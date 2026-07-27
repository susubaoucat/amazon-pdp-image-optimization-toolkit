const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");

[
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
  "AARRR"
].forEach((token) => {
  assert(readme.includes(token), `README should mention ${token}.`);
});

assert(readme.includes("The demo is a workflow preview"), "README should frame the demo as a workflow preview.");

console.log("readme positioning ok");
