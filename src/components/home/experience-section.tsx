import { resumeUrl } from "@/lib/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="experience-intro">
        <div className="eyebrow">04 / ALONG THE WAY</div>

        <h2>
          Experience that
          <br />
          <em>shapes the work.</em>
        </h2>

        <p>
          From enterprise systems and Web3 to SaaS analytics and consumer
          products, building software that balances engineering complexity with
          thoughtful user experiences.
        </p>

        <a
          className="placeholder-link"
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View résumé (opens in a new tab)"
        >
          Résumé ↗
        </a>
      </div>

      <div className="timeline">
        {/* Rilo */}
        <article>
          <span className="timeline-label">
            PRODUCT ENGINEERING · JAN 2026 - MAR 2026
          </span>
          <h3>Rilo</h3>
          <h4>Frontend Engineer</h4>
          <p>
            Owned frontend development end to end, architecting core product
            features and revamping the web application. Modernized the UI and
            codebase for better performance and maintainability, and rebuilt the
            public-facing website from scratch.
          </p>
        </article>

        {/* Propsoch */}
        <article>
          <span className="timeline-label">PROPTECH · MAR 2025 - DEC 2025</span>
          <h3>Propsoch</h3>
          <h4>Frontend Engineer</h4>
          <p>
            Built property comparison dashboards, map-based discovery
            experiences, and internal tools that automated reporting workflows.
            Improved frontend performance and usability while mentoring junior
            engineers and driving coding best practices.
          </p>
        </article>

        {/* F1 Studioz */}
        <article>
          <span className="timeline-label">
            SAAS & ANALYTICS · JUL 2024 - FEB 2025
          </span>
          <h3>F1 Studioz</h3>
          <h4>UI Engineer</h4>
          <p>
            Developed a unified social media analytics dashboard for Optmyzr,
            integrating multiple platform APIs for real-time performance
            tracking. Built modular, customizable reporting interfaces that made
            complex analytics easier to explore.
          </p>
        </article>

        {/* RevInfotech */}
        <article>
          <span className="timeline-label">
            WEB3 & ENTERPRISE · SEP 2022 - MAR 2024
          </span>
          <h3>RevInfotech Inc.</h3>
          <h4>Senior ReactJS Developer</h4>
          <p>
            Built Web3, crypto investment, and enterprise products including
            Shibuki, Shibarium, Lithex, and Maintenx. Worked on smart contract
            integrations, blockchain data querying, real-time portfolio
            tracking, and internal management applications.
          </p>
        </article>

        {/* Nablasol */}
        <article>
          <span className="timeline-label">
            ENTERPRISE SOFTWARE · SEP 2021 - SEP 2022
          </span>
          <h3>Nablasol Digital Services</h3>
          <h4>UI Developer</h4>
          <p>
            Developed enterprise document management and HR management
            applications. Built dashboards with document versioning, role-based
            access controls, employee task tracking, and automated HR workflows
            through SuiteCRM integrations.
          </p>
        </article>
      </div>
    </section>
  );
}
