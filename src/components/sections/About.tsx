"use client";

import { about, profile, quickFacts } from "@/lib/data";
import { asset } from "@/lib/paths";
import Button from "../ui/Button";
import IDCard from "../ui/IDCard";
import Reveal, { TextReveal } from "../ui/Reveal";
import { GithubMark, LinkedinMark } from "../ui/Icons";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="wrap">
        <Reveal>
          <p className="kicker">01 — About</p>
        </Reveal>

        <div className="mt-8 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <TextReveal
              as="h2"
              className="h-section"
              lines={[
                <span key="a" id="about-title">
                  Hi, I&apos;m <span className="serif">Mansi.</span>
                </span>,
              ]}
            />

            <div className="mt-10 max-w-[60ch] space-y-5 text-[clamp(17px,1.35vw,20px)] leading-[1.55] text-ink-2">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80} as="p">
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-10 flex flex-wrap gap-2.5">
              <Button href={asset(profile.resume)} download={profile.resumeFileName} variant="solid" icon="down">
                Résumé
              </Button>
              <Button href={profile.links.github} icon="external" leading={<GithubMark width={15} height={15} />}>
                GitHub
              </Button>
              <Button href={profile.links.linkedin} icon="external" leading={<LinkedinMark width={15} height={15} />}>
                LinkedIn
              </Button>
            </Reveal>

            <Reveal delay={120} className="mt-16">
              <h3 className="label mb-4">Quick facts</h3>
              <dl className="grid border-t border-line sm:grid-cols-2">
                {quickFacts.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1 border-b border-line py-4 sm:pr-6">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-mute">{f.label}</dt>
                    <dd className="text-[15.5px] leading-snug">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-5 lg:pl-6">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+24px)]">
              <IDCard />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
