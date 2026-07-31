export default function FeedbackBubble({ children }) {
  let calm = false;
  if (typeof document !== 'undefined') {
    calm = !!document.querySelector('.app-shell.calm-mode');
  }

  function sanitize(msg) {
    if (typeof msg !== 'string') return msg;
    // reduce exuberance for calm mode: remove repeated punctuation and exclamation
    let s = msg.replace(/!+/g, '.');
    s = s.replace(/\.{2,}/g, '.');
    return s;
  }

  const emoji = calm ? '•' : '✨';
  return (
    <div className="feedback-bubble" role="status" aria-live="polite">
      <span aria-hidden="true">{emoji}</span>
      {calm ? sanitize(children) : children}
    </div>
  );
}
