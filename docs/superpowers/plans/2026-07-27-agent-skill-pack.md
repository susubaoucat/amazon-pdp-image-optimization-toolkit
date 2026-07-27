# Agent Skill Pack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the project from a demo-first toolkit into a cross-agent Amazon PDP visual growth and image production skill pack with an agent-readable brief format.

**Architecture:** Add a canonical `skills/amazon-pdp-visual-optimizer/` workflow with two layers: business metrics and funnel strategy first, image-by-image production briefs second. Add install-ready Codex and Claude Code skill entrypoints, plus an `AMAZON-PDP-BRIEF.md` format template. Keep the existing demo, but reframe it as a workflow preview rather than a true AI analyzer.

**Tech Stack:** Markdown skill files, repository-discovered `.agents/skills`, Claude Code `.claude/skills`, static HTML demo, Node-based structure tests using `assert`.

---

## File Map

- Create `skills/amazon-pdp-visual-optimizer/SKILL.md`: canonical cross-agent skill instructions.
- Create `skills/amazon-pdp-visual-optimizer/references/output-structure.md`: required output format and section order.
- Create `skills/amazon-pdp-visual-optimizer/references/premium-visual-rules.md`: high-end listing image taste rules.
- Create `skills/amazon-pdp-visual-optimizer/references/amazon-image-compliance.md`: practical Amazon visual compliance reminders.
- Create `skills/amazon-pdp-visual-optimizer/references/review-insight-to-image-brief.md`: rules for turning own and competitor reviews into image opportunities.
- Create `skills/amazon-pdp-visual-optimizer/references/business-metrics-and-validation.md`: rules for connecting CTR, CVR, conversion rate, share rate, AARRR, and post-launch review to visual decisions.
- Create `AMAZON-PDP-BRIEF.md`: agent-readable brief format template.
- Create `.agents/skills/amazon-pdp-visual-optimizer/SKILL.md`: Codex auto-discovery entrypoint.
- Create `.claude/skills/amazon-pdp-visual-optimizer/SKILL.md`: Claude Code auto-discovery entrypoint.
- Modify `README.md`: reposition the project as a cross-agent skill pack.
- Modify `demo/index.html`, `demo/app.js`: remove overclaims that the static demo performs real AI analysis.
- Create tests under `tests/`: validate skill frontmatter, cross-agent entrypoints, brief format, output structure, and no-overclaim demo language.

## Task 1: Test Cross-Agent Skill Structure

**Files:**
- Create: `tests/agent-skill-structure.test.js`

- [ ] **Step 1: Write the failing test**

```js
const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const canonicalSkill = path.join(root, "skills", "amazon-pdp-visual-optimizer", "SKILL.md");
const codexSkill = path.join(root, ".agents", "skills", "amazon-pdp-visual-optimizer", "SKILL.md");
const claudeSkill = path.join(root, ".claude", "skills", "amazon-pdp-visual-optimizer", "SKILL.md");

[canonicalSkill, codexSkill, claudeSkill].forEach((file) => {
  assert(fs.existsSync(file), `${file} should exist.`);
  const content = fs.readFileSync(file, "utf8");
  assert(content.startsWith("---\n"), `${file} should start with YAML frontmatter.`);
  assert(content.includes("name: amazon-pdp-visual-optimizer"), `${file} should define the skill name.`);
  assert(content.includes("description:"), `${file} should define a description.`);
});

const references = [
  "output-structure.md",
  "premium-visual-rules.md",
  "amazon-image-compliance.md",
  "review-insight-to-image-brief.md",
  "business-metrics-and-validation.md"
];

references.forEach((file) => {
  const referencePath = path.join(root, "skills", "amazon-pdp-visual-optimizer", "references", file);
  assert(fs.existsSync(referencePath), `${file} should exist in the canonical skill references.`);
});

console.log("agent skill structure ok");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/agent-skill-structure.test.js`

Expected: FAIL because the skill files do not exist yet.

- [ ] **Step 3: Commit the failing test**

```bash
git add tests/agent-skill-structure.test.js
git commit -m "test: define cross-agent skill structure"
```

