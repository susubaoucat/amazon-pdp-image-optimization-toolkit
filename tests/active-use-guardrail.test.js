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
  "ACTIVE_USE_REQUIRED",
  "JUST_USED_EVIDENCE_ALLOWED",
  "STATIC_PRODUCT_ALLOWED",
  "active-use categories",
  "visible user interaction",
  "hand on handle",
  "natural push or pull posture",
  "Do not show the product standing alone unattended",
  "Static product-only composition is allowed only when"
].forEach((token) => {
  assert(combined.includes(token), `Active-use guardrail should include ${token}.`);
});

console.log("active use guardrail ok");
