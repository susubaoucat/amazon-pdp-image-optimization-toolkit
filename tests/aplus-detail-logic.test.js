const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const output = fs.readFileSync(
  path.join(root, "skills", "amazon-pdp-visual-optimizer", "references", "output-structure.md"),
  "utf8"
);

[
  "A+ Storyline Overview",
  "Screen-by-Screen A+ Plan",
  "A+ Module Image Design",
  "Story Task",
  "Narrative Arc",
  "Emotional Curve",
  "Screen N",
  "Image N-N",
  "Module Type",
  "Scene Description",
  "Design Notes",
  "A+ Compliance Notes"
].forEach((token) => {
  assert(output.includes(token), `A+ output logic should include ${token}.`);
});

console.log("aplus detail logic ok");
