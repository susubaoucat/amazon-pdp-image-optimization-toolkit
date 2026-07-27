# Cross-Agent Skill Pack Design

## Project Positioning

The project will shift from a demo-first web tool to a cross-agent workflow package for Amazon PDP visual optimization.

The core product is an AI Agent skill pack that helps ecommerce designers and marketing teams turn product information, PDP screenshots, competitor screenshots, and review files into image-by-image Amazon listing production briefs.

The browser demo remains useful, but it is secondary. It should explain and preview the workflow, not pretend to perform real image or review analysis without an AI agent.

## Target Users

- Ecommerce visual designers
- Amazon PDP and A+ content designers
- Cross-border ecommerce teams
- AI visual workflow designers
- Creative automation teams
- Brand ecommerce and performance creative teams

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
5. Produce a designer-ready Amazon PDP image plan, not a generic listing report.
6. Keep image prompts in one field named `Prompt`. Do not split into positive and negative prompts.
7. Apply premium visual taste rules before writing prompts.
8. Include Amazon image compliance reminders where relevant.

## Output Structure

The preferred output should include:

1. Material Summary
2. PDP Visual Diagnosis
3. Review Insight to Image Opportunity
4. Competitor Visual Opportunity
5. PDP Image Sequence Strategy
6. Image-by-Image Production Brief
7. A+ Module Direction
8. Premium Visual Taste Rules
9. Final QA Checklist

Each image brief should include:

- Current Problem
- New Image Task
- Visual Direction
- In-Image Copy
- Prompt
- Compliance Notes
- QA Checklist

## Design Principles

- One PDP image should solve one clear customer question.
- The output should help a designer make images immediately.
- The skill should favor visual execution, not broad marketing theory.
- High-end listing images should feel product-specific, restrained, realistic, and conversion-focused.
- Avoid crowded icon walls, fake technology effects, generic AI style, unrealistic product scale, excessive text, and unsupported claims.

## Demo Role

The demo should be renamed or reframed as a workflow preview. It may help users understand the input and output structure, but it should not be described as a true AI analyzer unless connected to an AI agent or model.

The demo output should eventually match the skill output structure so users see the same workflow in both places.

## Testing And Validation

Validation should check:

- The canonical skill has valid `SKILL.md` frontmatter.
- The skill includes the no negative prompt rule.
- The skill separates own reviews from competitor reviews.
- The output structure is image-production-focused.
- The README explains cross-agent usage clearly.
- The demo does not overclaim real AI analysis.
