"use client";

import { education } from "@/lib/data";
import Reveal, { TextReveal } from "../ui/Reveal";

export default function Education() {
  const { degree, school } = education;
  return (
    <section id="education" aria-labelledby="education-title" className="section pt-0">
      <div className="wrap">
        <div className="rule mb-[clamp(64px,8vw,112px)]" />
        <Reveal>
          <p className="kicker">05 — Education</p>
        </Reveal>
        <TextReveal
          as="h2"
          className="h-section mt-8"
          lines={[
            <span key="a" id="education-title">
              Where I <span className="serif">studied.</span>
            </span>,
          ]}
        />

        <div className="mt-14 grid gap-3 lg:grid-cols-12">
          <Reveal className="rounded-3xl bg-card p-7 shadow-[0_0_0_1px_var(--line)] sm:p-9 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="label">Undergraduate</p>
              <p className="font-mono text-[12px] text-mute">{degree.period}</p>
            </div>
            <h3 className="mt-8 max-w-[22ch] text-[clamp(24px,2.6vw,36px)] font-medium leading-[1.08] tracking-[-0.035em]">
              {degree.institute}
            </h3>
            <p className="serif mt-3 text-[clamp(19px,1.7vw,24px)] text-ink-2">{degree.course}</p>
            <div className="mt-10 flex items-end justify-between gap-6 border-t border-line pt-6">
              <p className="text-[13.5px] text-mute">{degree.short}</p>
              <p className="text-right">
                <span className="label block">{degree.score.label}</span>
                <span className="text-[clamp(34px,3.6vw,48px)] font-medium leading-none tracking-[-0.045em]">
                  {degree.score.value}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col rounded-3xl bg-card p-7 shadow-[0_0_0_1px_var(--line)] sm:p-9 lg:col-span-4">
            <p className="label">School</p>
            <h3 className="mt-8 text-[clamp(22px,2vw,28px)] font-medium leading-[1.1] tracking-[-0.03em]">
              {school.institute}
            </h3>
            <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-line pt-6 max-lg:mt-10">
              {school.scores.map((s) => (
                <div key={s.label}>
                  <dt className="label">
                    {s.label} <span className="text-faint">· {s.year}</span>
                  </dt>
                  <dd className="mt-1 text-[clamp(30px,3vw,40px)] font-medium leading-none tracking-[-0.045em]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