## Task 2: Create Canonical Skill And References

**Files:**
- Create: `skills/amazon-pdp-visual-optimizer/SKILL.md`
- Create: `skills/amazon-pdp-visual-optimizer/references/output-structure.md`
- Create: `skills/amazon-pdp-visual-optimizer/references/premium-visual-rules.md`
- Create: `skills/amazon-pdp-visual-optimizer/references/amazon-image-compliance.md`
- Create: `skills/amazon-pdp-visual-optimizer/references/review-insight-to-image-brief.md`
- Create: `skills/amazon-pdp-visual-optimizer/references/business-metrics-and-validation.md`

- [ ] **Step 1: Create canonical `SKILL.md`**

```markdown
---
name: amazon-pdp-visual-optimizer
description: Use when an AI agent needs to analyze Amazon PDP or listing image materials, including product information, own PDP screenshots, competitor PDP screenshots, own reviews, competitor reviews, A+ content, ecommerce image strategy, listing visual optimization, premium image prompts, or image-by-image creative briefs.
---

# Amazon PDP Visual Optimizer

Use this skill to turn Amazon PDP materials into a designer-ready image optimization plan.

## Required Mindset

- Treat the task as ecommerce visual growth strategy and image production, not generic listing copywriting.
- Use the user's uploaded files, screenshots, review tables, and notes as the primary evidence.
- Separate own-product evidence from competitor evidence.
- If a file, screenshot, or review source is unavailable or unreadable, state that limitation and continue with lower confidence.
- Do not invent product features, certifications, test results, or Amazon claims.
- Do not invent CTR, CVR, conversion rate, share rate, or AARRR results. If data is not provided, write hypotheses and validation plans.
- Do not output a `Positive Prompt` or `Negative Prompt` field. Use one field named `Prompt`.

## Workflow

1. Collect or inspect available material:
   - Product name, category, model, target market, and optimization goal.
   - Own PDP screenshots or image exports.
   - Competitor PDP screenshots or visual references.
   - Own product review files.
   - Competitor product review files.
2. Read `references/review-insight-to-image-brief.md` when reviews are present.
3. Read `references/business-metrics-and-validation.md` before deciding image sequence strategy.
4. Read `references/premium-visual-rules.md` before writing image prompts.
5. Read `references/amazon-image-compliance.md` before finalizing image tasks.
6. Read `references/output-structure.md` and follow its section order.
7. Produce a visual production brief that a designer can immediately use to make listing images.

## Output Rules

- Start with a short material summary.
- Explain what was actually inspected.
- Connect the project to a business goal such as CTR lift, CVR improvement, conversion-rate optimization, share-rate growth, AARRR stage improvement, or design effect validation.
- Convert review patterns into image opportunities, not good/bad review excerpts.
- Use image-by-image planning as the main body.
- Each image must have one conversion job.
- Each image brief must include: `Current Problem`, `Business Hypothesis`, `New Image Task`, `Visual Direction`, `In-Image Copy`, `Prompt`, `Compliance Notes`, and `QA Checklist`.
- Keep image prompts specific, premium, and product-first.
- Keep claims careful and tied to provided evidence.
```

- [ ] **Step 2: Create `output-structure.md`**

