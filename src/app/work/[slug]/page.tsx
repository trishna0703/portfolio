import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Header from "@/components/header";
import { ProjectVisual } from "@/components/visual";
import ProjectLinks from "@/components/project-links";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p ? `${p.name} — Trishna Kashyap` : "Project not found",
    description: p?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <Header />
      <main className="case-study" id="main">
        <Link href="/#work" className="text-link">
          ← All selected work
        </Link>
        <div className="case-heading">
          <div className="eyebrow">{p.category}</div>
          <h1>
            {p.name}
            <i>.</i>
          </h1>
          <p>{p.description}</p>
          <ProjectLinks
            name={p.name}
            liveUrl={p.liveUrl}
            githubUrl={p.githubUrl}
          />
        </div>
        <div className="case-facts">
          <div>
            <span>MY ROLE</span>
            <p>{p.role}</p>
          </div>
          <div>
            <span>STATUS</span>
            <p>{p.status}</p>
          </div>
          <div>
            <span>TECHNOLOGIES</span>
            <p>{p.stack.join(" · ")}</p>
          </div>
        </div>
        <ProjectVisual theme={p.theme} name={p.name} />
        <div className="case-content">
          <aside>
            THE THINKING
            <br />
            BEHIND THE BUILD
          </aside>
          <div>
            <section>
              <span className="eyebrow">01 / THE PROBLEM</span>
              <h2>Finding the right problem.</h2>
              <p>{p.problem}</p>
            </section>
            <section>
              <span className="eyebrow">02 / MY APPROACH</span>
              <h2>From problem to structure.</h2>
              <p>{p.approach}</p>
              <div className="architecture">
                {p.architecture.map((step, i) => (
                  <div key={step}>
                    <small>0{i + 1}</small>
                    <strong>{step}</strong>
                    {i < 3 && <span>↓</span>}
                  </div>
                ))}
              </div>
            </section>
            <section>
              <span className="eyebrow">
                03 / ENGINEERING DECISIONS & CHALLENGES
              </span>
              <h2>The details that matter.</h2>
              <ul className="list-disc">
                {p.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </section>
            <section>
              <span className="eyebrow">04 / OUTCOMES & CURRENT PROGRESS</span>
              <h2>Where the work stands.</h2>
              <p>{p.progress}</p>
            </section>
          </div>
        </div>
        <Link href={`/work/${next.slug}`} className="next-project">
          <span className="eyebrow">NEXT PROJECT</span>
          <h2>
            {next.name} <span>↗</span>
          </h2>
        </Link>
      </main>
      <footer>
        <Link href="/">Trishna Kashyap</Link>
        <Link href="/#contact">Let’s connect ↗</Link>
      </footer>
    </>
  );
}
