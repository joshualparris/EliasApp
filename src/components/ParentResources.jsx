import BigButton from './BigButton.jsx';

export default function ParentResources({ links, onBack }) {
  return (
    <section className="parent-resources-page" aria-labelledby="parent-resources-title">
      <div className="page-hero">
        <span className="hero-badge">Parent page</span>
        <h2 id="parent-resources-title">Parent resources</h2>
        <p>Curated, parent-reviewed links and apps for building, construction, and safe creative play.</p>
      </div>
      <div className="resource-grid">
        {links.map((item) => (
          <article className="resource-card" key={item.id}>
            <div className="resource-header">
              <strong>{item.title}</strong>
              <span className="resource-badge">{item.category}</span>
            </div>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noreferrer noopener" className="resource-link">
              Open link ↗
            </a>
          </article>
        ))}
      </div>
      <div className="resource-footer">
        <BigButton onClick={onBack}>Back to home</BigButton>
      </div>
    </section>
  );
}