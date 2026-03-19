"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "business", href: "#business" },
  { key: "sustainability", href: "#sustainability" },
  { key: "collaboration", href: "#collaboration" },
  { key: "company", href: "#company" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Load music state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("agrzipang-music");
    if (saved === "on") {
      setIsPlaying(true);
    }
  }, []);

  // Toggle music
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
      audioRef.current.play().catch(() => {
        // Autoplay blocked, ignore
      });
      setIsPlaying(true);
      localStorage.setItem("agrzipang-music", "on");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-soft backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            {/* Generated logo */}
            <Image
              src="/images/logo.png"
              alt="アグリ・ジパング"
              width={1170}
              height={744}
              className={`h-10 w-auto transition-all object-contain ${scrolled ? "" : "brightness-0 invert"}`}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "ja" ? "en" : "ja")}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                scrolled
                  ? "border-deep/30 text-deep hover:bg-deep/5"
                  : "border-white/30 text-white/90 hover:bg-white/10"
              }`}
              aria-label="Switch language"
            >
              {lang === "ja" ? "EN" : "JA"}
            </button>

            {/* Music toggle */}
            <button
              onClick={toggleMusic}
              className={`p-2 rounded-full border transition-all ${
                scrolled
                  ? "border-deep/30 text-deep hover:bg-deep/5"
                  : "border-white/30 text-white/90 hover:bg-white/10"
              } ${isPlaying ? "bg-brand/20" : ""}`}
              aria-label={isPlaying ? "音楽をオフ" : "音楽をオン"}
              title={isPlaying ? "音楽をオフ" : "音楽をオン"}
            >
              {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            {/* CTA button */}
            <a
              href="#contact"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-deep text-white hover:bg-deep/90"
                  : "bg-white text-deep hover:bg-white/90"
              }`}
            >
              {t.nav.cta}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${scrolled ? "text-deep" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label="メニューを開く"
            aria-expanded={open}
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                open ? "translate-y-1.5 rotate-45" : "mb-1.5"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0 mb-0" : "mb-1.5"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-white border-t border-deep/10 px-6 py-4 shadow-soft">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-sm font-medium text-slate-700 hover:text-brand border-b border-deep/5 last:border-0"
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}

          {/* Mobile language toggle */}
          <div className="mt-4 mb-2 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "ja" ? "en" : "ja")}
              className="text-xs font-semibold px-4 py-2 rounded-full border border-deep/30 text-deep hover:bg-deep/5 transition-all"
              aria-label="Switch language"
            >
              {lang === "ja" ? "EN" : "JA"}
            </button>
            <button
              onClick={toggleMusic}
              className={`p-2 rounded-full border border-deep/30 transition-all ${
                isPlaying ? "bg-brand/20 text-deep" : "text-deep hover:bg-deep/5"
              }`}
              aria-label={isPlaying ? "音楽をオフ" : "音楽をオン"}
            >
              {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            className="mt-2 block rounded-full bg-deep px-5 py-3 text-center text-sm font-semibold text-white hover:bg-deep/90 transition-colors"
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
