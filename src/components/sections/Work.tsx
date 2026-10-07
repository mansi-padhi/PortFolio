"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "../ui/ProjectCard";
import Reveal, { TextReveal } from "../ui/Reveal";

const RAIL = 104;
const GAP = 12;

export default function Work() {
  const [active, setActive] = useState(0);
  const [openW, setOpenW] = useState<number | null>(null);
  const list = useRef<HTMLDivElement>(null);

  // The expanded panel's content is laid out at its final width so it never reflows mid-animation.
  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setOpenW(el.clientWidth - (projects.length - 1) * (RAIL + GAP));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="work" aria-labelledby="work-title" className="section pt-0">
      <div className="wrap">
        <div className="rule mb-[clamp(64px,8vw,112px)]" />
        <Reveal>
          <p className="kicker">03 — Work</p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <TextReveal
            as="h2"
            className="h-section"
            lines={[
              <span key="a" id="work-title">
                Selected <span className="serif">work.</span>
              </span>,
            ]}
          />
          <Reveal delay={120} className="max-w-[40ch] lg:pb-3">
            <p className="text-[15.5px] leading-relaxed text-ink-2">
              Projects from my résumé. Open a panel for the details. The interfaces shown are illustrative, not
              screenshots.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-14">
          <div
            ref={list}
            className="accordion"
            style={openW ? ({ "--open-w": `${openW}px` } as CSSProperties) : undefined}
          >
            {projects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                active={active === i}
                onActivate={() => setActive(i)}
                onToggle={() => setActive((a) => (a === i ? -1 : i))}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
