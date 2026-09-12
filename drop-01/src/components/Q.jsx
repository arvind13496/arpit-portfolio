// A meta-irony label: the literal word in quotation marks, as a visual device
// only. It is always aria-hidden; the parent supplies the accessible name in
// clean text. Hard rule 11 caps these at six in the DOM.
export default function Q({ children }) {
  return (
    <span data-q aria-hidden="true" className="mono-cond">
      “{children}”
    </span>
  );
}
