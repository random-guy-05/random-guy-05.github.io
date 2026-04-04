interface TopNavProps {
  name: string;
  activeSection: string;
  hidden: boolean;
  onCopyEmail: () => void;
}

export function TopNav({ name, activeSection, hidden, onCopyEmail }: TopNavProps) {
  return (
    <header className={`top-nav ${hidden ? "is-hidden" : ""}`}>
      <div className="top-nav__brand">{name}</div>
      <div className="top-nav__meta">
        <div className="status-pill">
          <span className="status-pill__dot" />
          <span>Open to research collaboration</span>
        </div>
        <p className="top-nav__section" aria-live="polite">
          {activeSection ? `→ ${activeSection}` : ""}
        </p>
        <button className="nav-link" type="button" onClick={onCopyEmail}>
          Copy email
        </button>
      </div>
    </header>
  );
}
