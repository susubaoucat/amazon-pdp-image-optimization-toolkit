# Amazon PDP AI Image Brief Generator

This toolkit guarantees a high aesthetic floor — even someone with no design taste will not produce a low-quality image direction. The floor is the written standard already in this repo: premium taste guardrails and a commercial photography quality floor that reject weak references, crowded layouts, and generic AI styling before a prompt is handed off. It produces briefs, prompts, and checklists for Amazon secondary images and A+ content. It turns reviews, competitor PDPs, product data, and business metrics into ready-to-generate Amazon secondary image and A+ content briefs. It does not generate images itself.

This cross-agent AI Agent toolkit helps ecommerce teams move from messy PDP materials to practical image-generation deliverables:

- Data-backed image opportunities from own reviews, competitor reviews, PDP screenshots, product parameters, CTR, CVR, conversion rate, share rate, AARRR stage, and post-launch data review notes
- Secondary image sequence strategy for the non-main Amazon gallery
- A+ storyline, screen-by-screen plan, and module image briefs
- AI image generation prompts with one field named `Prompt`
- Detail Proof prompt templates that combine premium brand mood with visual evidence layers
- Premium taste guardrails for projects with weak, inconsistent, or missing visual references
- HTML reports for review and sharing
- Image production briefs for designers
- Prompt packs for AI image tools
- Claims and compliance risk notes as safety checks

The default focus is Amazon secondary gallery images and A+ content. It does not focus on Amazon MAIN image optimization unless that scope is explicitly requested.

## What This Is

This project is a data-to-image-brief workflow for Amazon PDP creative work. It helps an AI agent analyze product materials, reviews, competitor pages, and business context, then generate a structured plan for images that can be designed or produced with AI image tools.

The core assets are:

- `AMAZON-PDP-BRIEF.md`: a filled cordless-vacuum sample of the agent brief, plus the output contract. It is not a blank form.
- `skills/amazon-pdp-visual-optimizer`: the canonical workflow Skill.
- `.agents/skills`: a Codex entrypoint.
- `.claude/skills`: a Claude Code entrypoint.
- `templates`, `prompts`, `checklists`, and `examples`: reusable production assets.

The demo is a workflow preview. It shows the input and output shape, but it does not perform real AI image or review analysis by itself.

## Why This Exists

Many AI ecommerce tools jump directly into image generation. The result is often generic: attractive enough, but disconnected from customer concerns, competitor gaps, conversion data, and Amazon claim boundaries.

This toolkit adds a data-driven strategy layer before image generation:

- Read own and competitor reviews to identify real image opportunities.
- Compare PDP screenshots to find visual gaps and stronger competitor proof patterns.
- Connect image decisions to CVR, conversion rate, add-to-cart, image click depth, A+ module engagement, share rate, AARRR funnel stage, and post-launch data review.
- Plan each secondary image with one conversion job.
- Build A+ content as a story system, not a shallow module list.
- Produce designer-ready image briefs and AI image prompts that can carry both brand taste and feature proof.
- Use Detail Proof Layers for A+ feature images, such as scene evidence, product close-ups, swatches, dimension lines, process strips, and careful disclaimers.
- Use reference taste guardrails to prevent weak uploaded references from lowering the image quality baseline.
- Keep claims careful with lightweight safety checks.

## Who It Is For

- Amazon PDP and A+ content designers
- Cross-border ecommerce teams
- Listing image and performance creative teams
- AI image workflow designers
- Brand ecommerce operators
- Growth teams that need to connect data analysis, creative strategy, image generation, and post-launch validation

## Workflow

### 1. Analyze

Use product information, own PDP screenshots, competitor PDP screenshots, own reviews, competitor reviews, and optional business metrics to identify visual opportunities.

The workflow separates:

- Own-product praise that can become proof images
- Own-product complaints that need objection-handling images
- Competitor strengths that shoppers already value
- Competitor weaknesses that create differentiation opportunities
- Category-wide anxieties that should be answered visually

### 2. Plan

Turn the analysis into an image system:

- Secondary image sequence strategy
- Image-by-image production briefs
- A+ Storyline Overview
- Screen-by-Screen A+ Plan
- A+ Module Image Design
- Measurement and post-launch review plan

### 3. Generate

Create deliverables that different teammates can use:

- HTML Report: a shareable strategy report for review
- Image Production Brief: a designer-ready task list
- Prompt Pack: one AI image prompt per secondary image or A+ module image
- A+ Detail Proof Prompt Pack: reusable image-generation prompts for feature proof banners
- Claims Risk Checklist: safety notes for Amazon claims, product accuracy, and prompt consistency

## Use With AI Agents

### Codex

Open this repository in Codex. Codex can discover the skill from:

```text
.agents/skills/amazon-pdp-visual-optimizer/
```

Then ask:

```text
Use amazon-pdp-visual-optimizer to analyze this Amazon PDP project.
I will provide product information, own PDP screenshots, competitor PDP screenshots, own review files, and competitor review files.
Please create an HTML report and a short chat summary.
Focus on secondary gallery images and A+ content.
Do not output main image optimization.
```