```markdown
# Output Structure

Use this section order for every Amazon PDP visual optimization brief.

## 1. Material Summary

State which materials were available:

- Product information
- Own PDP screenshots
- Competitor PDP screenshots
- Own reviews
- Competitor reviews
- Target market
- Optimization goal

Also state any missing or unreadable material.

## 2. Business Goal And Funnel Diagnosis

Connect the project to business data awareness:

- CTR
- CVR
- Conversion rate
- Share rate
- AARRR funnel stage
- Data review
- Design effect validation

If real data is not provided, describe the hypothesis and the data needed to validate it.

## 3. PDP Visual Diagnosis

Summarize the current image system problem in production language:

- Weak first impression
- Unclear core benefit
- Missing proof
- Generic scene
- Crowded copy
- Weak premium perception
- Review concern not answered visually
- A+ story does not build trust

## 4. Review Insight to Image Opportunity

Separate own-product signals from competitor signals.

Do not quote review excerpts unless the user asks. Summarize patterns and convert them into image opportunities.

## 5. Competitor Visual Opportunity

Explain what competitors communicate better and where they leave visual gaps.

## 6. PDP Image Sequence Strategy

Recommend a new image order. Each image should have a clear conversion job.

Use this format:

| New Order | Image Role | Conversion Job | Why It Matters |
| --- | --- | --- | --- |

## 7. Image-by-Image Production Brief

For each image, use:

### Image N: Role Name

- Current Problem:
- Business Hypothesis:
- New Image Task:
- Visual Direction:
- In-Image Copy:
- Prompt:
- Compliance Notes:
- QA Checklist:

## 8. A+ Module Direction

Plan a simple story flow:

1. Premium brand or flagship opening
2. Pain point and product intervention
3. Technical or functional proof
4. Real usage context
5. Maintenance, storage, comparison, or trust module

## 9. Premium Visual Taste Rules

List the visual rules that should guide image creation.

## 10. Measurement And Post-Launch Review Plan

Define how the design should be judged after launch:

- CTR for main image and search/listing attraction
- CVR or conversion rate for PDP persuasive clarity
- Add-to-cart, coupon claim, or buy-box related proxy metrics when available
- Share rate or engagement where campaign distribution matters
- AARRR stage impacted by each image or module
- A/B test idea and success criteria
- What to keep, iterate, or remove during data review

## 11. Final QA Checklist

Check product accuracy, visual quality, compliance, readability, and conversion clarity.
```

- [ ] **Step 2A: Create `business-metrics-and-validation.md`**

```markdown
# Business Metrics And Validation

Use business metrics to guide visual decisions without inventing data.

## Funnel Awareness

- CTR: usually connected to main image, first impression, search result clarity, offer visibility, and hero crop.
- CVR and conversion rate: usually connected to PDP gallery clarity, proof images, comparison images, trust modules, and objection handling.
- Share rate: usually connected to campaign assets, distinctive visual hooks, social proof, and memorable product storytelling.
- AARRR: map visual decisions to acquisition, activation, retention, referral, or revenue.

## Full-Chain Project Logic

Explain the chain:

1. Early analysis
2. User and competitor insight
3. Creative reasoning
4. Visual strategy
5. Image production brief
6. Delivery checklist
7. Launch review and data validation

## When Data Is Provided

- Mention the provided metric and date range if available.
- Explain which visual decision it supports.
- Avoid claiming causation unless an A/B test or controlled comparison supports it.

## When Data Is Missing

- Write a business hypothesis.
- List the metrics needed to validate the design.
- Suggest one practical A/B test or before/after review method.

## Output Requirement

Every image sequence recommendation should connect to a funnel role or business hypothesis before moving into visual production details.
```

- [ ] **Step 3: Create `premium-visual-rules.md`**

```markdown
# Premium Visual Rules

Apply these rules before writing prompts or judging generated listing images.

## Composition

- Use product-first framing.
- Give each image one primary message.
- Use controlled negative space.
- Avoid crowded icon walls and decorative clutter.
- Keep text blocks short enough to read at Amazon gallery size.

## Lighting And Material

- Use realistic soft light, natural shadows, and believable reflections.
- Preserve product color, material, surface texture, logo position, and scale.
- Avoid plastic AI gloss, fake neon lighting, and generic technology effects.

## Ecommerce Taste

- Use restrained color palettes with one clear accent when needed.
- Avoid cheap blue technology backgrounds unless the category truly requires it.
- Avoid overdramatic smoke, sparks, energy waves, floating parts, and impossible cutaways.
- Make lifestyle scenes feel local to the target market.

## Prompt Style

- Describe the product role, scene, composition, lighting, typography space, and ecommerce purpose.
- Include constraints inside the single `Prompt` field.
- Do not create separate positive or negative prompt fields.
```

- [ ] **Step 4: Create `amazon-image-compliance.md`**

