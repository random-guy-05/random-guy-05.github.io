import type { HTMLAttributes, ReactNode } from "react";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: string;
}

export function GlowCard({
  children,
  className = "",
  tone = "",
  ...rest
}: GlowCardProps) {
  return (
    <div className={`glow-card ${tone} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
