const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const canonicalSkill = path.join(root, "skills", "amazon-pdp-visual-optimizer", "SKILL.md");
const codexSkill = path.join(root, ".agents", "skills", "amazon-pdp-visual-optimizer", "SKILL.md");
const claudeSkill = path.join(root, ".claude", "skills", "amazon-pdp-visual-optimizer", "SKILL.md");

[canonicalSkill, codexSkill, claudeSkill].forEach((file) => {
  assert(fs.existsSync(file), `${file} should exist.`);
  const content = fs.readFileSync(file, "utf8");
  assert(content.startsWith("---\n"), `${file} should start with YAML frontmatter.`);
  assert(content.includes("name: amazon-pdp-visual-optimizer"), `${file} should define the skill name.`);
  assert(content.includes("description:"), `${file} should define a description.`);
});

const references = [
  "output-structure.md",
  "premium-visual-rules.md",
  "reference-taste-guardrails.md",
  "amazon-image-compliance.md",
  "review-insight-to-image-brief.md",
  "business-metrics-and-validation.md"
];

references.forEach((file) => {
  const referencePath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "references", file);
  assert(fs.existsSync(referencePath), `${file} should exist in the canonical skill references.`);
});

console.log("agent skill structure ok");
