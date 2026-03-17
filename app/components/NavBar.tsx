"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Business", href: "#business" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-soft backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className={`font-serif text-lg font-bold transition-colors ${
              scrolled ? "text-deep" : "text-white"
            }`}
          >
            アグリ・ジパング
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-deep text-white hover:bg-deep/90"
                  : "bg-white text-deep hover:bg-white/90"
              }`}
            >
              導入相談
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${scrolled ? "text-deep" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label="メニューを開く"
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${open ? "translate-y-1.5 rotate-45" : "mb-1.5"}`} />
            <span className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${open ? "opacity-0 mb-0" : "mb-1.5"}`} />
            <span className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-deep/10 px-6 py-4 shadow-soft">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-slate-700 hover:text-brand border-b border-deep/5 last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block rounded-full bg-deep px-5 py-3 text-center text-sm font-semibold text-white hover:bg-deep/90 transition-colors"
            onClick={() => setOpen(false)}
          >
            導入相談をする
          </a>
        </div>
      )}
    </header>
  );
}
