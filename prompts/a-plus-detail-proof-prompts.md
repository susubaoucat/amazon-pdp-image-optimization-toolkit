# A+ Detail Proof Prompts

Use this template when an Amazon A+ module needs to be more than a simple lifestyle banner. It is designed for feature images that must show a premium brand mood and a clear proof structure at the same time.

## When To Use

- A feature needs visual evidence, not only mood.
- The image needs a headline, body copy, and a small proof layer.
- The output should feel like international ecommerce, not a crowded marketplace detail page.
- The product shape, feature claim, and usage scene must stay credible.

## Prompt Assembly

Build each prompt in this order:

1. Taste Guardrail Layer
2. Image Quality Floor
3. Brand Art Direction Layer
4. Product Invariants
5. Feature Task
6. Usage Mode
7. Layout Archetype
8. Detail Proof Layer
9. Copy Layer
10. Compliance And Avoid Layer

If no reliable reference is available, start with `premium-ecommerce-taste-guardrails.md`.
If uploaded references are low quality, use them only to understand the business intent and follow the taste guardrail instead.

## Reusable Template

```text
Use case: ads-marketing
Asset type: 1464 x 600 Amazon A+ selling point banner, premium international ecommerce, detail-proof version.

Reference images:
Use the provided product appearance image as the strict product reference.
Use any existing PDP or competitor image only as an information-density and layout reference, not as a copied image.
If any uploaded reference looks cluttered, low-end, off-brand, overly neon, generic, or inconsistent with product credibility, do not imitate its style. Extract only the useful business intent and follow the premium ecommerce baseline instead.

Primary goal:
Create one premium A+ feature image for [PRODUCT_NAME] focused on [FEATURE_NAME].
The result should have richer functional proof than a simple lifestyle scene, while still feeling like an Apple / Dyson / Sony level international appliance campaign.

Product invariants:
Preserve [PRODUCT_COLOR], [HANDLE_SHAPE], [DISPLAY_AREA], [TANK_PANEL], [LIGHT_STRIP], [BRUSH_HEAD], [ROLLER_OR_ACTIVE_PART], realistic floor contact, correct scale, and product-first composition.
If the logo cannot be rendered accurately, leave the logo area clean for post-production.

Composition:
Wide horizontal Amazon banner.
Layout archetype: [EDITORIAL_ACTIVE_SCENE / SPLIT_PROOF_SYSTEM / MACRO_DETAIL_HERO / LOW_ANGLE_USE_PROOF / PROCESS_STRIP / BUYING_CONFIDENCE_SNAPSHOT / QUIET_BRAND_BREATHER].
Choose the layout archetype based on the selling point and avoid repeating the same text position, product placement, inset position, camera distance, and proof style used in the previous module.
Use [SCENE_TYPE] with [LIGHTING], [FLOOR_OR_SURFACE], [INTERIOR_STYLE], and a restrained [COLOR_PALETTE].
Main visual: [PRODUCT_ACTION].
Human presence, if used: [PERSON_DESCRIPTION]. Product remains first visual.
Usage mode: [ACTIVE_USE_REQUIRED / JUST_USED_EVIDENCE_ALLOWED / STATIC_PRODUCT_ALLOWED].
For active-use categories such as vacuums, wet-dry cleaners, steam cleaners, mops, kitchen appliances, beauty devices, and tools, use ACTIVE_USE_REQUIRED unless the module is explicitly about storage, dock, product beauty, comparison, or technical explanation. Include visible user interaction: hand on handle, partial body, natural push or pull posture, correct floor contact, and a believable use path. Do not show the product standing alone unattended for cleaning, reach, steam, movement, or everyday-use selling points.

Detail Proof Layer:
1. [LEFT_TEXT_BLOCK_OR_MAIN_COPY_AREA]
2. [FUNCTION_CLOSEUP_OR_INSET]
3. [PROOF_OBJECTS_OR_SWATCHES_OR_DIMENSION_LINE]
4. [SMALL_DISCLAIMER_OR_BOUNDARY_NOTE]
Vary the proof placement and visual rhythm: do not always use a right-side rounded rectangle inset. Proof may appear as embedded floor path, macro crop, top/bottom strip, dimension line, side rail, swatch cluster, or process cards depending on the layout archetype.

Copy layer:
Render clean premium English typography in the image.
Use a Helvetica / Inter / SF Pro / Avenir feeling, strong hierarchy, understated body copy.
Use exactly this text:
Headline: "[HEADLINE]"
Body: "[BODY]"
[OPTIONAL_LABEL_1]: "[LABEL_TEXT_1]"
[OPTIONAL_LABEL_2]: "[LABEL_TEXT_2]"
Disclaimer: "[DISCLAIMER]"
No other words.

Art direction:
Premium Tech plus high-end lifestyle photography.
Natural shadows, realistic materials, controlled negative space, restrained color, crisp product detail, and a calm proof system.
Technology should live in the product, materials, light, and functional details, not in the background.

Image quality floor:
Apply commercial photography quality: crisp product edges, controlled contrast, directional light, believable contact shadows, visible material separation, natural reflections, and micro-detail in important areas such as brush head, tank, roller, floor texture, water path, mess, steam, or product light. Insets and close-ups must reveal new feature information and look like real product photography, not low-resolution decorative crops. Avoid washed-out beige/gray haze, flat showroom lighting, muddy shadows, low-detail product surfaces, generic AI interiors, and product/floor merging.

Avoid:
cyberpunk, HUD, circuit patterns, particles, large saturated blue, purple gaming glow, cheap gradients, red/yellow promo style, thick outlines, explosive effects, crowded icons, badges, ratings, awards, certification marks, fake lab claims, medical claims, impossible performance, distorted product geometry, floating product, repeated textures, AI-looking interiors, plastic skin, wrong fingers, influencer pose, domestic clutter, Taobao detail-page style.
```

