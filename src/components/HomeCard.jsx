export default function HomeCard({ section, onOpen }) {
  return (
    <button
      className={`home-card ${section.theme}`}
      onClick={() => onOpen(section.id)}
      aria-label={`Open ${section.title}`}
    >
      <span className="home-card-icon" aria-hidden="true">{section.emoji}</span>
      <span className="home-card-copy">
        <strong>{section.title}</strong>
        <span>{section.description}</span>
      </span>
      <span className="home-card-cta" aria-hidden="true">Tap to play</span>
    </button>
  );
}
