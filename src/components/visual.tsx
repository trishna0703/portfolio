export function ProjectVisual({
  theme,
  name,
}: {
  theme: string;
  name: string;
}) {
  return (
    <div
      className={`project-visual ${theme}`}
      role="img"
      aria-label={`${name}: illustrative artwork, not a product screenshot`}
    >
      <span className="visual-label">
        {theme === "potter"
          ? "AN EXPERIMENT IN SEEING"
          : theme === "legal"
            ? "INFORMATION, WITH A FOUNDATION"
            : theme === "orca"
              ? "A SYSTEM OF CONNECTIONS"
              : theme === "property"
                ? "A CLEARER WAY HOME"
                : "CLARITY IN COMPLEXITY"}
      </span>
      {theme === "potter" ? (
        <div className="dataset">
          {Array.from({ length: 12 }, (_, i) => (
            <div className={`specimen specimen-${i % 4}`} key={i}>
              <span />
            </div>
          ))}
          <div className="dataset-caption">
            25,000 images. A new perspective.
          </div>
        </div>
      ) : theme === "legal" ? (
        <div className="legal-art">
          <div className="document">
            <span>THE RENTAL READER</span>
            <strong>
              A source of
              <br />
              understanding.
            </strong>
            <i />
            <i />
            <i />
            <small>Sources → Retrieval → Clarity</small>
          </div>
          <div className="source-note">
            Grounded in documents.
            <br />
            Designed for people.<span>↗</span>
          </div>
        </div>
      ) : theme === "orca" ? (
        <div className="orca-art">
          <div>Care Companion</div>
          <div>Partner Engage</div>
          <div>Command View</div>
          <span className="connection-line" />
          <strong>
            ORCA<span>Shared platform foundation</span>
          </strong>
          <small>Identity / Permissions / Audit</small>
        </div>
      ) : theme === "property" ? (
        <div className="property-art">
          <div className="house h1" />
          <div className="house h2" />
          <div className="house h3" />
          <strong>
            Find your
            <br />
            <em>place.</em>
          </strong>
          <span>Discover. Compare. Decide.</span>
        </div>
      ) : (
        <div className="analytics-art">
          <span>PERFORMANCE, IN PERSPECTIVE</span>
          <strong>
            200<span>+ metrics</span>
          </strong>
          <div className="bars">
            {[35, 60, 45, 80, 52, 92, 75, 100, 82, 120, 95, 140].map((h, i) => (
              <i key={i} style={{ height: h }} />
            ))}
          </div>
        </div>
      )}
      <span className="concept-label">
        ILLUSTRATIVE STUDY · NOT A PRODUCT CAPTURE
      </span>
    </div>
  );
}
export function HeroArt() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="Abstract illustration connecting interfaces, systems, and intelligence"
    >
      <div className="art-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="art-core">
        <span>tk.</span>
      </div>
      <span className="art-point p1" />
      <span className="art-point p2" />
      <span className="art-point p3" />
      <span className="art-caption c1">01 / INTERFACE</span>
      <span className="art-caption c2">02 / SYSTEMS</span>
      <span className="art-caption c3">03 / INTELLIGENCE</span>
      <span className="art-foot">Different layers. The same curiosity.</span>
    </div>
  );
}
