const form = document.querySelector("#optimizer-form");
const output = document.querySelector("#output");
const languageSelect = document.querySelector("#languageSelect");
let currentLanguage = "zh";

const uploadState = {
  ownReviewFiles: [],
  competitorReviewFiles: [],
  currentPdpScreenshots: [],
  competitorPdpScreenshots: []
};

const translations = {
  zh: {
    documentTitle: "Amazon PDP 图片优化工具包",
    languageLabel: "语言",
    heroTitle: "把 Listing 输入转成图片生产 Brief",
    heroCopy: "生成 Amazon 图库和 A+ 视觉所需的逐图优化方案、高级视觉方向、文案层级、AI Prompt 和 QA 检查清单。",
    inputsTitle: "输入",
    inputsCopy: "粘贴真实项目材料。这个 Demo 使用本地规则，不会发送你的数据。",
    productNameLabel: "产品名称",
    categoryLabel: "产品品类",
    marketLabel: "目标市场",
    goalLabel: "优化目标",
    benefitsLabel: "核心产品卖点",
    currentIssuesLabel: "当前 PDP 截图或图片问题说明",
    currentPdpScreenshotsLabel: "我方当前页面总截图",
    competitorPdpScreenshotsLabel: "竞品当前页面总截图",
    ownReviewsLabel: "我方用户评论",
    competitorReviewsLabel: "竞品用户评论",
    competitorRefsLabel: "竞品 PDP 或视觉参考说明",
    reviewFileHelper: "上传 TXT、CSV、TSV、XLSX 或 XLS 评论文件，也可以在下方补充粘贴说明。",
    screenshotHelper: "上传一张或多张 JPG、PNG、WebP 截图。",
    submitButton: "生成图片方案",
    outputTitle: "输出",
    outputCopy: "复制到创意 Brief、AI 图片工作流或生产检查清单中使用。",
    emptyOutput: "你的图片优化方案会显示在这里。",
    fieldLabels: {
      goal: "目标",
      concern: "用户顾虑",
      concept: "视觉概念",
      composition: "构图",
      copy: "文案层级",
      usage: "商品使用方式",
      prompt: "Prompt",
      qa: "QA 检查清单"
    },
    report: {
      diagnosis: "PDP 图片诊断",
      reviewOpportunity: "评论洞察到图片机会点",
      imagePlan: "逐图 PDP 优化方案",
      aplusPlan: "A+ 视觉模块规划",
      tasteLayer: "高级视觉品味层",
      visualQa: "视觉 QA 检查清单",
      uploadedMaterials: "已上传材料",
      currentIssue: "当前 PDP 问题",
      optimizationGoal: "优化目标",
      competitorReference: "竞品参考",
      targetMarket: "目标市场",
      fallbackCompetitor: "使用竞品 PDP 截图来识别拥挤表达、缺失证据和视觉同质化。",
      ownReviewFiles: "我方评论文件",
      competitorReviewFiles: "竞品评论文件",
      currentScreenshotFiles: "我方页面截图",
      competitorScreenshotFiles: "竞品页面截图",
      diagnosisGoalLine: "图片组应该从功能罗列转向解决用户购买顾虑。",
      localPremiumLine: "视觉场景需要本地化、可信，并保持高级感。",
      ownReviewSignal: "我方评论说明，当前 PDP 需要通过图片证据让核心卖点更容易被看见和相信",
      competitorSignal: "竞品评论和参考指向这些视觉机会",
      contentIssue: "当前问题不只是内容覆盖，而是图片清晰度、审美判断和生产方向。",
      heroBanner: "Hero Banner：把产品建立成目标市场中的高品质解决方案。",
      painModule: "痛点模块：先展示用户问题，再解释产品功能。",
      techModule: "技术或功能证据模块：用克制标签和准确商品细节解释机制。",
      lifestyleModule: "生活方式模块：展示可信的目标市场使用环境。",
      usabilityModule: "易用性模块：降低安装、收纳或维护顾虑。",
      tasteRules: [
        "以商品为画面主角，每张图只讲一个核心信息。",
        "用克制留白代替拥挤的功能拼贴。",
        "使用真实柔和的光线、受控阴影和克制配色。",
        "文案短、清楚、有层级。",
        "每个场景都要符合目标市场的真实生活环境。",
        "不要让 AI 改变商品形态、logo、材质、比例或支持功能。"
      ],
      visualQaRules: [
        "商品形态、颜色、材质、logo 和比例准确。",
        "每张图都有明确的转化任务。",
        "图片回答了真实用户顾虑或评论信号。",
        "设计看起来高级、克制，并且贴合具体产品。",
        "文案在 Amazon 图库尺寸下依然可读。",
        "没有虚构功能、不现实承诺或明显 AI 模板感。"
      ]
    }
  },
  ja: {
    documentTitle: "Amazon PDP 画像最適化ツールキット",
    languageLabel: "言語",
    heroTitle: "Listing 情報を画像制作ブリーフへ変換",
    heroCopy: "Amazon ギャラリーと A+ 画像のために、画像ごとの改善案、上質なビジュアル方向、コピー階層、AI Prompt、QA チェックリストを生成します。",
    inputsTitle: "入力",
    inputsCopy: "実際のプロジェクト情報を貼り付けてください。この Demo はローカルルールで動作し、データは送信されません。",
    productNameLabel: "商品名",
    categoryLabel: "商品カテゴリ",
    marketLabel: "対象市場",
    goalLabel: "最適化目標",
    benefitsLabel: "主要ベネフィット",
    currentIssuesLabel: "現在の PDP 画像メモ",
    currentPdpScreenshotsLabel: "自社の現在 PDP 全体スクリーンショット",
    competitorPdpScreenshotsLabel: "競合の現在 PDP 全体スクリーンショット",
    ownReviewsLabel: "自社商品のレビュー",
    competitorReviewsLabel: "競合商品のレビュー",
    competitorRefsLabel: "競合 PDP またはビジュアル参考",
    reviewFileHelper: "TXT、CSV、TSV、XLSX、XLS のレビューファイルをアップロードできます。下にメモを貼り付けることもできます。",
    screenshotHelper: "JPG、PNG、WebP のスクリーンショットを1枚以上アップロードできます。",
    submitButton: "画像プランを生成",
    outputTitle: "出力",
    outputCopy: "クリエイティブブリーフ、AI 画像ワークフロー、制作チェックリストにコピーして使えます。",
    emptyOutput: "画像最適化プランがここに表示されます。",
    fieldLabels: {
      goal: "目的",
      concern: "ユーザー懸念",
      concept: "ビジュアルコンセプト",
      composition: "構図",
      copy: "コピー階層",
      usage: "商品の見せ方",
      prompt: "Prompt",
      qa: "QA チェックリスト"
    },
    report: {
      diagnosis: "PDP 画像診断",
      reviewOpportunity: "レビュー洞察から画像機会へ",
      imagePlan: "画像別 PDP 改善プラン",
      aplusPlan: "A+ ビジュアルモジュール計画",
      tasteLayer: "上質なビジュアル品質レイヤー",
      visualQa: "ビジュアル QA チェックリスト",
      uploadedMaterials: "アップロード素材",
      currentIssue: "現在の PDP 課題",
      optimizationGoal: "最適化目標",
      competitorReference: "競合参考",
      targetMarket: "対象市場",
      fallbackCompetitor: "競合 PDP 画像から、情報過多、証拠不足、ビジュアルの同質化を見つけます。",
      ownReviewFiles: "自社レビューファイル",
      competitorReviewFiles: "競合レビューファイル",
      currentScreenshotFiles: "自社 PDP スクリーンショット",
      competitorScreenshotFiles: "競合 PDP スクリーンショット",
      diagnosisGoalLine: "画像セットは機能の羅列から、購入前の不安解消へ移行するべきです。",
      localPremiumLine: "ビジュアルシーンは現地市場に合い、信頼感と上質感を保つ必要があります。",
      ownReviewSignal: "自社レビューから、現在の PDP は画像証拠で主要ベネフィットをより見えやすく、信じやすくする必要があります",
      competitorSignal: "競合レビューと参考から見える画像機会",
      contentIssue: "現在の課題は情報量だけでなく、画像の明快さ、審美性、制作方向にあります。",
      heroBanner: "Hero Banner：対象市場で上質な解決策として商品を位置づける。",
      painModule: "課題モジュール：商品機能を説明する前に、ユーザーの問題を見せる。",
      techModule: "技術・機能証拠モジュール：控えめなラベルと正確な商品ディテールで仕組みを説明する。",
      lifestyleModule: "ライフスタイルモジュール：対象市場に合う信頼できる使用環境を見せる。",
      usabilityModule: "使いやすさモジュール：設置、収納、メンテナンスへの不安を下げる。",
      tasteRules: [
        "商品を主役にし、1枚の画像で1つのメッセージに集中する。",
        "情報過多のコラージュではなく、余白で上質感を作る。",
        "自然で柔らかい光、制御された影、控えめな色を使う。",
        "コピーは短く、明快で、階層を持たせる。",
        "シーンは対象市場の生活環境に合うリアリティを持たせる。",
        "AI が商品形状、ロゴ、素材、スケール、対応機能を変えないようにする。"
      ],
      visualQaRules: [
        "商品形状、色、素材、ロゴ、スケールが正確。",
        "各画像に明確な購入促進の役割がある。",
        "画像が実際のユーザー懸念やレビュー信号に答えている。",
        "デザインが上質で、抑制され、商品に固有である。",
        "コピーは Amazon ギャラリーサイズでも読みやすい。",
        "架空機能、不自然な主張、AI テンプレート感がない。"
      ]
    }
  },
  en: {
    documentTitle: "Amazon PDP Image Optimization Toolkit",
    languageLabel: "Language",
    heroTitle: "Turn listing inputs into image production briefs.",
    heroCopy: "Generate image-by-image PDP optimization plans, premium visual direction, copy hierarchy, AI prompts, and QA checklists for Amazon gallery and A+ visuals.",
    inputsTitle: "Inputs",
    inputsCopy: "Paste practical project material. The demo uses local rules and does not send data anywhere.",
    productNameLabel: "Product name",
    categoryLabel: "Product category",
    marketLabel: "Target market",
    goalLabel: "Optimization goal",
    benefitsLabel: "Core product benefits",
    currentIssuesLabel: "Current PDP screenshots or image notes",
    currentPdpScreenshotsLabel: "Current PDP full-page screenshots",
    competitorPdpScreenshotsLabel: "Competitor PDP full-page screenshots",
    ownReviewsLabel: "Own product reviews",
    competitorReviewsLabel: "Competitor product reviews",
    competitorRefsLabel: "Competitor PDP or visual reference notes",
    reviewFileHelper: "Upload TXT, CSV, TSV, XLSX, or XLS review files. You can also paste notes below.",
    screenshotHelper: "Upload one or more JPG, PNG, or WebP screenshots.",
    submitButton: "Generate Image Plan",
    outputTitle: "Output",
    outputCopy: "Copy this into a creative brief, AI image workflow, or production checklist.",
    emptyOutput: "Your image optimization plan will appear here.",
    fieldLabels: {
      goal: "Goal",
      concern: "User Concern",
      concept: "Visual Concept",
      composition: "Composition",
      copy: "Copy Hierarchy",
      usage: "Product Usage",
      prompt: "Prompt",
      qa: "QA Checklist"
    },
    report: {
      diagnosis: "PDP Image Diagnosis",
      reviewOpportunity: "Review Insight to Image Opportunity",
      imagePlan: "Image-by-Image PDP Plan",
      aplusPlan: "A+ Visual Module Plan",
      tasteLayer: "Premium Taste Layer",
      visualQa: "Visual QA Checklist",
      uploadedMaterials: "Uploaded Materials",
      currentIssue: "Current PDP issue",
      optimizationGoal: "Optimization goal",
      competitorReference: "Competitor reference",
      targetMarket: "Target market",
      fallbackCompetitor: "Use competitor PDP screenshots to identify clutter, missing proof, and visual sameness.",
      ownReviewFiles: "Own review files",
      competitorReviewFiles: "Competitor review files",
      currentScreenshotFiles: "Current PDP screenshots",
      competitorScreenshotFiles: "Competitor PDP screenshots",
      diagnosisGoalLine: "The image set should move from feature listing to shopper concern resolution.",
      localPremiumLine: "Visual scenes should feel local, believable, and premium.",
      ownReviewSignal: "Own reviews suggest the current PDP should make the core benefit easier to see and believe through image proof",
      competitorSignal: "Competitor reviews and references point to these visual opportunities",
      contentIssue: "The current issue is not only content coverage; it is image clarity, taste, and production direction.",
      heroBanner: "Hero Banner: Establish the product as a refined solution for the target market.",
      painModule: "Pain Point Module: Show the user problem before explaining the product feature.",
      techModule: "Technology or Feature Proof: Explain the mechanism with restrained labels and accurate product detail.",
      lifestyleModule: "Lifestyle Module: Show a believable target-market environment.",
      usabilityModule: "Usability Module: Reduce setup, storage, or maintenance concerns.",
      tasteRules: [
        "Use product-first composition and keep one message per image.",
        "Use refined negative space instead of crowded feature collage layouts.",
        "Use soft realistic lighting, controlled shadows, and restrained color.",
        "Keep copy short, clear, and hierarchy-driven.",
        "Make every scene believable for the target market.",
        "Do not let AI change product shape, logo, material, scale, or supported functions."
      ],
      visualQaRules: [
        "Product shape, color, material, logo, and scale are accurate.",
        "Each image has one clear conversion job.",
        "The image answers a real shopper concern or review signal.",
        "The design looks premium, restrained, and product-specific.",
        "Copy is short and readable at Amazon gallery size.",
        "No fake function, unrealistic claim, or generic AI styling appears."
      ]
    }
  }
};

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
    key: "main",
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
    key: "benefit",
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
    key: "review",
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
    key: "lifestyle",
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
    key: "usability",
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