```markdown
# Amazon Image Compliance Reminders

Use these as practical creative reminders. They do not replace Amazon policy review.

## Main Image

- Use a clean white background.
- Do not add text, badges, props, lifestyle scenes, or comparison graphics.
- Show only the product and included accessories.
- Preserve accurate product shape, color, scale, and included parts.

## Secondary Images

- Claims should be supported by provided product information.
- Avoid fake certifications, fake awards, fake test results, fake UI screens, and unsupported performance numbers.
- Use careful wording for comparison or performance claims.
- Keep text readable and not overcrowded.

## AI Image QA

- Check product geometry, logo, accessories, buttons, handles, textures, and scale.
- Reject outputs with distorted parts, invented features, mismatched materials, or impossible usage.
- Check that generated scenes do not imply unsupported product capabilities.
```

- [ ] **Step 5: Create `review-insight-to-image-brief.md`**

```markdown
# Review Insight To Image Brief

Use reviews to find visual opportunities, not to create review excerpt blocks.

## Own Reviews

Look for:

- Repeated praise that can become stronger proof images.
- Repeated confusion that needs clearer visual explanation.
- Repeated complaints that need honest objection handling.
- Missing buyer education that causes wrong expectations.

## Competitor Reviews

Look for:

- Competitor strengths that shoppers care about.
- Competitor weaknesses that this product can answer.
- Category-wide anxieties that should be addressed in PDP images.
- Differentiation opportunities that competitors fail to visualize.

## Conversion Into Image Tasks

Convert patterns into:

- Proof image
- Comparison image
- Close-up detail image
- Lifestyle context image
- Setup, storage, or maintenance image
- A+ trust-building module

Do not output positive/negative review excerpts unless the user explicitly asks for excerpts.
```

- [ ] **Step 6: Run structure test to confirm remaining gap**

Run: `node tests/agent-skill-structure.test.js`

Expected: FAIL because Codex and Claude Code entrypoints are not created until Task 3.

## Task 3: Add Codex And Claude Code Entrypoints

**Files:**
- Create: `.agents/skills/amazon-pdp-visual-optimizer/SKILL.md`
- Create: `.claude/skills/amazon-pdp-visual-optimizer/SKILL.md`

- [ ] **Step 1: Create Codex entrypoint**

Use the same content as `skills/amazon-pdp-visual-optimizer/SKILL.md` so Codex can discover it when this repo is opened.

- [ ] **Step 2: Create Claude Code entrypoint**

Use the same content as `skills/amazon-pdp-visual-optimizer/SKILL.md` so Claude Code can discover it when this repo is opened.

- [ ] **Step 3: Run structure test**

Run: `node tests/agent-skill-structure.test.js`

Expected: PASS with `agent skill structure ok`.

- [ ] **Step 4: Commit skill files**

```bash
git add skills .agents .claude tests/agent-skill-structure.test.js
git commit -m "feat: add cross-agent Amazon PDP skill"
```

## Task 4: Add Agent-Readable Brief Format

**Files:**
- Create: `AMAZON-PDP-BRIEF.md`
- Create: `tests/amazon-pdp-brief-format.test.js`

- [ ] **Step 1: Write the failing test**

```js
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
  "## Own PDP Materials",
  "## Competitor PDP Materials",
  "## Own Reviews",
  "## Competitor Reviews",
  "## Optimization Goal",
  "## Business Metrics",
  "## Measurement Plan",
  "## Output Requirements",
  "Prompt"
].forEach((token) => {
  assert(brief.includes(token), `Brief template should include ${token}.`);
});

assert(!brief.includes("Positive Prompt"), "Brief template should not include Positive Prompt.");
assert(!brief.includes("Negative Prompt"), "Brief template should not include Negative Prompt.");

console.log("amazon pdp brief format ok");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/amazon-pdp-brief-format.test.js`

Expected: FAIL because `AMAZON-PDP-BRIEF.md` does not exist yet.

- [ ] **Step 3: Create `AMAZON-PDP-BRIEF.md`**

