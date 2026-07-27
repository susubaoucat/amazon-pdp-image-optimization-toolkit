# HTML Report Output

Use this when the user asks for a deliverable, report, file, shareable page, or HTML output.

## Default Deliverable

Default deliverable: create an HTML report file and provide a short chat summary.

Use Markdown output only when:

- The user asks for a quick answer in chat.
- The agent cannot create files in the current environment.
- The user explicitly asks for Markdown output.

## File Behavior

- Create one `.html` file in the current project or a user-specified output folder.
- Use a clear filename such as `amazon-pdp-visual-optimization-report.html`.
- If the product name is known, include a simplified product name in the filename.
- After creating the file, give the user the file path and a brief summary of what changed.

## Required HTML Sections

The HTML report should include:

1. Executive Summary
2. Material Summary
3. Business Goal And Funnel Diagnosis
4. PDP Visual Diagnosis
5. Review Insight to Image Opportunity
6. Competitor Visual Opportunity
7. A+ Storyline Overview
8. Screen-by-Screen A+ Plan
9. A+ Module Image Design
10. Premium Visual Taste Rules
11. Measurement And Post-Launch Review Plan
12. Final QA Checklist

Optional section only when explicitly requested:

- Detail Image-by-Image Production Brief

## HTML Style Requirements

- Make the report easy to scan.
- Use a fixed-width content container.
- Use section cards only for actual report blocks, not decorative nesting.
- Use tables for sequence strategies, story overviews, and measurement plans.
- Use repeated cards for detail images and A+ module images.
- Keep colors restrained and professional.
- Avoid over-decorated gradients, fake dashboards, and generic tech styling.
- Ensure text is readable on mobile and desktop.

## Report Writing Rules

- The Executive Summary should be short: scope, key risk, key opportunity, and first priority.
- Default scope is A+ content optimization only.
- Do not include detail image-by-image production briefs unless secondary gallery or detail image optimization is explicitly requested.
- Do not include Amazon MAIN image sections unless main image optimization is explicitly requested.
- A+ should not be a shallow module list. It must include A+ Storyline Overview, Screen-by-Screen A+ Plan, and A+ Module Image Design.
- Each detail image and A+ module image should include one `Prompt` field.
- Include compliance notes near the relevant image or screen, not only at the end.
- Include a chat summary after creating the HTML report.

## Minimal HTML Skeleton

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Amazon PDP Visual Optimization Report</title>
    <style>
      body { margin: 0; font-family: Arial, sans-serif; color: #172026; background: #f5f7f8; }
      main { max-width: 1180px; margin: 0 auto; padding: 32px 20px; }
      section { background: #fff; border: 1px solid #d9e1e6; border-radius: 8px; padding: 22px; margin: 18px 0; }
      h1, h2, h3 { margin-top: 0; }
      table { width: 100%; border-collapse: collapse; }
      th, td { border: 1px solid #d9e1e6; padding: 10px; vertical-align: top; }
      th { background: #173f3a; color: #fff; }
      .card { border: 1px solid #d9e1e6; border-radius: 8px; padding: 16px; margin: 12px 0; }
      .meta { color: #5f6f78; }
    </style>
  </head>
  <body>
    <main>
      <h1>Amazon PDP Visual Optimization Report</h1>
      <p class="meta">Generated from product materials, A+ screenshots, reviews, competitor references, and business goals.</p>
    </main>
  </body>
</html>
```
