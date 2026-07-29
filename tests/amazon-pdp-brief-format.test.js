const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const briefPath = path.join(root, "AMAZON-PDP-BRIEF.md");

assert(fs.existsSync(briefPath), "AMAZON-PDP-BRIEF.md should exist.");

const brief = fs.readFileSync(briefPath, "utf8");

[
  "# AMAZON-PDP-BRIEF.md",
  "## Product",
  "## Target Market",
  "## Own PDP And A+ Materials",
  "## Competitor PDP And A+ Materials",
  "## Own Reviews",
  "## Competitor Reviews",
  "## Optimization Goal",
  "## Business Metrics",
  "## Measurement Plan",
  "## Output Requirements",
  "PDP Detail Image Sequence Strategy",
  "Detail Image-by-Image Production Brief",
  "A+ Detail Proof Prompt Pack",
  "Detail Proof Layer",
  "Prompt"
].forEach((token) => {
  assert(brief.includes(token), `Brief template should include ${token}.`);
});

assert(!brief.includes("Positive Prompt"), "Brief template should not include Positive Prompt.");
assert(!brief.includes("Negative Prompt"), "Brief template should not include Negative Prompt.");

console.log("amazon pdp brief format ok");
