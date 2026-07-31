import MediaImage from './MediaImage.jsx';

export default function VideoCard({ video }) {
  return (
    <article className="video-card">
      {video.embedUrl ? (
        <div className="video-embed-shell">
          <iframe
            title={video.title}
            src={video.embedUrl}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="video-preview">
          <MediaImage src={video.thumbnail || video.image} alt={video.title} emoji={video.emoji} />
          <span className="play-badge" aria-hidden="true">▶</span>
        </div>
      )}
      <span className="tag">{video.category}</span>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <div className={`approved-video ${video.embedUrl ? '' : 'empty'}`}>
        {video.embedUrl ? 'Parent-approved video. Tap play to start.' : 'Add a reviewed video in data first'}
      </div>
    </article>
  );
}
