const form = document.querySelector("#optimizer-form");
const output = document.querySelector("#output");

const marketNotes = {
  Japan: "compact home context, orderly composition, lightweight handling, quiet daily use, refined small-space storage",
  "United States": "clear performance proof, pet hair and whole-home cleaning scenarios, strong benefit hierarchy, practical lifestyle context",
  Germany: "durability, technical credibility, precise proof, maintenance clarity, restrained and trustworthy visual language",
  France: "elegant home context, lifestyle fit, balanced function and aesthetic appeal, warm but restrained visual tone",
  "United Kingdom": "practical home use, compact storage, reliable performance proof, understated visual quality",
  Global: "clear benefit proof, realistic usage, restrained premium ecommerce styling, product-first composition"
};

const imagePlan = [
  {
    name: "Image 1: Main Product Image",
    goal: "Make the product clear, credible, and easy to recognize in search and PDP gallery.",
    concern: "What exactly is included, and does the product look trustworthy?",
    concept: "A clean white-background packshot that shows the product and included accessories without distractions.",
    composition: "Center the product, make it large in frame, arrange included accessories neatly, and keep the background pure white.",
    copy: "No copy for the main image.",
    usage: "Preserve real product shape, color, material, logo placement, scale, and included parts.",
    qa: ["Pure white background", "No text or badges", "Accurate accessories", "Product fills the frame", "No AI distortion"]
  },
  {
    name: "Image 2: Core Benefit Infographic",
    goal: "Turn the strongest product benefit into a clear visual proof.",
    concern: "Does this product solve my main cleaning or usage problem?",
    concept: "A refined infographic that connects the top benefit to a real shopper need.",
    composition: "Use the product as the anchor, one headline area, one proof scene or close-up, and restrained callouts.",
    copy: "One short benefit-led headline, one supporting proof line, and no more than three callouts.",
    usage: "Show the product in a believable performance context without exaggerating the claim.",
    qa: ["One main message", "Readable hierarchy", "Proof supports the claim", "No crowded icon wall", "Premium spacing"]
  },
  {
    name: "Image 3: Review Objection Proof",
    goal: "Answer the most important concern found in own or competitor reviews.",
    concern: "Will this product avoid the problem shoppers mention in reviews?",
    concept: "A pain-point proof image that turns review language into visual evidence.",
    composition: "Show a close-up, comparison, or realistic usage scene that directly addresses the concern.",
    copy: "Headline names the solved concern; supporting copy explains the proof in simple language.",
    usage: "Do not invent product features or overstate what the product can do.",
    qa: ["Review concern is visible", "Claim is careful", "Product details are accurate", "Scene is believable", "No fake feature"]
  },
  {
    name: "Image 4: Premium Lifestyle Scene",
    goal: "Make the product feel desirable and relevant in the target market.",
    concern: "Will this fit my home, lifestyle, and daily routine?",
    concept: "A realistic lifestyle scene with refined composition and market-specific context.",
    composition: "Use a believable home scene, controlled negative space, soft light, and product-first framing.",
    copy: "Short lifestyle headline with one supporting line.",
    usage: "Keep scale, room context, and usage posture realistic.",
    qa: ["Market context feels real", "Product is the focus", "No stock-photo generic look", "Lighting is natural", "Scale is believable"]
  },
  {
    name: "Image 5: Usability or Maintenance Image",
    goal: "Reduce friction around setup, storage, cleaning, or maintenance.",
    concern: "Is this easy to use after purchase?",
    concept: "A practical step or storage image that proves everyday convenience.",
    composition: "Use simple step logic, close-up details, or spatial proof with minimal labels.",
    copy: "One headline plus short step labels if needed.",
    usage: "Only show washable, removable, or foldable parts if supported by product information.",
    qa: ["No unsupported maintenance claim", "Steps are easy to follow", "Text is minimal", "Product mechanism is accurate", "Scene is practical"]
  }
];

const concernPatterns = [
  {
    keys: ["hair", "tangle", "pet"],
    label: "hair tangling and pet-hair cleaning",
    opportunity: "Add an anti-tangle proof image with a brush close-up and realistic hair-management evidence."
  },
  {
    keys: ["store", "storage", "compact", "fold", "space", "apartment"],
    label: "compact storage and small-space fit",
    opportunity: "Add a folded-storage image that proves the product fits a compact home or apartment corner."
  },
  {
    keys: ["heavy", "weight", "lightweight", "carry", "handling"],
    label: "daily handling and weight",
    opportunity: "Add a lightweight handling image with believable one-hand use or movement proof."
  },
  {
    keys: ["clean", "maintenance", "dust cup", "wash", "empty"],
    label: "maintenance effort",
    opportunity: "Add an easy-maintenance image showing empty, rinse, and reattach steps only when supported by product facts."
  },
  {
    keys: ["suction", "power", "weak", "edge", "corner", "crumb", "dust"],
    label: "cleaning power and edge performance",
    opportunity: "Add a cleaning proof infographic tied to realistic debris, edge areas, and daily household mess."
  },
  {
    keys: ["noise", "quiet", "loud"],
    label: "noise and quiet use",
    opportunity: "Add a quiet-use scene that shows daily cleaning without disrupting family, work, or apartment life."
  },
  {
    keys: ["battery", "runtime", "charge", "charging"],
    label: "runtime and charging confidence",
    opportunity: "Add a runtime or charging clarity image with careful, supportable claims and clean hierarchy."
  }
];

function value(id) {
  return document.querySelector(`#${id}`).value.trim();
}

