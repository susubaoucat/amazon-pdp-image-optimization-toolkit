const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const license = fs.readFileSync(path.join(root, "LICENSE"), "utf8");
assert(license.includes("MIT License"), "LICENSE should be the MIT license.");
assert(license.includes("Copyright (c) 2026 susubaoucat"), "LICENSE should name the repository owner.");

const sample = JSON.parse(
  fs.readFileSync(path.join(root, "examples", "cordless-vacuum-brief.sample.json"), "utf8")
);
assert.strictEqual(sample.executiveSummary.product, "Foldable cordless vacuum cleaner");
assert.strictEqual(sample.businessGoalAndFunnelDiagnosis.cvr, null);
assert.strictEqual(sample.businessGoalAndFunnelDiagnosis.conversionRate, null);
assert.strictEqual(sample.measurementAndPostLaunchReviewPlan.abTestIdea, null);

const image = sample.detailImageByImageProductionBrief[0];
[
  "currentProblem",
  "businessHypothesis",
  "newImageTask",
  "visualDirection",
  "inImageCopy",
  "prompt",
  "complianceNotes",
  "qaChecklist"
].forEach((field) => {
  assert.ok(image[field], `Detail image sample should include ${field}.`);
});

const moduleImage = sample.aPlusContentOptimizationPlan.moduleImageDesign[0];
[
  "moduleType",
  "contentTask",
  "sceneDescription",
  "inImageCopy",
  "prompt",
  "detailProofLayer",
  "designNotes",
  "aPlusComplianceNotes"
].forEach((field) => {
  assert.ok(Object.prototype.hasOwnProperty.call(moduleImage, field), `A+ module sample should include ${field}.`);
});

const example = fs.readFileSync(path.join(root, "examples", "cordless-vacuum-image-optimization.md"), "utf8");
const prompts = [...example.matchAll(/```text\n([\s\S]*?)```/g)].map((match) => match[1].trim());
prompts.forEach((prompt) => {
  assert.ok(JSON.stringify(sample).includes(prompt), "JSON sample should keep the published example prompt text.");
});

const beforeAfter = fs.readFileSync(path.join(root, "examples", "before-after", "README.md"), "utf8");
assert(beforeAfter.includes("cordless-vacuum-secondary-before.png"));
assert(beforeAfter.includes("cordless-vacuum-secondary-after.png"));

[
  "prompts/product-hero-image-prompts.md",
  "prompts/lifestyle-scene-prompts.md",
  "prompts/a-plus-banner-prompts.md",
  "prompts/benefit-infographic-prompts.md",
  "docs/superpowers/plans/2026-07-27-agent-skill-pack.md"
].forEach((relativePath) => {
  assert.strictEqual(fs.existsSync(path.join(root, relativePath)), false, `${relativePath} should be removed.`);
});

console.log("portfolio sample ok");