const localizedImages = {
  zh: {
    main: {
      name: "图 1：主图",
      goal: "让商品在搜索结果和 PDP 图库中清楚、可信、容易识别。",
      concern: "实际包含什么？商品看起来是否可信？",
      concept: "干净的白底商品图，只展示商品和包含配件，不增加干扰。",
      composition: "商品居中，占画面主要位置，配件整齐排列，背景保持纯白。",
      copy: "主图不放文案。",
      usage: "保持真实商品形态、颜色、材质、logo 位置、比例和包含部件。",
      qa: ["纯白背景", "无文字或徽章", "配件准确", "商品占比清楚", "无 AI 变形"]
    },
    benefit: {
      name: "图 2：核心卖点信息图",
      goal: "把最强卖点转化成清楚的视觉证据。",
      concern: "这个产品是否真的能解决我的主要使用问题？",
      concept: "用克制的信息图，把核心卖点连接到真实用户需求。",
      composition: "商品作为视觉锚点，一个标题区，一个证据场景或细节特写，少量克制标注。",
      copy: "一个短利益点标题，一句证据说明，不超过三个辅助标注。",
      usage: "在可信的性能场景中展示商品，不夸大效果。",
      qa: ["一个核心信息", "层级清晰", "证据支撑卖点", "无拥挤图标墙", "留白高级"]
    },
    review: {
      name: "图 3：评论顾虑证据图",
      goal: "回应我方或竞品评论中最重要的用户顾虑。",
      concern: "这个产品能不能避免评论里提到的问题？",
      concept: "把评论语言转化成痛点证明图片。",
      composition: "用特写、对比或真实使用场景直接回应顾虑。",
      copy: "标题点出被解决的顾虑，辅助文案用简单语言解释证据。",
      usage: "不要虚构功能，也不要夸大产品能力。",
      qa: ["评论顾虑可见", "表达谨慎", "商品细节准确", "场景可信", "无虚构功能"]
    },
    lifestyle: {
      name: "图 4：高级生活方式图",
      goal: "让产品在目标市场中显得值得拥有、适合日常生活。",
      concern: "它是否适合我的家、生活方式和日常使用？",
      concept: "具有本地市场真实感的高级生活方式场景。",
      composition: "可信家居场景、受控留白、柔和光线、商品优先的画面结构。",
      copy: "短生活方式标题加一句辅助说明。",
      usage: "比例、空间和使用姿态都要真实可信。",
      qa: ["市场场景真实", "商品是视觉主角", "不俗套库存图", "光线自然", "比例可信"]
    },
    usability: {
      name: "图 5：易用性或维护图",
      goal: "降低用户对安装、收纳、清洁或维护的阻力。",
      concern: "买回去之后是否容易使用？",
      concept: "用步骤或空间证明，展示日常便利性。",
      composition: "简单步骤逻辑、细节特写或空间证据，标注尽量少。",
      copy: "一个标题，必要时加短步骤标签。",
      usage: "只有在产品信息支持时，才展示可清洗、可拆卸或可折叠部件。",
      qa: ["无不支持的维护承诺", "步骤易懂", "文字克制", "商品结构准确", "场景实用"]
    }
  },
  ja: {
    main: {
      name: "画像 1：メイン画像",
      goal: "検索結果と PDP ギャラリーで商品を明確で信頼できるものに見せる。",
      concern: "実際に何が含まれているか、商品は信頼できるか？",
      concept: "商品と同梱品だけを見せる、余計な要素のない白背景のパックショット。",
      composition: "商品を中央に大きく配置し、同梱品を整然と並べ、背景は純白にする。",
      copy: "メイン画像にはコピーを入れない。",
      usage: "実際の商品形状、色、素材、ロゴ位置、スケール、同梱部品を保持する。",
      qa: ["純白背景", "文字やバッジなし", "同梱品が正確", "商品が十分大きい", "AI 変形なし"]
    },
    benefit: {
      name: "画像 2：主要ベネフィット情報図",
      goal: "最も強いベネフィットを明快な視覚的証拠に変える。",
      concern: "この商品は自分の主な使用課題を解決できるか？",
      concept: "主要ベネフィットを実際のユーザー需要につなげる、洗練された情報図。",
      composition: "商品を視覚の軸にし、見出し領域、証拠シーンまたはクローズアップ、控えめな注釈で構成する。",
      copy: "短いベネフィット見出し、1行の証拠説明、最大3つの補助注釈。",
      usage: "信頼できる使用文脈で商品を見せ、効果を誇張しない。",
      qa: ["1つの主メッセージ", "階層が読みやすい", "証拠が主張を支える", "アイコン過多ではない", "余白が上質"]
    },
    review: {
      name: "画像 3：レビュー懸念の証拠画像",
      goal: "自社または競合レビューで最も重要な懸念に答える。",
      concern: "レビューで言及された問題をこの商品は避けられるか？",
      concept: "レビューの言葉を、課題解決の視覚証拠に変える。",
      composition: "クローズアップ、比較、実使用シーンで懸念に直接答える。",
      copy: "見出しで解決する懸念を示し、補足コピーで証拠を簡潔に説明する。",
      usage: "商品機能を作り出したり、能力を誇張したりしない。",
      qa: ["レビュー懸念が見える", "主張が慎重", "商品詳細が正確", "シーンが信頼できる", "架空機能なし"]
    },
    lifestyle: {
      name: "画像 4：上質なライフスタイル画像",
      goal: "対象市場で商品を魅力的で日常に合うものに見せる。",
      concern: "自分の家、生活、日常習慣に合うか？",
      concept: "市場に合ったリアルで上質なライフスタイルシーン。",
      composition: "信頼できる住空間、制御された余白、柔らかい光、商品優先のフレーミング。",
      copy: "短いライフスタイル見出しと1行の補足。",
      usage: "スケール、部屋の文脈、使用姿勢を現実的に保つ。",
      qa: ["市場文脈が自然", "商品が主役", "汎用ストック感がない", "光が自然", "スケールが信頼できる"]
    },
    usability: {
      name: "画像 5：使いやすさ・メンテナンス画像",
      goal: "設置、収納、清掃、メンテナンスへの心理的負担を下げる。",
      concern: "購入後に使いやすいか？",
      concept: "手順や収納証拠で、日常の便利さを示す。",
      composition: "簡単なステップ、ディテール、空間証拠を最小限のラベルで見せる。",
      copy: "1つの見出しと、必要な場合のみ短いステップラベル。",
      usage: "洗える、取り外せる、折りたためる部品は商品情報で確認できる場合のみ見せる。",
      qa: ["未確認のメンテナンス主張なし", "手順が読みやすい", "文字が少ない", "商品構造が正確", "実用的なシーン"]
    }
  },
  en: Object.fromEntries(imagePlan.map((image) => [image.key, image]))
};

