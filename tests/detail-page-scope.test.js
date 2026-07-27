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
  "detail page images",
  "A+ content",
  "Do not include Amazon MAIN image recommendations unless the user explicitly requests main image optimization",
  "CVR",
  "add-to-cart",
  "image click depth"
].forEach((token) => {
  assert(combined.includes(token), `Detail-page scope should include ${token}.`);
});

console.log("detail page scope ok");
