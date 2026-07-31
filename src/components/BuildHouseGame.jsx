import { useState } from 'react';
import BigButton from './BigButton.jsx';
import FeedbackBubble from './FeedbackBubble.jsx';

export default function BuildHouseGame({ elements, playTone }) {
  const [placed, setPlaced] = useState({});
  const [complete, setComplete] = useState(false);

  function placeElement(elementId) {
    const availableSpot = Object.keys(placed).length;
    if (availableSpot < 12) {
      setPlaced((prev) => ({ ...prev, [availableSpot]: elementId }));
      if (playTone) playTone(420 + availableSpot * 20);

      // Mark complete when several elements are placed
      if (availableSpot >= 4) {
        setComplete(true);
      }
    }
  }

  function undoLast() {
    const lastKey = Math.max(...Object.keys(placed).map(Number));
    if (lastKey >= 0) {
      const newPlaced = { ...placed };
      delete newPlaced[lastKey];
      setPlaced(newPlaced);
      setComplete(false);
      if (playTone) playTone(300);
    }
  }

  return (
    <div className="build-house-game">
      <div className="element-palette">
        <h4>Pick elements to build:</h4>
        <div className="element-buttons">
          {elements.map((elem) => (
            <button key={elem.id} onClick={() => placeElement(elem.id)} className="element-btn">
              <span>{elem.emoji}</span>
              <small>{elem.name}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="house-canvas">
        <div className="grid-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={`cell-${index}`} className="grid-cell">
              {placed[index] && (
                <span className="placed-element">
                  {elements.find((e) => e.id === placed[index])?.emoji}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <FeedbackBubble>
        {complete
          ? `Your house has ${Object.keys(placed).length} parts! 🏡`
          : `Added ${Object.keys(placed).length} elements.`}
      </FeedbackBubble>

      <div className="house-controls">
        <BigButton onClick={undoLast} disabled={Object.keys(placed).length === 0}>
          Undo
        </BigButton>
        <BigButton onClick={() => { setPlaced({}); setComplete(false); }}>Clear</BigButton>
      </div>
    </div>
  );
}
