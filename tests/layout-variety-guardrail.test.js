const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const files = [
  path.join(root, "prompts", "a-plus-detail-proof-prompts.md"),
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
    "output-structure.md"
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
  "Layout Variety System",
  "Layout Archetypes",
  "Sequence Rhythm Rules",
  "Layout Role",
  "Editorial Active Scene",
  "Split Proof System",
  "Macro Detail Hero",
  "Low-Angle Use Proof",
  "Process Strip",
  "Buying Confidence Snapshot",
  "Quiet Brand Breather",
  "Amazon Listing Layout Recipes",
  "Flagship Feature Mosaic",
  "Dominant Macro With Step Rail",
  "Low-Profile Cinematic Proof",
  "White-Space Capability Grid",
  "Split Lifestyle And Explanation",
  "Black Tech Spec Board",
  "Tall-Page Rhythm Stack",
  "Do not use the same layout archetype more than twice in a row",
  "Do not place all headlines in the same corner"
].forEach((token) => {
  assert(combined.includes(token), `Layout variety guardrail should include ${token}.`);
});

console.log("layout variety guardrail ok");
