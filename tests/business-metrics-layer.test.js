const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const skillPath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "SKILL.md");
const metricsPath = path.join(
  root,
  "skills",
  "amazon-pdp-visual-optimizer",
  "references",
  "business-metrics-and-validation.md"
);
const outputPath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "references", "output-structure.md");

[skillPath, metricsPath, outputPath].forEach((file) => {
  assert(fs.existsSync(file), `${file} should exist.`);
});

const combined = [skillPath, metricsPath, outputPath].map((file) => fs.readFileSync(file, "utf8")).join("\n");

[
  "CTR",
  "CVR",
  "conversion rate",
  "share rate",
  "AARRR",
  "post-launch",
  "design effect validation",
  "Business Hypothesis",
  "Measurement And Post-Launch Review Plan"
].forEach((token) => {
  assert(combined.includes(token), `Business layer should include ${token}.`);
});

console.log("business metrics layer ok");
