"use client";

import { useState } from "react";
import { skillGroups, type Skill } from "@/lib/data";
import Reveal, { TextReveal } from "../ui/Reveal";
import TechLogo from "../ui/TechLogo";

function SkillTile({ skill }: { skill: Skill }) {
  return (
    <li className="skill-tile">
      <TechLogo icon={skill.icon} size={28} />
      <div>
        <p className="text-[16px] font-medium leading-tight tracking-[-0.02em]">{skill.name}</p>
        <div className="usage">
          <div>
            <p className="pt-2 text-[12.5px] leading-snug text-mute">
              {skill.usedIn.length ? (
                <>
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-faint">Used in </span>
                  {skill.usedIn.join(" · ")}
                </>
              ) : (
                "Listed under Technical Skills"
              )}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" aria-labelledby="skills-title" className="section bg-card/0 pt-0">
      <div className="wrap">
        <div className="rule mb-[clamp(64px,8vw,112px)]" />
        <Reveal>
          <p className="kicker">02 — Skills</p>
        </Reveal>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <TextReveal
            as="h2"
            className="h-section"
            lines={[
              <span key="a" id="skills-title">
                The stack I
              </span>,
              <span key="b">
                work <span className="serif">with.</span>
              </span>,
            ]}
          />
          <Reveal delay={120} className="max-w-[40ch] lg:pb-3">
            <button
              type="button"
              className="btn btn-ghost btn-sm !px-0 font-mono !text-[12px] uppercase tracking-[0.06em]"
              aria-pressed={showAll}
              onClick={() => setShowAll((s) => !s)}
            >
              <span className="u">{showAll ? "Hide usage details" : "Show where each is used"}</span>
            </button>
          </Reveal>
        </div>

        <div className={`mt-16 ${showAll ? "[&_.usage]:!grid-rows-[1fr]" : ""}`}>
          {skillGroups.map((g, gi) => (
            <Reveal
              key={g.id}
              delay={gi * 40}
              className="grid gap-5 border-t border-line py-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-3">
                <h3 className="flex items-baseline gap-3 text-[20px] font-medium tracking-[-0.02em]">
                  <span className="font-mono text-[11px] text-faint">{String(gi + 1).padStart(2, "0")}</span>
                  {g.title}
                </h3>
                {g.note && <p className="mt-2 max-w-[30ch] text-[13px] leading-snug text-mute">{g.note}</p>}
              </div>
              <ul
                className="grid grid-cols-2 overflow-hidden rounded-2xl bg-card shadow-[0_0_0_1px_var(--line)] sm:grid-cols-3 lg:col-span-9 xl:grid-cols-4"
                aria-label={g.title}
              >
                {g.skills.map((s) => (
                  <SkillTile key={s.name} skill={s} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
