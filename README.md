# Amazon PDP Visual Optimization Agent Skill Pack

A cross-agent AI Agent workflow package for turning Amazon product information, PDP screenshots, competitor materials, review files, and business metrics into image-by-image listing optimization briefs, premium visual prompts, and ecommerce QA rules.

This project is inspired by the idea that agent-readable files can make creative work more consistent. Instead of only showing a static demo, it defines a reusable Amazon PDP visual optimization workflow that agents such as Codex, Claude Code, and other Markdown-aware coding agents can follow.

## What This Is

This is not just a static demo. The core of the project is:

- `AMAZON-PDP-BRIEF.md`: an agent-readable brief format for Amazon PDP visual optimization.
- `skills/amazon-pdp-visual-optimizer`: the canonical workflow Skill.
- `.agents/skills`: a Codex entrypoint.
- `.claude/skills`: a Claude Code entrypoint.
- `templates`, `prompts`, `checklists`, and `examples`: reusable visual production assets.

The demo is a workflow preview. It shows the input and output shape, but it does not perform real AI image or review analysis by itself.

## Why This Exists

Many AI ecommerce tools can generate listing images, but the results often feel generic, cluttered, or visually cheap. This project adds a designer-led strategy layer before image generation:

- Connect visual decisions to CTR, CVR, conversion rate, share rate, AARRR funnel stage, and post-launch data review.
- Diagnose what current PDP images fail to communicate.
- Separate own-review signals from competitor-review signals.
- Translate user concerns into image opportunities.
- Plan each gallery image and A+ module with a clear conversion job.
- Add premium visual taste rules before writing prompts.
- Keep prompts simple and production-ready with one field named `Prompt`.
- Review AI-generated images for product accuracy, visual quality, Amazon readiness, and design effect validation.

## Who It Is For

- Ecommerce visual designers
- Amazon PDP and A+ content designers
- Cross-border ecommerce teams
- AI visual workflow designers
- Creative automation teams
- Brand ecommerce and performance creative teams
- Growth-oriented designers who need to explain analysis, creative reasoning, landing delivery, and post-launch review

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
Please output a designer-ready image-by-image PDP optimization brief with one Prompt field per image.
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
- Business metrics, such as CTR, CVR, conversion rate, share rate, AARRR stage, A/B test notes, or data review notes
- Current PDP screenshots or image exports
- Own product review files
- Competitor product review files
- Competitor PDP screenshots or visual references
- Claims that must not be invented or overstated

If performance data is missing, the agent should write hypotheses and a measurement plan instead of inventing numbers.

## Output

The agent workflow produces:

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

A+ output includes:

- A+ Storyline Overview
- Screen-by-Screen A+ Plan
- A+ Module Image Design

By default, the workflow focuses on detail page images, secondary gallery images, and A+ content. It does not include Amazon MAIN image recommendations unless main image optimization is explicitly requested.

## Project Structure

```text
amazon-pdp-image-optimization-toolkit/
├─ AMAZON-PDP-BRIEF.md
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
├─ checklists/
├─ examples/
├─ tests/
└─ demo/
```

## Core Principle

One PDP image should solve one clear customer question and support one business hypothesis.

The workflow avoids crowded image collages, excessive arrows, fake technology effects, unclear claims, and generic AI styling. It favors product-first composition, believable proof, clean copy hierarchy, realistic usage context, measurable creative reasoning, and premium ecommerce visual quality.

## Demo

Open the local workflow preview:

```text
demo/index.html
```

The demo helps users understand the input structure and output format. For real screenshot, review, and business-metric analysis, use the Skill Pack inside Codex, Claude Code, or another AI agent.

## Roadmap

- Add more category examples, including beauty, home appliance, consumer electronics, and pet products.
- Add market-specific examples for Japan, US, Germany, France, Spain, and Italy.
- Add sample `AMAZON-PDP-BRIEF.md` files with before/after PDP strategy.
- Add optional export to Markdown or PDF.
- Add stronger demo support for structured brief preview.

## Disclaimer

This toolkit provides creative and strategic guidance. It does not guarantee Amazon approval, ranking improvement, conversion lift, or policy compliance. Review all final assets against current Amazon requirements and brand/legal standards before publishing.
