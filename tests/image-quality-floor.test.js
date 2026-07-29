const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const files = [
  path.join(root, "prompts", "a-plus-detail-proof-prompts.md"),
  path.join(root, "prompts", "premium-ecommerce-taste-guardrails.md"),
  path.join(
    root,
    "skills",
    "amazon-pdp-visual-optimizer",
    "references",
    "reference-taste-guardrails.md"
  ),
  path.join(
    root,
    "skills",
    "amazon-pdp-visual-optimizer",
    "references",
    "premium-visual-rules.md"
  )
];

const combined = files.map((file) => fs.readFileSync(file, "utf8")).join("\n");

[
  "commercial photography quality",
  "crisp product edges",
  "controlled contrast",
  "material separation",
  "contact shadows",
  "micro-detail",
  "washed-out beige/gray haze",
  "flat showroom lighting",
  "low-detail product surfaces",
  "Close-up insets must reveal"
].forEach((token) => {
  assert(combined.includes(token), `Image quality floor should include ${token}.`);
});

console.log("image quality floor ok");
