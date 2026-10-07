"use client";

import { useEffect, useRef, useState } from "react";
import { highlights, profile } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";
import { asset } from "@/lib/paths";
import Button from "../ui/Button";
import { TextReveal } from "../ui/Reveal";
import { Pause, Play, SoundOff, SoundOn } from "../ui/Icons";

export default function Hero() {
  const reduced = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  // Autoplay with sound unless the user prefers reduced motion. Browsers usually
  // block unmuted autoplay, so fall back to muted and unmute on the first interaction.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    // The video may finish loading before hydration, so `onLoadedData` never fires.
    if (v.readyState >= 2) setReady(true);
    if (reduced) {
      v.pause();
      return;
    }

    const events = ["pointerdown", "keydown", "touchstart"] as const;
    const unmuteOnInteract = (e: Event) => {
      // Let the media buttons handle their own clicks.
      if ((e.target as Element | null)?.closest?.(".media-btn")) return;
      events.forEach((e) => window.removeEventListener(e, unmuteOnInteract));
      v.muted = false;
      setMuted(false);
    };

    v.muted = false;
    v.play()
      .then(() => setMuted(false))
      .catch(() => {
        v.muted = true;
        setMuted(true);
        v.play().catch(() => setPlaying(false));
        events.forEach((e) => window.addEventListener(e, unmuteOnInteract));
      });

    return () => events.forEach((e) => window.removeEventListener(e, unmuteOnInteract));
  }, [reduced]);

  const togglePlay = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleSound = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) v.play().catch(() => {});
  };

  return (
    <section id="top" aria-label="Introduction" className="relative pt-[calc(var(--nav-h)+12px)] lg:pt-[calc(var(--nav-h)+20px)]">
      <div className="wrap">
        {/* meta strip */}
        <div className="mb-3 flex items-center justify-between gap-4 lg:mb-4">
          <p className="label flex items-center gap-2.5">
            <span className="live-dot" aria-hidden />
            {profile.currentRole.title} at {profile.currentRole.company}
          </p>
          <p className="label hidden sm:block">{profile.city}</p>
        </div>

        <div className="relative flex flex-col lg:h-[clamp(600px,calc(100svh-var(--nav-h)-60px),860px)]">
          {/* Heading block — above the stage on mobile, left of the figure on desktop */}
          <div className="order-1 pb-6 pt-2 lg:pointer-events-none lg:absolute lg:left-[clamp(28px,3vw,48px)] lg:top-1/2 lg:z-10 lg:w-[34%] lg:-translate-y-1/2 lg:p-0">
            <h1>
              <span className="mb-3 block text-[clamp(20px,1.7vw,24px)] font-medium tracking-[-0.03em] lg:mb-5">
                {profile.name}
                <span className="sr-only"> — </span>
              </span>
              <TextReveal
              as="span"
              className="display block text-[clamp(48px,13vw,76px)] lg:text-[clamp(56px,5.6vw,92px)]"
              lines={[
                "Full Stack",
                <span key="d" className="serif text-[1.08em]">
                  Developer.
                </span>,
              ]}
              delay={150}
            />
            </h1>
            <p className="mt-5 max-w-[34ch] text-[16px] leading-relaxed text-ink-2 lg:mt-7 lg:text-[17px]">
              {profile.tagline}
            </p>
            <p className="mt-4 text-[13.5px] text-mute">
              Previously {profile.previousRole.title} at {profile.previousRole.company} ({profile.previousRole.product}).
            </p>
          </div>

          {/* Stage */}
          <div className="stage order-2 h-[min(74svh,600px)] sm:h-[min(70svh,640px)] lg:absolute lg:inset-0 lg:h-auto">
            <video
              ref={video}
              src={asset(profile.video)}
              playsInline
              preload="auto"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onLoadedData={() => setReady(true)}
              aria-label={`${profile.name} introducing herself`}
              className={`transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
            />
            <div className="stage-grid" aria-hidden />

            <div className="absolute left-4 top-4 hidden lg:left-6 lg:top-6 lg:block">
              <p className="label">Intro — {profile.name}</p>
            </div>

            <div className="absolute bottom-4 left-4 flex gap-2 lg:bottom-auto lg:left-auto lg:right-6 lg:top-6">
              <button
                type="button"
                className="media-btn"
                onClick={togglePlay}
                aria-label={playing ? "Pause intro video" : "Play intro video"}
              >
                {playing ? <Pause width={12} height={12} /> : <Play width={12} height={12} />}
                <span>{playing ? "Pause" : "Play"}</span>
              </button>
              <button
                type="button"
                className="media-btn"
                onClick={toggleSound}
                aria-pressed={!muted}
                aria-label={muted ? "Turn sound on" : "Turn sound off"}
              >
                {muted ? <SoundOff width={13} height={13} /> : <SoundOn width={13} height={13} />}
                <span>{muted ? "Sound off" : "Sound on"}</span>
              </button>
            </div>
          </div>

          {/* Actions + highlights — below on mobile, right of the figure on desktop */}
          <div className="order-3 pt-6 lg:absolute lg:bottom-[clamp(28px,3vw,48px)] lg:right-[clamp(28px,3vw,48px)] lg:z-10 lg:w-[26%] lg:p-0">
            <dl className="mb-7 hidden grid-cols-1 gap-0 lg:grid">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-baseline gap-4 border-t border-line py-3">
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="w-14 shrink-0 text-[28px] font-medium tracking-[-0.04em]">{h.value}</dd>
                  <dd className="text-[13px] leading-snug text-mute">{h.label}</dd>
                </div>
              ))}
            </dl>
            <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-1">
              <Button href="#work" variant="solid" icon="right" className="lg:justify-between">
                Explore Work
              </Button>
              <Button href="#about" icon="right" className="lg:justify-between">
                About Me
              </Button>
              <Button href="#contact" icon="right" className="lg:justify-between">
                Let&apos;s Talk
              </Button>
              <Button href={asset(profile.resume)} download={profile.resumeFileName} icon="down" className="lg:justify-between">
                Résumé
              </Button>
            </div>
          </div>
        </div>

        {/* highlights strip on mobile / tablet */}
        <dl className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-3 lg:hidden">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-baseline gap-4 border-b border-line py-4 sm:block sm:border-b-0 sm:pr-4">
              <dt className="sr-only">{h.label}</dt>
              <dd className="w-14 shrink-0 text-[30px] font-medium tracking-[-0.04em]">{h.value}</dd>
              <dd className="text-[13px] leading-snug text-mute">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
