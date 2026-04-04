import { Reveal } from "../components/Reveal";
import type { SiteContent } from "../data/siteContent";

interface FooterContactSectionProps {
  name: string;
  content: SiteContent["contact"];
  onCopyEmail: () => void;
}

export function FooterContactSection({
  name,
  content,
  onCopyEmail,
}: FooterContactSectionProps) {
  return (
    <footer
      id="contact"
      className="footer-contact"
      data-section-label="Contact"
      aria-labelledby="contact-title"
    >
      <div className="footer-contact__glow" aria-hidden="true" />
      <Reveal as="p" className="footer-contact__eyebrow">
        {content.footerEyebrow}
      </Reveal>
      <Reveal as="h2" className="footer-contact__title" delay="short" id="contact-title">
        {name}
      </Reveal>
      <Reveal as="p" className="footer-contact__tagline" delay="medium">
        {content.footerTagline}
      </Reveal>
      <Reveal as="p" className="footer-contact__note" delay="medium">
        {content.footerNote}
      </Reveal>
      <Reveal className="footer-contact__actions" delay="long">
        {content.actions.map((action) => {
          if (action.kind === "copy-email") {
            return (
              <button
                className="footer-link"
                key={action.label}
                type="button"
                onClick={onCopyEmail}
                aria-label={action.ariaLabel}
              >
                {content.email}
              </button>
            );
          }

          return (
            <a
              className="footer-link"
              key={action.label}
              href={action.href}
              aria-label={action.ariaLabel}
            >
              {action.label}
            </a>
          );
        })}
      </Reveal>
    </footer>
  );
}
