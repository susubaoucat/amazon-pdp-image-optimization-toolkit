# Amazon PDP Image Optimization Toolkit

An open-source toolkit for turning product information, PDP screenshots, user reviews, and competitor references into image-by-image Amazon listing optimization briefs, premium visual direction, AI-ready prompts, and visual QA checklists.

This project focuses on **image production**, not generic listing copy. It helps ecommerce teams decide what each Amazon PDP image should communicate, how it should look, and how to guide AI image tools toward a more refined, conversion-focused result.

## Why This Exists

Many AI ecommerce tools can generate listing images, but the results often feel generic, cluttered, or visually cheap. This toolkit adds a designer-led layer between strategy and generation:

- Diagnose what current PDP images fail to communicate.
- Translate user reviews into image opportunities.
- Plan each gallery image and A+ module with a clear conversion job.
- Add premium visual taste rules before writing prompts.
- Keep prompts simple enough for non-technical users to copy.
- Review AI-generated images for product accuracy, visual quality, and Amazon readiness.

## Who It Is For

- Ecommerce visual designers
- Amazon PDP and A+ content designers
- Cross-border ecommerce teams
- AI visual workflow designers
- Creative automation teams
- Brand ecommerce and performance creative teams

## Inputs

The toolkit works best when you collect:

- Product name and category
- Target marketplace or region
- Core product benefits
- Current PDP screenshots or image notes
- Own product reviews
- Competitor product reviews
- Competitor PDP screenshots or visual references
- Optimization goal, such as higher perceived value, clearer benefit proof, better review objection handling, or premium visual upgrade

The first demo does not scrape Amazon pages automatically. Users provide the material, and the toolkit turns it into a visual production plan.

## Outputs

The toolkit produces:

1. **PDP Image Diagnosis**  
   A practical review of current gallery and A+ image problems.

2. **Review Insight to Image Opportunity**  
   A bridge from own and competitor reviews to visual opportunities.

3. **Image-by-Image PDP Plan**  
   A production plan for the main image, infographics, lifestyle scenes, proof images, comparison visuals, storage/usability images, and maintenance images.

4. **A+ Visual Module Plan**  
   A modular plan for premium banner, technical proof, lifestyle, comparison, and trust-building sections.

5. **Premium Taste Layer**  
   Visual rules for cleaner composition, realistic lighting, restrained color, better hierarchy, and less generic AI output.

6. **Prompt Pack**  
   One complete prompt per image or module. Prompts are not split into positive and negative fields.

7. **Visual QA Checklist**  
   A review list for product accuracy, Amazon readiness, conversion clarity, and visual taste.

## Quick Start

Open the local demo:

```text
demo/index.html
```

Fill in the product information, review notes, competitor references, and optimization goal. The demo will generate a structured image optimization plan that can be copied into a creative brief or AI image workflow.

## Project Structure

```text
amazon-pdp-image-optimization-toolkit/
├─ README.md
├─ templates/
│  ├─ pdp-image-audit-template.md
│  ├─ image-by-image-visual-brief.md
│  ├─ a-plus-visual-module-template.md
│  └─ market-localization-visual-template.md
├─ prompts/
│  ├─ product-hero-image-prompts.md
│  ├─ benefit-infographic-prompts.md
│  ├─ lifestyle-scene-prompts.md
│  └─ a-plus-banner-prompts.md
├─ checklists/
│  ├─ amazon-image-compliance-checklist.md
│  ├─ ai-product-consistency-qa.md
│  └─ visual-conversion-checklist.md
├─ examples/
│  └─ cordless-vacuum-image-optimization.md
└─ demo/
   ├─ index.html
   ├─ styles.css
   └─ app.js
```

## Core Principle

One PDP image should solve one clear customer question.

The toolkit avoids crowded image collages, excessive arrows, fake technology effects, unclear claims, and generic AI styling. It favors product-first composition, believable proof, clean copy hierarchy, realistic usage context, and premium ecommerce visual quality.

## Roadmap

- Add more category examples, including beauty, home appliance, consumer electronics, and pet products.
- Add market-specific examples for Japan, US, Germany, France, Spain, and Italy.
- Add optional AI API integration.
- Add export to Markdown or PDF.
- Add image upload and visual annotation support.

## Disclaimer

This toolkit provides creative and strategic guidance. It does not guarantee Amazon approval, ranking improvement, conversion lift, or policy compliance. Review all final assets against current Amazon requirements and brand/legal standards before publishing.
