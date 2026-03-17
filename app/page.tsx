"use client";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import {
  Sun, Wheat, Leaf, TrendingUp, Home as HomeIcon, Briefcase,
  Users, Microscope, MapPin, RefreshCcw, Building, CheckCircle2, ArrowRight,
  Mail, Clock, MessageSquare, Sprout, Target, Handshake, Factory, Globe
} from "lucide-react";

// ─── Icon maps (stable references outside render) ─────────────────────────────

const aboutIcons = [Handshake, Sun, TrendingUp] as const;

const businessIcons = [Sun, Leaf, Wheat] as const;

const businessGradients = [
  "from-[#1a4010] to-[#2D5016]",
  "from-[#0f3020] to-[#1a5030]",
  "from-[#2a3010] to-[#3d4a18]",
] as const;

const sustainabilityIcons = [TrendingUp, HomeIcon, Briefcase] as const;

const collaborationIcons = [Users, Microscope] as const;

const collaborationGradients = [
  "from-[#1a3508] via-[#2D5016] to-[#1e3b0a]",
  "from-[#0f2820] via-[#1a4030] to-[#0d1c18]",
] as const;

const whyIcons = [Wheat, Building, RefreshCcw, MapPin] as const;

const contactInfoIcons = [Mail, Clock, MessageSquare] as const;

// ─── Inner page component (uses useLanguage) ──────────────────────────────────

