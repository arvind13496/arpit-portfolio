import { FILLS } from '../data/identity.js';

// An unsupplied fact. Renders the real value once it exists in FILLS, and an
// unmistakable token until then. Never renders plausible filler.
export default function Fill({ id, as: Tag = 'span' }) {
  const value = FILLS[id];
  if (value) return <Tag>{value}</Tag>;
  return (
    <Tag className="fill" data-fill={id}>
      [ FILL: {id} ]
    </Tag>
  );
}
