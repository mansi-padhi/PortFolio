"use client";

import { experience } from "@/lib/data";
import Reveal, { TextReveal } from "../ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section pt-0">
      <div className="wrap">
        <div className="rule mb-[clamp(64px,8vw,112px)]" />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+32px)]">
              <Reveal>
                <p className="kicker">04 — Experience</p>
              </Reveal>
              <TextReveal
                as="h2"
                className="h-section mt-8"
                lines={[
                  <span key="a" id="experience-title">
                    Where I&apos;ve
                  </span>,
                  <span key="b" className="serif">
                    worked.
                  </span>,
                ]}
              />
            </div>
          </div>

          <ol className="relative lg:col-span-8">
            <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line" aria-hidden />
            {experience.map((r, i) => (
              <Reveal as="li" key={r.company} delay={i * 80} className="tl-item relative pb-14 pl-9 last:pb-0">
                <span className={`tl-dot absolute left-0 top-[9px] ${r.status === "Current" ? "current" : ""}`} aria-hidden />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] ${
                      r.status === "Current" ? "bg-ink text-paper" : "border border-line text-mute"
                    }`}
                  >
                    {r.status}
                  </span>
                  {r.period && <span className="font-mono text-[12px] text-mute">{r.period}</span>}
                </div>
                <h3 className="mt-4 text-[clamp(28px,3.2vw,44px)] font-medium leading-[1] tracking-[-0.04em]">
                  {r.title}
                </h3>
                <p className="mt-2 text-[18px] text-ink-2">
                  {r.company}
                  {r.companyNote && <span className="serif text-mute"> ({r.companyNote})</span>}
                </p>

                {r.points.length > 0 && (
                  <ul className="mt-7 space-y-4 border-t border-line pt-6">
                    {r.points.map((pt, j) => (
                      <li key={j} className="flex gap-4 text-[15.5px] leading-[1.6] text-ink-2">
                        <span className="mt-[4px] font-mono text-[10.5px] text-faint">{String(j + 1).padStart(2, "0")}</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {r.platforms && (
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="label mb-2.5">SaaS platforms integrated</p>
                      <ul className="flex flex-wrap gap-1.5">
                        {r.platforms.map((p) => (
                          <li key={p} className="chip">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {r.tags && (
                      <div>
                        <p className="label mb-2.5">Worked with</p>
                        <ul className="flex flex-wrap gap-1.5">
                          {r.tags.map((t) => (
                            <li key={t} className="chip">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
