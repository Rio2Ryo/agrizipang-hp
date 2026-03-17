const trustMetrics = [
  { label: "支援対象", value: "自治体・企業" },
  { label: "主軸", value: "営農型太陽光 / CO2 削減" },
  { label: "進行範囲", value: "構想→実証→運用" }
];

const businessPillars = [
  {
    title: "営農型太陽光発電",
    body: "農地活用と再生可能エネルギー導入を両立させ、地域経済と脱炭素の両面から事業化を支援します。",
    points: ["候補地整理", "制度・合意形成支援", "導入計画の策定"],
    icon: "☀️",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80"
  },
  {
    title: "CO2 削減ソリューション",
    body: "森林・海藻・飼料など複数の手段を組み合わせ、自治体・企業ごとに実行可能な削減計画へ落とし込みます。",
    points: ["削減テーマ整理", "実証設計", "KPI・開示指標の整理"],
    icon: "🌿",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80"
  },
  {
    title: "農業・資材・バイオマス支援",
    body: "主軸事業を補完するかたちで、資材供給、バイオマス燃料、周辺ソリューションの導入を支援します。",
    points: ["資材調達", "周辺事業設計", "運用体制づくり"],
    icon: "🌾",
    image: "https://images.unsplash.com/photo-1625246333195-f81961856161?w=400&q=80"
  }
];

const sustainabilityItems = [
  {
    title: "数値で語れる脱炭素",
    body: "CO2 削減量、対象領域、対象地域など、初期段階から説明責任を果たせる指標設計を重視します。",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
  },
  {
    title: "地域に残る仕組みづくり",
    body: "単発の実証で終わらせず、地域雇用・運営体制・継続予算まで見据えた実装を進めます。",
    icon: "🏘️",
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=400&q=80"
  },
  {
    title: "企業の事業性との両立",
    body: "ESG だけでなく、投資判断・調達要件・供給安定性まで見据えた B2B 設計を行います。",
    icon: "💼",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
  }
];

const collaborationItems = [
  {
    title: "自治体 × 企業 × 現場の三者連携",
    body: "行政計画、企業ニーズ、現場運用のギャップを埋め、実行可能な体制を組成します。",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80"
  },
  {
    title: "共同検証パートナーとの推進",
    body: "MVT は共同検証パートナーの一つとして参画し、連携プロジェクトとして実証の精度を高めます。",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80"
  }
];

const aboutCards = [
  {
    title: "自治体・企業への実行支援",
    body: "計画立案から現場実装まで、行政と企業の双方に向けた実行可能な提案と伴走型サポートを行います。",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
  },
  {
    title: "農地と再エネの両立設計",
    body: "営農型太陽光を主軸に、農業機能を守りながら地域の脱炭素化を推進。農地活用と事業性を両立します。",
    icon: "☀️",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80"
  },
  {
    title: "CO2 削減の可視化と信頼性",
    body: "削減量・根拠・指標を整理し、行政の計画策定・企業の ESG 開示に耐える水準で数値を提示します。",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&q=80"
  }
];

const kpiMetrics = [
  { label: "CO2 削減量", value: "準備中", unit: "トン/年", note: "実証案件実績（公開予定）" },
  { label: "発電規模", value: "準備中", unit: "kW", note: "営農型太陽光" },
  { label: "対応エリア", value: "栃木県", unit: "全域", note: "2026 年現在" },
  { label: "設立", value: "2019", unit: "年", note: "農事組合法人" }
];

