import { useState } from 'react';
import liquidDeathImg from '../assets/liquid-death.jpg';
import mailchimpImg from '../assets/mailchimp.jpg';
import duolingoImg from '../assets/duolingo.jpg';
import economistImg from '../assets/economist.jpg';
import madAdWomanImg from '../assets/mad-ad-woman.jpg';
import dieselImg from '../assets/diesel.jpg';
import wholeTruthImg from '../assets/whole-truth.jpg';
import doveImg from '../assets/dove.jpg';

const mockImages = {
  'Liquid Death': liquidDeathImg,
  Mailchimp: mailchimpImg,
  Duolingo: duolingoImg,
  'The Economist': economistImg,
  'Mad Ad Woman': madAdWomanImg,
  Diesel: dieselImg,
  'The Whole Truth': wholeTruthImg,
  Dove: doveImg,
};

export default function WorkCard({ tag, client, brief, copy }) {
  const [flipped, setFlipped] = useState(false);
  const mockImage = mockImages[client];

  return (
    <li className="cards-item" data-reveal>
      <button
        type="button"
        className={`card3d${flipped ? ' flipped' : ''}`}
        aria-pressed={flipped}
        aria-label={`${client} spec work card. ${flipped ? 'Showing brief and copy. Press to flip back.' : 'Press to reveal the brief and copy.'}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <span className="inner">
          <span className="face front" aria-hidden={flipped}>
            <span className="tag">{tag}</span>
            <span className="front-title">{client}</span>
            <span className="hint">tap to flip</span>
          </span>
          <span className="face back" aria-hidden={!flipped}>
            <span className="back-title">THE BRIEF</span>
            <span className="back-text">{brief}</span>
            <span className="back-title">THE COPY</span>
            <span className="back-text">{copy}</span>
            {mockImage && (
              <img
                className="mockframe-img"
                src={mockImage}
                alt={`Finished ${client} ad mockup`}
              />
            )}
          </span>
        </span>
      </button>
    </li>
  );
}
