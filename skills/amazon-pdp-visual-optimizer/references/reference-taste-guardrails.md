# Reference Taste Guardrails

Use these rules when reviewing visual references, writing image prompts, or judging AI-generated Amazon PDP and A+ images.

References are optional inputs, not the source of truth. The source of truth is:

1. Product accuracy
2. Amazon shopper comprehension
3. Claim safety
4. Premium ecommerce taste
5. Local market fit

If the uploaded references are weak, cluttered, off-brand, low-end, or visually inconsistent, do not imitate them. Extract only the useful intent and fall back to the default premium ecommerce baseline below.

## Default Premium Ecommerce Baseline

Use this baseline when no reference is provided, when the reference quality is poor, or when references conflict with product positioning.

### Visual Personality

The image should feel like a credible international ecommerce asset for a premium consumer product.

Prefer:

- Product-first composition.
- Calm confidence instead of visual shouting.
- Real environment, real scale, real floor contact.
- Natural or premium studio lighting.
- Carefully controlled proof details.
- Strong hierarchy and generous spacing.
- One selling point per image.
- Copy that can be understood in three seconds.

Avoid:

- Domestic marketplace clutter.
- Big red/yellow discount energy.
- Overpacked labels, badges, arrows, and icon walls.
- Generic AI luxury interiors.
- Fake lab scenes with unsupported claims.
- Cyberpunk, gaming RGB, HUD, circuit lines, or particle storms.
- Overly smooth CG materials.
- Product floating, shrinking, or changing shape.

## Taste Extraction From References

When references are provided, extract style as reusable rules rather than copying the image.

### Extract

- Layout logic: left text/right product, diagonal proof scene, split technical proof, close-up inset, comparison grid, or editorial lifestyle crop.
- Information density: quiet hero, moderate proof banner, dense buying-confirmation module.
- Lighting: daylight, softbox studio, warm evening interior, black premium tech, high-key white.
- Palette: dominant neutrals, accent color, temperature, contrast level.
- Material feel: brushed metal, matte plastic, glass, wood, water, steam, fabric, skin.
- Typography behavior: title size, body length, line breaks, weight contrast, label restraint.
- Proof system: swatches, dimension lines, process steps, close-up windows, before/after paths, disclaimers.
- Camera language: top-down, low angle, three-quarter product, macro detail, side-view diagram.

### Do Not Copy

- Exact composition.
- Distinctive branded layout.
- Logos, proprietary icons, certification marks, awards, ratings, or trademarked visual systems.
- Exact copywriting.
- Unique photography, models, rooms, props, or brand-owned product placements.
- Competitor product geometry or distinctive industrial design.

## Bad Reference Filter

If a reference has any of these issues, downgrade its authority:

- Product is small, cropped, distorted, or secondary.
- Copy is too long to read at Amazon size.
- Too many icons, badges, stickers, or callout boxes.
- Visual depends on huge glow, sparks, fire, particles, or impossible effects.
- Scene looks like stock photography with a product pasted in.
- Interior style feels local to the wrong market.
- Person looks artificial, overposed, influencer-like, or distracts from product.
- Lighting makes materials plastic, fake, or too glossy.
- Color palette is dominated by one loud hue.
- It creates claims that cannot be proven.

When bad-reference signals appear, keep only the useful business idea. Rewrite the visual direction using the default premium ecommerce baseline.

## Good Reference Signals

A strong reference usually has:

- A clear first read: the shopper understands the selling point quickly.
- A clear second read: there is proof detail for shoppers who inspect.
- Product large enough to check shape and material.
- Copy hierarchy that feels calm and intentional.
- Space around important elements.
- A restrained color system.
- Realistic human scale when people appear.
- Light that reveals product texture instead of hiding it.
- A design system that could extend across a full PDP sequence.

## Image Quality Floor

Every generated image must meet a commercial photography quality floor. Do not accept an image only because the layout is correct.

Require:

