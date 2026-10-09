const skills = [
  [
    "01",
    "Frontend engineering",
    "Core expertise",
    "React · Next.js · TypeScript · JavaScript · HTML · CSS · Tailwind · Zustand · Redux · shadcn/ui",
    "Product interfaces, responsive systems, accessibility, SSR, SSG, ISR, and performance optimization.",
  ],
  [
    "02",
    "Backend & APIs",
    "Full-stack engineering",
    "Python · FastAPI · Node.js · Express · REST · GraphQL · Pydantic · SQLAlchemy · Alembic",
    "API design, authentication, RBAC, background processing, transactions, and service architecture.",
  ],
  [
    "03",
    "Data & infrastructure",
    "Application infrastructure",
    "PostgreSQL · MongoDB · Redis · pgvector · Docker · Git · CI/CD",
    "Data modeling, vector storage, caching, migrations, transactional consistency, and deployment workflows.",
  ],
  [
    "04",
    "AI & machine learning",
    "AI product engineering",
    "LLM integration · RAG · Embeddings · Vector search · PyTorch · Hugging Face · Transformers · Computer Vision",
    "Building AI workflows across retrieval, evaluation, vision models, fine-tuning, and production integration.",
  ],
  [
    "05",
    "Architecture & engineering",
    "Engineering practices",
    "System design · Modular architecture · Event-driven workflows · Automated testing · Jest · API testing",
    "Designing maintainable systems with clear boundaries, reliable integrations, code reviews, and technical ownership.",
  ],
  [
    "06",
    "Web3",
    "Professional experience",
    "DApps · The Graph · Apollo Client · Smart contract integration",
    "Building product interfaces around blockchain data, transactions, and decentralized application workflows.",
  ],
];

export default function SkillsSection() {
  return (<section id="skills" className="section">
    <div className="section-top">
      <div>
        <div className="eyebrow">03 / MY TOOLKIT</div>
        <h2>
          Depth where it matters.
          <br />
          <em>Curiosity everywhere.</em>
        </h2>
      </div>
      <p>
        A strong application engineering foundation, with an expanding
        practice in intelligent systems.
      </p>
    </div>
    <div className="skills-grid">
      {skills.map(([n, title, status, tools, desc]) => (<div className="skill" key={n}>
        <span className="index">{n}</span>
        <h3>{title}</h3>
        <span className="skill-status">{status}</span>
        <p>{tools}</p>
        <small>{desc}</small>
      </div>))}
    </div>
  </section>);
}
