import { useEffect, useRef, useState, type ReactNode } from "react";

import { useTheme } from "@/context/ThemeContext";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const canUseFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type CursorZone = "photo" | "link" | "text" | "title" | "default";

function getZoneFromTarget(target: Element | null): CursorZone {
  if (!target) return "default";

  if (target.closest(".about-photo-frame, .about-photo")) return "photo";
  if (target.closest("a, button, [role='button']")) return "link";
  if (target.closest(".about-text, .about-bio")) return "text";
  if (target.closest(".about-grid-title, .page-title")) return "title";

  return "default";
}

function getZoneSize(zone: CursorZone) {
  if (zone === "photo") {
    return { width: 80, height: 104 };
  }

  return { width: 24, height: 24 };
}

function getSmartOffset(zone: CursorZone, x: number, y: number) {
  const { width, height } = getZoneSize(zone);
  const margin = 12;

  const presets: Record<CursorZone, { x: number; y: number }> = {
    default: { x: 20, y: 22 },
    link: { x: -width - 18, y: 18 },
    text: { x: 24, y: -height - 10 },
    title: { x: 22, y: 26 },
    photo: { x: 30, y: -height - 14 },
  };

  let offsetX = presets[zone].x;
  let offsetY = presets[zone].y;

  if (x + offsetX + width > window.innerWidth - margin) {
    offsetX = -width - 20;
  }

  if (x + offsetX < margin) {
    offsetX = 20;
  }

  if (y + offsetY + height > window.innerHeight - margin) {
    offsetY = -height - 20;
  }

  if (y + offsetY < margin) {
    offsetY = 22;
  }

  return { offsetX, offsetY };
}

function CursorLogoFollower({
  x,
  y,
  zone,
}: {
  x: number;
  y: number;
  zone: CursorZone;
}) {
  const { resolvedTheme } = useTheme();
  const enlarged = zone === "photo";
  const logoSrc =
    enlarged || resolvedTheme === "dark"
      ? siteConfig.logoWhite
      : siteConfig.logoBlack;

  return (
    <div
      aria-hidden
      className={cn("cursor-logo", enlarged && "cursor-logo--enlarged")}
      data-zone={zone}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      <img
        src={logoSrc}
        alt=""
        className="cursor-logo__mark"
        draggable={false}
      />
      <span className="cursor-logo__label">That&apos;s me!</span>
    </div>
  );
}

export function CursorLogoProvider({ children }: { children: ReactNode }) {
  const [enabled] = useState(canUseFinePointer);
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [zone, setZone] = useState<CursorZone>("default");
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const handlePointerMove = (event: PointerEvent) => {
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const nextZone = getZoneFromTarget(target);
      const { offsetX, offsetY } = getSmartOffset(
        nextZone,
        event.clientX,
        event.clientY,
      );

      setZone(nextZone);
      targetRef.current = {
        x: event.clientX + offsetX,
        y: event.clientY + offsetY,
      };

      if (!hasInitializedRef.current) {
        currentRef.current = { ...targetRef.current };
        setDisplayPos({ ...targetRef.current });
        hasInitializedRef.current = true;
      }

      setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      setZone("default");
      hasInitializedRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !isVisible) return;

    const ease = prefersReducedMotion() ? 0.35 : 0.11;
    let rafId = 0;

    const tick = () => {
      const target = targetRef.current;
      const dx = target.x - currentRef.current.x;
      const dy = target.y - currentRef.current.y;

      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        currentRef.current.x += dx * ease;
        currentRef.current.y += dy * ease;
        setDisplayPos({
          x: currentRef.current.x,
          y: currentRef.current.y,
        });
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [enabled, isVisible]);

  return (
    <>
      {enabled && isVisible ? (
        <CursorLogoFollower x={displayPos.x} y={displayPos.y} zone={zone} />
      ) : null}
      {children}
    </>
  );
}