function HomePage() {
  const { t } = useLanguage();

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "business", label: t.nav.business },
    { id: "sustainability", label: t.nav.sustainability },
    { id: "collaboration", label: t.nav.collaboration },
    { id: "company", label: t.nav.company },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavBar />

      {/* ══════════════════════════════════════════════
          Hero Section
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#0f2007] via-[#1a3508] to-[#0d1c05]">

        {/* SVG geometric pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diag-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M0 48 L48 0" stroke="white" strokeWidth="0.8" fill="none" />
                <path d="M-12 48 L36 0" stroke="white" strokeWidth="0.4" fill="none" />
                <path d="M12 48 L60 0" stroke="white" strokeWidth="0.4" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag-grid)" />
          </svg>
        </div>

        {/* Dot pattern */}
        <div className="absolute inset-0 pattern-dots opacity-50 pointer-events-none" />

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ background: "radial-gradient(circle, rgba(74,144,226,0.18), transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl animate-pulse"
            style={{ background: "radial-gradient(circle, rgba(45,80,22,0.25), transparent 70%)", animationDelay: "1.5s" }}
          />
          {/* Solar energy accent: warm amber glow top-right */}
          <div
            className="absolute top-10 right-16 w-64 h-64 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, rgba(232,134,26,0.35), transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm mb-8">
                <Sprout className="w-3.5 h-3.5 text-brand-200" />
                {t.hero.badge}
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-white mb-6">
                {t.hero.title[0]}<br />
                <span className="text-brand-200">{t.hero.title[1]}</span><br />
                {t.hero.title[2]}
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-brand-200 to-transparent mb-8 rounded-full" />
              <p className="text-xl leading-relaxed text-white/80 mb-10 max-w-xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <a href="#contact" className="btn-primary">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </a>
                <a href="#business" className="btn-secondary">
                  {t.hero.ctaSecondary}
                </a>
              </div>

              {/* Trust metrics */}
              <div className="grid grid-cols-3 pt-8 border-t border-white/20">
                {t.hero.metrics.map((item, i) => (
                  <div
                    key={item.label}
                    className={`${i > 0 ? "border-l border-white/20 pl-6" : ""} ${i < 2 ? "pr-6" : ""}`}
                  >
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-white leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Why card */}
            <div>
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand/60 flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-200">{t.hero.whyTitle}</p>
                    <h2 className="text-xl font-bold text-white">{t.hero.whySubtitle}</h2>
                  </div>
                </div>
                <ul className="space-y-3">
                  {t.hero.reasons.map((reason, i) => {
                    const Icon = whyIcons[i];
                    return (
                      <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-brand-200" />
                        </div>
                        <span className="text-sm text-white/90 leading-snug mt-0.5">{reason}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          About Section — numbered cards, no images
      ══════════════════════════════════════════════ */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-3xl">
          <span className="tag mb-4">{t.about.tag}</span>
          <h2 className="section-title mb-6">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.about.cards.map((card, i) => {
            const Icon = aboutIcons[i];
            return (
              <div
                key={card.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border-l-4 border-l-deep"
              >
                {/* Number badge */}
                <div className="absolute top-5 right-5 text-6xl font-serif font-bold text-deep/8 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="p-8 pt-10">
                  {/* Icon chip */}
                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-gradient-to-r from-deep/8 to-brand/8 border border-deep/10">
                    <Icon className="w-4 h-4 text-deep" />
                    <span className="text-xs font-bold text-deep/60 uppercase tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-deep mb-3 leading-snug">{card.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{card.body}</p>
                </div>

                {/* Bottom accent line that extends on hover */}
                <div className="h-0.5 bg-gradient-to-r from-deep/40 to-brand/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Business Section — gradient header bands, no images
      ══════════════════════════════════════════════ */}
      <section id="business" className="bg-slate-50/80 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="tag mb-4">{t.business.tag}</span>
            <h2 className="section-title mb-6">{t.business.title}</h2>
            <p className="section-subtitle">{t.business.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.business.pillars.map((pillar, i) => {
              const Icon = businessIcons[i];
              const grad = businessGradients[i];
              return (
                <div
                  key={pillar.title}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Colored gradient header band */}
                  <div className={`bg-gradient-to-br ${grad} px-6 py-8 flex flex-col items-center text-center relative overflow-hidden`}>
                    {/* Subtle grid pattern in header */}
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%">
                        <defs>
                          <pattern id={`grid-${i}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M20 0 L0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-3 mx-auto shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-deep mb-3">{pillar.title}</h3>
                    <p className="text-sm leading-7 text-slate-600 mb-5">{pillar.body}</p>
                    <ul className="space-y-2.5">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Sustainability Section
      ══════════════════════════════════════════════ */}
      <section id="sustainability" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left column */}
          <div>
            <span className="tag mb-4">{t.sustainability.tag}</span>
            <h2 className="section-title mb-6">{t.sustainability.title}</h2>
            <p className="section-subtitle mb-10">{t.sustainability.subtitle}</p>

            {/* KPI example box */}
            <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-deep/5 via-brand/5 to-transparent p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand mb-5">
                {t.sustainability.kpiLabel}
              </p>
              <ul className="space-y-3.5">
                {t.sustainability.kpiItems.map((line) => (
                  <li key={line} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-brand to-deep flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: horizontal icon cards */}
          <div className="space-y-4">
            {t.sustainability.items.map((item, i) => {
              const Icon = sustainabilityIcons[i];
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-deep/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep/10 to-brand/10 border border-deep/10 flex items-center justify-center flex-shrink-0 group-hover:from-deep/15 group-hover:to-brand/15 transition-all">
                    <Icon className="w-7 h-7 text-deep" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-deep mb-1.5">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* KPI Metrics — larger, more prominent */}
        <div className="mt-24">
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
            <h3 className="text-center text-xl font-bold text-deep px-4 whitespace-nowrap">
              {t.sustainability.metricsHeading}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.sustainability.kpiMetrics.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
                  {kpi.label}
                </p>
                <div className="flex items-baseline justify-center gap-1.5 mb-1">
                  <span className="text-5xl font-bold font-serif gradient-text">{kpi.value}</span>
                  <span className="text-sm font-semibold text-brand">{kpi.unit}</span>
                </div>
                <p className="mt-3 text-xs text-slate-400">{kpi.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Collaboration Section — full-height gradient cards
      ══════════════════════════════════════════════ */}
      <section id="collaboration" className="bg-slate-50/80 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="tag mb-4">{t.collaboration.tag}</span>
            <h2 className="section-title mb-6">{t.collaboration.title}</h2>
            <p className="section-subtitle">{t.collaboration.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {t.collaboration.items.map((item, i) => {
              const Icon = collaborationIcons[i];
              const grad = collaborationGradients[i];
              return (
                <div
                  key={item.title}
                  className={`group relative bg-gradient-to-br ${grad} rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {/* Background geometric accent */}
                  <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id={`collab-dots-${i}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.5" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#collab-dots-${i})`} />
                    </svg>
                  </div>

                  {/* Large decorative number */}
                  <div className="absolute bottom-4 right-6 text-[8rem] font-serif font-bold text-white/5 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 p-10 flex flex-col items-center text-center min-h-[280px] justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mb-6 shadow-lg group-hover:bg-white/20 transition-all">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">{item.title}</h3>
                    <p className="text-sm leading-7 text-white/75 max-w-xs">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Company Section
      ══════════════════════════════════════════════ */}
      <section id="company" className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-3xl">
          <span className="tag mb-4">{t.company.tag}</span>
          <h2 className="section-title mb-6">{t.company.title}</h2>
          <p className="section-subtitle">{t.company.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Company info table */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
            <div className="divide-y divide-slate-100 text-sm">
              {t.company.rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[140px_1fr] gap-4 py-4 items-start">
                  <span className="font-semibold text-deep">{row.label}</span>
                  {"isEmail" in row && row.isEmail ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="text-brand hover:text-brand/80 transition-colors hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-slate-600">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Access / location info panel — replaces broken iframe */}
          <div className="bg-gradient-to-br from-deep/5 to-brand/5 rounded-2xl border border-deep/10 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-deep/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-deep" />
                </div>
                <h3 className="text-lg font-bold text-deep">アクセス / Access</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">所在地</p>
                    <p className="text-sm text-slate-700">栃木県</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">対応エリア</p>
                    <p className="text-sm text-slate-700">栃木県全域（その他要相談）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">法人種別</p>
                    <p className="text-sm text-slate-700">農事組合法人（2019 年設立）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Email</p>
                    <a href="mailto:contact@agrizipang.jp" className="text-sm text-brand hover:underline">
                      contact@agrizipang.jp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder visual */}
            <div className="mt-8 rounded-xl bg-white border border-deep/10 overflow-hidden shadow-inner h-32 flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-deep/30" />
              <span className="text-sm text-slate-400 font-medium">栃木県</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Contact Section — 導入相談
      ══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="bg-gradient-to-br from-deep via-[#1e3b0a] to-[#162d08] px-6 py-28 relative overflow-hidden"
      >
        {/* Background patterns */}
        <div className="absolute inset-0 pattern-dots opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #4A90E2, transparent 70%)" }}
        />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #2D5016, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm mb-6">
              {t.contact.badge}
            </span>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg leading-8 text-white/70 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact info + form grid */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">

            {/* Info panel */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <h3 className="text-lg font-bold text-white mb-6">{t.contact.infoTitle}</h3>
              <div className="space-y-5">
                {t.contact.infoItems.map((item, i) => {
                  const Icon = contactInfoIcons[i];
                  return (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-brand-200" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-brand-200 hover:text-white transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-white/80">{item.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Separator */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 leading-6">
                  導入相談・共同実証・提携のご相談など、
                  <br />検討初期段階でもお気軽にお問い合わせください。
                </p>
              </div>
            </div>

            {/* ContactForm */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Footer
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#0f1f07] py-14 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3 mb-10">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">アグリ・ジパング</h3>
              <p className="text-sm text-white/60 leading-7 whitespace-pre-line">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
                {t.footer.menuTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
                {t.footer.contactTitle}
              </h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>contact@agrizipang.jp</li>
                <li>栃木県</li>
                <li>平日 9:00 – 18:00</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>{t.footer.copy}</p>
            <p>{t.footer.org}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ─── Default export wraps in LanguageProvider ─────────────────────────────────

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
