// Length-aware size tier so lines from ~19 to ~105 characters all sit well.
function sizeTier(text) {
  const len = text.length;
  if (len <= 40) return 'size-l';
  if (len <= 75) return 'size-m';
  return 'size-s';
}

// Full-width index entry for a spec piece. The line is a real heading in live,
// selectable text; the CTA is the button that opens the case study, labelled by
// its own text plus the client so it announces with context. The line and label
// are plain DOM — if the overlay never opens, they still read (hard rule 12).
export default function WorkEntry({ piece, onOpen }) {
  const labelId = `we-label-${piece.slug}`;
  const ctaId = `we-cta-${piece.slug}`;
  const line = piece.line || piece.client; // fallback until an empty line is written

  return (
    <article className="work-entry" data-reveal>
      <p className="work-entry-label" id={labelId}>
        {piece.tag} <span aria-hidden="true">·</span> {piece.client}
      </p>
      <h3 className={`work-entry-line ${sizeTier(line)}`}>{line}</h3>
      <button
        type="button"
        className="work-entry-open"
        id={ctaId}
        aria-haspopup="dialog"
        aria-labelledby={`${ctaId} ${labelId}`}
        onClick={() => onOpen(piece.slug)}
      >
        read the case study <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
