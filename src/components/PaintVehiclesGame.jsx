import { useState } from 'react';
import FeedbackBubble from './FeedbackBubble.jsx';
import BigButton from './BigButton.jsx';

export default function PaintVehiclesGame({ colors, playTone }) {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [vehicleColor, setVehicleColor] = useState(colors[0].id);
  const selectedHex = colors.find((c) => c.id === vehicleColor)?.hex || '#FF4444';

  function paint() {
    setVehicleColor(selectedColor);
    playTone?.(500);
  }

  return (
    <div className="paint-game">
      <div className="paint-canvas">
        <div className="vehicle-to-paint">
          <div className="vehicle-preview" style={{ backgroundColor: selectedHex }}>
            <span className="vehicle-emoji">🚙</span>
          </div>
        </div>
        <p>Current color: {colors.find((c) => c.id === vehicleColor)?.name}</p>
      </div>

      <div className="color-palette">
        <h4>Pick a color:</h4>
        <div className="color-buttons">
          {colors.map((color) => (
            <button
              key={color.id}
              className={`color-btn ${selectedColor === color.id ? 'selected' : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Pick ${color.name}`}
            >
              {selectedColor === color.id && '✓'}
            </button>
          ))}
        </div>
      </div>

      <BigButton onClick={paint}>Paint the vehicle</BigButton>
      <FeedbackBubble>Tap a color, then tap Paint!</FeedbackBubble>
    </div>
  );
}