- Crisp product edges and readable product silhouette.
- Clear material separation between plastic, metal, glass, water, steam, fabric, wood, stone, and skin.
- Controlled contrast: no gray haze, washed-out beige cast, or flat overexposure.
- Directional light with believable highlights, contact shadows, and ambient occlusion.
- Visible micro-detail in the important areas: brush head, tank, roller, display, floor texture, mess, water path, or product light.
- Scene depth that feels photographed, not a flat composite.
- Premium post-production finish: clean color grading, restrained sharpening, natural reflections, and no muddy shadows.
- Insets or close-ups that look like real product photography, not low-resolution cropped thumbnails.

Reject or revise:

- Bland showroom lighting with no product drama.
- Product that looks soft, rubbery, or pasted onto the floor.
- Overly smooth floors with repeated texture.
- Inset panels with weak detail, fake blur, or unclear purpose.
- Low-contrast beige/gray compositions where product and floor merge.
- Text that is correct but visually heavier than the product.
- Images that look like a screenshot mockup rather than a finished A+ asset.

## Layout Variety System

A full PDP or A+ sequence needs rhythm. Consistency should come from product accuracy, typography, color, lighting, and proof style, not from repeating the same layout on every module.

Do not generate a sequence where every image uses:

- Left text block
- Product on the right
- One rounded rectangle inset
- Same camera distance
- Same kitchen or living-room angle
- Same person crop

Instead, choose a layout archetype for each image based on the selling point and narrative role.

### Layout Archetypes

#### Editorial Active Scene

Use for cleaning performance, pet homes, lifestyle proof, and flagship usage.

- Full-bleed action photo.
- Text floats over negative space or sits in a quiet side area.
- Proof detail can be embedded in the floor path, mess, or product motion.
- Use a diagonal product path or low camera angle for energy.

#### Split Proof System

Use for technical claims that need scene + detail.

- One side real usage scene.
- One side product close-up, simplified diagram, swatch cluster, or step cards.
- Keep the split ratio varied across the sequence: 60/40, 40/60, top/bottom, or asymmetrical.

#### Macro Detail Hero

Use for brush, roller, scraper, tank, sensor, edge, or dock details.

- Product part dominates the frame.
- Human or room context is minimal.
- Labels are small and restrained.
- The macro should reveal a material or mechanism, not act as decoration.

#### Low-Angle Use Proof

Use for lay-flat, under-furniture reach, edge cleaning, or floor-contact proof.

- Camera is near floor level.
- Product path and clearance are the story.
- Text should not always stay on the left; it can sit above, in a vertical side column, or in a small clear zone.

#### Process Strip

Use for self-cleaning, drying, setup, maintenance, or routine.

- 2-4 steps with one dominant product image.
- Steps can sit along the bottom, right rail, or as a horizontal strip.
- Avoid making every step card equal if one action is more important.

#### Buying Confidence Snapshot

Use for comparison, checklist, dimensions, accessories, and purchase confirmation.

- Table, checklist, or grid is allowed.
- Product visual stays present but does not need to be in active use.
- Keep it factual and easy to scan.

#### Quiet Brand Breather

Use sparingly between dense proof modules.

- Larger negative space.
- Fewer proof details.
- Product still visible and premium.
- Helps the page avoid visual fatigue.

## Sequence Rhythm Rules

When generating multiple A+ images for one product:

- Do not use the same layout archetype more than twice in a row.
- Do not place all headlines in the same corner across the full sequence.
- Do not place all proof insets on the same side.
- Alternate camera distance: wide lifestyle, medium action, macro detail, technical proof.
- Alternate proof type: close-up, dimension line, swatch cluster, step strip, before/after path, table.
- Alternate scene intensity: dense proof, quiet brand moment, active scene, technical detail.
- Keep brand consistency through typography, spacing, color, and product treatment rather than identical composition.

Before finalizing a prompt pack, write a one-line `Layout Role` for each image. If two adjacent images have the same layout role and same text/product placement, revise one.

