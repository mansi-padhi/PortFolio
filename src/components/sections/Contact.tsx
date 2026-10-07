"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import Reveal, { TextReveal } from "../ui/Reveal";
import { ArrowUpRight, Check, Copy, GithubMark, LinkedinMark } from "../ui/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Fallback for browsers without the async clipboard API.
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  const rows = [
    { label: "Phone", value: profile.phone, href: profile.phoneHref, external: false, icon: null },
    { label: "GitHub", value: "github.com/mansi-padhi", href: profile.links.github, external: true, icon: <GithubMark width={18} height={18} /> },
    { label: "LinkedIn", value: "linkedin.com/in/mansi-padhi", href: profile.links.linkedin, external: true, icon: <LinkedinMark width={18} height={18} /> },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section pt-0">
      <div className="wrap">
        <div className="rule mb-[clamp(64px,8vw,112px)]" />
        <Reveal>
          <p className="kicker">07 — Contact</p>
        </Reveal>
        <TextReveal
          as="h2"
          className="display mt-8 text-[clamp(48px,9vw,150px)]"
          lines={[
            <span key="a" id="contact-title">
              Let&apos;s build
            </span>,
            <span key="b">
              something <span className="serif">together.</span>
            </span>,
          ]}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="label mb-3">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex max-w-full items-center gap-3 break-all text-[clamp(22px,3.2vw,44px)] font-medium leading-tight tracking-[-0.035em]"
            >
              <span className="link-u">{profile.email}</span>
              <ArrowUpRight width={24} height={24} className="shrink-0 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <div className="mt-5 flex items-center gap-3">
              <button type="button" onClick={copy} className="btn btn-line btn-sm">
                {copied ? <Check width={14} height={14} /> : <Copy width={14} height={14} />}
                <span>{copied ? "Copied ✓" : "Copy email"}</span>
              </button>
              <span aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100} as="ul" className="border-t border-line lg:col-span-5">
            {rows.map((r) => (
              <li key={r.label} className="border-b border-line">
                <a
                  href={r.href}
                  {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex flex-col gap-1">
                    <span className="label">{r.label}</span>
                    <span className="text-[17px] tracking-[-0.01em]">{r.value}</span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-colors duration-500 ease-out-expo group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    {r.icon ?? <ArrowUpRight />}
                  </span>
                  {r.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
