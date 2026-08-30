import { useReveal } from '../hooks/useReveal.js';

const EMAIL = 'arpitlakhani16@gmail.com';

export default function Contact({ walkPair }) {
  const scope = useReveal();

  // Selecting a pair in the closet arms the "walk a mile" action here.
  const subject = walkPair
    ? `Let’s talk — I’d walk a mile in the ${walkPair.model}`
    : 'Let’s talk';
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" ref={scope}>
      <div className="wrap">
        <div data-reveal>
          <h2 id="contact-heading">
            so if you're interested
            <br />
            in my work,
            <br />
            <span className="script" style={{ color: 'var(--red)' }}>
              or just wanna talk sneakers...
            </span>
          </h2>
          {walkPair && (
            <p className="walk-armed">
              walking a mile in: <b>{walkPair.model}</b>
            </p>
          )}
          <a className="cta" href={mailto}>
            let's connect →
          </a>
        </div>
        <div data-reveal>
          <ul>
            <li>
              <span className="ico" aria-hidden="true">
                📷
              </span>
              <a href="https://instagram.com/lakhaniarpit" target="_blank" rel="noopener noreferrer">
                @lakhaniarpit
              </a>
            </li>
            <li>
              <span className="ico" aria-hidden="true">
                ✉️
              </span>
              <a href="mailto:arpitlakhani16@gmail.com">arpitlakhani16@gmail.com</a>
            </li>
            <li>
              <span className="ico" aria-hidden="true">
                📍
              </span>
              Mumbai (currently)
            </li>
            <li>
              <span className="ico" aria-hidden="true">
                in
              </span>
              <a href="https://linkedin.com/in/arpitlakhani" target="_blank" rel="noopener noreferrer">
                arpitlakhani
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
