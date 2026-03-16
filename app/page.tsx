const trustMetrics = [
  { label: "支援対象", value: "自治体・企業" },
  { label: "主軸", value: "営農型太陽光 / CO2削減" },
  { label: "進行範囲", value: "構想→実証→運用" }
];

const businessPillars = [
  {
    title: "営農型太陽光発電",
    body: "農地活用と再生可能エネルギー導入を両立させ、地域経済と脱炭素の両面から事業化を支援します。",
    points: ["候補地整理", "制度・合意形成支援", "導入計画の策定"]
  },
  {
    title: "CO2削減ソリューション",
    body: "森林・海藻・飼料など複数の手段を組み合わせ、自治体・企業ごとに実行可能な削減計画へ落とし込みます。",
    points: ["削減テーマ整理", "実証設計", "KPI・開示指標の整理"]
  },
  {
    title: "農業・資材・バイオマス支援",
    body: "主軸事業を補完するかたちで、資材供給、バイオマス燃料、周辺ソリューションの導入を支援します。",
    points: ["資材調達", "周辺事業設計", "運用体制づくり"]
  }
];

const sustainabilityItems = [
  {
    title: "数値で語れる脱炭素",
    body: "CO2削減量、対象領域、対象地域など、初期段階から説明責任を果たせる指標設計を重視します。"
  },
  {
    title: "地域に残る仕組みづくり",
    body: "単発の実証で終わらせず、地域雇用・運営体制・継続予算まで見据えた実装を進めます。"
  },
  {
    title: "企業の事業性との両立",
    body: "ESGだけでなく、投資判断・調達要件・供給安定性まで見据えたB2B設計を行います。"
  }
];

const collaborationItems = [
  {
    title: "自治体 × 企業 × 現場の三者連携",
    body: "行政計画、企業ニーズ、現場運用のギャップを埋め、実行可能な体制を組成します。"
  },
  {
    title: "共同検証パートナーとの推進",
    body: "MVTは共同検証パートナーの一つとして参画し、連携プロジェクトとして実証の精度を高めます。"
  }
];

const aboutCards = [
  {
    title: "信頼性のある情報設計",
    body: "自治体や企業が判断しやすいよう、事業の目的・スキーム・成果指標を明確に整理します。"
  },
  {
    title: "主軸を明確にした事業構成",
    body: "営農型太陽光発電とCO2削減提案を中核に据え、周辺事業を補完的に位置づけます。"
  },
  {
    title: "問い合わせ導線を最適化",
    body: "Hero、各セクション、最終セクションの複数導線で、相談につながる導線設計を行います。"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-atmosphere">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="tag mb-6">B2B / Local Government / Enterprise</span>
              <h1 className="font-serif text-4xl font-bold leading-tight text-deep md:text-6xl">
                地域課題を、<br />
                事業として前に進める。<br />
                <span className="text-brand">アグリ・ジパング</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                アグリ・ジパングは、自治体と企業の連携を軸に、営農型太陽光発電と
                CO2削減ソリューションを主軸とした地域共創プロジェクトを推進します。
                構想整理から実証、運用設計まで一気通貫で伴走します。
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-deep px-8 py-4 font-semibold text-white transition hover:bg-deep/90">
                  導入相談をする
                </a>
                <a href="#business" className="inline-flex items-center justify-center rounded-full border border-deep/25 bg-white/80 px-8 py-4 font-semibold text-deep transition hover:bg-deep/5">
                  事業領域を見る
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {trustMetrics.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-deep/10 bg-white/85 p-5 shadow-soft backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-bold text-deep">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-deep/10 bg-white/90 p-8 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Project Focus</p>
              <h2 className="mt-4 text-2xl font-bold text-deep">信用されるコーポレートLPを前提に設計</h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <li>・主軸は「営農型太陽光発電 / CO2削減提案」</li>
                <li>・副次領域として農業・資材・バイオマスを整理</li>
                <li>・数値実績や地域性を後から拡張しやすい構成</li>
                <li>・問い合わせ導線を全体に配置し、商談化を意識</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

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
            <div key={card.title} className="card">
              <h3 className="text-xl font-bold text-deep">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

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
              <div key={item.title} className="card flex h-full flex-col">
                <h3 className="text-2xl font-bold text-deep">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

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
                <li>・CO2削減量：XXXトン/年</li>
                <li>・対象領域：森林 / 海藻 / 飼料</li>
                <li>・対象地域：栃木県内</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {sustainabilityItems.map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-xl font-bold text-deep">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

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
              <div key={item.title} className="card">
                <h3 className="text-2xl font-bold text-deep">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-deep/10 bg-white p-8 shadow-soft">
            <p className="text-sm leading-7 text-slate-600">
              MVTについては前面に出しすぎず、共同検証の一部として自然に位置づけています。
              今後、実績・導入事例・協業体制の開示に応じて、より具体的な連携紹介へ拡張できます。
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

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
            <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              <p><span className="font-semibold text-deep">メール</span><br />contact@agrizipang.jp</p>
              <p><span className="font-semibold text-deep">対応時間</span><br />平日 9:00 - 18:00（JST）</p>
              <p><span className="font-semibold text-deep">主なご相談</span><br />導入相談 / 共同実証 / 提携相談 / 資料請求</p>
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
    </main>
  );
}