import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavBar />
      {/* Hero Section - 背景画像：太陽光×農地 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep/95 via-deep/85 to-brand/80" />
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="tag mb-6 bg-white/90 text-deep">B2B / Local Government / Enterprise</span>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
                地域課題を、<br />
                事業として前に進める。<br />
                <span className="text-brand-200">アグリ・ジパング</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                アグリ・ジパングは、自治体と企業の連携を軸に、営農型太陽光発電と
                CO2 削減ソリューションを主軸とした地域共創プロジェクトを推進します。
                構想整理から実証、運用設計まで一気通貫で伴走します。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-deep transition hover:bg-white/90">
                  導入相談をする
                </a>
                <a href="#business" className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                  事業領域を見る
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {trustMetrics.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/30 bg-white/20 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">{item.label}</p>
                    <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero 右側：提供価値カード */}
            <div className="rounded-[2rem] border border-white/30 bg-white/95 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl">🌱</span>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Why Agri Zipang</p>
              </div>
              <h2 className="text-2xl font-bold text-deep">地域と事業をつなぐ、一気通貫の実行力</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">✓</span>
                  <span>農地・再エネ・脱炭素を一つの事業として設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">✓</span>
                  <span>自治体計画・企業 ESG ニーズの双方に対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">✓</span>
                  <span>構想整理から実証・運用まで伴走型で支援</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">✓</span>
                  <span>栃木県を起点とした地域密着の実行体制</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="tag mb-4">About</span>
          <h2 className="font-serif text-3xl font-bold text-deep md:text-5xl">農業を起点に、地域と企業の接続点をつくる。</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            地域資源の活用、脱炭素対応、事業性の確保。どれか一つだけでは前に進まないテーマに対して、
            アグリ・ジパングは複数の関係者をつなぎ、前提整理から実装までを設計します。
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutCards.map((card) => (
            <div key={card.title} className="card overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 text-3xl">{card.icon}</div>
                <h3 className="text-lg font-bold text-deep">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Business Section */}
      <section id="business" className="bg-slate-50/70 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="tag mb-4">Business</span>
            <h2 className="font-serif text-3xl font-bold text-deep md:text-5xl">主軸を明確にした、事業ポートフォリオ。</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              何でもやる印象ではなく、強みの核を明確に伝えるために、主軸と補完領域を整理した構成にしています。
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {businessPillars.map((item) => (
              <div key={item.title} className="card flex h-full flex-col overflow-hidden">
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-5">
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-deep">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {item.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Sustainability / KPI Section */}
      <section id="sustainability" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="tag mb-4">Sustainability</span>
            <h2 className="font-serif text-3xl font-bold text-deep md:text-5xl">持続可能性を、説明可能な価値へ。</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              初版では複雑な可視化よりも、自治体・企業が理解しやすい基本指標を明確に提示することを重視しています。
            </p>
            <div className="mt-8 rounded-[2rem] border border-brand/20 bg-brand/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Initial KPI Example</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>・CO2 削減量：公開準備中（実証案件にて計測中）</li>
                <li>・対象領域：森林 / 海藻 / 飼料</li>
                <li>・対象地域：栃木県内</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {sustainabilityItems.map((item) => (
              <div key={item.title} className="card overflow-hidden">
                <div className="h-32 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-deep">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI メトリクスカード */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-deep mb-8">実績・指標</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kpiMetrics.map((kpi) => (
              <div key={kpi.label} className="rounded-3xl border border-deep/15 bg-white p-6 text-center shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">{kpi.label}</p>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-deep">{kpi.value}</span>
                  <span className="text-lg font-medium text-brand">{kpi.unit}</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">{kpi.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Collaboration Section */}
      <section id="collaboration" className="bg-slate-50/70 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="tag mb-4">Collaboration</span>
            <h2 className="font-serif text-3xl font-bold text-deep md:text-5xl">連携プロジェクトとして、実証精度を高める。</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              行政、企業、現場、研究・検証パートナーが分断されたままでは、実装は進みません。
              アグリ・ジパングは関係者を束ねるハブとして機能します。
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {collaborationItems.map((item) => (
              <div key={item.title} className="card overflow-hidden">
                <div className="h-40 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-deep">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-deep/10 bg-white p-8 shadow-soft">
            <p className="text-sm leading-7 text-slate-600">
              MVT については前面に出しすぎず、共同検証の一部として自然に位置づけています。
              今後、実績・導入事例・協業体制の開示に応じて、より具体的な連携紹介へ拡張できます。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Company Section - 会社概要 */}
      <section id="company" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="tag mb-4">Company</span>
          <h2 className="font-serif text-3xl font-bold text-deep md:text-5xl">会社概要</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            アグリ・ジパングは、地域と企業の持続可能な共創を支援します。
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="card">
            <div className="grid grid-cols-[120px_1fr] gap-4 text-sm">
              <span className="font-semibold text-deep">会社名</span>
              <span className="text-slate-600">農事組合法人アグリ・ジパング</span>
              <span className="font-semibold text-deep">所在地</span>
              <span className="text-slate-600">栃木県</span>
              <span className="font-semibold text-deep">設立</span>
              <span className="text-slate-600">2019 年（農事組合法人）</span>
              <span className="font-semibold text-deep">事業内容</span>
              <span className="text-slate-600">営農型太陽光発電事業、CO2 削減ソリューション、農業支援</span>
              <span className="font-semibold text-deep">連絡先</span>
              <span className="text-slate-600">contact@agrizipang.jp</span>
            </div>
          </div>
          {/* 地図 - Google Maps 埋め込み */}
          <div className="rounded-[2rem] border border-deep/10 overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205978.7461937875!2d139.6386866!3d36.6839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d64c8c2f5b1b7%3A0x1e3f8e0c0c0c0c0c!2z5rGf6LC35Yy6!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="栃木県地図"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <span className="tag mb-4">Contact</span>
          <h2 className="font-serif text-3xl font-bold text-deep md:text-5xl">導入相談・提携相談はこちらから。</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            事業開発、地域脱炭素、共同実証など、検討初期でも構いません。対象地域や課題感が固まりきっていない段階でもご相談いただけます。
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card">
            <h3 className="text-2xl font-bold text-deep">お問い合わせ先</h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="font-semibold text-deep">メール</p>
                  <a href="mailto:contact@agrizipang.jp" className="text-brand hover:underline">contact@agrizipang.jp</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🕐</span>
                <div>
                  <p className="font-semibold text-deep">対応時間</p>
                  <p>平日 9:00 - 18:00（JST）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💬</span>
                <div>
                  <p className="font-semibold text-deep">主なご相談</p>
                  <p>導入相談 / 共同実証 / 提携相談 / 資料請求</p>
                </div>
              </div>
            </div>
          </div>
          <form className="card space-y-5">
            <div>
              <label htmlFor="company" className="text-sm font-semibold text-deep">団体・企業名</label>
              <input id="company" className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand" placeholder="例）〇〇市役所 / 〇〇株式会社" />
            </div>
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-deep">ご担当者名</label>
              <input id="name" className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand" placeholder="例）山田 太郎" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-deep">メールアドレス</label>
              <input id="email" type="email" className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand" placeholder="example@company.jp" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-deep">ご相談内容</label>
              <textarea id="message" rows={5} className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand" placeholder="対象地域、検討中テーマ、想定している連携内容などをご記入ください。" />
            </div>
            <button type="button" className="w-full rounded-full bg-brand px-6 py-4 font-semibold text-white transition hover:bg-brand/90">相談内容を送信する</button>
            <p className="text-xs text-slate-500">※ フォーム送信はデモ表示です。正式なお問い合わせはメールでご連絡ください。</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep py-12 px-6 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">アグリ・ジパング</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                地域課題を、事業として前に進める。<br />
                自治体と企業の連携を軸に、持続可能な地域共創を支援します。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">メニュー</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#business" className="hover:text-white transition">Business</a></li>
                <li><a href="#sustainability" className="hover:text-white transition">Sustainability</a></li>
                <li><a href="#collaboration" className="hover:text-white transition">Collaboration</a></li>
                <li><a href="#company" className="hover:text-white transition">Company</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">連絡先</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>📧 contact@agrizipang.jp</li>
                <li>📍 栃木県</li>
                <li>🕐 平日 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Agri Zipang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