const concernPatterns = [
  {
    keys: ["hair", "tangle", "pet", "毛发", "缠毛", "宠物", "髪", "絡ま", "ペット"],
    label: "hair tangling and pet-hair cleaning",
    opportunity: "Add an anti-tangle proof image with a brush close-up and realistic hair-management evidence."
  },
  {
    keys: ["store", "storage", "compact", "fold", "space", "apartment", "收纳", "折叠", "小户型", "空间", "収納", "折りたた", "省スペース"],
    label: "compact storage and small-space fit",
    opportunity: "Add a folded-storage image that proves the product fits a compact home or apartment corner."
  },
  {
    keys: ["heavy", "weight", "lightweight", "carry", "handling", "重", "轻", "重量", "手持", "持ち", "軽い", "重い"],
    label: "daily handling and weight",
    opportunity: "Add a lightweight handling image with believable one-hand use or movement proof."
  },
  {
    keys: ["clean", "maintenance", "dust cup", "wash", "empty", "清洁", "维护", "尘杯", "水洗", "倒垃圾", "メンテ", "掃除", "ダストカップ", "洗える"],
    label: "maintenance effort",
    opportunity: "Add an easy-maintenance image showing empty, rinse, and reattach steps only when supported by product facts."
  },
  {
    keys: ["suction", "power", "weak", "edge", "corner", "crumb", "dust", "吸力", "清洁力", "边角", "灰尘", "碎屑", "吸引力", "弱い", "隅", "ほこり"],
    label: "cleaning power and edge performance",
    opportunity: "Add a cleaning proof infographic tied to realistic debris, edge areas, and daily household mess."
  },
  {
    keys: ["noise", "quiet", "loud", "噪音", "安静", "吵", "静音", "音", "うるさい", "静か"],
    label: "noise and quiet use",
    opportunity: "Add a quiet-use scene that shows daily cleaning without disrupting family, work, or apartment life."
  },
  {
    keys: ["battery", "runtime", "charge", "charging", "续航", "电池", "充电", "バッテリー", "稼働時間", "充電"],
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

function fileSizeLabel(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function renderFilePills(previewId, files) {
  const preview = document.querySelector(`#${previewId}`);
  preview.innerHTML = files
    .map((file) => {
      const meta = file.rows ? `${file.rows} rows` : file.note || fileSizeLabel(file.size);
      return `<div class="file-pill"><span>${escapeHtml(file.name)}</span><small>${escapeHtml(meta)}</small></div>`;
    })
    .join("");
}

function renderImageThumbs(previewId, files) {
  const preview = document.querySelector(`#${previewId}`);
  if (!files.length) {
    preview.innerHTML = "";
    return;
  }
  preview.innerHTML = `
    <div class="thumb-grid">
      ${files
        .map(
          (file) => `
            <figure class="thumb">
              <img src="${escapeHtml(file.url)}" alt="${escapeHtml(file.name)}">
              <span>${escapeHtml(file.name)}</span>
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function parseDelimitedTable(text, delimiter) {
  const rows = text
    .split(/\r?\n/)
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) => row.split(delimiter).map((cell) => cell.trim()).filter(Boolean));
  const previewRows = rows.slice(0, 12).map((row) => row.join(" | "));
  return {
    rows: rows.length,
    text: previewRows.join("\n")
  };
}

function handleReviewUpload(inputId, previewId, stateKey) {
  const input = document.querySelector(`#${inputId}`);
  input.addEventListener("change", async () => {
    const files = Array.from(input.files || []);
    const loaded = await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve) => {
            const extension = file.name.split(".").pop().toLowerCase();
            if (extension === "csv" || extension === "tsv") {
              const reader = new FileReader();
              reader.onload = () => {
                const delimiter = extension === "tsv" ? "\t" : ",";
                const parsed = parseDelimitedTable(String(reader.result || ""), delimiter);
                resolve({
                  name: file.name,
                  size: file.size,
                  rows: parsed.rows,
                  text: parsed.text,
                  note: `${parsed.rows} rows`
                });
              };
              reader.onerror = () =>
                resolve({
                  name: file.name,
                  size: file.size,
                  rows: 0,
                  text: "",
                  note: "unreadable table"
                });
              reader.readAsText(file);
              return;
            }

            if (extension === "xlsx" || extension === "xls") {
              resolve({
                name: file.name,
                size: file.size,
                rows: 0,
                text: "",
                note: "Excel source"
              });
              return;
            }

            const reader = new FileReader();
            reader.onload = () =>
              resolve({
                name: file.name,
                size: file.size,
                text: String(reader.result || "")
              });
            reader.onerror = () =>
              resolve({
                name: file.name,
                size: file.size,
                text: ""
              });
            reader.readAsText(file);
          })
      )
    );
    uploadState[stateKey] = loaded;
    renderFilePills(previewId, loaded);
  });
}

