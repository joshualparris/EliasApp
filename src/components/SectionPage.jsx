export default function SectionPage({ eyebrow, title, intro, theme, children }) {
  return (
    <section className={`section-page ${theme}`}>
      <header className="section-hero">
        <div>
          <span className="hero-badge">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </header>
      {children}
    </section>
  );
}
