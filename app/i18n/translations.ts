export type Language = "ja" | "en";

export const translations = {
  ja: {
    nav: {
      about: "私たちについて",
      business: "事業内容",
      sustainability: "サステナビリティ",
      collaboration: "協業・連携",
      company: "会社概要",
      cta: "お問い合わせ",
    },
    hero: {
      badge: "B2B / 自治体 / 企業向け",
      title: ["地域課題を、", "事業として", "前に進める。"],
      subtitle:
        "アグリ・ジパングは、自治体と企業の連携を軸に、営農型太陽光発電と CO2 削減ソリューションを主軸とした地域共創プロジェクトを推進します。",
      ctaPrimary: "お問い合わせ",
      ctaSecondary: "事業を見る",
      whyTitle: "Why Agri Zipang",
      whySubtitle: "選ばれる理由",
      reasons: [
        "農地・再エネ・脱炭素を一つの事業として設計",
        "自治体計画・企業 ESG ニーズの双方に対応",
        "構想整理から実証・運用まで伴走型で支援",
        "栃木県を起点とした地域密着の実行体制",
      ],
      metrics: [
        { label: "支援対象", value: "自治体・企業" },
        { label: "主軸事業", value: "営農型太陽光 / CO2 削減" },
        { label: "支援範囲", value: "構想→実証→運用" },
      ],
    },
    about: {
      tag: "About",
      title: "農業を起点に、地域と企業の接続点をつくる。",
      subtitle:
        "地域資源の活用、脱炭素対応、事業性の確保。どれか一つだけでは前に進まないテーマに対して、アグリ・ジパングは複数の関係者をつなぎ、前提整理から実装までを設計します。",
      cards: [
        {
          title: "自治体・企業への実行支援",
          body: "計画立案から現場実装まで、行政と企業の双方に向けた実行可能な提案と伴走型サポートを行います。",
        },
        {
          title: "農地と再エネの両立設計",
          body: "営農型太陽光を主軸に、農業機能を守りながら地域の脱炭素化を推進。農地活用と事業性を両立します。",
        },
        {
          title: "CO2 削減の可視化と信頼性",
          body: "削減量・根拠・指標を整理し、行政の計画策定・企業の ESG 開示に耐える水準で数値を提示します。",
        },
      ],
    },
    business: {
      tag: "Business",
      title: "主軸を明確にした、事業ポートフォリオ。",
      subtitle:
        "何でもやる印象ではなく、強みの核を明確に伝えるために、主軸と補完領域を整理した構成にしています。",
      pillars: [
        {
          title: "営農型太陽光発電",
          body: "農地活用と再生可能エネルギー導入を両立させ、地域経済と脱炭素の両面から事業化を支援します。",
          points: ["候補地整理", "制度・合意形成支援", "導入計画の策定"],
        },
        {
          title: "CO2 削減ソリューション",
          body: "森林・海藻・飼料など複数の手段を組み合わせ、自治体・企業ごとに実行可能な削減計画へ落とし込みます。",
          points: ["削減テーマ整理", "実証設計", "KPI・開示指標の整理"],
        },
        {
          title: "農業・資材・バイオマス支援",
          body: "主軸事業を補完するかたちで、資材供給、バイオマス燃料、周辺ソリューションの導入を支援します。",
          points: ["資材調達", "周辺事業設計", "運用体制づくり"],
        },
      ],
    },
    sustainability: {
      tag: "Sustainability",
      title: "持続可能性を、説明可能な価値へ。",
      subtitle:
        "初版では複雑な可視化よりも、自治体・企業が理解しやすい基本指標を明確に提示することを重視しています。",
      kpiLabel: "初期 KPI 例",
      kpiItems: [
        "CO2 削減量：実証データ集計中",
        "対象領域：森林 / 海藻 / 飼料",
        "対象地域：栃木県内",
      ],
      items: [
        {
          title: "数値で語れる脱炭素",
          body: "CO2 削減量、対象領域、対象地域など、初期段階から説明責任を果たせる指標設計を重視します。",
        },
        {
          title: "地域に残る仕組みづくり",
          body: "単発の実証で終わらせず、地域雇用・運営体制・継続予算まで見据えた実装を進めます。",
        },
        {
          title: "企業の事業性との両立",
          body: "ESG だけでなく、投資判断・調達要件・供給安定性まで見据えた B2B 設計を行います。",
        },
      ],
      metricsHeading: "実績・指標",
      kpiMetrics: [
        { label: "CO2 削減量", value: "実証中", unit: "", note: "パイロット案件の実績を準備中" },
        { label: "発電規模", value: "計画中", unit: "", note: "営農型太陽光の導入を推進中" },
        { label: "対応エリア", value: "栃木県", unit: "全域", note: "2026 年現在" },
        { label: "設立", value: "2019", unit: "年", note: "農事組合法人として設立" },
      ],
    },
    collaboration: {
      tag: "Collaboration",
      title: "連携プロジェクトとして、実証精度を高める。",
      subtitle:
        "行政、企業、現場、研究・検証パートナーが分断されたままでは、実装は進みません。アグリ・ジパングは関係者を束ねるハブとして機能します。",
      items: [
        {
          title: "自治体 × 企業 × 現場の三者連携",
          body: "行政計画、企業ニーズ、現場運用のギャップを埋め、実行可能な体制を組成します。",
        },
        {
          title: "共同検証パートナーとの推進",
          body: "外部の研究・検証パートナーと連携し、実証の精度と再現性を高めながら事業化を進めます。",
        },
      ],
    },
    company: {
      tag: "Company",
      title: "会社概要",
      subtitle: "アグリ・ジパングは、地域と企業の持続可能な共創を支援します。",
      rows: [
        { label: "会社名", value: "農事組合法人アグリ・ジパング" },
        { label: "所在地", value: "栃木県" },
        { label: "設立", value: "2019 年（農事組合法人）" },
        { label: "事業内容", value: "営農型太陽光発電事業、CO2 削減ソリューション、農業支援" },
      ],
      mapTitle: "栃木県地図",
    },
    contact: {
      badge: "お問い合わせ / Contact",
      title: "お問い合わせ・提携相談はこちらから。",
      subtitle:
        "事業開発、地域脱炭素、共同実証など、検討初期でも構いません。対象地域や課題感が固まりきっていない段階でもご相談いただけます。",
      infoTitle: "お問い合わせ先",
      infoItems: [
        { label: "メール", content: "contact@agrizipang.jp", href: "mailto:contact@agrizipang.jp" },
        { label: "対応時間", content: "平日 9:00 - 18:00（JST）", href: null },
        { label: "主なご相談", content: "お問い合わせ / 共同実証 / 提携相談 / 資料請求", href: null },
      ],
    },
    footer: {
      tagline: "地域課題を、事業として前に進める。\n自治体と企業の連携を軸に、持続可能な地域共創を支援します。",
      menuTitle: "メニュー",
      contactTitle: "連絡先",
      copy: "© 2026 Agri Zipang. All rights reserved.",
      org: "農事組合法人アグリ・ジパング",
    },
    form: {
      org: "団体・企業名",
      orgPlaceholder: "例）〇〇市役所 / 〇〇株式会社",
      name: "ご担当者名",
      namePlaceholder: "例）山田 太郎",
      email: "メールアドレス",
      emailPlaceholder: "example@company.jp",
      message: "ご相談内容",
      messagePlaceholder: "対象地域、検討中テーマ、想定している連携内容などをご記入ください。",
      submit: "相談内容を送信する",
      submitting: "送信中…",
      required: "* は必須項目です。平日 9:00–18:00 以内にご返信いたします。",
      successTitle: "送信が完了しました",
      successBody: "お問い合わせを受け付けました。\n担当者より折り返しご連絡いたします。",
      reset: "別のお問い合わせをする",
      errRequired: "ご担当者名・メールアドレス・ご相談内容は必須です。",
      errNetwork: "ネットワークエラーが発生しました。時間をおいて再度お試しください。",
      errSend: "送信に失敗しました。",
    },
    quotes: [
      "農地 × 再エネ × 脱炭素を、\nひとつの事業として設計する。",
      "地域の資源を、持続可能な価値へ。\n構想から運用まで、伴走する。",
    ],
    caseStudies: {
      tag: "Case Studies",
      title: "プロジェクト事例",
      subtitle: "地域課題の解決に向けた取り組みをご紹介します。",
      items: [
        {
          title: "営農型太陽光の導入設計",
          category: "Solar",
          body: "栃木県内の農地を対象に、農業機能を維持しながら太陽光発電を導入するための候補地整理・制度対応・合意形成までを支援。",
        },
        {
          title: "自治体向けCO2削減ロードマップ",
          category: "CO2",
          body: "地方自治体の脱炭素計画に対し、森林・海藻・飼料を組み合わせた実行可能な削減シナリオと KPI 設計を提供。",
        },
        {
          title: "バイオマス資材の供給体制構築",
          category: "Biomass",
          body: "農業廃棄物のバイオマス燃料化に向けた調達ルート整理と、地域内循環型の供給モデルを設計。",
        },
      ],
    },
  },

  en: {
    nav: {
      about: "About",
      business: "Business",
      sustainability: "Sustainability",
      collaboration: "Collaboration",
      company: "Company",
      cta: "Contact Us",
    },
    hero: {
      badge: "B2B / Local Government / Enterprise",
      title: ["Turning regional", "challenges into", "real business."],
      subtitle:
        "Agri Zipang drives community co-creation projects centered on agri-solar power and CO2 reduction solutions, bridging local governments and enterprises.",
      ctaPrimary: "Contact Us",
      ctaSecondary: "Our Business",
      whyTitle: "Why Agri Zipang",
      whySubtitle: "Why Us",
      reasons: [
        "Integrated design: farmland, renewables & decarbonization",
        "Serves both municipal plans and corporate ESG needs",
        "End-to-end support from concept to operation",
        "Tochigi-based local execution network",
      ],
      metrics: [
        { label: "Clients", value: "Gov & Corp" },
        { label: "Core", value: "Agri-Solar / CO2" },
        { label: "Scope", value: "Plan→Demo→Ops" },
      ],
    },
    about: {
      tag: "About",
      title: "Connecting agriculture to local and corporate ecosystems.",
      subtitle:
        "Regional resource utilization, decarbonization, and business viability — Agri Zipang bridges stakeholders and designs the path from premise-setting to implementation.",
      cards: [
        {
          title: "Execution support for gov & enterprise",
          body: "We provide actionable proposals and hands-on support for both public and private sectors, from planning to field implementation.",
        },
        {
          title: "Balancing farmland and renewable energy",
          body: "With agri-solar as our core, we advance regional decarbonization while preserving agricultural functions.",
        },
        {
          title: "Transparent CO2 reduction metrics",
          body: "We structure reduction volumes, rationale, and KPIs to meet the standards required for municipal planning and corporate ESG disclosure.",
        },
      ],
    },
    business: {
      tag: "Business",
      title: "A focused business portfolio.",
      subtitle:
        "Rather than appearing to do everything, we clearly communicate our core strengths — organizing primary and complementary domains.",
      pillars: [
        {
          title: "Agri-Solar Power",
          body: "We support the business case for combining farmland use with renewable energy adoption, advancing both local economies and decarbonization.",
          points: ["Site screening", "Regulatory & consensus support", "Implementation planning"],
        },
        {
          title: "CO2 Reduction Solutions",
          body: "We combine multiple approaches — forest, seaweed, feed — and tailor actionable reduction plans for each municipality or enterprise.",
          points: ["Theme clarification", "Pilot design", "KPI & disclosure structuring"],
        },
        {
          title: "Agri, Materials & Biomass",
          body: "Complementing our core, we support material supply, biomass fuel, and adjacent solution deployment.",
          points: ["Material procurement", "Adjacent business design", "Operational structuring"],
        },
      ],
    },
    sustainability: {
      tag: "Sustainability",
      title: "Making sustainability an accountable value.",
      subtitle:
        "Rather than complex visualizations, we prioritize clearly presenting foundational metrics that governments and enterprises can easily understand.",
      kpiLabel: "Initial KPI Example",
      kpiItems: [
        "CO2 reduction: pilot data in progress",
        "Target domains: forest / seaweed / feed",
        "Target area: Tochigi Prefecture",
      ],
      items: [
        {
          title: "Decarbonization backed by data",
          body: "We prioritize accountability from the earliest stage — structuring CO2 reduction volumes, target domains, and regional scope.",
        },
        {
          title: "Building systems that stay in the community",
          body: "We go beyond one-off pilots, building toward local employment, operational capacity, and sustained funding.",
        },
        {
          title: "Compatible with corporate business models",
          body: "Beyond ESG, we design for investment decisions, procurement requirements, and supply stability.",
        },
      ],
      metricsHeading: "Metrics & Results",
      kpiMetrics: [
        { label: "CO2 Reduction", value: "Piloting", unit: "", note: "Results from pilot projects in preparation" },
        { label: "Generation Scale", value: "Planning", unit: "", note: "Advancing agri-solar deployment" },
        { label: "Service Area", value: "Tochigi", unit: "Pref.", note: "As of 2026" },
        { label: "Founded", value: "2019", unit: "year", note: "As Agricultural Corp." },
      ],
    },
    collaboration: {
      tag: "Collaboration",
      title: "Elevating pilot precision through strategic collaboration.",
      subtitle:
        "Implementation stalls when government, business, field operations, and research partners remain disconnected. Agri Zipang functions as the hub that unites stakeholders.",
      items: [
        {
          title: "Trilateral: Gov × Corp × Field",
          body: "We bridge the gaps between municipal planning, corporate needs, and on-site operations to build an executable structure.",
        },
        {
          title: "Joint verification with research partners",
          body: "Working with external research and verification partners, we advance commercialization with improved pilot accuracy and reproducibility.",
        },
      ],
    },
    company: {
      tag: "Company",
      title: "Company Overview",
      subtitle: "Agri Zipang supports sustainable co-creation between communities and enterprises.",
      rows: [
        { label: "Name", value: "Agri Zipang Agricultural Cooperative Corp." },
        { label: "Location", value: "Tochigi Prefecture, Japan" },
        { label: "Founded", value: "2019 (Agricultural Cooperative)" },
        { label: "Business", value: "Agri-solar power, CO2 reduction solutions, agricultural support" },
      ],
      mapTitle: "Tochigi Prefecture Map",
    },
    contact: {
      badge: "Inquiry / Contact",
      title: "Ready to consult with us?",
      subtitle:
        "Whether it's business development, regional decarbonization, or joint verification — we welcome inquiries even at the earliest stage of consideration.",
      infoTitle: "Contact Information",
      infoItems: [
        { label: "Email", content: "contact@agrizipang.jp", href: "mailto:contact@agrizipang.jp" },
        { label: "Hours", content: "Weekdays 9:00–18:00 (JST)", href: null },
        { label: "Topics", content: "Consultation / Joint pilot / Partnership / Materials", href: null },
      ],
    },
    footer: {
      tagline: "Turning regional challenges into real business.\nSupporting sustainable co-creation between communities and enterprises.",
      menuTitle: "Menu",
      contactTitle: "Contact",
      copy: "© 2026 Agri Zipang. All rights reserved.",
      org: "Agri Zipang Agricultural Cooperative Corp.",
    },
    form: {
      org: "Organization / Company",
      orgPlaceholder: "e.g. City Hall / ABC Corporation",
      name: "Contact Person",
      namePlaceholder: "e.g. Taro Yamada",
      email: "Email Address",
      emailPlaceholder: "example@company.jp",
      message: "Inquiry Details",
      messagePlaceholder: "Please describe your target region, topic under consideration, and expected collaboration.",
      submit: "Submit Inquiry",
      submitting: "Sending…",
      required: "* Required. We will respond within weekday business hours (9:00–18:00 JST).",
      successTitle: "Inquiry Submitted",
      successBody: "We have received your inquiry.\nOur team will follow up with you shortly.",
      reset: "Submit another inquiry",
      errRequired: "Name, email, and inquiry details are required.",
      errNetwork: "A network error occurred. Please try again later.",
      errSend: "Failed to send. Please try again.",
    },
    quotes: [
      "Farmland × Renewables × Decarbonization —\ndesigned as one business.",
      "Turning regional resources into\nsustainable value. From concept to operation.",
    ],
    caseStudies: {
      tag: "Case Studies",
      title: "Project Highlights",
      subtitle: "Showcasing our approach to solving regional challenges.",
      items: [
        {
          title: "Agri-Solar Implementation Design",
          category: "Solar",
          body: "Supporting site screening, regulatory compliance, and consensus building for agri-solar deployment on farmland in Tochigi Prefecture.",
        },
        {
          title: "Municipal CO2 Reduction Roadmap",
          category: "CO2",
          body: "Delivering actionable reduction scenarios combining forest, seaweed, and feed approaches with KPI design for local government decarbonization plans.",
        },
        {
          title: "Biomass Supply Chain Development",
          category: "Biomass",
          body: "Designing procurement routes and regional circular supply models for converting agricultural waste into biomass fuel.",
        },
      ],
    },
  },
} as const;

export type T = typeof translations.ja;
