import { HeroArt } from "@/components/visual";

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> FULL-STACK ENGINEER · AI-NATIVE
            PRODUCT BUILDER
          </div>
          <h1>
            I build thoughtful
            <br />
            products, from
            <br />
            <em>interface to intelligence.</em>
          </h1>
          <p>
            I'm Trishna, a full-stack engineer building products across
            frontend, backend, and AI. I care about intuitive interfaces,
            well-designed systems, and using AI where it genuinely makes the
            product better.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              Explore my work <span>↘</span>
            </a>
            <a className="text-link" href="#contact">
              Let's connect <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>BASED IN BENGALURU, INDIA</span>
            <span>4+ YEARS OF BUILDING SOFTWARE</span>
          </div>
        </div>
        <HeroArt />
      </section>
      <div className="intro-strip">
        <span>
          Product-minded. Detail-oriented. Engineering-driven. Always curious.
        </span>
        <span>
          Frontend <i>↗</i> Full-stack <i>↗</i> AI engineering
        </span>
      </div>
    </>
  );
}
