"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { nav, profile } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks";
import { useScroll } from "@/lib/scroll";
import { asset } from "@/lib/paths";
import { ArrowDown, ArrowUpRight } from "./ui/Icons";

const ids = nav.map((n) => n.id);

function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="progress" aria-hidden />;
}

export default function Navigation() {
  const { scrollTo, scrolled, lock } = useScroll();
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lock(open);
    if (!open) return;
    overlay.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
      // Keep tab focus inside the open menu (menu button + overlay links).
      if (e.key === "Tab" && overlay.current) {
        const items = [menuBtn.current, ...overlay.current.querySelectorAll<HTMLElement>("a,button")].filter(
          Boolean,
        ) as HTMLElement[];
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault();
          items[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, lock]);

  // Close the overlay if the viewport grows to desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = (id: string) => {
    if (open) {
      setOpen(false);
      lock(false);
      // wait a frame so the scroll lock releases before scrolling
      requestAnimationFrame(() => scrollTo(id));
    } else scrollTo(id);
  };

  return (
    <>
      <ProgressBar />
      <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="wrap flex h-full items-center justify-between gap-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              go("top");
            }}
            className="group flex items-center gap-3 rounded-md"
            aria-label={`${profile.name}, back to top`}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-mono text-[11px] font-medium tracking-wider text-paper transition-transform duration-500 ease-out-expo group-hover:rotate-[-8deg]">
              {profile.initials}
            </span>
            <span className="text-[15px] font-medium tracking-[-0.02em]">{profile.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 min-[900px]:flex">
            <ul className="flex items-center gap-5 xl:gap-6">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="nav-link"
                    aria-current={active === item.id ? "true" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={asset(profile.resume)} download={profile.resumeFileName} className="btn btn-solid btn-sm">
              <span>Résumé</span>
              <ArrowDown className="btn-arrow down" />
            </a>
          </nav>

          <button
            ref={menuBtn}
            type="button"
            className="relative z-[70] flex h-10 items-center gap-3 rounded-full border border-line bg-card px-4 text-[13px] font-medium min-[900px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="menu-btn-lines" aria-hidden />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={overlay}
        className={`overlay min-[900px]:hidden ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
      >
        <nav aria-label="Mobile" className="flex-1">
          <ol className="border-t border-line">
            {nav.map((item, i) => (
              <li key={item.id} className="overlay-item border-b border-line" style={{ "--i": i } as CSSProperties}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                  className="flex items-baseline gap-4 py-3"
                  aria-current={active === item.id ? "true" : undefined}
                >
                  <span className="w-7 font-mono text-[11px] text-mute">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[clamp(32px,9vw,56px)] font-medium leading-none tracking-[-0.04em]">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div
          className="overlay-item mt-6 flex flex-wrap items-center gap-3"
          style={{ "--i": nav.length } as CSSProperties}
        >
          <a href={asset(profile.resume)} download={profile.resumeFileName} className="btn btn-solid btn-sm">
            <span>Résumé</span>
            <ArrowDown className="btn-arrow down" />
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm">
            <span>GitHub</span>
            <ArrowUpRight className="btn-arrow up" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm">
            <span>LinkedIn</span>
            <ArrowUpRight className="btn-arrow up" />
          </a>
        </div>
      </div>
    </>
  );
}
