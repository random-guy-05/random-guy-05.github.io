interface TopNavProps {
  activeSection: string;
  hidden: boolean;
  onCopyEmail: () => void;
}

export function TopNav({ activeSection, hidden, onCopyEmail }: TopNavProps) {
  return (
    <header className={`top-nav ${hidden ? "is-hidden" : ""}`}>
      <div className="top-nav__brand">Arnav Mana</div>
      <div className="top-nav__meta">
        <div className="status-pill">
          <span className="status-pill__dot" />
          <span>Open to research</span>
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
