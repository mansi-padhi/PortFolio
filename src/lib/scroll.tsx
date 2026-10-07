"use client";

import Lenis from "lenis";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "./hooks";

type ScrollApi = {
  /** Scroll to a section id (or "top"). */
  scrollTo: (target: string) => void;
  /** Page has scrolled past the hero fold threshold. */
  scrolled: boolean;
  /** Pause / resume smooth scrolling (used by the mobile menu). */
  lock: (locked: boolean) => void;
};

const ScrollContext = createContext<ScrollApi>({
  scrollTo: () => {},
  scrolled: false,
  lock: () => {},
});

export const useScroll = () => useContext(ScrollContext);

const NAV_OFFSET = -72;

export function ScrollProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  const scrollTo = useCallback((target: string) => {
    const el = target === "top" ? null : document.getElementById(target);
    if (target !== "top" && !el) return;
    const lenis = lenisRef.current;
    if (lenis) {
      // Lenis already honours the CSS scroll-padding-top that clears the fixed nav.
      lenis.scrollTo(el ?? 0);
    } else {
      const top = el ? el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET : 0;
      window.scrollTo({ top, behavior: "auto" });
    }
    // Move focus for keyboard / screen-reader users without a second jump.
    const focusTarget = el ?? document.getElementById("top");
    if (focusTarget) {
      if (!focusTarget.hasAttribute("tabindex")) focusTarget.setAttribute("tabindex", "-1");
      focusTarget.focus({ preventScroll: true });
    }
    history.replaceState(null, "", target === "top" ? location.pathname : `#${target}`);
  }, []);

  const lock = useCallback((locked: boolean) => {
    const lenis = lenisRef.current;
    if (lenis) {
      if (locked) lenis.stop();
      else lenis.start();
    }
    document.documentElement.style.overflow = locked ? "hidden" : "";
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollTo, scrolled, lock }}>{children}</ScrollContext.Provider>
  );
}