## Amazon Listing Layout Recipes

These recipes are distilled from common high-performing Amazon listing and A+ layout patterns. Use them as structural inspiration only. Do not copy any exact competitor composition, branded treatment, text, icons, or product imagery.

### Flagship Feature Mosaic

Use for a product opening, hub/dock overview, or buying-confidence screen.

Structure:

- One large product beauty or product-in-environment anchor.
- 4-8 smaller feature tiles around or beside it.
- Each tile has one tiny proof image and a 1-3 word label.
- Works better on dark or deep neutral backgrounds when feature density is high.

Best for:

- Flagship overview.
- Multi-function dock.
- Vacuum station.
- App + sensor + accessory summary.
- Buying confirmation before comparison.

Avoid:

- Making every tile equal if one feature is the hero.
- Using too many badges or certification marks.
- Turning the image into a noisy feature wall.

### Dominant Macro With Step Rail

Use for self-cleaning, hot-water washing, drying, filtration, brush maintenance, or internal process explanation.

Structure:

- One dramatic macro detail dominates 60-75% of the image.
- A vertical or side rail contains 2-4 process steps.
- Numbers, temperature, time, or short labels appear as proof points.
- Disclaimer sits at the bottom in small type.

Best for:

- Self-cleaning.
- Drying.
- Hot water / steam process.
- Roller wash.
- Wastewater path.

Avoid:

- Invented internal mechanisms.
- Overheated fire-like effects.
- Step cards that look decorative instead of explanatory.

### Low-Profile Cinematic Proof

Use for lay-flat, under-furniture reach, edge cleaning, obstacle detection, or floor-contact claims.

Structure:

- Camera sits near floor level.
- Product is partly under furniture or close to the wall/cabinet edge.
- Dimension line, light beam, or clean path becomes the proof.
- Small secondary thumbnails show use cases such as under sofa, bed, cabinet, or tight edge.

Best for:

- Low clearance.
- Edge-to-edge cleaning.
- Reach.
- Navigation under furniture.

Avoid:

- Claiming universal fit.
- Product height distortion.
- Blue glow overwhelming the product.

### White-Space Capability Grid

Use for multiple mess types, accessories, use cases, or compatibility education.

Structure:

- Large quiet text block on one side.
- 4-6 equal proof tiles on the other side.
- Each tile uses a real use-case image and one short label.
- White or very light background keeps it scan-friendly.

Best for:

- Mess type coverage.
- Accessory overview.
- Floor-type education.
- Use-case range.

Avoid:

- More than 6 tiles.
- Long labels.
- Repeated-looking tiles with no visible difference.

### Split Lifestyle And Explanation

Use for maintenance, setup, smart home, app, or family-use scenes.

Structure:

- One half is a realistic lifestyle or hands-on use scene.
- Other half carries explanation: checklist rows, icons, small steps, or macro insets.
- Text sits in the quieter half, not on top of busy action.

Best for:

- Easy maintenance.
- App control.
- Voice assistant.
- Tank removal.
- Dock routine.

Avoid:

- Making the lifestyle side look like generic stock.
- Letting checklist rows become the main visual if the product action matters more.

### Black Tech Spec Board

Use sparingly for premium technology, sensor, suction, AI, battery, or flagship specs.

Structure:

- Dark background with restrained glow.
- Large numeric proof or feature claim.
- Product part, sensor, motor, or beam detail carries the visual.
- Secondary cards add proof or scenarios.

Best for:

- Sensor precision.
- Suction power.
- Battery.
- AI detection.
- Night/under-furniture technology.

Avoid:

- Cyberpunk/HUD clutter.
- Purple gaming style.
- Numbers without evidence or disclaimer.

### Tall-Page Rhythm Stack

Use when planning the full A+ page, not a single banner.

Structure:

