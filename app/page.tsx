import Image from "next/image";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";

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
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
  },
  {
    title: "CO2 削減ソリューション",
    body: "森林・海藻・飼料など複数の手段を組み合わせ、自治体・企業ごとに実行可能な削減計画へ落とし込みます。",
    points: ["削減テーマ整理", "実証設計", "KPI・開示指標の整理"],
    icon: "🌿",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80"
  },
  {
    title: "農業・資材・バイオマス支援",
    body: "主軸事業を補完するかたちで、資材供給、バイオマス燃料、周辺ソリューションの導入を支援します。",
    points: ["資材調達", "周辺事業設計", "運用体制づくり"],
    icon: "🌾",
    image: "https://images.unsplash.com/photo-1625246333195-f81961856161?w=600&q=80"
  }
];

const sustainabilityItems = [
  {
    title: "数値で語れる脱炭素",
    body: "CO2 削減量、対象領域、対象地域など、初期段階から説明責任を果たせる指標設計を重視します。",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
  },
  {
    title: "地域に残る仕組みづくり",
    body: "単発の実証で終わらせず、地域雇用・運営体制・継続予算まで見据えた実装を進めます。",
    icon: "🏘️",
    image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=600&q=80"
  },
  {
    title: "企業の事業性との両立",
    body: "ESG だけでなく、投資判断・調達要件・供給安定性まで見据えた B2B 設計を行います。",
    icon: "💼",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
  }
];

const collaborationItems = [
  {
    title: "自治体 × 企業 × 現場の三者連携",
    body: "行政計画、企業ニーズ、現場運用のギャップを埋め、実行可能な体制を組成します。",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
  },
  {
    title: "共同検証パートナーとの推進",
    body: "外部の研究・検証パートナーと連携し、実証の精度と再現性を高めながら事業化を進めます。",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80"
  }
];

const aboutCards = [
  {
    title: "自治体・企業への実行支援",
    body: "計画立案から現場実装まで、行政と企業の双方に向けた実行可能な提案と伴走型サポートを行います。",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
  },
  {
    title: "農地と再エネの両立設計",
    body: "営農型太陽光を主軸に、農業機能を守りながら地域の脱炭素化を推進。農地活用と事業性を両立します。",
    icon: "☀️",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80"
  },
  {
    title: "CO2 削減の可視化と信頼性",
    body: "削減量・根拠・指標を整理し、行政の計画策定・企業の ESG 開示に耐える水準で数値を提示します。",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&q=80"
  }
];

