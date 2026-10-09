export const projects = [
  {
    slug: "potter-ai",
    name: "Potter AI",
    category: "AI Product · Full-stack",
    status: "Live · ML improvements in progress",
    theme: "potter",
    description:
      "A production AI application combining a user-facing web experience, backend services, computer vision, and LLM-powered workflows.",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "OpenRouter",
      "AWS S3",
      "Docker",
    ],
    role: "Independent full-stack AI engineering project",
    problem:
      "Build a plant care product that combines plant identification, health assessments, and personalized care guidance in one intuitive experience.",
    approach:
      "Built and deployed the application end-to-end across the React frontend, FastAPI backend, PostgreSQL data layer, image storage, and AI workflows. Current work focuses on improving plant identification through a custom image dataset and ConvNeXt fine-tuning.",
    architecture: [
      "Production web application",
      "Backend & AI orchestration",
      "Vision pipeline",
      "LLM integration",
    ],
    decisions: [
      "Design the AI capabilities as part of a complete product rather than isolated model experiments.",
      "Keep vision processing and LLM orchestration behind backend services.",
      "Ship the application with a working vision pipeline before investing in custom model optimization.",
      "Improve the vision layer with a purpose-built dataset and fine-tuned model while keeping the production application operational.",
    ],
    liveUrl: "https://potterai.in/",
    githubUrl: "https://github.com/trishna0703/potter.ai",
    progress:
      "The full-stack application is live. Current ML work focuses on a 25,000-image plant dataset and staged ConvNeXt fine-tuning to improve the vision layer.",
  },
  {
    slug: "tenant-legal-ai",
    name: "Know Your Rights",
    category: "Generative AI · RAG · LegalTech",
    status: "In development",
    theme: "legal",
    description:
      "A Bengaluru-focused legal assistant designed to give tenants grounded answers from verified legal sources, with citations, uncertainty handling, and practical next steps.",
    stack: ["Python", "FastAPI", "BGE-M3", "PostgreSQL", "pgvector", "RAG"],
    role: "Independent AI product & engineering project",
    problem:
      "Tenants often struggle to understand deposits, deductions, rental agreements, eviction rules, and dispute options because relevant legal information is fragmented and difficult to interpret.",
    approach:
      "Built a legal-document ingestion pipeline covering source collection, PDF extraction, OCR recovery, legal-structure parsing, verification, canonical text generation, chunking, and provenance tracking before retrieval.",
    architecture: [
      "Legal source ingestion",
      "OCR & verification",
      "Structured legal chunks",
      "RAG retrieval pipeline",
    ],
    decisions: [
      "Never allow unverified OCR text into the retrieval corpus.",
      "Preserve raw extraction, canonical text, corrections, and provenance separately.",
      "Use legal structure rather than arbitrary text windows for primary chunk boundaries.",
      "Design retrieval around citations, jurisdiction, source quality, and uncertainty.",
    ],
    progress:
      "The ingestion, OCR recovery, legal parsing, verification, and guarded chunking pipeline is implemented and tested. Corpus verification is underway before embeddings and retrieval are enabled.",
    liveUrl: "",
    githubUrl: "https://github.com/trishna0703/know-your-rights",
  },
  {
    slug: "orca-platform",
    name: "ORCA Modular Platform",
    category: "Backend Engineering · System Architecture",
    status: "Architecture implementation",
    theme: "orca",
    description:
      "A modular backend platform exploring domain ownership, fine-grained authorization, country-level data isolation, auditability, and reliable cross-application workflows.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Python"],
    role: "System architecture & backend implementation",
    problem:
      "Multiple applications need shared platform capabilities while maintaining domain ownership, country-level data isolation, secure permissions, and reliable integration between modules.",
    approach:
      "Designed a modular monolith with route-service-repository boundaries. Implemented Care Companion, Partner Engage, Command View, platform services, RBAC, scoped data access, auditing, and transactional outbox workflows.",
    architecture: [
      "Domain applications",
      "RBAC & country scoping",
      "PostgreSQL + transactional outbox",
      "Command View projections",
    ],
    decisions: [
      "Use a modular monolith to maintain explicit boundaries without premature microservice complexity.",
      "Keep transaction ownership in services and persistence concerns in repositories.",
      "Enforce permission and country-level access at application boundaries.",
      "Use transactional outbox events for reliable cross-domain projection updates.",
    ],
    progress:
      "Implemented the core architecture, multiple domain applications, authorization, auditing, integration events, projections, migrations, and end-to-end workflows with a 52-test passing suite.",
    liveUrl: "",
    githubUrl: "https://github.com/trishna0703/orca",
  },
];

export const explorations = [
  {
    id: "killing-me-softly",
    name: "Killing Me Softly",
    category: "Game · React · TypeScript",
    role: "Creator & Developer",
    description:
      "A two-player local multiplayer game designed to be played together on a single device. Built the project end-to-end, including the game experience, interaction logic, and frontend.",
    liveUrl: "https://killing-me-softly.vercel.app",
    githubUrl: "https://github.com/trishna0703/killing-me-softly",
  },
  {
    id: "propsoch",
    name: "Propsoch",
    category: "PropTech · Frontend Engineering",
    role: "Frontend Engineer",
    description:
      "Worked across Propsoch's customer-facing and internal products, building interactive dashboards, property comparison and guided home-buying experiences, technical due-diligence automation, and map-based internal tools. Owned features end-to-end and also contributed through code reviews, documentation, and mentoring junior engineers.",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "optmyzr",
    name: "Optmyzr",
    category: "SaaS · AdTech · Analytics",
    role: "Frontend Engineer",
    description:
      "Worked on a cross-platform advertising analytics product used to analyze large sets of campaign performance data. Built and improved analytics interfaces, customizable reporting columns and data views, and contributed to expanding supported metrics from roughly 40 to 200+.",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "shibuki",
    name: "Shibuki",
    category: "Web3 · DApp",
    role: "Frontend Developer",
    description:
      "Worked on a decentralized application in the Shibarium ecosystem for token and NFT interactions. Led frontend development and integrated user-facing workflows with smart contracts and blockchain data using Web3 technologies and The Graph.",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "lithex",
    name: "Lithex",
    category: "FinTech · Crypto",
    role: "Frontend Developer",
    description:
      "Worked on a centralized crypto investment platform built around systematic investment workflows. Developed frontend experiences for portfolio tracking and SIP-style crypto investments, integrating product flows with backend APIs.",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "shibarium",
    name: "Shibarium",
    category: "Web3 · Layer 2",
    role: "Frontend Developer",
    description:
      "Contributed to frontend experiences within the Shibarium Layer-2 ecosystem. Worked on integrating blockchain data into product interfaces using Apollo Client and The Graph, making on-chain information accessible through user-facing workflows.",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "react-supabase-graphql",
    name: "Insight Board",
    category: "Full-stack · React · GraphQL",
    role: "Full-stack Developer",
    description:
      "Built a full-stack application connecting a React frontend to Supabase through GraphQL. Implemented data querying and mutations, application state and user-facing workflows as an end-to-end engineering project.",
    liveUrl: "",
    githubUrl: "https://github.com/trishna0703/InsightBoard",
  },
];
