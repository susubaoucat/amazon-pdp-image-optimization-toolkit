# Premium Visual Rules

Apply these rules before writing prompts or judging generated listing images.

If uploaded references conflict with these rules, treat the references as weak. Extract only useful business intent and use the premium baseline instead.

## Composition

- Use product-first framing.
- Give each image one primary message.
- Use controlled negative space.
- Avoid crowded icon walls and decorative clutter.
- Keep text blocks short enough to read at Amazon gallery size.
- Make the offer, proof, or usage scene easy to understand within three seconds.
- For active-use categories, show active use unless the module is explicitly about storage, dock, product beauty, comparison, or technical explanation.
- Across a sequence, vary the layout archetype. Do not repeat the same text position, product placement, inset placement, camera distance, and proof style across adjacent A+ modules.

## Lighting And Material

- Use realistic soft light, natural shadows, and believable reflections.
- Preserve product color, material, surface texture, logo position, and scale.
- Avoid plastic AI gloss, fake neon lighting, and generic technology effects.

## Image Quality Floor

- Require crisp product edges and enough detail to inspect the product.
- Separate materials clearly: plastic, metal, glass, water, steam, fabric, wood, stone, and skin should not blur together.
- Use controlled contrast and directional light; avoid washed-out beige/gray haze.
- Preserve contact shadows, ambient occlusion, and believable reflections.
- Close-up insets must reveal real feature detail, not decorative filler.
- Reject flat showroom lighting, low-detail product surfaces, muddy shadows, and generic AI interiors.

## Ecommerce Taste

- Use restrained color palettes with one clear accent when needed.
- Avoid cheap blue technology backgrounds unless the category truly requires it.
- Avoid overdramatic smoke, sparks, energy waves, floating parts, and impossible cutaways.
- Make lifestyle scenes feel local to the target market.
- Use typography space intentionally, as if the image will become a real Amazon listing asset.

## A+ Detail Proof Layer

For A+ feature images, premium mood is not enough. Add a controlled proof layer when the selling point needs evidence:

- Main scene evidence: show the product solving the specific use case. For cleaning, steam, reach, suction, movement, or mopping features, include visible user interaction or clear just-used evidence.
- Product detail: add one close-up, inset, side view, or part detail when useful.
- Proof object: use swatches, dimension lines, step strips, process cards, or before/after floor paths.
- Boundary note: add a small disclaimer when performance depends on environment, test method, furniture shape, or mess type.

Keep the proof layer visually restrained. It should feel like international ecommerce information design, not a crowded icon wall.

## Prompt Style

- Describe the product role, scene, composition, lighting, typography space, and ecommerce purpose.
- State the usage mode: `ACTIVE_USE_REQUIRED`, `JUST_USED_EVIDENCE_ALLOWED`, or `STATIC_PRODUCT_ALLOWED`.
- Include constraints inside the single `Prompt` field.
- Do not create separate positive or negative prompt fields.
- For A+ feature images, include a `Detail Proof Layer` inside the brief and a corresponding proof structure inside the single `Prompt`.
