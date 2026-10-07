import type { CSSProperties, ReactNode } from "react";
import {
  siCplusplus,
  siDocker,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJson,
  siJsonwebtokens,
  siNextdotjs,
  siPython,
  siReact,
  siSpring,
  siSpringboot,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { IconKey } from "@/lib/data";

type Brand = { path: string; hex: string };

/** Official marks (simple-icons, CC0). Near-black brand colours fall back to ink. */
const brands: Partial<Record<IconKey, Brand>> = {
  cplusplus: siCplusplus,
  javascript: siJavascript,
  python: siPython,
  html: siHtml5,
  typescript: siTypescript,
  react: siReact,
  nextjs: siNextdotjs,
  tailwind: siTailwindcss,
  springboot: siSpringboot,
  spring: siSpring,
  docker: siDocker,
  json: siJson,
  jwt: siJsonwebtokens,
  github: siGithub,
  git: siGit,
};

/** Minimal line icons for concepts and tools without an official mark. */
const lines: Partial<Record<IconKey, ReactNode>> = {
  java: (
    <>
      <path d="M5 10h11v4a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
      <path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3c-1 1.3 1 2.2 0 3.5M11.5 3c-1 1.3 1 2.2 0 3.5" />
    </>
  ),
  sql: (
    <>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </>
  ),
  rest: (
    <>
      <path d="M4 7h12M13 4l3 3-3 3M20 17H8M11 14l-3 3 3 3" />
    </>
  ),
  webhook: (
    <>
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="18" cy="17" r="2.5" />
      <circle cx="12" cy="6" r="2.5" />
      <path d="M10.7 8.2 7.3 14.8M8.5 17h7M13.3 8.2l3.4 6.6" />
    </>
  ),
  oauth: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5" />
    </>
  ),
  spec: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 15.5h6M9 9h2" />
    </>
  ),
  embed: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <rect x="10" y="10" width="8" height="7" rx="1" />
      <path d="M3 8h18" />
    </>
  ),
  websocket: (
    <>
      <path d="M3 9h14M14 6l3 3-3 3M21 15H7M10 12l-3 3 3 3" />
      <circle cx="20" cy="9" r="1" fill="currentColor" />
      <circle cx="4" cy="15" r="1" fill="currentColor" />
    </>
  ),
  vscode: (
    <>
      <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13" />
    </>
  ),
  agile: (
    <>
      <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
      <path d="M19.5 4v4h-4M9 12l2 2 4-4" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" />
    </>
  ),
  dsa: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="6" cy="13" r="2" />
      <circle cx="18" cy="13" r="2" />
      <circle cx="3.5" cy="20" r="1.5" />
      <circle cx="9" cy="20" r="1.5" />
      <path d="M10.6 6.4 7.4 11.6M13.4 6.4l3.2 5.2M5.2 14.8l-1.1 3.7M6.8 14.8l1.5 3.7" />
    </>
  ),
  dbms: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M3 14.5h18M9 4v16" />
    </>
  ),
  os: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
};

export default function TechLogo({ icon, size = 28, className = "" }: { icon: IconKey; size?: number; className?: string }) {
  const brand = brands[icon];
  if (brand) {
    const hex = parseInt(brand.hex, 16) < 0x333333 ? "var(--ink)" : `#${brand.hex}`;
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={`logo ${className}`}
        style={{ "--brand": hex } as CSSProperties}
        aria-hidden
      >
        <path d={brand.path} />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`logo ${className}`}
      aria-hidden
    >
      {lines[icon]}
    </svg>
  );
}
