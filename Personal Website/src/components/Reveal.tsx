import type { HTMLAttributes, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealTag = "div" | "section" | "p" | "h1" | "h2" | "footer";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: RevealTag;
  children: ReactNode;
  delay?: "none" | "short" | "medium" | "long";
}

export function Reveal({
  as = "div",
  children,
  className = "",
  delay = "none",
  ...rest
}: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "in" : ""} delay-${delay} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
