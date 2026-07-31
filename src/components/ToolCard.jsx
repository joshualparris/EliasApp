import { useState } from 'react';
import BigButton from './BigButton.jsx';
import FeedbackBubble from './FeedbackBubble.jsx';
import MediaImage from './MediaImage.jsx';

export default function ToolCard({ tool }) {
  const [turns, setTurns] = useState(0);
  const [fixed, setFixed] = useState(false);

  return (
    <article className={`tool-card ${fixed ? 'fixed' : ''}`}>
      <MediaImage src={tool.image} alt={tool.title} emoji={tool.emoji} />
      <div>
        <h3>{tool.title}</h3>
        <p>{tool.fact}</p>
      </div>
      <div className="workbench-scene">
        <span className="toy-car" aria-hidden="true">🚗</span>
        <span className="pretend-screw" style={{ transform: `rotate(${turns * 45}deg)` }} aria-hidden="true">
          ⊕
        </span>
      </div>
      <div className="action-row compact">
        <BigButton onClick={() => setTurns((value) => value - 1)} aria-label={`Turn ${tool.title} anticlockwise`}>
          Turn left
        </BigButton>
        <BigButton onClick={() => setTurns((value) => value + 1)} aria-label={`Turn ${tool.title} clockwise`}>
          Turn right
        </BigButton>
        <BigButton onClick={() => setFixed(true)} aria-label={`Fix the toy car with ${tool.title}`}>
          Fix car
        </BigButton>
      </div>
      <FeedbackBubble>{fixed ? 'Toy car fixed. All done!' : tool.description}</FeedbackBubble>
    </article>
  );
}
