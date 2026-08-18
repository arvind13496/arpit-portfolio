import { useReveal } from '../hooks/useReveal.js';

export default function Contact() {
  const scope = useReveal();

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
          <a className="cta" href="mailto:arpitlakhani16@gmail.com">
            let's connect →
          </a>
        </div>
        <div data-reveal>
          <ul>
            <li>
              <span className="ico" aria-hidden="true">
                📞
              </span>
              <a href="tel:+918109443681">+91 8109443681</a>
            </li>
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
