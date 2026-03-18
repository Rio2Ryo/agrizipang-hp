"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"logo" | "fade" | "done">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fade"), 800);
    const t2 = setTimeout(() => setPhase("done"), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className={`transition-all duration-700 ${
        phase === "logo" ? "scale-100 opacity-100" : "scale-110 opacity-0"
      }`}>
        <Image
          src="/images/logo.png"
          alt="Agri Zipang"
          width={200}
          height={127}
          className="w-48 h-auto"
          priority
        />
      </div>
    </div>
  );
}
