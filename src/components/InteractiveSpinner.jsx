import { useState } from 'react';
import FeedbackBubble from './FeedbackBubble.jsx';

export default function InteractiveSpinner({ item }) {
  const [spinning, setSpinning] = useState(false);

  return (
    <button
      className={`spinner-card ${spinning ? 'spinning' : ''}`}
      onClick={() => setSpinning((value) => !value)}
      aria-label={`${spinning ? 'Stop' : 'Start'} spinning ${item.title}`}
    >
      <span className="spinner-emoji" aria-hidden="true">{item.emoji}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <FeedbackBubble>{spinning ? 'Round and round.' : 'Tap to spin.'}</FeedbackBubble>
    </button>
  );
}
