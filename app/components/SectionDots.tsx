"use client";
import { useEffect, useState } from "react";

const sections = ["about","business","sustainability","collaboration","company","contact"];

export default function SectionDots() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3" aria-label="Section navigation">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            active === id
              ? "bg-deep scale-125 shadow-md shadow-deep/30"
              : "bg-slate-300 hover:bg-slate-400"
          }`}
          aria-label={id}
        />
      ))}
    </nav>
  );
}
