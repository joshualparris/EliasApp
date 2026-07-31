import { useState } from 'react';

export default function MediaImage({ src, fallbackSrc, alt, emoji = '\u2728', className = '' }) {
  const [activeSrc, setActiveSrc] = useState(src || fallbackSrc || '');
  const [fallbackTried, setFallbackTried] = useState(!src);

  function handleError() {
    if (!fallbackTried && fallbackSrc) {
      setFallbackTried(true);
      setActiveSrc(fallbackSrc);
      return;
    }
    setActiveSrc('');
  }

  if (!activeSrc) {
    return (
      <div className={`media-fallback ${className}`} role="img" aria-label={alt}>
        <span aria-hidden="true">{emoji}</span>
      </div>
    );
  }

  return (
    <img
      className={`media-image ${className}`}
      src={activeSrc}
      alt={alt}
      loading="lazy"
      onError={handleError}
    />
  );
}
