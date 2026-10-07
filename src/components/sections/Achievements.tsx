"use client";

import { responsibilities } from "@/lib/data";
import Reveal, { TextReveal } from "../ui/Reveal";

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="section pt-0">
      <div className="wrap">
        <div className="rule mb-[clamp(64px,8vw,112px)]" />
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kicker">06 — Achievements</p>
            </Reveal>
            <TextReveal
              as="h2"
              className="h-section mt-8"
              lines={[
                <span key="a" id="achievements-title">
                  Position of
                </span>,
                <span key="b" className="serif">
                  responsibility.
                </span>,
              ]}
            />
          </div>

          <ul className="lg:col-span-7 lg:pt-3">
            {responsibilities.map((r, i) => (
              <Reveal
                as="li"
                key={r.title}
                delay={i * 80}
                className="group border-y border-line py-8 transition-colors duration-500"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <p className="label">Leadership</p>
                  <p className="font-mono text-[12px] text-mute">{r.period}</p>
                </div>
                <h3 className="mt-6 text-[clamp(30px,3.4vw,48px)] font-medium leading-none tracking-[-0.04em]">
                  {r.title}
                </h3>
                <p className="serif mt-3 text-[clamp(19px,1.7vw,24px)] text-ink-2">{r.org}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