### Claude Code

Open this repository in Claude Code. Claude Code can discover the skill from:

```text
.claude/skills/amazon-pdp-visual-optimizer/
```

Use the same project prompt and provide the PDP materials, reviews, screenshots, and metrics.

### Other Agents

Copy these files into the agent's project rules, instruction context, or custom workflow folder:

```text
AMAZON-PDP-BRIEF.md
skills/amazon-pdp-visual-optimizer/SKILL.md
skills/amazon-pdp-visual-optimizer/references/
```

## Input Materials

The workflow works best when you collect:

- Product name, model, category, and confirmed features
- Target marketplace or region
- Optimization goal
- Business metrics, such as CTR, CVR, conversion rate, add-to-cart, share rate, AARRR stage, A/B test notes, image click depth, A+ module engagement, or data review notes
- Current secondary gallery images or PDP long screenshots
- Current A+ screenshots or A+ long images
- Own product review files
- Competitor product review files
- Competitor PDP screenshots, A+ screenshots, or visual references
- Product parameter sheets or competitor comparison tables
- Claims that must not be invented or overstated

If performance data is missing, the agent should write hypotheses and a measurement plan instead of inventing numbers.

## Privacy And Sample Data

Keep real customer projects, brand assets, review exports, PDP screenshots, AI-generated test images, and reference boards out of the public repository by default. Use them locally to validate the workflow, then publish only anonymized examples or generic templates.

The repository `.gitignore` excludes local `deliverables/`, `reference/`, spreadsheet exports, generated reports, and generated image files so private project material does not become part of the toolkit by accident.

If users do not provide good visual references, the toolkit should still apply the public default taste baseline in:

```text
prompts/premium-ecommerce-taste-guardrails.md
skills/amazon-pdp-visual-optimizer/references/reference-taste-guardrails.md
```

## Output

Default deliverable: HTML report plus reusable production outputs.

The agent should create a shareable `.html` report when the environment allows file creation, then provide a short chat summary with the generated file path. Markdown output is still supported when the user asks for a quick chat answer or when the agent cannot create files.

The output structure covers:

0. Executive Summary
1. Material Summary
2. Business Goal And Funnel Diagnosis
3. PDP Visual Diagnosis
4. Review Insight to Image Opportunity
5. Competitor Visual Opportunity
6. PDP Detail Image Sequence Strategy
7. Detail Image-by-Image Production Brief
8. A+ Content Optimization Plan
9. Premium Visual Taste Rules
10. Measurement And Post-Launch Review Plan
11. Final QA Checklist

Each detail image brief includes:

- Current Problem
- Business Hypothesis
- New Image Task
- Visual Direction
- In-Image Copy
- Prompt
- Compliance Notes
- QA Checklist

Each A+ module image includes:

- Module Type
- Content Task
- Scene Description
- In-Image Copy
- Prompt
- Detail Proof Layer
- Design Notes
- A+ Compliance Notes

A+ output includes:

- A+ Storyline Overview
- Screen-by-Screen A+ Plan
- A+ Module Image Design
- Optional A+ Detail Proof Prompt Pack for AI image-generation handoff

HTML output guidance lives in:

```text
skills/amazon-pdp-visual-optimizer/references/html-report-output.md
```

## Project Structure

```text
amazon-pdp-image-optimization-toolkit/
├─ AMAZON-PDP-BRIEF.md
├─ LICENSE
├─ README.md
├─ skills/
│  └─ amazon-pdp-visual-optimizer/
│     ├─ SKILL.md
│     └─ references/
├─ .agents/
│  └─ skills/amazon-pdp-visual-optimizer/
├─ .claude/
│  └─ skills/amazon-pdp-visual-optimizer/
├─ templates/
├─ prompts/
│  ├─ a-plus-detail-proof-prompts.md
│  └─ premium-ecommerce-taste-guardrails.md
├─ checklists/
├─ examples/
│  ├─ cordless-vacuum-image-optimization.md
│  ├─ cordless-vacuum-brief.sample.json
│  └─ before-after/
├─ tests/
└─ demo/
```

## Core Principle

Data finds the image opportunity. AI turns the opportunity into a visual plan. Designers and image tools turn the plan into production assets.

The workflow avoids crowded image collages, excessive arrows, fake technology effects, unclear claims, and generic AI styling. It favors product-first composition, believable proof, clean copy hierarchy, realistic usage context, measurable creative reasoning, premium ecommerce visual quality, and Detail Proof Layers that make feature images feel credible instead of empty.

## Example Output

The cordless vacuum write-up in `examples/cordless-vacuum-image-optimization.md` is the source example. `AMAZON-PDP-BRIEF.md` fills the agent input from that example. `examples/cordless-vacuum-brief.sample.json` restates the same example with the section order and field names in `skills/amazon-pdp-visual-optimizer/references/output-structure.md`.

