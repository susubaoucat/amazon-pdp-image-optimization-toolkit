# Premium Ecommerce Taste Guardrails

Use this public prompt companion when a project has no visual references or when uploaded references are visually weak. It distills the default taste baseline for Amazon PDP and A+ image generation.

## Core Rule

Good ecommerce visuals are not just beautiful. They help shoppers understand the product, believe the feature, and trust the brand.

Every image should answer:

- What is the product?
- What is the one selling point?
- What visual proof supports it?
- Why should this feel credible?

## Default Art Direction

```text
Create a premium international Amazon PDP / A+ ecommerce image with product-first composition, realistic commercial photography lighting, restrained neutral palette, clear copy hierarchy, and credible feature proof. The result should feel like a mature US/EU consumer brand: calm, modern, specific, and trustworthy. Use generous spacing, real material texture, crisp product edges, controlled contrast, natural shadows, believable contact reflections, visible micro-detail in product parts and floor surfaces, and one clear selling point. Avoid marketplace clutter, fake technology effects, cyberpunk graphics, overpacked labels, generic AI luxury interiors, washed-out beige/gray haze, low-detail product surfaces, distorted product geometry, and unsupported claims.
```

## Taste Baseline

Prefer:

- Product-first framing.
- One selling point per image.
- Clean title/body hierarchy.
- Realistic usage scene.
- Active use for active-use products unless the module is explicitly about storage, dock, product beauty, comparison, or technical explanation.
- One proof detail layer.
- Natural shadows and believable floor contact.
- Crisp product edges and visible material detail.
- Controlled contrast with no washed-out beige/gray haze.
- Restrained color palette.
- Human scale only when it helps the product story.
- Small disclaimer for conditional performance claims.

Avoid:

- Product too small.
- Big emotional background but no functional proof.
- Fake sci-fi screens, HUD, circuit lines, particles, or energy waves.
- Taobao-style icon walls, badges, arrows, stickers, and glowing text.
- Overly luxurious rooms that feel unrelated to the product.
- Flat showroom lighting with no product drama.
- Low-detail product close-ups or insets.
- AI-looking hands, skin, furniture, or floor textures.
- Unsupported claims, fake awards, and fake certification marks.

## Prompt Blocks To Reuse

### Product-First Block

```text
The product must be the first visual priority, large enough to inspect, accurately scaled to the scene, grounded on the surface with realistic contact shadows, and consistent in shape, material, and color. Do not shrink, distort, float, crop, or visually hide the product.
```

### Premium Scene Block

```text
Use a realistic high-income US or European home or a restrained premium studio environment. Keep the space modern, calm, and believable: warm wood, light stone, soft daylight, muted white, light gray, deep gray, and controlled brand accent color. Avoid generic stock-photo interiors, rental-room emptiness, excessive luxury props, and culturally mismatched decor.
```

### Detail Proof Block

```text
Add a controlled detail proof layer that supports the same selling point: one close-up, inset, dimension line, swatch cluster, process strip, before/after path, or small technical detail. Keep it refined and readable. Do not create a crowded icon wall or unsupported lab-style proof.
```

### Layout Variety Block

```text
Choose a layout recipe that fits the selling point instead of repeating the same left-text/right-product/inset structure. Options include: flagship feature mosaic, dominant macro with step rail, low-profile cinematic proof, white-space capability grid, split lifestyle and explanation, black tech spec board, process strip, buying-confidence snapshot, and quiet brand breather. Keep typography, product treatment, and color consistent, but vary headline position, product placement, proof placement, camera distance, and information density across the sequence.
```

### Image Quality Floor Block

```text
Apply a commercial photography quality floor: crisp product edges, controlled contrast, directional light, believable contact shadows, visible material separation, and micro-detail in the important areas such as brush head, tank, roller, floor texture, water path, mess, steam, or product light. Avoid washed-out beige/gray haze, flat showroom lighting, low-detail product surfaces, muddy shadows, generic AI interiors, and close-up insets that do not reveal new information.
```

### Usage Mode Block

```text
For active-use categories such as vacuums, wet-dry cleaners, steam cleaners, mops, kitchen appliances, beauty devices, and tools, show the product actively being used by a realistic adult user unless the module is explicitly about storage, dock, product beauty, comparison, or technical explanation. Include visible user interaction: hand on handle, partial body, natural push or pull posture, correct floor contact, and a believable use path. Do not show the product standing alone unattended for cleaning, reach, steam, movement, or everyday-use selling points.
```

### Static Product Exception Block

```text
Static product-only composition is allowed only when the module is about storage, docked charging, self-cleaning on dock, product design, product beauty, comparison, box contents, or technical explanation. If the selling point is active cleaning, movement, reach, steam, suction, or mopping, static product-only composition is not acceptable.
```

### Typography Block

```text
Render clean premium English typography with a Helvetica / Inter / SF Pro / Avenir feeling. Use one short headline, one short body sentence, and only necessary labels. Strong hierarchy, generous spacing, no playful rounded fonts, no thick outlines, no cheap glow, no long paragraphs.
```

### Bad Reference Override Block

```text
If any uploaded reference looks cluttered, low-end, off-brand, overly neon, generic, or inconsistent with product credibility, do not imitate its style. Extract only the useful business intent and follow the premium ecommerce baseline instead.
```

## Quality Checklist

- Product is visible, accurate, and first.
- The image communicates one clear conversion job.
- The image meets a commercial photography quality floor.
- Active-use product categories show visible use or clear just-used evidence.
- The proof detail supports the same selling point.
- Insets or close-ups reveal real feature detail, not decorative filler.
- The scene feels real for the target market.
- The copy is readable and short.
- The color palette is restrained.
- Any claim with numbers has evidence or a disclaimer.
- The result does not look like a domestic marketplace collage.
- The result does not look like generic AI luxury.
- The final image gives a designer a strong base for product cleanup, logo, and final typography.