const kpiMetrics = [
  { label: "CO2 削減量", value: "—", unit: "トン/年", note: "実証案件実績（公開準備中）" },
  { label: "発電規模", value: "—", unit: "kW", note: "営農型太陽光（準備中）" },
  { label: "対応エリア", value: "栃木県", unit: "全域", note: "2026 年現在" },
  { label: "設立", value: "2019", unit: "年", note: "農事組合法人として設立" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <NavBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep/50 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag mb-8 inline-block">🌱 B2B / Local Government / Enterprise</span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-white mb-8">
                地域課題を、<br />
                <span className="text-brand-200">事業として</span><br />
                前に進める。
              </h1>
              <p className="text-xl leading-relaxed text-white/80 mb-10 max-w-xl">
                アグリ・ジパングは、自治体と企業の連携を軸に、営農型太陽光発電と
                CO2 削減ソリューションを主軸とした地域共創プロジェクトを推進します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#contact" className="btn-primary">
                  導入相談をする →
                </a>
                <a href="#business" className="btn-secondary">
                  事業を見る
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                {trustMetrics.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-wider text-white/60 mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-deep flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">Why Agri Zipang</p>
                    <h2 className="text-xl font-bold text-white">選ばれる理由</h2>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: '🌾', text: '農地・再エネ・脱炭素を一つの事業として設計' },
                    { icon: '🏛️', text: '自治体計画・企業 ESG ニーズの双方に対応' },
                    { icon: '🔄', text: '構想整理から実証・運用まで伴走型で支援' },
                    { icon: '📍', text: '栃木県を起点とした地域密着の実行体制' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-white/90">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="tag mb-4">About</span>
          <h2 className="section-title mb-6">農業を起点に、地域と企業の接続点をつくる。</h2>
          <p className="section-subtitle">
            地域資源の活用、脱炭素対応、事業性の確保。どれか一つだけでは前に進まないテーマに対して、
            アグリ・ジパングは複数の関係者をつなぎ、前提整理から実装までを設計します。
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {aboutCards.map((card) => (
            <div key={card.title} className="card !p-0 overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden image-zoom">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-deep mb-3">{card.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Business Section */}
      <section id="business" className="bg-slate-100/50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="tag mb-4">Business</span>
            <h2 className="section-title mb-6">主軸を明確にした、事業ポートフォリオ。</h2>
            <p className="section-subtitle">
              何でもやる印象ではなく、強みの核を明確に伝えるために、主軸と補完領域を整理した構成にしています。
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {businessPillars.map((item) => (
              <div key={item.title} className="card !p-0 overflow-hidden group">
                <div className="relative h-52 w-full overflow-hidden image-zoom">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-deep mb-3">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600 mb-4">{item.body}</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Sustainability Section */}
      <section id="sustainability" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="tag mb-4">Sustainability</span>
            <h2 className="section-title mb-6">持続可能性を、説明可能な価値へ。</h2>
            <p className="section-subtitle mb-8">
              初版では複雑な可視化よりも、自治体・企業が理解しやすい基本指標を明確に提示することを重視しています。
            </p>
            <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 to-deep/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand mb-4">Initial KPI Example</p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  CO2 削減量：XXX トン/年
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  対象領域：森林 / 海藻 / 飼料
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  対象地域：栃木県内
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            {sustainabilityItems.map((item) => (
              <div key={item.title} className="card flex items-start gap-4 group">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden image-zoom flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500"
                    sizes="80px"
                  />
                </div>
                <div>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-xl font-bold text-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI Metrics */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-deep mb-8">実績・指標</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kpiMetrics.map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">{kpi.label}</p>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{kpi.value}</span>
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
      <section id="collaboration" className="bg-slate-100/50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="tag mb-4">Collaboration</span>
            <h2 className="section-title mb-6">連携プロジェクトとして、実証精度を高める。</h2>
            <p className="section-subtitle">
              行政、企業、現場、研究・検証パートナーが分断されたままでは、実装は進みません。
              アグリ・ジパングは関係者を束ねるハブとして機能します。
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {collaborationItems.map((item) => (
              <div key={item.title} className="card !p-0 overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden image-zoom">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-deep mb-2">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Company Section */}
      <section id="company" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="tag mb-4">Company</span>
          <h2 className="section-title mb-6">会社概要</h2>
          <p className="section-subtitle">
            アグリ・ジパングは、地域と企業の持続可能な共創を支援します。
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="card">
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-slate-100">
                <span className="font-semibold text-deep">会社名</span>
                <span className="text-slate-600">農事組合法人アグリ・ジパング</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-slate-100">
                <span className="font-semibold text-deep">所在地</span>
                <span className="text-slate-600">栃木県</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-slate-100">
                <span className="font-semibold text-deep">設立</span>
                <span className="text-slate-600">2019 年（農事組合法人）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 py-3 border-b border-slate-100">
                <span className="font-semibold text-deep">事業内容</span>
                <span className="text-slate-600">営農型太陽光発電事業、CO2 削減ソリューション、農業支援</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-4 py-3">
                <span className="font-semibold text-deep">連絡先</span>
                <a href="mailto:contact@agrizipang.jp" className="text-brand hover:underline">contact@agrizipang.jp</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205978.7461937875!2d139.6386866!3d36.6839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d64c8c2f5b1b7%3A0x1e3f8e0c0c0c0c0c!2z5rGf6LC35Yy6!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp"
              width="100%"
              height="360"
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
        <div className="text-center mb-12">
          <span className="tag mb-4">Contact</span>
          <h2 className="section-title mb-6">導入相談・提携相談はこちらから。</h2>
          <p className="section-subtitle mx-auto">
            事業開発、地域脱炭素、共同実証など、検討初期でも構いません。対象地域や課題感が固まりきっていない段階でもご相談いただけます。
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div className="card">
            <h3 className="text-2xl font-bold text-deep mb-6">お問い合わせ先</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-2xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <p className="font-semibold text-deep mb-1">メール</p>
                  <a href="mailto:contact@agrizipang.jp" className="text-brand hover:underline">contact@agrizipang.jp</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-2xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <p className="font-semibold text-deep mb-1">対応時間</p>
                  <p className="text-slate-600">平日 9:00 - 18:00（JST）</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-2xl flex-shrink-0">
                  💬
                </div>
                <div>
                  <p className="font-semibold text-deep mb-1">主なご相談</p>
                  <p className="text-slate-600">導入相談 / 共同実証 / 提携相談 / 資料請求</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-deep to-deep/90 py-12 px-6 text-white">
        <div className="mx-auto max-w-7xl">
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
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>&copy; 2026 Agri Zipang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
