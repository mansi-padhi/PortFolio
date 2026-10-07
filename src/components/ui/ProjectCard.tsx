"use client";

import type { Project } from "@/lib/data";
import Button from "./Button";
import { GithubMark } from "./Icons";
import { HotelMock, WellnessMock } from "./ProjectMocks";

type Props = {
  project: Project;
  active: boolean;
  onActivate: () => void;
  onToggle: () => void;
};

/**
 * One accordion panel. Desktop: a narrow rail that expands on hover/focus/click.
 * Mobile: a vertical disclosure card.
 */
export default function ProjectCard({ project: p, active, onActivate, onToggle }: Props) {
  const bodyId = `project-${p.id}`;

  return (
    <article
      className={`panel ${active ? "active" : ""}`}
      onMouseEnter={() => {
        // Hover-to-open only on the desktop accordion; touch taps emit mouseenter too.
        if (window.matchMedia("(min-width: 1024px) and (hover: hover)").matches) onActivate();
      }}
      aria-labelledby={`${bodyId}-title`}
    >
      {/* Desktop collapsed rail */}
      <button
        type="button"
        className="panel-rail"
        onClick={onActivate}
        onFocus={onActivate}
        aria-expanded={active}
        aria-controls={bodyId}
        tabIndex={active ? -1 : 0}
      >
        <span className="font-mono text-[11px] text-mute">{p.number}</span>
        <span className="vtitle">{p.title}</span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-[18px] leading-none" aria-hidden>
          +
        </span>
        <span className="sr-only">Open project</span>
      </button>

      {/* Mobile header */}
      <button
        type="button"
        className="panel-mhead flex w-full items-start justify-between gap-4 p-5 text-left"
        onClick={onToggle}
        aria-expanded={active}
        aria-controls={bodyId}
      >
        <span>
          <span className="font-mono text-[11px] text-mute">
            {p.number} · {p.date}
          </span>
          <span className="mt-2 block text-[30px] font-medium leading-none tracking-[-0.04em]">{p.title}</span>
          <span className="serif mt-1.5 block text-[18px] text-ink-2">{p.subtitle}</span>
        </span>
        <span
          className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-[18px] leading-none transition-transform duration-500 ease-out-expo ${active ? "rotate-45" : ""}`}
          aria-hidden
        >
          +
        </span>
      </button>

      <div className="panel-collapse" inert={!active}>
        <div>
          <div className="panel-body" id={bodyId}>
            {/* Left: content */}
            <div className="flex min-w-0 flex-col px-5 pb-6 lg:p-0">
              <div className="hidden items-center justify-between lg:flex">
                <span className="font-mono text-[12px] text-mute">Project {p.number}</span>
                <span className="font-mono text-[12px] text-mute">{p.date}</span>
              </div>
              <h3
                id={`${bodyId}-title`}
                className="mt-6 hidden text-[clamp(40px,4vw,60px)] font-medium leading-[0.95] tracking-[-0.045em] lg:block"
              >
                {p.title}
              </h3>
              <h3 id={`${bodyId}-title-m`} className="sr-only lg:hidden">
                {p.title}
              </h3>
              <p className="serif mt-2 hidden text-[22px] text-ink-2 lg:block">{p.subtitle}</p>

              <ul className="mt-2 space-y-3 lg:mt-7">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-[14.5px] leading-[1.55] text-ink-2">
                    <span className="mt-[3px] font-mono text-[10px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 lg:mt-auto">
                <p className="label mb-2.5">Stack</p>
                <ul className="flex flex-wrap gap-1.5" aria-label={`${p.title} technology stack`}>
                  {p.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {(p.live || p.github) && (
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {p.live && (
                    <Button href={p.live} variant="solid" icon="external" ariaLabel={`Open ${p.title} live`}>
                      View live
                    </Button>
                  )}
                  {p.github && (
                    <Button href={p.github} icon="external" leading={<GithubMark width={15} height={15} />}>
                      GitHub
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Right: illustrative UI + metrics */}
            <div className="flex min-w-0 flex-col gap-4 px-5 pb-5 lg:p-0">
              <div className="min-h-[340px] flex-1">{p.mock === "hotel" ? <HotelMock /> : <WellnessMock />}</div>
              <dl className={`grid gap-px overflow-hidden rounded-xl bg-line shadow-[0_0_0_1px_var(--line)] ${p.metrics.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                {p.metrics.map((m) => (
                  <div key={m.label} className="bg-card p-3.5">
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="text-[26px] font-medium leading-none tracking-[-0.04em]">{m.value}</dd>
                    <dd className="mt-1.5 text-[12px] leading-snug text-mute">{m.label}</dd>
                  </div>
                ))}
              </dl>
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5" aria-label={`${p.title} key features`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[12.5px] text-ink-2">
                    <i className="h-1 w-1 rounded-full bg-ink" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
