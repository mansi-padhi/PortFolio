"use client";

import { useState } from "react";
import { idCard, profile } from "@/lib/data";
import { asset } from "@/lib/paths";
import { Flip } from "./Icons";

/** Lanyard-style developer ID with a gentle swing and a flip to "What I Build". */
export default function IDCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="lanyard mx-auto w-full max-w-[360px] px-3 sm:px-0">
      <div className="id-swing">
        <div aria-hidden>
          <div className="id-strap" />
          <div className="id-clip" />
        </div>

        <div className={`id-flip -mt-1 ${flipped ? "flipped" : ""}`}>
          {/* Front */}
          <article
            className="id-face rounded-[22px] bg-card p-5 shadow-[0_0_0_1px_var(--line),0_40px_70px_-40px_rgba(13,13,13,0.4)]"
            aria-hidden={flipped}
            aria-label="Developer ID card, front"
          >
            <div className="flex justify-center pb-4">
              <span className="id-slot" />
            </div>
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] font-medium tracking-[0.16em]">DEVELOPER ID</p>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink font-mono text-[9.5px] text-paper">
                {profile.initials}
              </span>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="h-[120px] w-[98px] shrink-0 overflow-hidden rounded-xl bg-white shadow-[inset_0_0_0_1px_var(--line)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(profile.portrait)}
                  alt={`${profile.name}, still from her intro video`}
                  width={280}
                  height={340}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-end">
                <p className="text-[26px] font-medium leading-[1] tracking-[-0.04em]">
                  Mansi
                  <br />
                  Padhi
                </p>
                <p className="mt-2 text-[13px] text-ink-2">{profile.title}</p>
              </div>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4">
              {idCard.front.map((f) => (
                <div key={f.label} className={f.label === "Education" ? "col-span-2" : ""}>
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">{f.label}</dt>
                  <dd className="mt-0.5 text-[13px] leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-4">
              <div className="id-barcode w-[120px]" aria-hidden />
              <p className="text-right font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.12em] text-mute">
                github.com/
                <br />
                mansi-padhi
              </p>
            </div>
          </article>

          {/* Back */}
          <article
            className="id-face id-back flex flex-col rounded-[22px] bg-card p-5 shadow-[0_0_0_1px_var(--line),0_40px_70px_-40px_rgba(13,13,13,0.4)]"
            aria-hidden={!flipped}
            aria-label="Developer ID card, back"
          >
            <div className="flex justify-center pb-4">
              <span className="id-slot" />
            </div>
            <p className="font-mono text-[11px] font-medium tracking-[0.16em]">WHAT I BUILD</p>
            <ul className="mt-4 flex-1 border-t border-line">
              {idCard.whatIBuild.map((w, i) => (
                <li key={w} className="flex items-baseline gap-3 border-b border-line py-[9px] text-[15px] tracking-[-0.01em]">
                  <span className="font-mono text-[10px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.12em] text-mute">
              {profile.name} · {profile.currentRole.title}, {profile.currentRole.company}
            </p>
          </article>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="btn btn-line btn-sm"
          aria-pressed={flipped}
        >
          <Flip width={14} height={14} />
          <span>{flipped ? "Show front" : "Flip card — What I build"}</span>
        </button>
      </div>
    </div>
  );
}
