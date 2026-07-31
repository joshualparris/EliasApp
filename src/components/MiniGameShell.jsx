export default function MiniGameShell({ title, emoji, children }) {
  return (
    <article className="mini-game-shell">
      <header className="mini-game-header">
        <span aria-hidden="true">{emoji}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </article>
  );
}