Fields the source example does not specify are `null`. The file does not add metrics. `schemaNote` and `source` only identify the file; they are not fields the skill asks an agent to output. The main-image prompt stays in the diagnosis because the default scope is secondary gallery images and A+ content.

One secondary-image object from that file:

```json
{
  "image": "Image 1: Core Cleaning Proof Infographic",
  "currentProblem": "Feature infographic lists suction power but does not connect it to daily cleaning pain points.",
  "businessHypothesis": "A proof image for dust, crumbs, pet hair, and edge cleaning is the example's response to the cleaning-confidence signal. No conversion metric is provided.",
  "newImageTask": "Rebuild as a core benefit proof image focused on dust, pet hair, and edge cleaning.",
  "visualDirection": "Product angled beside controlled debris zones and a simple edge-cleaning proof. Product as anchor on the right, clean proof zones on the left, one short headline. Show realistic floor debris and avoid exaggerated mess.",
  "inImageCopy": "Headline: \"Strong everyday cleaning.\" Supporting callouts: dust, crumbs, pet hair, edge cleaning.",
  "prompt": "Create a premium Amazon product infographic for a foldable cordless vacuum cleaner, focused on strong everyday cleaning for dust, crumbs, pet hair, and edge areas. Use a clean product-first layout with one short headline area, accurate product placement, restrained callouts, and visual proof through realistic floor debris zones and an edge-cleaning scene. Keep the product as the visual anchor, preserve accurate structure, color, material, scale, and logo placement, and use realistic studio lighting with soft shadows. The design should feel refined and easy to scan, avoiding cluttered icon walls, excessive arrows, cheap sales badges, fake glow effects, exaggerated claims, crowded copy, and any invented product functions.",
  "complianceNotes": "Avoid exaggerated claims and invented product functions. Keep debris believable.",
  "qaChecklist": [
    "One message",
    "Believable debris",
    "Readable hierarchy",
    "Accurate product",
    "Premium spacing"
  ]
}
```

## Before And After

Real before-and-after PDP screenshots are not in this repository. Do not treat a generated product photo as a substitute. This slot is reserved so the owner can drop in a real pair later.

Use the cordless vacuum example. The before image should be a weak existing secondary image: the feature infographic that lists suction power without connecting it to dust, pet hair, and edge cleaning. The after image should be the improved result produced from that example's Image 2 brief: product as the anchor, controlled debris zones, and one short headline.

Suggested files:

- `examples/before-after/cordless-vacuum-secondary-before.png`
- `examples/before-after/cordless-vacuum-secondary-after.png`

Alt text to use once those files exist:

- Before: `Before: cordless vacuum secondary image that lists suction power without showing dust, pet hair, or edge-cleaning proof.`
- After: `After: cordless vacuum secondary image rebuilt from the toolkit brief, with the product as the anchor and restrained proof for dust, crumbs, pet hair, and edge cleaning.`

When both files are real screenshots, embed them here:

```markdown
![Before: cordless vacuum secondary image that lists suction power without showing dust, pet hair, or edge-cleaning proof.](examples/before-after/cordless-vacuum-secondary-before.png)

![After: cordless vacuum secondary image rebuilt from the toolkit brief, with the product as the anchor and restrained proof for dust, crumbs, pet hair, and edge cleaning.](examples/before-after/cordless-vacuum-secondary-after.png)
```

Drop-in notes also live in `examples/before-after/README.md`. `.gitignore` already allows image files under `examples/`.

## Demo

Open the local workflow preview:

```text
demo/index.html
```

The page is labeled **Local workflow preview**. It fills a fixed image-plan template. Review text is matched against a small keyword list. Uploaded screenshots are listed by file name and shown as thumbnails; image content is not read. A full analysis step in the skill would inspect those screenshots, review patterns, competitor pages, and any metrics you provide, then write the brief from that evidence. Stronger structured brief preview is already on the roadmap.

The demo is a workflow preview. It shows the input and output shape, but it does not perform real AI image or review analysis by itself. For screenshot, review, and business-metric analysis, use the Skill inside Codex, Claude Code, or another AI agent. The demo does not generate images.

## Tests

Run the repository checks with:

```bash
npm test
```

## Roadmap

- Add direct Prompt Pack export.
- Add image-generation handoff formats for common AI image tools.
- Add more category examples, including beauty, home appliance, consumer electronics, and pet products.
- Add market-specific examples for Japan, US, Germany, France, Spain, and Italy.
- Add the real before/after cordless vacuum screenshots described in the Before And After section. The filenames and alt text are reserved; the image files are not in the repo yet.
- Add optional export to Markdown or PDF.
- Add stronger demo support for structured brief preview.

## Disclaimer

This toolkit provides creative and strategic guidance. It does not guarantee Amazon approval, ranking improvement, conversion lift, image-generation accuracy, or policy compliance. Review all final assets against current Amazon requirements and brand/legal standards before publishing.
