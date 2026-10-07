"use client";

import { profile } from "@/lib/data";
import { useScroll } from "@/lib/scroll";
import { ArrowUp } from "./ui/Icons";

export default function Footer() {
  const { scrollTo } = useScroll();
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-4 py-8 text-[13px] text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11.5px] uppercase tracking-[0.08em]">Built with Next.js</p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("top");
          }}
          className="group inline-flex items-center gap-2 self-start text-ink sm:self-auto"
        >
          <span className="link-u">Back to top</span>
          <ArrowUp className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
