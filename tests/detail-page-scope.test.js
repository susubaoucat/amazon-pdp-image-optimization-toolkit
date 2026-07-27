const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const skill = fs.readFileSync(path.join(root, "skills", "amazon-pdp-visual-optimizer", "SKILL.md"), "utf8");
const output = fs.readFileSync(
  path.join(root, "skills", "amazon-pdp-visual-optimizer", "references", "output-structure.md"),
  "utf8"
);
const brief = fs.readFileSync(path.join(root, "AMAZON-PDP-BRIEF.md"), "utf8");

const combined = `${skill}\n${output}\n${brief}`;

[
  "A+ content",
  "Default scope is A+ content optimization only",
  "Do not include detail image-by-image production briefs unless the user explicitly requests secondary gallery or detail image optimization",
  "Do not include Amazon MAIN image recommendations unless the user explicitly requests main image optimization",
  "CVR",
  "add-to-cart",
  "A+ module engagement"
].forEach((token) => {
  assert(combined.includes(token), `A+ only scope should include ${token}.`);
});

console.log("a plus only scope ok");
