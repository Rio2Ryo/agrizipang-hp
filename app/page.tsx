"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import {
  ArrowRight,
  Globe,
  Handshake,
  Leaf,
  Mail,
  MessageSquare,
  Clock,
  Sun,
  Wheat,
} from "lucide-react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import SectionDots from "./components/SectionDots";

const HERO_PHOTO = "/images/hero-bg.png";
const ABOUT_PHOTOS = [
  "/images/about-consulting.png",
  "/images/business-solar.png",
  "/images/business-agriculture.png",
] as const;
const BUSINESS_PHOTOS = [
  "/images/business-solar.png",
  "/images/business-co2.png",
  "/images/business-agriculture.png",
] as const;
const QUOTE_PHOTOS = [
  "/images/sustainability-community.png",
  "/images/collab-partnership.png",
] as const;
const COLLAB_PHOTOS = [
  "/images/collab-partnership.png",
  "/images/collab-research.png",
] as const;

const aboutIcons = [Handshake, Sun, Leaf] as const;
const businessIcons = [Sun, Leaf, Wheat] as const;
const contactInfoIcons = [Mail, Clock, MessageSquare] as const;

function HomePage() {
  const { lang, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("agrzipang-music");
    if (saved === "on") {
      setIsPlaying(true);
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/theme-song.mp4");
      audioRef.current.loop = true;
    }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem("agrzipang-music", "off");
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
      localStorage.setItem("agrzipang-music", "on");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "business", label: t.nav.business },
    { id: "sustainability", label: t.nav.sustainability },
    { id: "collaboration", label: t.nav.collaboration },
    { id: "company", label: t.nav.company },
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-900">
      <NavBar />
      <SectionDots />

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0 kenburns-wrap">
          <Image
            src={HERO_PHOTO}
            alt="Agri Zipang"
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns-image"
            style={{ filter: "contrast(1.1) saturate(1.1)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040d02]/75 via-[#0a1a04]/70 to-[#061505]/80" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-6 pb-12 pt-32 sm:px-8 md:pb-16 lg:px-10">
          <div className="max-w-4xl">
            <span className="hero-kicker hero-fade hero-fade-1 inline-block rounded-full bg-white/20 backdrop-blur-sm px-5 py-2 text-sm font-semibold tracking-widest text-white uppercase border border-white/30" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>{t.hero.badge}</span>
            <h1
              className="mt-6 font-serif text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl lg:text-[8.5rem]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 0 40px rgba(255,255,255,0.15)" }}
            >
              {t.hero.title.map((line, index) => (
                <span key={`${lang}-${line}`} className={`hero-line hero-fade hero-fade-${index + 2}`}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-fade hero-fade-5 mt-8 max-w-2xl text-base leading-8 text-white sm:text-lg sm:leading-9">
              {t.hero.subtitle}
            </p>
            <div className="hero-fade hero-fade-6 mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary cinematic-btn">
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#business" className="btn-ghost cinematic-btn">
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Theme Song Button */}
            <div className="hero-fade hero-fade-6 mt-8">
              <button
                onClick={toggleMusic}
                className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
                aria-label={isPlaying ? "音楽を停止" : "音楽を再生"}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
                  {isPlaying ? (
                    <Volume2 className="h-4 w-4" />
                  ) : (
                    <VolumeX className="h-4 w-4" />
                  )}
                </span>
                <span className="text-sm">{t.hero.themeSong}</span>
                {isPlaying && (
                  <span className="ml-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f6f2ea] px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="reveal grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">
              <Image src={ABOUT_PHOTOS[0]} alt="About Agri Zipang" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </div>
            <div className="grid gap-5 md:grid-rows-2">
              {ABOUT_PHOTOS.slice(1).map((src) => (
                <div key={src} className="relative min-h-[250px] overflow-hidden rounded-[2rem]">
                  <Image src={src} alt="Agri Zipang project" fill sizes="(max-width:1024px) 100vw, 22vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="reveal max-w-2xl">
              <span className="tag mb-6">{t.about.tag}</span>
              <h2 className="section-title mb-8">{t.about.title}</h2>
              <p className="section-subtitle">{t.about.subtitle}</p>
            </div>

            <div className="mt-12 space-y-5">
              {t.about.cards.map((card, i) => {
                const Icon = aboutIcons[i];
                const delayClass = (["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"] as const)[i];
                return (
                  <div key={card.title} className={`reveal ${delayClass} luxury-card p-7`}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-deep/8 text-deep">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-deep">{card.title}</h3>
                        <p className="mt-3 text-sm leading-8 text-stone-600 sm:text-base">{card.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="quote-band-photo relative overflow-hidden px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <Image src={BUSINESS_PHOTOS[0]} alt="Agri Zipang vision" fill sizes="100vw" className="object-cover scale-[1.04]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,2,0.6)_0%,rgba(3,8,2,0.72)_100%)]" />
        <blockquote className="reveal relative z-10 mx-auto max-w-6xl">
          <p className="font-serif text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-white whitespace-pre-line sm:text-3xl md:text-4xl lg:text-5xl">
            {t.quotes[0]}
          </p>
        </blockquote>
      </section>

      <section id="business" className="bg-[#f0ece4] px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <span className="tag mb-6">{t.business.tag}</span>
            <h2 className="section-title mb-8">{t.business.title}</h2>
            <p className="section-subtitle">{t.business.subtitle}</p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {t.business.pillars.map((pillar, i) => {
              const Icon = businessIcons[i];
              const delayClass = (["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"] as const)[i];
              return (
                <article
                  key={pillar.title}
                  className={`reveal ${delayClass} group overflow-hidden rounded-[2.25rem] border border-black/5 bg-white shadow-[0_30px_80px_rgba(28,33,18,0.10)] transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02]`}
                >
                  <div className="flex h-full flex-col">
                    <div className="relative h-64">
                      <Image src={BUSINESS_PHOTOS[i]} alt={pillar.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.28)_100%)]" />
                    </div>
                    <div className="flex flex-1 flex-col p-8 sm:p-10">
                      <div className="flex items-center gap-4 text-deep/70">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep/8">
                          <Icon className="h-5 w-5 text-deep" />
                        </span>
                        <span className="text-5xl font-black uppercase tracking-[0.15em] text-deep/20">0{i + 1}</span>
                      </div>
                      <h3 className="mt-7 font-serif text-3xl font-semibold leading-tight tracking-[-0.03em] text-deep sm:text-4xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
                        {pillar.body}
                      </p>
                      <ul className="mt-8 space-y-3 text-sm text-stone-700 sm:text-base">
                        {pillar.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sustainability" className="bg-white px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="reveal max-w-2xl">
            <span className="tag mb-6">{t.sustainability.tag}</span>
            <h2 className="section-title mb-8">{t.sustainability.title}</h2>
            <p className="section-subtitle">{t.sustainability.subtitle}</p>
          </div>

          <div className="grid gap-5">
            {t.sustainability.items.map((item, i) => {
              const delayClass = (["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"] as const)[i];
              return (
                <div key={item.title} className={`reveal ${delayClass} luxury-card p-7 sm:p-8`}>
                  <h3 className="font-serif text-2xl font-semibold tracking-[-0.03em] text-deep sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-stone-600 sm:text-base">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="quote-band-photo relative overflow-hidden px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <Image src={QUOTE_PHOTOS[1]} alt="Collaboration" fill sizes="100vw" className="object-cover scale-[1.04]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,5,0.58)_0%,rgba(5,10,5,0.78)_100%)]" />
        <blockquote className="reveal relative z-10 mx-auto max-w-6xl text-center">
          <p className="font-serif text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-white whitespace-pre-line sm:text-3xl md:text-4xl lg:text-5xl">
            {t.quotes[1]}
          </p>
        </blockquote>
      </section>

      <section id="collaboration" className="bg-[#f6f2ea] px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <span className="tag mb-6">{t.collaboration.tag}</span>
            <h2 className="section-title mb-8">{t.collaboration.title}</h2>
            <p className="section-subtitle">{t.collaboration.subtitle}</p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {t.collaboration.items.map((item, i) => (
              <article key={item.title} className={`reveal ${i === 0 ? "reveal-delay-1" : "reveal-delay-2"} group relative min-h-[520px] overflow-hidden rounded-[2rem]`}>
                <Image src={COLLAB_PHOTOS[i]} alt={item.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,6,0.15)_0%,rgba(7,10,6,0.72)_78%,rgba(7,10,6,0.86)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-8 sm:p-10">
                  <h3 className="font-serif text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-8 text-white/80 sm:text-base">{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          {t.collaboration.partner && (
            <div className="reveal reveal-delay-3 mt-10 rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_rgba(28,33,18,0.08)] sm:p-10 lg:p-12">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-deep/8 text-deep">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="max-w-4xl">
                  <h3 className="font-serif text-3xl font-semibold tracking-[-0.03em] text-deep sm:text-4xl">{t.collaboration.partner.title}</h3>
                  <p className="mt-5 text-sm leading-8 text-stone-600 sm:text-base">{t.collaboration.partner.body}</p>
                  <a href={t.collaboration.partner.ctaUrl} target="_blank" rel="noopener noreferrer" className="btn-inline mt-8 inline-flex items-center gap-2 text-sm font-semibold text-deep">
                    {t.collaboration.partner.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="company" className="bg-white px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <span className="tag mb-6">{t.company.tag}</span>
            <h2 className="section-title mb-8">{t.company.title}</h2>
            <p className="section-subtitle">{t.company.subtitle}</p>
          </div>

          <div className="mt-16 max-w-4xl">
            <div className="reveal reveal-delay-1 overflow-hidden rounded-[2rem] border border-stone-200/70 bg-[#fbfaf7] p-7 shadow-[0_20px_50px_rgba(28,33,18,0.06)] sm:p-10">
              <div className="divide-y divide-stone-200/80 text-sm sm:text-base">
                {t.company.rows.map((row) => (
                  <div key={row.label} className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <span className="font-semibold text-deep">{row.label}</span>
                    {"isEmail" in row && row.isEmail ? (
                      <a href={`mailto:${row.value}`} className="text-stone-600 transition-colors hover:text-deep">
                        {row.value}
                      </a>
                    ) : (
                      <span className="leading-8 text-stone-600">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#efe9de] px-6 py-28 sm:px-8 md:py-36 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="reveal text-center">
            <span className="tag mb-6">{t.contact.badge}</span>
            <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-deep sm:text-5xl md:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="reveal reveal-delay-1 rounded-[2rem] border border-stone-200/70 bg-white p-8 shadow-[0_18px_45px_rgba(28,33,18,0.05)] sm:p-10">
              <h3 className="font-serif text-3xl font-semibold tracking-[-0.03em] text-deep">{t.contact.infoTitle}</h3>
              <div className="mt-8 space-y-6">
                {t.contact.infoItems.map((item, i) => {
                  const Icon = contactInfoIcons[i];
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-deep/8 text-deep">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-stone-400">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="mt-2 inline-block text-sm leading-8 text-stone-700 transition-colors hover:text-deep sm:text-base">
                            {item.content}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm leading-8 text-stone-700 sm:text-base">{item.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="reveal reveal-delay-2 minimalist-form-shell rounded-[2rem] border border-stone-200/70 bg-white p-4 shadow-[0_18px_45px_rgba(28,33,18,0.05)] sm:p-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#10150d] px-6 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Image src="/images/logo.png" alt="アグリ・ジパング" width={908} height={435} className="h-10 w-auto object-contain brightness-0 invert" />
              <p className="mt-5 text-sm leading-8 text-white/60 whitespace-pre-line">{t.footer.tagline}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.18em] text-white/35">{t.footer.menuTitle}</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="footer-link inline-block transition-colors hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.18em] text-white/35">{t.footer.contactTitle}</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/60">
                {t.contact.infoItems.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="footer-link inline-block transition-colors hover:text-white">
                        {item.content}
                      </a>
                    ) : (
                      item.content
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex sm:items-center sm:justify-between">
            <p>{t.footer.copy}</p>
            <p className="mt-2 sm:mt-0">{t.footer.org}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
