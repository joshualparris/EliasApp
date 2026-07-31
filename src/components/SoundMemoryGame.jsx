import { useState, useMemo } from 'react';
import FeedbackBubble from './FeedbackBubble.jsx';

export default function SoundMemoryGame({ cards, playTone }) {
  const [flipped, setFlipped] = useState({});
  const [matched, setMatched] = useState({});
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const shuffledCards = useMemo(() => [...cards].sort(() => Math.random() - 0.5), [cards]);

  function flipCard(index) {
    if (flipped[index] || matched[index]) return;

    const newFlipped = { ...flipped, [index]: true };
    setFlipped(newFlipped);
    playTone?.(400 + index * 30);

    if (!firstCard) {
      setFirstCard(index);
    } else if (!secondCard) {
      setSecondCard(index);
      const base1 = shuffledCards[firstCard].id.replace('-dup', '');
      const base2 = shuffledCards[index].id.replace('-dup', '');

      if (base1 === base2) {
        setMatched((prev) => ({ ...prev, [firstCard]: true, [index]: true }));
        playTone?.(600);
      } else {
        setTimeout(() => {
          setFlipped((prev) => {
            const next = { ...prev };
            delete next[firstCard];
            delete next[index];
            return next;
          });
          playTone?.(300);
        }, 1000);
      }

      setFirstCard(null);
      setSecondCard(null);
    }
  }

  const matchedCount = Object.values(matched).length / 2;

  return (
    <div className="memory-game">
      <div className="memory-grid">
        {shuffledCards.map((card, index) => (
          <button
            key={index}
            className={`memory-card ${flipped[index] ? 'flipped' : ''} ${matched[index] ? 'matched' : ''}`}
            onClick={() => flipCard(index)}
          >
            {flipped[index] || matched[index] ? card.sound : '?'}
          </button>
        ))}
      </div>
      <FeedbackBubble>
        {matchedCount === cards.length / 2
          ? 'Perfect match! You found them all!'
          : `Found ${matchedCount}/${cards.length / 2} pairs.`}
      </FeedbackBubble>
    </div>
  );
}
