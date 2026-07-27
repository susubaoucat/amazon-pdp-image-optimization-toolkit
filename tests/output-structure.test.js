const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");

[
  "sequenceLogic",
  "currentProblem",
  "newImageTask",
  "visualDirection",
  "copySuggestion",
  "complianceNotes",
  "aplusStoryline"
].forEach((token) => {
  assert(js.includes(token), `Output structure should include ${token}.`);
});

assert(js.includes("PDP Image Sequence Logic"), "English report should include PDP image sequence logic.");
assert(js.includes("图片顺序逻辑"), "Chinese report should include image sequence logic.");
assert(js.includes("画像順序ロジック"), "Japanese report should include image sequence logic.");
assert(js.includes("A+ Storyline Plan"), "English report should include A+ storyline plan.");
assert(js.includes("A+ 故事线规划"), "Chinese report should include A+ storyline plan.");
assert(js.includes("A+ ストーリーライン計画"), "Japanese report should include A+ storyline plan.");

console.log("output structure ok");
