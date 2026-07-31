export default function GameCard({ game, children }) {
  return (
    <article className="game-card">
      <span className="game-icon" aria-hidden="true">{game.emoji}</span>
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      {children}
    </article>
  );
}
