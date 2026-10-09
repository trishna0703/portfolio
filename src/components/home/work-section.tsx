import Link from "next/link";
import { ProjectVisual } from "@/components/visual";
import { projects, explorations } from "@/lib/projects";
import ProjectLinks from "@/components/project-links";

export default function WorkSection() {
  return (
    <section id="work" className="section work">
      <div className="section-top">
        <div>
          <div className="eyebrow">01 / SELECTED WORK</div>
          <h2>
            Built with purpose.
            <br />
            <em>Crafted with care.</em>
          </h2>
        </div>
        <p>
          A selection of professional work and independent explorations.
          Different problems, the same end-to-end thinking.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card${i === projects.length - 1 && projects.length % 2 === 1 ? " project-wide" : ""}`}
            key={p.slug}
          >
            <Link
              className="visual-link"
              href={`/work/${p.slug}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <ProjectVisual theme={p.theme} name={p.name} />
            </Link>
            <div className="project-meta">
              <span>
                {String(i + 1).padStart(2, "0")} / {p.category}
              </span>
              <span className="project-status">{p.status}</span>
            </div>
            <h3>
              <Link href={`/work/${p.slug}`}>
                {p.name}
                <span>↗</span>
              </Link>
            </h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="more-work">
        <div className="subsection-heading">
          <h3>
            More work & projects
            <span> / {String(explorations.length).padStart(2, "0")}</span>
          </h3>
          <span>
            Professional contributions, experiments, and side projects.
          </span>
        </div>
        {explorations.map(
          ({ id, name, category, description, liveUrl, githubUrl }, i) => (
            <details key={id} id={`exploration-${id}`} className="exploration">
              <summary>
                <span className="index">
                  {String(i + projects.length + 1).padStart(2, "0")}
                </span>
                <h4>{name}</h4>
                <span className="exploration-category">{category}</span>
                <span className="expand">+</span>
              </summary>
              <p>{description}</p>
              <ProjectLinks
                name={name}
                liveUrl={liveUrl}
                githubUrl={githubUrl}
              />
            </details>
          ),
        )}
      </div>
    </section>
  );
}
