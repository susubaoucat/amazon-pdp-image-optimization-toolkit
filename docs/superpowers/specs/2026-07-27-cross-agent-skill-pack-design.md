# Cross-Agent Skill Pack Design

## Project Positioning

The project will shift from a demo-first web tool to a cross-agent workflow package for Amazon PDP visual optimization.

The core product is an AI Agent skill pack that helps ecommerce designers and marketing teams connect business metrics, user insight, PDP visual strategy, and image-by-image Amazon listing production briefs.

The browser demo remains useful, but it is secondary. It should explain and preview the workflow, not pretend to perform real image or review analysis without an AI agent.

## Target Users

- Ecommerce visual designers
- Amazon PDP and A+ content designers
- Cross-border ecommerce teams
- AI visual workflow designers
- Creative automation teams
- Brand ecommerce and performance creative teams
- Growth-oriented visual designers who need to explain analysis, creative reasoning, delivery, and post-launch review

## Supported Agent Surfaces

The package should be usable across multiple AI agent tools:

- Codex: via `.agents/skills/amazon-pdp-visual-optimizer/SKILL.md`
- Claude Code: via `.claude/skills/amazon-pdp-visual-optimizer/SKILL.md`
- Other agents: by copying the canonical `skills/amazon-pdp-visual-optimizer/SKILL.md` and references into their project instructions, system prompts, or custom agent rule files

The canonical skill should live in `skills/amazon-pdp-visual-optimizer/`. Platform-specific folders should be adapters that mirror or point to the same workflow.

## Repository Structure

```text
amazon-pdp-image-optimization-toolkit/
├─ skills/
│  └─ amazon-pdp-visual-optimizer/
│     ├─ SKILL.md
│     └─ references/
│        ├─ output-structure.md
│        ├─ premium-visual-rules.md
│        ├─ amazon-image-compliance.md
│        └─ review-insight-to-image-brief.md
├─ adapters/
│  ├─ codex/
│  │  └─ .agents/skills/amazon-pdp-visual-optimizer/SKILL.md
│  └─ claude-code/
│     └─ .claude/skills/amazon-pdp-visual-optimizer/SKILL.md
├─ templates/
├─ prompts/
├─ checklists/
├─ examples/
├─ demo/
└─ README.md
```

## Skill Behavior

When an agent uses the skill, it should:

1. Ask for or inspect available materials: product information, target market, own PDP screenshots, competitor PDP screenshots, own review files, and competitor review files.
2. Avoid pretending to analyze unavailable material. If screenshots or review files are missing, say what is missing and continue with a lower-confidence brief.
3. Separate own-product signals from competitor signals.
4. Convert review patterns into image opportunities, not positive/negative review excerpts.
5. Connect PDP visual decisions to business goals such as CTR, CVR, conversion rate, share rate, AARRR funnel stage, or post-launch validation.
6. Produce a designer-ready Amazon PDP image plan, not a generic listing report.
7. Keep image prompts in one field named `Prompt`. Do not split into positive and negative prompts.
8. Apply premium visual taste rules before writing prompts.
9. Include Amazon image compliance reminders where relevant.

## Output Structure

The preferred output should include:

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

Each image brief should include:

- Current Problem
- Business Hypothesis
- New Image Task
- Visual Direction
- In-Image Copy
- Prompt
- Compliance Notes
- QA Checklist

## Design Principles

- One PDP image should solve one clear customer question.
- Every major image decision should connect to a business hypothesis or funnel role.
- The output should help a designer make images immediately.
- The skill should favor visual execution, not broad marketing theory.
- High-end listing images should feel product-specific, restrained, realistic, and conversion-focused.
- Avoid crowded icon walls, fake technology effects, generic AI style, unrealistic product scale, excessive text, and unsupported claims.
- If CTR, CVR, conversion rate, share rate, or AARRR data is not provided, the skill should define hypotheses and validation plans instead of inventing numbers.

## Demo Role

The demo should be renamed or reframed as a workflow preview. It may help users understand the input and output structure, but it should not be described as a true AI analyzer unless connected to an AI agent or model.

The demo output should eventually match the skill output structure so users see the same workflow in both places.

## Testing And Validation

Validation should check:

- The canonical skill has valid `SKILL.md` frontmatter.
- The skill includes the no negative prompt rule.
- The skill separates own reviews from competitor reviews.
- The skill includes CTR, CVR, conversion rate, share rate, AARRR, data review, and design effect validation concepts.
- The output structure is image-production-focused.
- The README explains cross-agent usage clearly.
- The demo does not overclaim real AI analysis.
