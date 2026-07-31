import MediaImage from './MediaImage.jsx';

export default function ScrewdriverCard({ screwdriver, selected, onSelect }) {
  return (
    <button
      className={`screwdriver-card screwdriver-${screwdriver.colour} ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(screwdriver)}
      aria-label={`Choose ${screwdriver.name}`}
    >
      <MediaImage
        src={screwdriver.image}
        fallbackSrc={screwdriver.fallbackImage}
        alt={screwdriver.name}
        emoji={screwdriver.emoji}
      />
      <h3>{screwdriver.name}</h3>
      <p>{screwdriver.description}</p>
      <small>{screwdriver.safeUseNote}</small>
    </button>
  );
}
