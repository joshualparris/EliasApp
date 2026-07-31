import { useState } from 'react';
import BigButton from './BigButton.jsx';
import FeedbackBubble from './FeedbackBubble.jsx';

const pieces = Array.from({ length: 8 }, (_, index) => index);

export default function RoadBuilderGame({ onComplete }) {
  const [road, setRoad] = useState([]);
  const [cones, setCones] = useState(0);
  const complete = road.length === pieces.length;

  function addPiece(piece) {
    setRoad((current) => {
      if (current.includes(piece)) return current;
      const next = [...current, piece];
      if (next.length === pieces.length && onComplete) onComplete();
      return next;
    });
  }

  function resetRoad() {
    setRoad([]);
    setCones(0);
  }

  return (
    <article className="road-game">
      <div className={`road-scene ${complete ? 'complete' : ''}`}>
        <div className="road-pieces">
          {pieces.map((piece) => (
            <button
              key={piece}
              className={`road-piece ${road.includes(piece) ? 'placed' : ''}`}
              onClick={() => addPiece(piece)}
              aria-label={`Place road piece ${piece + 1}`}
            />
          ))}
        </div>
        <div className="road-cones" aria-hidden="true">
          {Array.from({ length: cones }).map((_, index) => <span key={index}>▴</span>)}
        </div>
        <div className="road-roller" aria-hidden="true">ROLLER</div>
        <div className="road-car" aria-hidden="true">CAR</div>
      </div>
      <div className="action-row compact">
        <BigButton onClick={() => setCones((value) => Math.min(value + 1, 5))}>Add cone</BigButton>
        <BigButton onClick={() => setRoad(pieces)}>Roll road</BigButton>
        <BigButton onClick={resetRoad}>Reset road</BigButton>
      </div>
      <FeedbackBubble>{complete ? 'Road built!' : `${road.length}/8 road pieces placed`}</FeedbackBubble>
    </article>
  );
}