```markdown
# AMAZON-PDP-BRIEF.md

Use this file to give an AI agent structured Amazon PDP visual optimization context.

## Product

- Product name:
- Model:
- Category:
- Key included accessories:
- Confirmed features:
- Unsupported or forbidden claims:

## Target Market

- Marketplace:
- Audience:
- Local shopping concerns:
- Visual localization notes:

## Own PDP Materials

- Current PDP screenshot files:
- Current gallery images:
- Current A+ screenshots:
- Known visual problems:

## Competitor PDP Materials

- Competitor screenshot files:
- Competitor product names:
- Competitor visual strengths:
- Competitor visual gaps:

## Own Reviews

- Review file names:
- Repeated user concerns:
- Repeated user praise:
- Missing buyer education:

## Competitor Reviews

- Review file names:
- Competitor strengths mentioned by shoppers:
- Competitor weaknesses mentioned by shoppers:
- Category-wide concerns:

## Optimization Goal

- Primary goal:
- Secondary goal:
- Business context:

## Business Metrics

- CTR:
- CVR:
- Conversion rate:
- Share rate:
- AARRR stage:
- Existing A/B test result:
- Data review notes:
- Design effect validation goal:

## Measurement Plan

- Metric to watch after launch:
- A/B test idea:
- Success criteria:
- What to keep if it works:
- What to iterate if it does not work:

## Output Requirements

The agent should output:

1. Material Summary
2. Business Goal And Funnel Diagnosis
3. PDP Visual Diagnosis
4. Review Insight to Image Opportunity
5. Competitor Visual Opportunity
6. PDP Image Sequence Strategy
7. Image-by-Image Production Brief
8. A+ Module Direction
9. Premium Visual Taste Rules
10. Measurement And Post-Launch Review Plan
11. Final QA Checklist

Each image brief must include:

- Current Problem
- Business Hypothesis
- New Image Task
- Visual Direction
- In-Image Copy
- Prompt
- Compliance Notes
- QA Checklist

Do not split prompts into positive and negative prompt fields. Use only one field named `Prompt`.
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/amazon-pdp-brief-format.test.js`

Expected: PASS with `amazon pdp brief format ok`.

- [ ] **Step 5: Commit brief format**

```bash
git add AMAZON-PDP-BRIEF.md tests/amazon-pdp-brief-format.test.js
git commit -m "feat: add Amazon PDP brief format"
```

## Task 5: Reposition README

**Files:**
- Modify: `README.md`
- Create: `tests/readme-positioning.test.js`

- [ ] **Step 1: Write the failing test**

```js
const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");

[
  "cross-agent",
  "AI Agent",
  "AMAZON-PDP-BRIEF.md",
  "Codex",
  "Claude Code",
  "skills/amazon-pdp-visual-optimizer",
  ".agents/skills",
  ".claude/skills"
].forEach((token) => {
  assert(readme.includes(token), `README should mention ${token}.`);
});

assert(readme.includes("The demo is a workflow preview"), "README should frame the demo as a workflow preview.");

console.log("readme positioning ok");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/readme-positioning.test.js`

Expected: FAIL because the README still describes the project as demo-first.

- [ ] **Step 3: Rewrite the README**

Update the README to include:

```markdown
# Amazon PDP Visual Optimization Agent Skill Pack

A cross-agent workflow package for turning Amazon product information, PDP screenshots, competitor materials, and review files into image-by-image listing optimization briefs, premium visual prompts, and ecommerce QA rules.

## What This Is

This is not just a static demo. The core of the project is an AI Agent skill pack and an agent-readable `AMAZON-PDP-BRIEF.md` format.

## Use With AI Agents

### Codex

Open this repository in Codex. Codex can discover the skill from `.agents/skills/amazon-pdp-visual-optimizer/`.

### Claude Code

Open this repository in Claude Code. Claude Code can discover the skill from `.claude/skills/amazon-pdp-visual-optimizer/`.

### Other Agents

Copy `skills/amazon-pdp-visual-optimizer/SKILL.md`, the `references/` folder, and `AMAZON-PDP-BRIEF.md` into the agent's project rules or instruction context.

## Demo

The demo is a workflow preview. It shows the input and output shape, but it does not perform real AI image or review analysis by itself.
```

