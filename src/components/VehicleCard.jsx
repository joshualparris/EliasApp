import { useState } from 'react';
import BigButton from './BigButton.jsx';
import FeedbackBubble from './FeedbackBubble.jsx';
import MediaImage from './MediaImage.jsx';

const colorClasses = ['paint-red', 'paint-blue', 'paint-yellow', 'paint-green'];

export default function VehicleCard({ vehicle, muted, playTone }) {
  const [lights, setLights] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [paintIndex, setPaintIndex] = useState(0);
  const [message, setMessage] = useState(vehicle.fact);

  function horn() {
    playTone(vehicle.soundPitch || 430);
    setMessage(muted ? 'Sound is off, but the horn button still works.' : `${vehicle.sound || 'beep'}!`);
  }

  return (
    <article className={`vehicle-card ${colorClasses[paintIndex]}`}>
      <div className="vehicle-art">
        <MediaImage src={vehicle.image} alt={vehicle.title} emoji={vehicle.emoji} />
        <div className={`vehicle-glow ${lights ? 'on' : ''}`} aria-hidden="true" />
        <div className="vehicle-wheels" aria-hidden="true">
          {Array.from({ length: Math.min(vehicle.wheels, 8) }).map((_, index) => (
            <span key={index} className={`tiny-wheel ${spinning ? 'spinning' : ''}`} />
          ))}
        </div>
      </div>
      <div>
        <h3>{vehicle.title}</h3>
        <p>{vehicle.description}</p>
      </div>
      <div className="action-row compact">
        <BigButton onClick={horn} aria-label={`Honk ${vehicle.title} horn`}>Horn</BigButton>
        <BigButton
          onClick={() => {
            setLights((value) => !value);
            setMessage(lights ? 'Lights off.' : 'Headlights on!');
          }}
          aria-label={`Toggle ${vehicle.title} headlights`}
        >
          Lights
        </BigButton>
        <BigButton
          onClick={() => {
            setSpinning((value) => !value);
            setMessage(spinning ? 'Wheels slowed down.' : 'Wheels are spinning.');
          }}
          aria-label={`Spin ${vehicle.title} wheels`}
        >
          Wheels
        </BigButton>
        <BigButton
          onClick={() => {
            setPaintIndex((value) => (value + 1) % colorClasses.length);
            setMessage('New workshop colour!');
          }}
          aria-label={`Change ${vehicle.title} colour`}
        >
          Colour
        </BigButton>
      </div>
      <FeedbackBubble>{message}</FeedbackBubble>
    </article>
  );
}
