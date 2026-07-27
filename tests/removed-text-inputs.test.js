const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "demo", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");

[
  "benefits",
  "currentIssues",
  "ownReviews",
  "competitorReviews",
  "competitorRefs"
].forEach((id) => {
  assert(!html.includes(`id="${id}"`), `HTML should remove text input ${id}.`);
  assert(!js.includes(`value("${id}")`), `JavaScript should not read removed input ${id}.`);
});

assert(html.includes('id="ownReviewFiles"'), "Own review upload should remain.");
assert(html.includes('id="competitorReviewFiles"'), "Competitor review upload should remain.");
assert(html.includes('id="currentPdpScreenshots"'), "Current PDP screenshot upload should remain.");
assert(html.includes('id="competitorPdpScreenshots"'), "Competitor PDP screenshot upload should remain.");

console.log("removed text inputs ok");