Keep the useful existing sections: target users, core principle, outputs, examples, disclaimer.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/readme-positioning.test.js`

Expected: PASS with `readme positioning ok`.

- [ ] **Step 5: Commit README repositioning**

```bash
git add README.md tests/readme-positioning.test.js
git commit -m "docs: reposition project as agent skill pack"
```

## Task 6: Reframe Demo Copy And Output

**Files:**
- Modify: `demo/index.html`
- Modify: `demo/app.js`
- Create: `tests/demo-no-overclaim.test.js`

- [ ] **Step 1: Write the failing test**

```js
const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "demo", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");
const combined = `${html}\n${js}`;

[
  "workflow preview",
  "AI Agent Skill Pack",
  "AMAZON-PDP-BRIEF.md"
].forEach((token) => {
  assert(combined.includes(token), `Demo should mention ${token}.`);
});

[
  "AI analyzer",
  "automatically analyze screenshots",
  "real AI analysis"
].forEach((forbidden) => {
  assert(!combined.includes(forbidden), `Demo should not overclaim: ${forbidden}`);
});

console.log("demo no overclaim ok");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/demo-no-overclaim.test.js`

Expected: FAIL because the current demo copy does not explain the new positioning.

- [ ] **Step 3: Update demo language**

Change the hero and output copy in `demo/app.js` translations so Chinese, Japanese, and English all frame the page as a workflow preview:

```js
heroCopy: "Preview a cross-agent Amazon PDP visual workflow. Use it to understand the input structure, output format, and image-by-image brief logic before running the full Skill Pack in an AI agent.",
outputCopy: "This preview shows the brief structure. For real screenshot and review analysis, use the Skill Pack inside Codex, Claude Code, or another AI agent.",
```

Use equivalent Chinese and Japanese translations.

- [ ] **Step 4: Add `AMAZON-PDP-BRIEF.md` mention to demo**

Add a short non-intrusive note near the input panel:

```html
<p class="helper-note" data-i18n="briefFormatNote">For agent use, organize materials with AMAZON-PDP-BRIEF.md.</p>
```

- [ ] **Step 5: Run test to verify it passes**

Run: `node tests/demo-no-overclaim.test.js`

Expected: PASS with `demo no overclaim ok`.

- [ ] **Step 6: Run existing demo tests**

Run:

```bash
for test in tests/*.test.js; do node "$test"; done
```

Expected: every test prints an `ok` message.

- [ ] **Step 7: Commit demo repositioning**

```bash
git add demo tests/demo-no-overclaim.test.js
git commit -m "feat: reframe demo as workflow preview"
```

## Task 7: Final Validation

**Files:**
- Review: all files touched above

- [ ] **Step 1: Run all tests**

Run:

```bash
for test in tests/*.test.js; do node "$test"; done
```

Expected: all tests pass.

- [ ] **Step 2: Check skill keywords**

Run:

```bash
rg -n "Positive Prompt|Negative Prompt|AI analyzer|automatically analyze screenshots|real AI analysis" .
```

Expected: no results, except this implementation plan and prior design spec if they are intentionally documenting forbidden terms.

- [ ] **Step 3: Check repo status**

Run: `git status --short`

Expected: no uncommitted changes.

- [ ] **Step 4: Report testing instructions for SUSU**

Tell the user to test with this prompt in Codex or Claude Code:

```text
Use amazon-pdp-visual-optimizer to analyze this Amazon PDP project.
I will provide product information, own PDP screenshots, competitor PDP screenshots, own review files, and competitor review files.
Please output a designer-ready image-by-image PDP optimization brief with one Prompt field per image.
```

Also tell the user to check whether the output references their actual materials and avoids unsupported claims.

## Self-Review

- Spec coverage: The plan creates the canonical skill, platform entrypoints, reference rules, agent-readable brief format, README repositioning, and demo no-overclaim update.
- Placeholder scan: No unfinished placeholder markers or unspecified implementation steps remain.
- Type and naming consistency: The skill name is consistently `amazon-pdp-visual-optimizer`; the brief file is consistently `AMAZON-PDP-BRIEF.md`; prompt output is consistently a single `Prompt` field.
