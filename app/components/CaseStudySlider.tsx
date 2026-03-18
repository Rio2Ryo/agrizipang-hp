"use client";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const CASE_IMAGES = [
  "/images/business-solar.png",
  "/images/business-co2.png",
  "/images/business-agriculture.png",
] as const;

export default function CaseStudySlider() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const cases = (t as Record<string, unknown> & { caseStudies?: { tag: string; title: string; subtitle: string; items: readonly { title: string; category: string; body: string }[] } }).caseStudies?.items;
  if (!cases) return null;

  const caseStudies = (t as Record<string, unknown> & { caseStudies: { tag: string; title: string; subtitle: string } }).caseStudies;

  return (
    <div className="relative">
      {/* Header with arrows */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="tag mb-4">{caseStudies.tag}</span>
          <h2 className="section-title mt-4">{caseStudies.title}</h2>
          <p className="section-subtitle mt-4">{caseStudies.subtitle}</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
      >
        {cases.map((c: { title: string; category: string; body: string }, i: number) => (
          <div
            key={c.title}
            className="snap-start flex-shrink-0 w-[85%] md:w-[45%] lg:w-[32%] rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100 group"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={CASE_IMAGES[i % CASE_IMAGES.length]}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 85vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white/70">
                {c.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-deep mb-2">{c.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
