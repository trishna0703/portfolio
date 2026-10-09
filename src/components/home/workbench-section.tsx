export default function WorkbenchSection() {
  return (<section id="workbench" className="section workbench">
    <div className="section-top">
      <div>
        <div className="eyebrow">
          <span className="status-dot" /> 05 / LEARNING IN THE OPEN
        </div>
        <h2>
          Currently on
          <br />
          <em>my workbench.</em>
        </h2>
      </div>
      <p>
        Not everything starts as a finished product. A few things I’m
        making, questioning, and figuring out.
      </p>
    </div>
    <div className="bench-grid">
      {[
        [
          "01",
          "Teaching machines to see",
          "ConvNeXt training, dataset preparation, and evaluation through Potter AI.",
          "Building",
        ],
        [
          "02",
          "Answers you can trace",
          "Retrieval pipelines and source-backed responses for the tenant legal assistant.",
          "Building",
        ],
        [
          "03",
          "From prompts to workflows",
          "Agentic orchestration, LLM fine-tuning, and efficient inference.",
          "Exploring",
        ],
        [
          "04",
          "Systems that grow gracefully",
          "Modular architecture, reliable events, and scalable backend engineering.",
          "Practicing",
        ],
      ].map(([n, title, desc, status]) => (<article key={n}>
        <div className="bench-meta">
          <span>{n}</span>
          <span>○ {status}</span>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>))}
    </div>
  </section>);
}
