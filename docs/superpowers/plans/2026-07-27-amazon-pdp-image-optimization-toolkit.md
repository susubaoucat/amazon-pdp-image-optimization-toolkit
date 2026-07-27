# Amazon PDP Image Optimization Toolkit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a first version of an open-source toolkit that turns product information, PDP screenshots, reviews, and competitor references into image-by-image Amazon listing optimization briefs, premium visual direction, AI prompts, and QA checklists.

**Architecture:** The first release is a static, local-first toolkit. Markdown files provide reusable templates, examples, prompts, and checklists, while the demo is a plain HTML/CSS/JavaScript page that generates structured image optimization output without external APIs.

**Tech Stack:** Markdown, HTML, CSS, vanilla JavaScript.

---

## File Structure

- `README.md`: Project overview, target users, workflow, input/output model, and quick start.
- `templates/pdp-image-audit-template.md`: Reusable audit form for existing PDP images.
- `templates/image-by-image-visual-brief.md`: Per-image production brief template.
- `templates/a-plus-visual-module-template.md`: A+ visual module planning template.
- `templates/market-localization-visual-template.md`: Market-specific visual localization template.
- `prompts/product-hero-image-prompts.md`: Prompt templates for main image and gallery hero visuals.
- `prompts/benefit-infographic-prompts.md`: Prompt templates for benefit and proof infographics.
- `prompts/lifestyle-scene-prompts.md`: Prompt templates for lifestyle scenes.
- `prompts/a-plus-banner-prompts.md`: Prompt templates for A+ banners.
- `checklists/amazon-image-compliance-checklist.md`: Amazon image compliance and readiness checklist.
- `checklists/ai-product-consistency-qa.md`: AI product consistency review checklist.
- `checklists/visual-conversion-checklist.md`: Visual conversion and taste checklist.
- `examples/cordless-vacuum-image-optimization.md`: Example output for a cordless vacuum PDP optimization.
- `demo/index.html`: Local demo interface.
- `demo/styles.css`: Demo visual style.
- `demo/app.js`: Local rule-based generation logic.

## Tasks

### Task 1: Create Documentation Toolkit

**Files:**
- Create: all Markdown toolkit files listed above.

- [ ] **Step 1: Add README and toolkit templates**

Create Markdown files that explain the toolkit and provide copy-ready templates. Each template must focus on image production, not generic listing copy.

- [ ] **Step 2: Add example case**

Create a cordless vacuum example that demonstrates PDP diagnosis, review insights, image-by-image planning, premium visual taste control, prompts, and QA.

### Task 2: Create Static Demo

**Files:**
- Create: `demo/index.html`
- Create: `demo/styles.css`
- Create: `demo/app.js`

- [ ] **Step 1: Build input form**

The form collects product name, category, target market, product benefits, optimization goal, current PDP issue, own reviews, competitor reviews, and competitor reference notes.

- [ ] **Step 2: Build output sections**

The demo outputs PDP image diagnosis, review-to-image opportunities, image-by-image plan, A+ visual modules, premium taste layer, prompt pack, and QA checklist.

- [ ] **Step 3: Keep Prompt as one field**

Each image plan contains exactly one `Prompt` field. Do not split it into positive, negative, or avoid fields.

### Task 3: Verify Static Project

**Files:**
- Read: `README.md`
- Read: `demo/index.html`
- Read: `demo/app.js`

- [ ] **Step 1: Check file presence**

Run a file listing and confirm all planned files exist.

- [ ] **Step 2: Check demo text references**

Confirm the demo references `styles.css` and `app.js`, and the JavaScript uses existing element IDs.

- [ ] **Step 3: Report local usage**

Tell the user the demo can be opened from `demo/index.html` directly in a browser.

## Self-Review

- Spec coverage: The plan covers the requested image-focused toolkit, review inputs, premium taste layer, one-field Prompt output, and first-version static demo.
- Placeholder scan: No TBD/TODO placeholders remain.
- Scope check: The first release deliberately avoids Amazon scraping, API integrations, automated image generation, and real review mining to keep the project stable for a first version.