- Alternate bright and dark modules.
- Alternate lifestyle, macro, process, comparison, and trust modules.
- Let one dense proof module be followed by a quieter brand or use module.
- Use recurring type scale and spacing, but vary composition.

Best for:

- Full A+ story planning.
- Brand store-style long pages.
- Complex products with many features.

Avoid:

- Same product angle in every module.
- Same headline placement in every module.
- All modules using the same inset style.

## Premium Styles By Image Type

### A+ Hero

Use for opening brand or flagship value.

- Large product presence.
- One strong headline and one short body line.
- Expansive negative space.
- Real home, premium studio, or clean architectural backdrop.
- Minimal proof details.
- Brand mood is allowed, but not at the cost of product recognition.
- For active-use categories such as vacuums, wet-dry cleaners, steam cleaners, mops, kitchen appliances, beauty devices, and tools, the default hero should show the product being used or clear just-used evidence. Do not default to an abandoned product standing alone unless the module is explicitly about design, storage, docked charging, or product beauty.

### Feature Proof Banner

Use for steam, suction, anti-tangle, edge cleaning, self-cleaning, battery, tank, or smart sensor features.

- Main usage scene by default. For cleaning, movement, reach, steam, suction, or mopping features, show visible user interaction such as a hand on the handle, partial body, natural push/pull posture, or realistic just-cleaned path.
- One supporting close-up, inset, dimension line, step strip, or swatch cluster.
- Small disclaimer when claims depend on tests or conditions.
- Information-rich but visually restrained.

### Objection Handling Module

Use for review concerns such as weight, setup, streaks, smell, storage, pets, or maintenance.

- Show the concern in a realistic way.
- Show the product solving or reducing that concern.
- Avoid defensive copy.
- Use a trust-building tone, not hype.

### Comparison Module

Use only with verified facts.

- Use neutral table or snapshot design.
- Avoid competitor logos unless usage is licensed and legally approved.
- Avoid aggressive VS language.
- Keep omissions honest.
- Do not use fake tests.

### Technical Explanation

Use for internal flow, brush structure, water separation, self-cleaning path, or app/sensor logic.

- Simplify, but do not invent internals.
- Use restrained lines, small labels, and clean spacing.
- Pair the diagram with real product context when possible.
- Keep the product or product part visible.

## Typography Rules

Preferred tone:

- Modern American or European consumer brand.
- Direct, short, confident.
- One sentence per selling point.
- Strong title/body contrast.

Preferred font feeling:

- Helvetica
- Inter
- SF Pro
- Avenir
- DIN for numbers only when appropriate

Avoid:

- Overly rounded fonts.
- Decorative fonts.
- Marketplace headline effects.
- Thick outlines.
- Drop shadows that make text look cheap.
- Long descriptive paragraphs.

Copy pattern:

```text
Headline: 2-6 words.
Body: 1 short sentence.
Labels: 1-3 words each.
Disclaimer: tiny and factual.
```

Examples of good copy shape:

```text
Fold Lower.
Clean Further.
```

```text
Better Cleaning.
Not Bigger Machines.
```

```text
Steam Through Sticky Messes.
```

Avoid:

```text
Revolutionary intelligent cleaning solution brings unprecedented cleaning experience.
```

## Color Rules

Use a restrained system:

- Main neutrals: white, light gray, deep gray, black, warm wood, muted stone.
- One brand accent color.
- One feature accent only when needed.
- Let product lights, UI, water, steam, or material provide small color moments.

Avoid:

- Large saturated blue backgrounds unless brand-approved.
- Purple gaming gradients.
- Red/yellow promotional palettes.
- Neon green technology overlays.
- One-note monochrome palettes with no material contrast.
- Cheap radial gradients or bokeh blobs.

## Scene Rules

The scene should support shopper belief, not distract.

Prefer:

