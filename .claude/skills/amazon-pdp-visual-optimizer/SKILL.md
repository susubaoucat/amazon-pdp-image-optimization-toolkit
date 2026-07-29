---
name: amazon-pdp-visual-optimizer
description: Use when Claude Code needs to analyze Amazon PDP image materials, including product information, own PDP screenshots, competitor PDP screenshots, own reviews, competitor reviews, CVR, conversion rate, add-to-cart, AARRR, ecommerce visual strategy, secondary image briefs, A+ content briefs, premium prompts, or AI image generation handoff.
---

# Amazon PDP Visual Optimizer

Use the canonical workflow in `skills/amazon-pdp-visual-optimizer/SKILL.md`.

Before producing the final brief, read the canonical skill and its references:

- `skills/amazon-pdp-visual-optimizer/references/output-structure.md`
- `skills/amazon-pdp-visual-optimizer/references/business-metrics-and-validation.md`
- `skills/amazon-pdp-visual-optimizer/references/review-insight-to-image-brief.md`
- `skills/amazon-pdp-visual-optimizer/references/premium-visual-rules.md`
- `skills/amazon-pdp-visual-optimizer/references/reference-taste-guardrails.md`
- `skills/amazon-pdp-visual-optimizer/references/amazon-image-compliance.md`
- `skills/amazon-pdp-visual-optimizer/references/html-report-output.md`

Keep prompts in one field named `Prompt`. Do not split prompts into positive and negative prompt fields.
When the user asks for AI image generation, prompt handoff, direct image tests, or reusable prompt packaging, include an A+ Detail Proof Prompt Pack and use `prompts/a-plus-detail-proof-prompts.md` when available.
When references are missing, weak, cluttered, or off-brand, do not imitate them; use `prompts/premium-ecommerce-taste-guardrails.md` and the default premium ecommerce baseline.
Default deliverable is an HTML report file plus a short chat summary when file creation is available.