function splitTerms(text) {
  return text
    .split(/[,，\n]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function makePrompt(image, data) {
  const marketDetail = marketNotes[data.market] || marketNotes.Global;
  return `Create a premium Amazon PDP image for ${data.productName}, a ${data.category}, focused on ${image.goal.toLowerCase()}. The image should answer the shopper concern: ${image.concern} Use ${image.composition.toLowerCase()} The target market is ${data.market}, so the visual context should reflect ${marketDetail}. Build the image around these product benefits: ${data.benefits}. Keep the product structure, color, material, scale, logo placement, and visible parts accurate. Use refined product-first composition, generous negative space, soft realistic lighting, controlled shadows, restrained colors, clear copy hierarchy, and high-end ecommerce visual quality. Avoid cheap marketplace styling, crowded collages, excessive arrows, fake glow effects, random gradients, decorative typography, unrealistic claims, invented functions, distorted product parts, and generic AI-looking visuals.`;
}

function makeList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function detectConcerns(...texts) {
  const combined = texts.join(" ").toLowerCase();
  const detected = concernPatterns.filter((item) => item.keys.some((key) => combined.includes(key)));
  return detected.length ? detected.slice(0, 4) : concernPatterns.slice(0, 3);
}

function renderReport(data) {
  const benefits = splitTerms(data.benefits);
  const detectedConcerns = detectConcerns(data.ownReviews, data.competitorReviews, data.currentIssues, data.competitorRefs);
  const reviewSignals = [
    `Own reviews suggest the current PDP should make ${benefits[0] || "the core benefit"} easier to see and believe through image proof.`,
    `Competitor reviews and references point to these visual opportunities: ${detectedConcerns.map((item) => item.label).join(", ")}.`,
    ...detectedConcerns.map((item) => item.opportunity),
    "The current issue is not only content coverage; it is image clarity, taste, and production direction."
  ];

  const diagnosis = [
    `Current PDP issue: ${data.currentIssues}`,
    `Optimization goal: ${data.goal}. The image set should move from feature listing to shopper concern resolution.`,
    `Competitor reference: ${data.competitorRefs || "Use competitor PDP screenshots to identify clutter, missing proof, and visual sameness."}`,
    `Target market: ${data.market}. Visual scenes should feel local, believable, and premium.`
  ];

  const tasteRules = [
    "Use product-first composition and keep one message per image.",
    "Use refined negative space instead of crowded feature collage layouts.",
    "Use soft realistic lighting, controlled shadows, and restrained color.",
    "Keep copy short, clear, and hierarchy-driven.",
    "Make every scene believable for the target market.",
    "Do not let AI change product shape, logo, material, scale, or supported functions."
  ];

  const cards = imagePlan
    .map((image) => {
      const prompt = makePrompt(image, data);
      return `
        <article class="image-card">
          <h4>${escapeHtml(image.name)}</h4>
          <div class="field"><strong>Goal</strong><p>${escapeHtml(image.goal)}</p></div>
          <div class="field"><strong>User Concern</strong><p>${escapeHtml(image.concern)}</p></div>
          <div class="field"><strong>Visual Concept</strong><p>${escapeHtml(image.concept)}</p></div>
          <div class="field"><strong>Composition</strong><p>${escapeHtml(image.composition)}</p></div>
          <div class="field"><strong>Copy Hierarchy</strong><p>${escapeHtml(image.copy)}</p></div>
          <div class="field"><strong>Product Usage</strong><p>${escapeHtml(image.usage)}</p></div>
          <div class="field"><strong>Prompt</strong><p class="prompt">${escapeHtml(prompt)}</p></div>
          <div class="field"><strong>QA Checklist</strong>${makeList(image.qa)}</div>
        </article>
      `;
    })
    .join("");

  return `
    <div class="report">
      <section class="report-section">
        <h3>PDP Image Diagnosis</h3>
        ${makeList(diagnosis)}
      </section>

      <section class="report-section">
        <h3>Review Insight to Image Opportunity</h3>
        ${makeList(reviewSignals)}
        <div class="tag-row">
          ${benefits.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
        </div>
      </section>

      <section class="report-section">
        <h3>Image-by-Image PDP Plan</h3>
        ${cards}
      </section>

      <section class="report-section">
        <h3>A+ Visual Module Plan</h3>
        ${makeList([
          `Hero Banner: Establish ${data.productName} as a refined solution for ${data.market}.`,
          "Pain Point Module: Show the user problem before explaining the product feature.",
          "Technology or Feature Proof: Explain the mechanism with restrained labels and accurate product detail.",
          "Lifestyle Module: Show a believable target-market environment.",
          "Usability Module: Reduce setup, storage, or maintenance concerns."
        ])}
      </section>

      <section class="report-section">
        <h3>Premium Taste Layer</h3>
        ${makeList(tasteRules)}
      </section>

      <section class="report-section">
        <h3>Visual QA Checklist</h3>
        ${makeList([
          "Product shape, color, material, logo, and scale are accurate.",
          "Each image has one clear conversion job.",
          "The image answers a real shopper concern or review signal.",
          "The design looks premium, restrained, and product-specific.",
          "Copy is short and readable at Amazon gallery size.",
          "No fake function, unrealistic claim, or generic AI styling appears."
        ])}
      </section>
    </div>
  `;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    productName: value("productName") || "the product",
    category: value("category") || "Amazon product",
    market: value("market") || "Global",
    goal: value("goal") || "premium visual upgrade",
    benefits: value("benefits") || "core product benefits",
    currentIssues: value("currentIssues") || "Current PDP images need clearer visual proof.",
    ownReviews: value("ownReviews"),
    competitorReviews: value("competitorReviews"),
    competitorRefs: value("competitorRefs")
  };

  output.className = "";
  output.innerHTML = renderReport(data);
});
