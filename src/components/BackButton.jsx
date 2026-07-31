export default function BackButton({ onClick }) {
  return (
    <button className="back-button" onClick={onClick} aria-label="Go back to the EliasApp home screen">
      <span aria-hidden="true">←</span>
      Home
    </button>
  );
}