## Detail Proof Layer Patterns

## Amazon Listing Layout Recipes

Use these recipes to vary A+ image composition. Choose one `Layout archetype` before writing each prompt.

### Flagship Feature Mosaic

- Use for product opening, dock overview, or buying-confidence screen.
- One large product anchor plus 4-8 smaller feature tiles.
- Good for multi-feature overview, but avoid noisy feature walls.

### Dominant Macro With Step Rail

- Use for self-cleaning, drying, filtration, brush maintenance, or process explanation.
- One macro detail dominates most of the image.
- 2-4 steps sit in a side or vertical rail.

### Low-Profile Cinematic Proof

- Use for lay-flat, edge cleaning, under-furniture reach, or obstacle/floor-contact proof.
- Low camera angle, product close to floor/furniture, dimension line or clean path as proof.

### White-Space Capability Grid

- Use for mess types, accessories, floor types, or use-case range.
- Large quiet text block plus 4-6 proof tiles.

### Split Lifestyle And Explanation

- Use for setup, maintenance, app, smart home, tank removal, or hands-on routine.
- One half realistic lifestyle, one half checklist, steps, macro, or proof detail.

### Black Tech Spec Board

- Use sparingly for sensor, suction, battery, AI, precision, or premium technical proof.
- Dark background, restrained glow, numeric proof, product part or sensor detail.

### Tall-Page Rhythm Stack

- Use for planning a full A+ sequence.
- Alternate bright/dark, lifestyle/macro/process/comparison/trust.

## Detail Proof Layer Patterns

### Mess Cleaning

Use when the feature is about steam, suction, stain removal, or wet cleaning.

- Usage mode: ACTIVE_USE_REQUIRED.
- Recommended layout archetypes: EDITORIAL_ACTIVE_SCENE or SPLIT_PROOF_SYSTEM.
- Main scene: product being pushed or guided through a controlled mess by a realistic adult user.
- Close-up: brush head, steam path, water path, or roller action.
- Proof objects: mess type swatches, before/after floor strip, or small material samples.
- Boundary note: internal lab data, actual performance varies, no sanitization claim.

### Low Reach Or Lay-Flat

Use when the feature is about reach, low furniture, edge cleaning, or maneuverability.

- Usage mode: ACTIVE_USE_REQUIRED.
- Recommended layout archetypes: LOW_ANGLE_USE_PROOF or SPLIT_PROOF_SYSTEM.
- Main scene: product being guided under sofa, bed, or cabinet area by a realistic adult user.
- Close-up: edge, toe-kick, brush width, or low-clearance detail.
- Proof object: dimension line, height marker, or side view.
- Boundary note: clearance varies by furniture shape and floor conditions.

### Self-Cleaning Or Drying

Use when the feature is about dock cleaning, drying, brush maintenance, or odor-risk reduction.

- Usage mode: STATIC_PRODUCT_ALLOWED when the product is docked.
- Recommended layout archetypes: PROCESS_STRIP or MACRO_DETAIL_HERO.
- Main scene: product docked after use.
- Close-up: roller wash, hot-air path, or tank/brush area.
- Proof object: step cards or process strip.
- Boundary note: avoid sterilization, odor-free guarantee, or unsupported hygiene claims.

### Pet Hair Or Anti-Tangle

Use when the feature is about pet hair, anti-tangle, scraper, brush, or family homes.

- Usage mode: ACTIVE_USE_REQUIRED for cleaning scenes; STATIC_PRODUCT_ALLOWED only for pure brush detail modules.
- Recommended layout archetypes: EDITORIAL_ACTIVE_SCENE, SPLIT_PROOF_SYSTEM, or MACRO_DETAIL_HERO for pure brush detail.
- Main scene: product being used on modest pet hair on hard floor with pet safely in background.
- Close-up: brush head and scraper.
- Proof object: hair path or material close-up.
- Boundary note: avoid absolute no-tangle, allergy, or medical claims.

## QA Checklist

- Product is the first visual and is large enough to inspect.
- Product structure is close enough for a designer to refine, not misleading.
- One selling point only.
- Image meets commercial photography quality: crisp edges, controlled contrast, material separation, real shadows, and meaningful close-up detail.
- Active-use product categories show visible user interaction unless the module is explicitly storage, dock, design, comparison, or technical explanation.
- Layout archetype fits the selling point and does not repeat the previous module too closely.
- Detail proof layer supports the same selling point.
- Copy is short and readable.
- No fake awards, certifications, ratings, or unsupported claims.
- No cyberpunk, Taobao, or overpacked graphic style.
- Human, pet, and child scenes are safe and secondary.
- Any numbers or dimensions have a disclaimer or evidence source.
