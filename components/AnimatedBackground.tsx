"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const pointerFine = window.matchMedia("(pointer: fine)");
    if (!pointerFine.matches) return;

    let raf = 0;
    let targetX = 50;
    let targetY = 30;
    let currentX = 50;
    let currentY = 30;

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.setProperty("--mx", `${currentX}%`);
      el.style.setProperty("--my", `${currentY}%`);
      if (
        Math.abs(targetX - currentX) > 0.1 ||
        Math.abs(targetY - currentY) > 0.1
      ) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-60" />

      <div
        className="blob animate-drift-a animate-pulse-slow"
        style={{
          top: "-10%",
          left: "-5%",
          width: "46vmax",
          height: "46vmax",
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.55), transparent 60%)",
        }}
      />
      <div
        className="blob animate-drift-b"
        style={{
          top: "20%",
          right: "-10%",
          width: "42vmax",
          height: "42vmax",
          background:
            "radial-gradient(circle at 60% 40%, hsl(var(--accent) / 0.5), transparent 60%)",
        }}
      />
      <div
        className="blob animate-drift-c animate-pulse-slow"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "50vmax",
          height: "50vmax",
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.35), transparent 65%)",
        }}
      />

      <div ref={spotlightRef} className="spotlight" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
    </div>
  );
}
