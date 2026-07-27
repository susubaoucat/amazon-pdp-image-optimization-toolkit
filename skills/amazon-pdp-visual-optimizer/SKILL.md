---
name: amazon-pdp-visual-optimizer
description: Use when an AI agent needs to analyze Amazon PDP or listing image materials, including product information, own PDP screenshots, competitor PDP screenshots, own reviews, competitor reviews, CTR, CVR, conversion rate, share rate, AARRR, ecommerce image strategy, listing visual optimization, premium image prompts, or image-by-image creative briefs.
---

# Amazon PDP Visual Optimizer

Use this skill to turn Amazon PDP detail page images and A+ content materials into a designer-ready visual growth and image production plan.

## Required Mindset

- Treat the task as ecommerce visual growth strategy and image production, not generic listing copywriting.
- Use the user's uploaded files, screenshots, review tables, and notes as the primary evidence.
- Separate own-product evidence from competitor evidence.
- Treat the default scope as detail page images, secondary gallery images, and A+ content.
- Do not include Amazon MAIN image recommendations unless the user explicitly requests main image optimization or provides main-image materials.
- If a file, screenshot, review source, or metric is unavailable or unreadable, state that limitation and continue with lower confidence.
- Do not invent product features, certifications, test results, Amazon claims, CTR, CVR, conversion rate, share rate, or AARRR results.
- If performance data is missing, write business hypotheses and measurement plans instead of pretending results are known.
- Do not output a `Positive Prompt` or `Negative Prompt` field. Use one field named `Prompt`.

## Workflow

1. Collect or inspect available material:
   - Product name, category, model, target market, and optimization goal.
   - Business context, CTR, CVR, conversion rate, share rate, AARRR stage, A/B test data, or data review notes.
   - Own PDP screenshots or image exports.
   - Competitor PDP screenshots or visual references.
   - Scope: detail page images, A+ content, secondary gallery images, or main image if explicitly requested.
   - Own product review files.
   - Competitor product review files.
2. Read `references/review-insight-to-image-brief.md` when reviews are present.
3. Read `references/business-metrics-and-validation.md` before deciding image sequence strategy.
4. Read `references/premium-visual-rules.md` before writing image prompts.
5. Read `references/amazon-image-compliance.md` before finalizing image tasks.
6. Read `references/output-structure.md` and follow its section order.
7. Read `references/html-report-output.md` when the user asks for a deliverable, report, file, shareable page, or HTML output.
8. Produce a visual production brief that a designer can immediately use to make listing images.

## Output Rules

- Start with a short material summary.
- Explain what was actually inspected.
- Connect the project to a business goal such as CVR improvement, conversion rate improvement, add-to-cart lift, image click depth, share rate growth, AARRR stage improvement, or design effect validation. Mention CTR only when the user requests main image, search image, or ad creative optimization.
- Convert review patterns into image opportunities, not good/bad review excerpts.
- Use image-by-image planning as the main body.
- Each image must have one conversion job.
- Each image brief must include: `Current Problem`, `Business Hypothesis`, `New Image Task`, `Visual Direction`, `In-Image Copy`, `Prompt`, `Compliance Notes`, and `QA Checklist`.
- A+ content must include an `A+ Storyline Overview`, a `Screen-by-Screen A+ Plan`, and `A+ Module Image Design` with concrete image modules per screen.
- Keep image prompts specific, premium, and product-first.
- Keep claims careful and tied to provided evidence.

## Output Mode

- Default deliverable: create an HTML report file and provide a short chat summary when the environment allows file creation.
- Use Markdown output when the user asks for a quick chat answer, explicitly requests Markdown output, or the agent cannot create files.
- If creating an HTML report, follow `references/html-report-output.md`.
