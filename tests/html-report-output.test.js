const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const skillPath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "SKILL.md");
const outputPath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "references", "output-structure.md");
const htmlPath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "references", "html-report-output.md");
const readmePath = path.join(root, "README.md");
const briefPath = path.join(root, "AMAZON-PDP-BRIEF.md");
const codexPath = path.join(root, ".agents", "skills", "amazon-pdp-visual-optimizer", "SKILL.md");
const claudePath = path.join(root, ".claude", "skills", "amazon-pdp-visual-optimizer", "SKILL.md");

[skillPath, outputPath, htmlPath, readmePath, briefPath, codexPath, claudePath].forEach((file) => {
  assert(fs.existsSync(file), `${file} should exist.`);
});

const combined = [skillPath, outputPath, htmlPath, readmePath, briefPath, codexPath, claudePath]
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
const codex = fs.readFileSync(codexPath, "utf8");
const claude = fs.readFileSync(claudePath, "utf8");

[
  "HTML report",
  "Markdown output",
  "Default deliverable",
  ".html",
  "chat summary",
  "Executive Summary",
  "A+ Storyline Overview",
  "Screen-by-Screen A+ Plan",
  "A+ Module Image Design"
].forEach((token) => {
  assert(combined.includes(token), `HTML output guidance should include ${token}.`);
});

assert(codex.includes("html-report-output.md"), "Codex entrypoint should reference HTML report guidance.");
assert(claude.includes("html-report-output.md"), "Claude Code entrypoint should reference HTML report guidance.");

console.log("html report output ok");
