import { contactLinks } from "@/lib/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="eyebrow">
        06 / SOMETHING GOOD STARTS WITH A CONVERSATION
      </div>
      <h2>
        Have something
        <br />
        <em>interesting in mind?</em>
        <span className="contact-arrow">↗</span>
      </h2>
      <div className="contact-bottom">
        <p>
          I&apos;m always interested in thoughtful products, challenging engineering
          problems, and opportunities to build something meaningful.
        </p>
        <div className="contact-links">
          {contactLinks.map(({ label, href, description, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={
                external
                  ? `${label} (opens in a new tab)`
                  : `Email ${description}`
              }
            >
              {label} <span aria-hidden="true">↗</span>
              <small>{description}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
