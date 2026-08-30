// Full-width index entry for a spec piece: a mono format/client label, then
// the line itself as the hero, set as live selectable text. The whole line is
// the trigger that opens the full case study, so the affordance reads as
// interactive. The line and label are plain DOM — if the overlay never opens,
// they still read (hard rule 12).
export default function WorkEntry({ piece, onOpen }) {
  return (
    <article className="work-entry" data-reveal>
      <p className="work-entry-label">
        {piece.tag} <span aria-hidden="true">·</span> {piece.client}
      </p>
      <button
        type="button"
        className="work-entry-open"
        aria-haspopup="dialog"
        onClick={() => onOpen(piece.slug)}
      >
        <span className="work-entry-line">{piece.copy}</span>
        <span className="work-entry-cta" aria-hidden="true">
          read the case study →
        </span>
      </button>
    </article>
  );
}
