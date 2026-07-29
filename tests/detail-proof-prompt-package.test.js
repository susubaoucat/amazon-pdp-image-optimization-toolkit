const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const templatePath = path.join(root, "prompts", "a-plus-detail-proof-prompts.md");
const tastePromptPath = path.join(root, "prompts", "premium-ecommerce-taste-guardrails.md");
const rulesPath = path.join(
  root,
  "skills",
  "amazon-pdp-visual-optimizer",
  "references",
  "premium-visual-rules.md"
);
const referenceGuardrailPath = path.join(
  root,
  "skills",
  "amazon-pdp-visual-optimizer",
  "references",
  "reference-taste-guardrails.md"
);
const skillPath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "SKILL.md");

assert(fs.existsSync(templatePath), "A+ Detail Proof prompt template should exist.");
assert(fs.existsSync(tastePromptPath), "Premium ecommerce taste guardrails prompt should exist.");
assert(fs.existsSync(referenceGuardrailPath), "Reference taste guardrails should exist.");

const template = fs.readFileSync(templatePath, "utf8");
const tastePrompt = fs.readFileSync(tastePromptPath, "utf8");
const rules = fs.readFileSync(rulesPath, "utf8");
const referenceGuardrail = fs.readFileSync(referenceGuardrailPath, "utf8");
const skill = fs.readFileSync(skillPath, "utf8");

[
  "Brand Art Direction Layer",
  "Taste Guardrail Layer",
  "Product Invariants",
  "Feature Task",
  "Detail Proof Layer",
  "Image Quality Floor",
  "Layout Archetype",
  "EDITORIAL_ACTIVE_SCENE",
  "SPLIT_PROOF_SYSTEM",
  "ACTIVE_USE_REQUIRED",
  "STATIC_PRODUCT_ALLOWED",
  "Copy Layer",
  "Compliance And Avoid Layer",
  "Mess Cleaning",
  "Low Reach Or Lay-Flat",
  "Self-Cleaning Or Drying",
  "Pet Hair Or Anti-Tangle",
  "Prompt"
].forEach((token) => {
  assert(template.includes(token), `Detail proof prompt package should include ${token}.`);
});

assert(!template.includes("Positive Prompt"), "Template should not split Positive Prompt.");
assert(!template.includes("Negative Prompt"), "Template should not split Negative Prompt.");

[
  "A+ Detail Proof Layer",
  "Main scene evidence",
  "Product detail",
  "Proof object",
  "Boundary note"
].forEach((token) => {
  assert(rules.includes(token), `Premium visual rules should include ${token}.`);
});

[
  "Default Premium Ecommerce Baseline",
  "Taste Extraction From References",
  "Bad Reference Filter",
  "Image Quality Floor",
  "Layout Variety System",
  "Layout Archetypes",
  "Amazon Listing Layout Recipes",
  "Flagship Feature Mosaic",
  "Dominant Macro With Step Rail",
  "White-Space Capability Grid",
  "Sequence Rhythm Rules",
  "Usage Mode Rules",
  "Active Use Required",
  "Static Product Allowed",
  "Reference-Free Prompt Baseline",
  "If a reference makes any of those answers weaker, do not follow the reference."
].forEach((token) => {
  assert(referenceGuardrail.includes(token), `Reference taste guardrails should include ${token}.`);
});

[
  "Default Art Direction",
  "Bad Reference Override Block",
  "Product-First Block",
  "Detail Proof Block",
  "Layout Variety Block",
  "Image Quality Floor Block",
  "Usage Mode Block",
  "Static Product Exception Block",
  "Typography Block"
].forEach((token) => {
  assert(tastePrompt.includes(token), `Public taste guardrails prompt should include ${token}.`);
});

assert(
  skill.includes("reference-taste-guardrails.md"),
  "Canonical skill should load reference taste guardrails."
);

console.log("detail proof prompt package ok");