function handleImageUpload(inputId, previewId, stateKey) {
  const input = document.querySelector(`#${inputId}`);
  input.addEventListener("change", () => {
    uploadState[stateKey].forEach((file) => {
      if (file.url) URL.revokeObjectURL(file.url);
    });
    uploadState[stateKey] = Array.from(input.files || []).map((file) => ({
      name: file.name,
      size: file.size,
      url: URL.createObjectURL(file)
    }));
    renderImageThumbs(previewId, uploadState[stateKey]);
  });
}

function makePrompt(image, data) {
  const marketDetail = marketNotes[data.market] || marketNotes.Global;
  return `Create a premium Amazon PDP image for ${data.productName}, a ${data.category}, focused on ${image.goal.toLowerCase()}. The image should answer the shopper concern: ${image.concern} Use ${image.composition.toLowerCase()} The target market is ${data.market}, so the visual context should reflect ${marketDetail}. Build the image around these product benefits: ${data.benefits}. Keep the product structure, color, material, scale, logo placement, and visible parts accurate. Use refined product-first composition, generous negative space, soft realistic lighting, controlled shadows, restrained colors, clear copy hierarchy, and high-end ecommerce visual quality. Avoid cheap marketplace styling, crowded collages, excessive arrows, fake glow effects, random gradients, decorative typography, unrealistic claims, invented functions, distorted product parts, and generic AI-looking visuals.`;
}

