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
        "アグリ・ジパングは、自治体と企業の連携を軸に、営農型太陽光発電と CO2 削減ソリューションを通じて、地域の農業・脱炭素事業を推進します。",
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
        { label: "拠点", value: "栃木県宇都宮市" },
      ],
      themeSong: "アグリ・ジパング テーマソング",
    },
    about: {
      tag: "About",
      title: "農業を起点に\n地域と企業の接続点をつくる。",
      subtitle:
        "地域資源の活用、脱炭素対応、事業性の確保。農事組合法人として、農業・再生可能エネルギー・CO2 削減の複数領域を横断し、地域に根ざした事業を展開します。",
      cards: [
        {
          title: "農業経営・栽培技術のコンサルティング",
          body: "農業経営の改善から栽培技術の導入まで、農家・事業者向けに実践的なコンサルティングを提供します。",
        },
        {
          title: "農地と再エネの両立設計",
          body: "営農型太陽光を主軸に、農業機能を守りながら地域の脱炭素化を推進。農地活用と事業性を両立します。",
        },
        {
          title: "CO2 削減への取り組み",
          body: "森林（植林）・海藻（吸収/埋没）・特殊家畜飼料など複数の手法を組み合わせ、CO2 削減に貢献します。",
        },
      ],
    },
    business: {
      tag: "Business",
      title: "主軸を明確にした\n事業ポートフォリオ。",
      subtitle:
        "何でもやる印象ではなく、強みの核を明確に伝えるために\n主軸と補完領域を整理した構成にしています。",
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
          title: "海外早生樹・農業資材・バイオマス",
          body: "海外早生樹の生産・育苗・輸入販売を軸に、微生物資材・液肥・バイオマス燃料など、農業の高付加価値化を支援します。",
          points: ["早生樹の育苗・輸入", "微生物資材・酵素", "バイオマス燃料"],
        },
      ],
    },
    sustainability: {
      tag: "Sustainability",
      title: "持続可能性を\n説明可能な価値へ。",
      subtitle:
        "初版では複雑な可視化よりも、自治体・企業が理解しやすい基本指標を明確に提示することを重視しています。",
      kpiLabel: "初期 KPI 例",
      kpiItems: [
        "対象領域：森林（植林）/ 海藻 / 特殊家畜飼料",
        "対象地域：栃木県内",
        "海外早生樹（Paulownia）の植林・育苗事業",
      ],
      items: [
        {
          title: "多角的なCO2削減手法",
          body: "森林（植林）・海藻（吸収/埋没）・特殊家畜飼料など、複数手法を組み合わせたCO2削減に取り組みます。",
        },
        {
          title: "海外早生樹による植林事業",
          body: "海外でのPaulownia（早生樹）の生産・育苗・輸入販売を通じて、再造林・CO2吸収に貢献します。",
        },
        {
          title: "農業資材・バイオマスの活用",
          body: "微生物資材・酵素・液肥・堆肥・バイオマス発電燃料など、農業の高付加価値化と脱炭素を支援します。",
        },
      ],
      metricsHeading: "実績・指標",
      kpiMetrics: [
        { label: "主軸事業", value: "3", unit: "本柱", note: "営農型太陽光 / CO2削減 / 農業資材・早生樹" },
        { label: "CO2削減手法", value: "3", unit: "手法", note: "森林・海藻・特殊家畜飼料" },
        { label: "対応エリア", value: "栃木県", unit: "全域", note: "2026 年現在" },
        { label: "設立", value: "2015", unit: "年", note: "平成27年5月 農事組合法人として設立" },
      ],
    },
    collaboration: {
      tag: "Collaboration",
      title: "連携プロジェクトとして\n実証精度を高める。",
      subtitle:
        "アグリ・ジパングは、地域の農業・自治体・企業と連携しながら、営農型太陽光発電・CO2削減・農業資材の各領域で事業を展開しています。",
      items: [
        {
          title: "地域 × 行政 × 企業との連携",
          body: "農事組合法人として地域に根ざし、行政・企業・農家との連携を通じて持続可能な農業・環境事業を推進します。",
        },
        {
          title: "アジア・国際パートナーとの連携",
          body: "JBE JYO Biomass Energy Sdn Bhd (1538676-H) との連携を通じて、マレーシアをはじめとするアジア・中東での植林・環境事業を展開します。",
        },
      ],
      partner: {
        title: "Mother Vegetable社との連携",
        body: "アジア圏の海洋産業振興およびMother Vegetable社との連携により、多角的な環境事業を展開しています。海洋分野では藻場の再生活動（ブルーカーボン）や水質改善に取り組み、バイオマス分野ではエネルギー自給率の向上を目指して油脂植物からバイオディーゼルやバイオエタノール等の液体燃料を生産・提供しています。そのほか農業分野においては食料自給率の向上や酪農・畜産農家における飼料コストの削減の推進し、バイオスティミュラント（バイオマスイオンペレット）や植物バイオマスを活用する試みを行っています。",
        cta: "商品購入はこちら",
        ctaUrl: "https://mothervegetable.com/?instructor_code=agrizipang",
      },
    },
    company: {
      tag: "Company",
      title: "会社概要",
      subtitle: "アグリ・ジパングは、地域と企業の持続可能な共創を支援します。",
      rows: [
        { label: "会社名", value: "農事組合法人アグリ・ジパング" },
        { label: "所在地", value: "〒320-0811 栃木県宇都宮市大通り4丁目1番20号 けやき通りビル2F" },
        { label: "設立", value: "平成27年5月26日（2015年）" },
        { label: "代表理事", value: "林 一成（Kazunari Hayashi）" },
        { label: "資本金", value: "1,000万円" },
        { label: "役員理事", value: "6名" },
        { label: "事業内容", value: "営農型太陽光発電事業 / CO2削減ソリューション（森林・海藻・特殊家畜飼料） / 海外早生樹の生産・育苗・輸入販売 / 農産物の生産・販売 / 無農薬栽培システムの製造・販売 / 農業経営・栽培技術コンサルティング / 微生物資材・酵素の製造・販売 / 液肥・堆肥植物活性資材の製造・販売 / バイオマス発電燃料の生産・調達・販売" },
        { label: "電話", value: "028-625-2809（代）" },
        { label: "メール", value: "inquiry@agrizipang.com" },
      ],
      mapTitle: "栃木県宇都宮市",
    },
    contact: {
      badge: "お問い合わせ / Contact",
      title: "お問い合わせ・提携相談はこちらから。",
      subtitle:
        "事業開発、地域脱炭素、共同実証など、検討初期でも構いません。\n対象地域や課題感が固まりきっていない段階でもご相談いただけます。",
      infoTitle: "お問い合わせ先",
      infoItems: [
        { label: "メール", content: "inquiry@agrizipang.com", href: "mailto:inquiry@agrizipang.com" },
        { label: "電話", content: "028-625-2809（代）", href: "tel:0286252809" },
        { label: "対応時間", content: "平日 9:00 - 18:00（JST）", href: null },
      ],
      responseTime: "通常 1〜2 営業日以内にご返信",
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
      "農地 × 再エネ × 脱炭素を\nひとつの事業として設計する。",
      "農地と再エネ。\n両立させて、地域の未来をつくる。",
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
        "Agri Zipang advances agri-solar power, CO2 reduction, and agricultural materials businesses, bridging local governments, enterprises, and farming communities.",
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
        { label: "Base", value: "Utsunomiya, Tochigi" },
      ],
      themeSong: "Agri Zipang Theme Song",
    },
    about: {
      tag: "About",
      title: "Connecting agriculture to local and corporate ecosystems.",
      subtitle:
        "As an agricultural cooperative, Agri Zipang operates across agriculture, renewable energy, and CO2 reduction — delivering regional, grounded, and practical environmental business.",
      cards: [
        {
          title: "Agricultural & cultivation consulting",
          body: "We offer practical consulting for farm management improvement and cultivation technology adoption for farmers and agricultural businesses.",
        },
        {
          title: "Balancing farmland and renewable energy",
          body: "With agri-solar as our core, we advance regional decarbonization while preserving agricultural functions.",
        },
        {
          title: "Multi-approach CO2 reduction",
          body: "We address CO2 reduction through forestry (reforestation), seaweed (absorption/burial), and specialty livestock feed — combining multiple proven approaches.",
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
        "Target domains: forest / seaweed / specialty livestock feed",
        "Target area: Tochigi Prefecture",
        "Overseas fast-growing tree (Paulownia) production & import",
      ],
      items: [
        {
          title: "Multi-approach CO2 reduction",
          body: "We combine forestry (reforestation), seaweed (absorption/burial), and specialty livestock feed to deliver practical CO2 reduction.",
        },
        {
          title: "Fast-growing tree reforestation",
          body: "Through Paulownia production, seedling cultivation, and import sales overseas, we contribute to reforestation and CO2 absorption.",
        },
        {
          title: "Agricultural materials & biomass",
          body: "We support agricultural value enhancement and decarbonization through microbial materials, enzymes, liquid fertilizer, compost, and biomass fuel.",
        },
      ],
      metricsHeading: "Metrics & Results",
      kpiMetrics: [
        { label: "Core Businesses", value: "3", unit: "pillars", note: "Agri-solar / CO2 reduction / Agri materials & trees" },
        { label: "CO2 Reduction Methods", value: "3", unit: "approaches", note: "Forest · Seaweed · Livestock feed" },
        { label: "Service Area", value: "Tochigi", unit: "Pref.", note: "As of 2026" },
        { label: "Founded", value: "2015", unit: "year", note: "May 2015, Agricultural Cooperative Corp." },
      ],
    },
    collaboration: {
      tag: "Collaboration",
      title: "Elevating pilot precision through strategic collaboration.",
      subtitle:
        "Agri Zipang operates in collaboration with local communities, government, enterprises, and international partners across agri-solar, CO2 reduction, and agricultural materials.",
      items: [
        {
          title: "Regional × Government × Enterprise collaboration",
          body: "As an agricultural cooperative rooted in Tochigi, we collaborate with local government, enterprises, and farmers to drive sustainable agricultural and environmental business.",
        },
        {
          title: "Asia & international partner network",
          body: "Through our partnership with JBE JYO Biomass Energy Sdn Bhd (1538676-H), we expand reforestation and environmental businesses across Malaysia, Asia, and the Middle East.",
        },
      ],
      partner: {
        title: "Partnership with Mother Vegetable",
        body: "In collaboration with Mother Vegetable, we are expanding diversified environmental businesses across Asia. In the marine sector, we work on seaweed bed restoration (blue carbon) and water quality improvement. In biomass, we produce and supply liquid fuels such as biodiesel and bioethanol from oil-bearing plants to improve energy self-sufficiency. In agriculture, we promote food self-sufficiency and reduce feed costs for dairy and livestock farmers through biostimulants (biomass ion pellets) and plant biomass utilization.",
        cta: "Shop Products",
        ctaUrl: "https://mothervegetable.com/?instructor_code=agrizipang",
      },
    },
    company: {
      tag: "Company",
      title: "Company Overview",
      subtitle: "Agri Zipang supports sustainable co-creation between communities and enterprises.",
      rows: [
        { label: "Name", value: "Agri Zipang Agricultural Cooperative Corp." },
        { label: "Location", value: "〒320-0811 Keyaki-dori Bldg. 2F, 4-1-20 Odori, Utsunomiya, Tochigi, Japan" },
        { label: "Founded", value: "May 26, 2015" },
        { label: "Representative", value: "Kazunari Hayashi, Managing Director" },
        { label: "Capital", value: "¥10,000,000" },
        { label: "Directors", value: "6 members" },
        { label: "Business", value: "Agri-solar power / CO2 reduction (forestry, seaweed, specialty livestock feed) / Fast-growing tree production & import / Crop production & sales / Pesticide-free cultivation systems / Agricultural consulting / Biomass fuel production" },
        { label: "Phone", value: "028-625-2809" },
        { label: "Email", value: "inquiry@agrizipang.com" },
      ],
      mapTitle: "Utsunomiya, Tochigi",
    },
    contact: {
      badge: "Inquiry / Contact",
      title: "Ready to consult with us?",
      subtitle:
        "Whether it's business development, regional decarbonization, or joint verification — we welcome inquiries even at the earliest stage of consideration.",
      infoTitle: "Contact Information",
      infoItems: [
        { label: "Email", content: "inquiry@agrizipang.com", href: "mailto:inquiry@agrizipang.com" },
        { label: "Phone", content: "028-625-2809", href: "tel:0286252809" },
        { label: "Hours", content: "Weekdays 9:00–18:00 (JST)", href: null },
      ],
      responseTime: "We typically reply within 1–2 business days",
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
      "Farmland and renewables.\nBalancing both to build the region’s future.",
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
