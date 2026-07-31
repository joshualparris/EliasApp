import FeedbackBubble from './FeedbackBubble.jsx';
import MediaImage from './MediaImage.jsx';

export default function MachineCard({ machine, active, onActivate }) {
  return (
    <button
      className={`machine-card ${active ? 'active' : ''} action-${machine.action}`}
      onClick={onActivate}
      aria-label={`${machine.title}: ${machine.actionLabel}`}
    >
      <div className="machine-art">
        <MediaImage src={machine.image} alt={machine.title} emoji={machine.emoji} />
        <span className="machine-ground" aria-hidden="true" />
      </div>
      <h3>{machine.title}</h3>
      <p>{machine.fact}</p>
      <FeedbackBubble>{active ? machine.feedback : machine.actionLabel}</FeedbackBubble>
    </button>
  );
}
