"use client";

import type { ReactNode, MouseEvent } from "react";
import { useScroll } from "@/lib/scroll";
import { ArrowDown, ArrowRight, ArrowUpRight } from "./Icons";

type Variant = "solid" | "line" | "ghost";
type IconKind = "right" | "down" | "external" | "none";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: "md" | "sm";
  icon?: IconKind;
  leading?: ReactNode;
  download?: string | boolean;
  className?: string;
  ariaLabel?: string;
};

const iconFor = (kind: IconKind) => {
  if (kind === "right") return <ArrowRight className="btn-arrow" />;
  if (kind === "down") return <ArrowDown className="btn-arrow down" />;
  if (kind === "external") return <ArrowUpRight className="btn-arrow up" />;
  return null;
};

/**
 * Pill button / link. In-page `#section` links scroll via Lenis;
 * `external` links open in a new tab with an accessible hint.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "line",
  size = "md",
  icon = "none",
  leading,
  download,
  className = "",
  ariaLabel,
}: Props) {
  const { scrollTo } = useScroll();
  const cls = `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`;
  const content = (
    <>
      {leading}
      {variant === "ghost" ? <span className="u">{children}</span> : <span>{children}</span>}
      {iconFor(icon)}
    </>
  );

  if (!href) {
    return (
      <button type="button" className={cls} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </button>
    );
  }

  const isHash = href.startsWith("#");
  const isExternal = /^https?:\/\//.test(href);

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isHash) {
      e.preventDefault();
      scrollTo(href.slice(1));
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      className={cls}
      onClick={handle}
      aria-label={ariaLabel}
      download={download}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
      {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