- Realistic US or European homes for US/EU marketplaces.
- Open kitchens, warm wood floors, light stone, soft daylight, modern minimal furniture.
- Clean but lived-in context.
- Safe distance between product and children or pets.
- Natural human posture.
- Active product use for active-use product categories. A standing product alone is acceptable only for storage, dock, design, product-beauty, comparison, or technical modules.

Avoid:

- Rental-room emptiness.
- Generic stock interiors.
- Unreal furniture scale.
- Excessive luxury props.
- Cultural mismatch for the target market.
- Product pasted into a room without contact shadows.
- People staring at camera in a staged way.
- Product abandoned in a room when the selling point is cleaning, reach, steam, movement, or everyday use.

## Usage Mode Rules

Choose a usage mode before writing each prompt.

### Active Use Required

Use this mode for:

- Cleaning performance
- Steam or hot-water cleaning
- Suction or pickup
- Wet-dry cleaning
- Edge cleaning
- Lay-flat reach
- Smooth movement
- Pet hair removal
- Everyday hard-floor use

Prompt requirement:

```text
Show the product actively being used by a realistic adult user. Include visible user interaction: a hand on the handle, partial body, natural push or pull posture, and believable floor contact. The product must not stand alone unattended.
```

### Just-Used Evidence Allowed

Use this mode when active human presence would distract but the image still needs proof.

Prompt requirement:

```text
If no person is shown, include clear just-used evidence: a visible clean path, wet-to-clean transition, brush marks, fresh floor reflection, moved furniture context, or controlled mess before/after boundary. The product must feel recently used, not staged as decoration.
```

### Static Product Allowed

Use this mode only for:

- Storage
- Docked charging
- Self-cleaning on dock
- Product beauty or design integration
- Comparison tables
- Technical diagrams
- Box contents

Prompt requirement:

```text
Static product is allowed because the module is about storage, dock, design, comparison, product detail, or technical explanation rather than active cleaning.
```

## Product Accuracy Rules

The product is the anchor. Never sacrifice it for mood.

Lock:

- Overall silhouette.
- Handle shape.
- Display or screen position.
- Tank shape and placement.
- Brush head shape.
- Wheels, base, dock, or accessories if shown.
- Product scale relative to floor, furniture, and people.
- Material finish and color family.

If AI cannot render the exact logo, leave the logo area clean for post-production. Do not generate a fake or misspelled brand mark.

## AI Artifact Avoidance

Reject or revise outputs with:

- Wrong hands or too many fingers.
- Plastic skin.
- Floating product.
- Repeating floor or fabric textures.
- Warped furniture lines.
- Inconsistent shadows.
- Product geometry that changes between panels.
- Nonsense text.
- Fake certification marks.
- Water, steam, fire, or light effects that look theatrical.
- Washed-out low-contrast lighting.
- Generic AI showroom atmosphere.
- Low-detail product surfaces.
- Close-up insets that do not reveal new information.

## Reference-Free Prompt Baseline

When the user provides no reference, prepend this art direction to image prompts:

```text
Create a premium international Amazon PDP / A+ ecommerce image with product-first composition, realistic commercial photography lighting, restrained neutral palette, clear copy hierarchy, and credible feature proof. The result should feel like a mature US/EU consumer brand: calm, modern, specific, and trustworthy. Use generous spacing, real material texture, crisp product edges, controlled contrast, natural shadows, believable contact reflections, visible micro-detail in product parts and floor surfaces, and one clear selling point. Avoid marketplace clutter, fake technology effects, cyberpunk graphics, overpacked labels, generic AI luxury interiors, washed-out beige/gray haze, low-detail product surfaces, distorted product geometry, and unsupported claims.
```

## Prompt Decision Rule

Before writing a prompt, decide:

- What must the shopper believe after seeing this image?
- What visual proof makes that belief credible?
- What product details must stay accurate?
- What reference details should be ignored?
- What claim boundary should be visible or noted?
- What layout archetype should this image use?
- Does this layout repeat the previous image too closely?

If a reference makes any of those answers weaker, do not follow the reference.