function makeList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function copy() {
  return translations[currentLanguage] || translations.en;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  const ui = copy();
  document.documentElement.lang = currentLanguage;
  document.title = ui.documentTitle;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (ui[key]) node.textContent = ui[key];
  });
  if (languageSelect.value !== currentLanguage) languageSelect.value = currentLanguage;
  if (!output.classList.contains("output-empty")) {
    output.innerHTML = renderReport(readFormData());
  }
}

function detectConcerns(...texts) {
  const combined = texts.join(" ").toLowerCase();
  const detected = concernPatterns.filter((item) => item.keys.some((key) => combined.includes(key)));
  return detected.length ? detected.slice(0, 4) : concernPatterns.slice(0, 3);
}

function readFormData() {
  return {
    productName: value("productName") || "the product",
    category: value("category") || "Amazon product",
    market: value("market") || "Global",
    goal: value("goal") || "premium visual upgrade",
    benefits: value("benefits") || "core product benefits",
    currentIssues: value("currentIssues") || "Current PDP images need clearer visual proof.",
    ownReviews: value("ownReviews"),
    competitorReviews: value("competitorReviews"),
    competitorRefs: value("competitorRefs"),
    uploadText: [
      ...uploadState.ownReviewFiles.map((file) => file.text),
      ...uploadState.competitorReviewFiles.map((file) => file.text)
    ].join("\n"),
    uploadedMaterials: {
      ownReviewFiles: uploadState.ownReviewFiles.map((file) => file.name),
      competitorReviewFiles: uploadState.competitorReviewFiles.map((file) => file.name),
      currentPdpScreenshots: uploadState.currentPdpScreenshots.map((file) => file.name),
      competitorPdpScreenshots: uploadState.competitorPdpScreenshots.map((file) => file.name)
    }
  };
}

