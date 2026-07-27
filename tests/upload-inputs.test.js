const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "demo", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");

[
  "ownReviewFiles",
  "competitorReviewFiles",
  "currentPdpScreenshots",
  "competitorPdpScreenshots"
].forEach((id) => {
  assert(html.includes(`id="${id}"`), `HTML should include upload input ${id}.`);
});

[
  "ownReviewFilesPreview",
  "competitorReviewFilesPreview",
  "currentPdpScreenshotsPreview",
  "competitorPdpScreenshotsPreview"
].forEach((id) => {
  assert(html.includes(`id="${id}"`), `HTML should include preview container ${id}.`);
});

assert(js.includes("const uploadState"), "JavaScript should track uploaded files.");
assert(js.includes("handleReviewUpload"), "JavaScript should read review text and table uploads.");
assert(js.includes("handleImageUpload"), "JavaScript should preview screenshot uploads.");
assert(js.includes("uploadedMaterials"), "Generated reports should include uploaded material context.");

console.log("upload inputs structure ok");
