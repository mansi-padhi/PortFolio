"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/lib/hooks";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;
};

/** Fades + lifts its children in when they enter the viewport. */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", id }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type TextRevealProps = {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
};

/** Masked line-by-line heading reveal. Renders as one element for assistive tech. */
export function TextReveal({ lines, as: Tag = "h2", className = "", delay = 0, stagger = 90 }: TextRevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag ref={ref} className={`${className} ${inView ? "in" : ""}`}>
      {lines.map((line, i) => (
        <span key={i} className="tr-line">
          <span style={{ "--d": `${delay + i * stagger}ms` } as CSSProperties}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
