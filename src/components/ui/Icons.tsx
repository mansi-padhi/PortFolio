import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const ArrowRight = (p: P) => (<svg {...base} {...p}><path d="M3 8h10M9 4l4 4-4 4" /></svg>);
export const ArrowDown = (p: P) => (<svg {...base} {...p}><path d="M8 3v10M4 9l4 4 4-4" /></svg>);
export const ArrowUpRight = (p: P) => (<svg {...base} {...p}><path d="M5 11l6-6M6 5h5v5" /></svg>);
export const ArrowUp = (p: P) => (<svg {...base} {...p}><path d="M8 13V3M4 7l4-4 4 4" /></svg>);
export const Copy = (p: P) => (<svg {...base} {...p}><rect x="5" y="5" width="8" height="8" rx="1.5" /><path d="M3 10.5V4a1 1 0 0 1 1-1h6.5" /></svg>);
export const Check = (p: P) => (<svg {...base} {...p}><path d="M3 8.5l3 3 7-7" /></svg>);
export const Play = (p: P) => (<svg {...base} {...p}><path d="M5 3.5v9l7-4.5z" fill="currentColor" stroke="none" /></svg>);
export const Pause = (p: P) => (<svg {...base} {...p}><path d="M5.5 3.5v9M10.5 3.5v9" strokeWidth={2} /></svg>);
export const SoundOn = (p: P) => (<svg {...base} {...p}><path d="M2.5 6h2l3-2.5v9l-3-2.5h-2zM10.5 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6.3 6.3 0 0 1 0 9" /></svg>);
export const SoundOff = (p: P) => (<svg {...base} {...p}><path d="M2.5 6h2l3-2.5v9l-3-2.5h-2zM10.5 6l4 4M14.5 6l-4 4" /></svg>);
export const Flip = (p: P) => (<svg {...base} {...p}><path d="M2.5 8a5.5 5.5 0 0 1 9.5-3.8M13.5 8A5.5 5.5 0 0 1 4 11.8M12 1.8v2.6H9.4M4 14.2v-2.6h2.6" /></svg>);

export const GithubMark = (p: P) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
export const LinkedinMark = (p: P) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
