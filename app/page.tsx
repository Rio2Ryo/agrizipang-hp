"use client";

import { useEffect } from "react";
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

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#0b1a05] via-[#152c08] to-[#0d1c05]">

        {/* SVG diagonal-grid overlay */}
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
            className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl animate-glow-pulse"
            style={{ background: "radial-gradient(circle, rgba(74,144,226,0.22), transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full blur-3xl animate-glow-pulse"
            style={{ background: "radial-gradient(circle, rgba(45,80,22,0.3), transparent 70%)", animationDelay: "1.5s" }}
          />
          {/* Warm amber accent */}
          <div
            className="absolute top-10 right-16 w-72 h-72 rounded-full blur-3xl opacity-25"
            style={{ background: "radial-gradient(circle, rgba(232,134,26,0.4), transparent 70%)" }}
          />
        </div>

        {/* Decorative floating shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-left floating circle */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-white/[0.06] animate-float-slow" />
          {/* Bottom-right floating arc */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-white/[0.05] animate-float-rev" />
          {/* Mid-left small accent dot cluster */}
          <svg
            className="absolute left-8 top-1/2 -translate-y-1/2 opacity-[0.12] animate-float"
            width="80" height="80" viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[0,1,2,3,4].map((row) =>
              [0,1,2,3,4].map((col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 16 + 8}
                  cy={row * 16 + 8}
                  r="1.5"
                  fill="white"
                />
              ))
            )}
          </svg>
          {/* Mid-right small accent dot cluster */}
          <svg
            className="absolute right-12 bottom-1/3 opacity-[0.10] animate-float-rev"
            width="60" height="60" viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[0,1,2,3].map((row) =>
              [0,1,2,3].map((col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 16 + 8}
                  cy={row * 16 + 8}
                  r="1.5"
                  fill="white"
                />
              ))
            )}
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              {/* Badge — hero-1 */}
              <div className="hero-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm mb-8 shadow-sm">
                  <Sprout className="w-3.5 h-3.5 text-brand-200" />
                  {t.hero.badge}
                </span>
              </div>

              {/* H1 — hero-2 */}
              <h1 className="hero-2 font-serif text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-6">
                <span className="text-white">{t.hero.title[0]}</span><br />
                <span className="bg-gradient-to-r from-brand-200 via-white/90 to-brand bg-clip-text text-transparent">
                  {t.hero.title[1]}
                </span><br />
                <span className="text-white">{t.hero.title[2]}</span>
              </h1>

              {/* Accent bar — hero-3 */}
              <div className="hero-3">
                <div className="w-20 h-1 bg-gradient-to-r from-brand-200 via-brand/60 to-transparent mb-8 rounded-full" />
                <p className="text-xl leading-relaxed text-white/75 mb-10 max-w-xl">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* CTAs — hero-4 */}
              <div className="hero-4 flex flex-col sm:flex-row gap-4 mb-14">
                <a href="#contact" className="group btn-primary hover-ring">
                  <span className="shine-sweep" />
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="#business" className="btn-secondary">
                  {t.hero.ctaSecondary}
                </a>
              </div>

              {/* Trust metrics — hero-5 */}
              <div className="hero-5 grid grid-cols-3 pt-8 border-t border-white/[0.15]">
                {t.hero.metrics.map((item, i) => (
                  <div
                    key={item.label}
                    className={`${i > 0 ? "border-l border-white/[0.15] pl-6" : ""} ${i < 2 ? "pr-6" : ""}`}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-white leading-snug bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Why card — glassmorphism + float */}
            <div className="hero-3">
              <div className="group relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl border border-white/[0.12] p-8 shadow-2xl animate-float">
                {/* Shine sweep overlay */}
                <div className="shine-sweep rounded-3xl" />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand/60 flex items-center justify-center shadow-lg shadow-brand/30">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-200">{t.hero.whyTitle}</p>
                    <h2 className="text-xl font-bold text-white">{t.hero.whySubtitle}</h2>
                  </div>
                </div>

                <ul className="space-y-3 relative z-10">
                  {t.hero.reasons.map((reason, i) => {
                    const Icon = whyIcons[i];
                    return (
                      <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] transition-colors duration-200 hover:bg-white/[0.09]">
                        <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-brand-200" />
                        </div>
                        <span className="text-sm text-white/85 leading-snug mt-0.5">{reason}</span>
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
          About Section
      ══════════════════════════════════════════════ */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">

        {/* Header — reveal */}
        <div className="reveal max-w-3xl">
          <span className="tag mb-4">{t.about.tag}</span>
          <h2 className="section-title mb-6">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.about.cards.map((card, i) => {
            const Icon = aboutIcons[i];
            const delayClass = (["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"] as const)[i];
            return (
              <div
                key={card.title}
                className={`group reveal ${delayClass} relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-l-[#2D5016] hover:shadow-[0_20px_60px_rgba(45,80,22,0.12)] border-l-4 border-l-deep`}
              >
                {/* Shine sweep */}
                <div className="shine-sweep" />

                {/* Number watermark */}
                <div className="absolute top-5 right-5 text-6xl font-serif font-bold text-deep/5 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="p-8 pt-10 relative z-10">
                  {/* Icon chip */}
                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-2 rounded-xl bg-gradient-to-r from-deep/10 to-brand/10 border border-deep/10 shadow-sm">
                    <Icon className="w-5 h-5 text-deep" />
                    <span className="text-xs font-bold text-deep/60 uppercase tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-deep mb-3 leading-snug">{card.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{card.body}</p>
                </div>

                {/* Bottom accent line */}
                <div className="h-0.5 bg-gradient-to-r from-deep/50 to-brand/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Business Section
      ══════════════════════════════════════════════ */}
      <section id="business" className="bg-slate-50/80 px-6 py-28">
        <div className="mx-auto max-w-7xl">

          {/* Header — reveal */}
          <div className="reveal max-w-3xl">
            <span className="tag mb-4">{t.business.tag}</span>
            <h2 className="section-title mb-6">{t.business.title}</h2>
            <p className="section-subtitle">{t.business.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.business.pillars.map((pillar, i) => {
              const Icon = businessIcons[i];
              const grad = businessGradients[i];
              const delayClass = (["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"] as const)[i];
              return (
                <div
                  key={pillar.title}
                  className={`group/card reveal ${delayClass} bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(45,80,22,0.18)]`}
                >
                  {/* Gradient header band */}
                  <div className={`bg-gradient-to-br ${grad} px-6 py-10 flex flex-col items-center text-center relative overflow-hidden`}>
                    {/* Shine sweep */}
                    <div className="shine-sweep" />
                    {/* Grid pattern */}
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
                      <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-3 mx-auto shadow-lg group-hover/card:scale-[1.02] transition-transform duration-500">
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

                  {/* Card number watermark */}
                  <div className="absolute bottom-4 right-5 text-[6rem] font-serif font-bold text-white/20 leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
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

          {/* Left column — reveal */}
          <div className="reveal">
            <span className="tag mb-4">{t.sustainability.tag}</span>
            <h2 className="section-title mb-6">{t.sustainability.title}</h2>
            <p className="section-subtitle mb-10">{t.sustainability.subtitle}</p>

            {/* KPI example box */}
            <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-deep/5 via-brand/5 to-transparent p-7 relative overflow-hidden">
              <div className="shine-sweep group" />
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand mb-5 relative z-10">
                {t.sustainability.kpiLabel}
              </p>
              <ul className="space-y-3.5 relative z-10">
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
              const delayClass = (["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"] as const)[i];
              return (
                <div
                  key={item.title}
                  className={`group reveal ${delayClass} flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-deep/20`}
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

        {/* KPI Metrics */}
        <div className="mt-24">
          <div className="reveal flex items-center gap-4 justify-center mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
            <h3 className="text-center text-xl font-bold text-deep px-4 whitespace-nowrap">
              {t.sustainability.metricsHeading}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.sustainability.kpiMetrics.map((kpi, i) => {
              const delayClass = (["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"] as const)[i];
              return (
                <div
                  key={kpi.label}
                  className={`reveal ${delayClass} gradient-border-card rounded-2xl bg-white p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
                    {kpi.label}
                  </p>
                  <div className="flex items-baseline justify-center gap-1.5 mb-1">
                    <span className="text-6xl font-bold font-serif stat-number gradient-text">{kpi.value}</span>
                    <span className="text-sm font-semibold text-brand">{kpi.unit}</span>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{kpi.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Collaboration Section
      ══════════════════════════════════════════════ */}
      <section id="collaboration" className="bg-slate-50/80 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <span className="tag mb-4">{t.collaboration.tag}</span>
            <h2 className="section-title mb-6">{t.collaboration.title}</h2>
            <p className="section-subtitle">{t.collaboration.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {t.collaboration.items.map((item, i) => {
              const Icon = collaborationIcons[i];
              const grad = collaborationGradients[i];
              const delayClass = (["reveal-delay-1", "reveal-delay-2"] as const)[i];
              return (
                <div
                  key={item.title}
                  className={`group reveal ${delayClass} relative bg-gradient-to-br ${grad} rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {/* Shine sweep */}
                  <div className="shine-sweep" />

                  {/* Decorative top-right arc */}
                  <svg
                    className="absolute top-0 right-0 opacity-[0.08] pointer-events-none"
                    width="120" height="120" viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="120" cy="0" r="80" fill="none" stroke="white" strokeWidth="1.5" />
                    <circle cx="120" cy="0" r="50" fill="none" stroke="white" strokeWidth="1" />
                  </svg>

                  {/* Dot background */}
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

                  <div className="relative z-10 p-10 flex flex-col items-center text-center min-h-[300px] justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
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

        {/* Header — reveal */}
        <div className="reveal max-w-3xl">
          <span className="tag mb-4">{t.company.tag}</span>
          <h2 className="section-title mb-6">{t.company.title}</h2>
          <p className="section-subtitle">{t.company.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Company info table */}
          <div className="reveal reveal-delay-1 bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
            <div className="divide-y divide-slate-100 text-sm">
              {t.company.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr] gap-4 py-4 items-start hover:bg-deep/[0.02] rounded-lg px-2 -mx-2 transition-colors duration-200"
                >
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

          {/* Access / location panel */}
          <div className="reveal reveal-delay-2 bg-gradient-to-br from-deep/5 to-brand/5 rounded-2xl border border-deep/10 p-8 flex flex-col justify-between shadow-xl">
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

            {/* Stylized map placeholder: dot-grid with pin */}
            <div className="mt-8 rounded-xl bg-white border border-deep/10 overflow-hidden shadow-inner h-36 relative flex items-center justify-center">
              {/* Dot grid background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.12]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="map-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="#2D5016" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-dots)" />
              </svg>
              {/* Centered pin + label */}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-deep/10 border-2 border-deep/20 flex items-center justify-center shadow-md">
                  <MapPin className="w-5 h-5 text-deep" />
                </div>
                <span className="text-xs font-semibold text-deep/60 tracking-wide">栃木県</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          Contact Section
      ══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="bg-gradient-to-br from-deep via-[#1e3b0a] to-[#162d08] px-6 py-28 relative overflow-hidden"
      >
        {/* Background patterns */}
        <div className="absolute inset-0 pattern-dots opacity-60 pointer-events-none" />
        <div
          className="absolute top-0 left-0 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #4A90E2, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: "radial-gradient(circle, #2D5016, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm mb-6">
              {t.contact.badge}
            </span>
            <h2 className="font-serif text-4xl font-black tracking-tight text-white md:text-5xl mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg leading-8 text-white/70 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact info + form grid */}
          <div className="reveal grid gap-8 lg:grid-cols-[1fr_1.6fr]">

            {/* Info panel */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 border-t-2 border-t-brand/30 p-6 flex flex-col justify-between">
              <div>
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

                {/* Separator note */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 leading-6">
                    導入相談・共同実証・提携のご相談など、
                    <br />検討初期段階でもお気軽にお問い合わせください。
                  </p>
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 border border-brand/25 px-4 py-2">
                  <Clock className="w-3.5 h-3.5 text-brand-200" />
                  <span className="text-xs font-semibold text-brand-200 tracking-wide">
                    通常 1〜2 営業日以内にご返信
                  </span>
                </div>
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
      <footer className="bg-[#0f1f07] border-t-2 border-t-deep/20 py-14 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3 mb-10">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-brand-200" />
                アグリ・ジパング
              </h3>
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
            <p>© {new Date().getFullYear()} {t.footer.copy}</p>
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
