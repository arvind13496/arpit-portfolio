import { useState } from 'react';

export default function BuildNotes() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id="notesBtn"
        type="button"
        aria-expanded={open}
        aria-controls="notesPanel"
        onClick={() => setOpen((o) => !o)}
      >
        📝 build notes
      </button>
      <div id="notesPanel" className={open ? 'open' : ''} role="region" aria-label="Build notes" hidden={!open}>
        <button className="close" type="button" aria-label="Close build notes" onClick={() => setOpen(false)}>
          ✕
        </button>
        <h4>where to step in, arvind</h4>
        <ol>
          <li>
            <b>Deployment:</b> this is still a local project. Push it to Vercel/Netlify/GitHub Pages and point a
            custom domain at it.
          </li>
          <li>
            <b>Contact details:</b> double-check the phone/email/handles are still current before this goes live.
          </li>
        </ol>
      </div>
    </>
  );
}