function renderReport(data) {
  const ui = copy();
  const report = ui.report;
  const fieldLabels = ui.fieldLabels;
  const benefits = splitTerms(data.benefits);
  const currentImages = localizedImages[currentLanguage] || localizedImages.en;
  const detectedConcerns = detectConcerns(data.ownReviews, data.competitorReviews, data.uploadText, data.currentIssues, data.competitorRefs);
  const uploadedMaterials = [
    `${report.ownReviewFiles}: ${data.uploadedMaterials.ownReviewFiles.length ? data.uploadedMaterials.ownReviewFiles.join(", ") : "0"}`,
    `${report.competitorReviewFiles}: ${data.uploadedMaterials.competitorReviewFiles.length ? data.uploadedMaterials.competitorReviewFiles.join(", ") : "0"}`,
    `${report.currentScreenshotFiles}: ${data.uploadedMaterials.currentPdpScreenshots.length ? data.uploadedMaterials.currentPdpScreenshots.join(", ") : "0"}`,
    `${report.competitorScreenshotFiles}: ${data.uploadedMaterials.competitorPdpScreenshots.length ? data.uploadedMaterials.competitorPdpScreenshots.join(", ") : "0"}`
  ];
  const reviewSignals = [
    `${report.ownReviewSignal}: ${benefits[0] || data.productName}.`,
    `${report.competitorSignal}: ${detectedConcerns.map((item) => item.label).join(", ")}.`,
    ...detectedConcerns.map((item) => item.opportunity),
    report.contentIssue
  ];

  const diagnosis = [
    `${report.currentIssue}: ${data.currentIssues}`,
    `${report.optimizationGoal}: ${data.goal}. ${report.diagnosisGoalLine}`,
    `${report.competitorReference}: ${data.competitorRefs || report.fallbackCompetitor}`,
    `${report.targetMarket}: ${data.market}. ${report.localPremiumLine}`
  ];

  const cards = imagePlan
    .map((image) => {
      const imageText = currentImages[image.key] || image;
      const prompt = makePrompt(imageText, data);
      return `
        <article class="image-card">
          <h4>${escapeHtml(imageText.name)}</h4>
          <div class="field"><strong>${escapeHtml(fieldLabels.goal)}</strong><p>${escapeHtml(imageText.goal)}</p></div>
          <div class="field"><strong>${escapeHtml(fieldLabels.concern)}</strong><p>${escapeHtml(imageText.concern)}</p></div>
          <div class="field"><strong>${escapeHtml(fieldLabels.concept)}</strong><p>${escapeHtml(imageText.concept)}</p></div>
          <div class="field"><strong>${escapeHtml(fieldLabels.composition)}</strong><p>${escapeHtml(imageText.composition)}</p></div>
          <div class="field"><strong>${escapeHtml(fieldLabels.copy)}</strong><p>${escapeHtml(imageText.copy)}</p></div>
          <div class="field"><strong>${escapeHtml(fieldLabels.usage)}</strong><p>${escapeHtml(imageText.usage)}</p></div>
          <div class="field"><strong>${escapeHtml(fieldLabels.prompt)}</strong><p class="prompt">${escapeHtml(prompt)}</p></div>
          <div class="field"><strong>${escapeHtml(fieldLabels.qa)}</strong>${makeList(imageText.qa)}</div>
        </article>
      `;
    })
    .join("");

  return `
    <div class="report">
      <section class="report-section">
        <h3>${escapeHtml(report.diagnosis)}</h3>
        ${makeList(diagnosis)}
      </section>

      <section class="report-section">
        <h3>${escapeHtml(report.uploadedMaterials)}</h3>
        ${makeList(uploadedMaterials)}
      </section>

      <section class="report-section">
        <h3>${escapeHtml(report.reviewOpportunity)}</h3>
        ${makeList(reviewSignals)}
        <div class="tag-row">
          ${benefits.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
        </div>
      </section>

      <section class="report-section">
        <h3>${escapeHtml(report.imagePlan)}</h3>
        ${cards}
      </section>

      <section class="report-section">
        <h3>${escapeHtml(report.aplusPlan)}</h3>
        ${makeList([
          report.heroBanner,
          report.painModule,
          report.techModule,
          report.lifestyleModule,
          report.usabilityModule
        ])}
      </section>

      <section class="report-section">
        <h3>${escapeHtml(report.tasteLayer)}</h3>
        ${makeList(report.tasteRules)}
      </section>

      <section class="report-section">
        <h3>${escapeHtml(report.visualQa)}</h3>
        ${makeList(report.visualQaRules)}
      </section>
    </div>
  `;
}

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

handleReviewUpload("ownReviewFiles", "ownReviewFilesPreview", "ownReviewFiles");
handleReviewUpload("competitorReviewFiles", "competitorReviewFilesPreview", "competitorReviewFiles");
handleImageUpload("currentPdpScreenshots", "currentPdpScreenshotsPreview", "currentPdpScreenshots");
handleImageUpload("competitorPdpScreenshots", "competitorPdpScreenshotsPreview", "competitorPdpScreenshots");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  output.className = "";
  output.innerHTML = renderReport(readFormData());
});

applyLanguage(currentLanguage);
